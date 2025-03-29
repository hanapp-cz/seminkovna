import Link from "next/link";

import DateComponent from "@/app/components/Date";
import OnBoarding from "@/app/components/Onboarding";
import { ROUTES } from "@/config/routes";
import { Post as PostType } from "@/sanity.types";
import { sanityFetch } from "@/sanity/lib/live";
import { allPostsQuery, morePostsQuery } from "@/sanity/lib/queries";

import CoverImage from "./CoverImage";

type TProps = NoChildren & {
  post: PostType;
};

const Post: React.FC<TProps> = ({ post }) => {
  const { _id, title, slug, excerpt, date, coverImage } = post;

  return (
    <article key={_id} className="flex flex-col gap-y-4 max-w-80 text-center">
      <CoverImage image={coverImage} />
      <h3 className="text-2xl font-medium">
        <Link
          className="hover:underline uppercase"
          href={`${ROUTES.news.href}/${slug}`}
        >
          {title}
        </Link>
      </h3>
      <DateComponent
        dateString={date}
        className="text-gray-400 italic text-sm"
      />
      <p className="line-clamp-4 text-lg leading-6 text-gray-600">{excerpt}</p>
    </article>
  );
};

const Posts = ({
  children,
  heading,
  subHeading,
}: {
  children: React.ReactNode;
  heading?: string;
  subHeading?: string;
}) => (
  <div>
    {heading && (
      <h2 className="text-2xl font-medium tracking-tight text-gray-900 md:text-3xl uppercase mb-8 lg:mb-12">
        {heading}
      </h2>
    )}
    {subHeading && (
      <p className="mt-2 text-lg leading-8 text-gray-600">{subHeading}</p>
    )}
    <div className="grid gap-x-8 gap-y-10 grid-cols-[repeat(auto-fill,minmax(auto,320px))] justify-evenly">
      {children}
    </div>
  </div>
);

export const MorePosts = async ({
  skip,
  limit,
}: {
  skip: string;
  limit: number;
}) => {
  const { data } = await sanityFetch({
    query: morePostsQuery,
    params: { skip, limit },
  });

  if (!data || data.length === 0) {
    return null;
  }

  return (
    <Posts heading={`Další události (${data?.length})`}>
      {data?.map((post: any) => <Post key={post._id} post={post} />)}
    </Posts>
  );
};

export const AllPosts = async () => {
  const { data } = await sanityFetch({ query: allPostsQuery });

  if (!data || data.length === 0) {
    return <OnBoarding />;
  }

  return (
    <Posts>
      {data.map((post: any) => (
        <Post key={post._id} post={post} />
      ))}
    </Posts>
  );
};
