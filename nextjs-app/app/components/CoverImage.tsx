import { Image } from "next-sanity/image";

import { urlForImage } from "@/sanity/lib/utils";
import { stegaClean } from "@sanity/client/stega";

interface CoverImageProps {
  image: any;
  priority?: boolean;
}

export default function CoverImage(props: CoverImageProps) {
  const { image: source, priority } = props;
  const image = source?.asset?._ref ? (
    <Image
      className="object-cover object-left-top"
      fill={true}
      alt={stegaClean(source?.alt) || ""}
      src={urlForImage(source)?.auto("format").url() as string}
      sizes="320px"
      priority={priority}
    />
  ) : (
    <div className="bg-slate-50" style={{ paddingTop: "100%" }} />
  );

  return <div className="relative aspect-square">{image}</div>;
}
