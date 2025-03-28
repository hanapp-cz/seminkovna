import * as React from "react";

import { isPast } from "date-fns";

import { cn } from "@/utils/cn";

import DateComponent from "./Date";

type TProps = NoChildren & {
  date: DateString;
  className?: React.HTMLAttributes<HTMLParagraphElement>["className"];
};

export const DateIndicator: React.FC<TProps> = ({ date, className }) => {
  if (isPast(date)) {
    return (
      <p className={cn(`text-center`, className)}>
        <strong className="text-alert font-normal">akce již proběhla</strong>
      </p>
    );
  }

  return (
    <p className={cn(`text-center`, className)}>
      <strong className={cn(`text-text-primary font-medium`)}>
        nadcházející událost <DateComponent dateString={date} />
      </strong>
    </p>
  );
};
