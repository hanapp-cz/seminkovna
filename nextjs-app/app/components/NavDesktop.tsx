import * as React from "react";

import Link from "next/link";

import { cn } from "@/utils/cn";

type TRoute = {
  href: string;
  label: string;
};

type TProps = NoChildren & {
  routes: RoA<TRoute>;
  pathname: string;
};

export const NavDesktop: React.FC<TProps> = ({ routes, pathname }) => {
  return (
    <ul className="hidden lg:flex items-center gap-4 md:gap-6 text-gray-600 sm md:text-base font-light">
      {routes.map(({ href, label }) => (
        <li key={href}>
          <Link
            href={href}
            className={cn(
              `uppercase hover:text-black hover:underline transition-all`, //
              { "font-medium text-black": href === pathname }
            )}
          >
            {label}
          </Link>
        </li>
      ))}
    </ul>
  );
};
