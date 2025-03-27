import * as React from "react";

import Link from "next/link";

import { cn } from "@/utils/cn";

type TProps = RequiredChildren &
  PropsOf<typeof Link> & {
    variant?: "dark" | "light";
  };

export const ButtonLink: React.FC<TProps> = ({
  children,
  variant = "light",
  className,
  ...props
}) => {
  const colorTheme =
    variant === "light" ? `bg-white text-black` : `bg-black/65 text-white`;

  return (
    <Link
      {...props}
      className={cn(
        colorTheme,
        `uppercase text-2xl font-light`,
        `py-4 px-8 min-w-64 flex items-center justify-center`,
        className
      )}
    >
      {children}
    </Link>
  );
};
