"use client";

import * as React from "react";

import { usePathname } from "next/navigation";

import { ROUTES } from "@/config/routes";

import { NavDesktop } from "./NavDesktop";
import { NavMobile } from "./NavMobile";

type TProps = NoChildren;

export const MainNavigation: React.FC<TProps> = () => {
  const pathname = usePathname();
  const MENU_ROUTES = Object.values(ROUTES);

  return (
    <>
      <NavDesktop routes={MENU_ROUTES} pathname={pathname} />
      <NavMobile routes={MENU_ROUTES} pathname={pathname} />
    </>
  );
};
