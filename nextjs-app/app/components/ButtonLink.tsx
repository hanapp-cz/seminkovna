import * as React from 'react';

import Link from 'next/link';

import { cn } from '@/utils/cn';

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
    variant === "light"
      ? `bg-white text-black/80 hover:bg-gray-200`
      : `bg-black/65 text-white hover:bg-black/75`;

  return (
    <Link
      {...props}
      className={cn(
        colorTheme,
        `transition-colors`,
        `uppercase text-2xl font-light`,
        `py-4 px-8 min-w-64 flex items-center justify-center`,
        className
      )}
    >
      {children}
    </Link>
  );
};
