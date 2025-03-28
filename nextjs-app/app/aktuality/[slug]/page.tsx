import { Suspense } from "react";

import type { Metadata, ResolvingMetadata } from "next";
import { type PortableTextBlock } from "next-sanity";
import { notFound } from "next/navigation";

import DateComponent from "@/app/components/Date";
import { DateIndicator } from "@/app/components/DateIndicator";
import PortableText from "@/app/components/PortableText";
import { MorePosts } from "@/app/components/Posts";
import { sanityFetch } from "@/sanity/lib/live";
import { postPagesSlugs, postQuery } from "@/sanity/lib/queries";
import { resolveOpenGraphImage } from "@/sanity/lib/utils";

type Props = {
  params: Promise<{ slug: string }>;
};

/**
 * Generate the static params for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-static-params
 */
export async function generateStaticParams() {
  const { data } = await sanityFetch({
    query: postPagesSlugs,
    // Use the published perspective in generateStaticParams
    perspective: "published",
    stega: false,
  });
  return data;
}

/**
 * Generate metadata for the page.
 * Learn more: https://nextjs.org/docs/app/api-reference/functions/generate-metadata#generatemetadata-function
 */
export async function generateMetadata(
  props: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const params = await props.params;
  const { data: post } = await sanityFetch({
    query: postQuery,
    params,
    // Metadata should never contain stega
    stega: false,
  });
  const previousImages = (await parent).openGraph?.images || [];
  const ogImage = resolveOpenGraphImage(post?.coverImage);

  return {
    authors:
      post?.author?.firstName && post?.author?.lastName
        ? [{ name: `${post.author.firstName} ${post.author.lastName}` }]
        : [],
    title: post?.title,
    description: post?.excerpt,
    openGraph: {
      images: ogImage ? [ogImage, ...previousImages] : previousImages,
    },
  } satisfies Metadata;
}

export default async function PostPage(props: Props) {
  const params = await props.params;
  const [{ data: post }] = await Promise.all([
    sanityFetch({ query: postQuery, params }),
  ]);

  if (!post?._id) {
    return notFound();
  }

  return (
    <div className="grid">
      <header className="container max-w-3xl py-12 flex flex-col gap-6 text-center">
        <h1 className="uppercase text-2xl md:text-3xl tracking-tight leading-loose text-gray-900 font-medium">
          {post.title}
        </h1>
        <p>
          <DateComponent
            dateString={post.date}
            className="text-gray-600 italic"
          />
        </p>
      </header>
      <div className="bg-white">
        <article className="container gap-6 grid text-lg lg:text-xl py-12">
          <DateIndicator date={post.date} />
          {post.content?.length && (
            <PortableText
              className="max-w-3xl mx-auto text-lg lg:text-xl"
              value={post.content as PortableTextBlock[]}
            />
          )}
        </article>
      </div>
      <div className="container py-12 lg:py-16">
        <aside>
          <Suspense>{await MorePosts({ skip: post._id, limit: 2 })}</Suspense>
        </aside>
      </div>
    </div>
  );
}
