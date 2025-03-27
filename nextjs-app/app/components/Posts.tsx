import Link from "next/link";

import DateComponent from "@/app/components/Date";
import OnBoarding from "@/app/components/Onboarding";
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
        <Link className="hover:underline uppercase" href={`/posts/${slug}`}>
          {title}
        </Link>
      </h3>
      <div className="text-gray-400 italic text-sm">
        <DateComponent dateString={date} />
      </div>
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
      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl lg:text-5xl">
        {heading}
      </h2>
    )}
    {subHeading && (
      <p className="mt-2 text-lg leading-8 text-gray-600">{subHeading}</p>
    )}
    <div className="mt-6 pt-6 space-y-12 border-t border-gray-200">
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
    <Posts heading={`Recent Posts (${data?.length})`}>
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
    <>
      {data.map((post: any) => (
        <Post key={post._id} post={post} />
      ))}
    </>
  );
};
