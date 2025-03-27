"use client";

import * as React from "react";

import { Menu, X } from "lucide-react";
import Link from "next/link";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/Drawer";
import { cn } from "@/utils/cn";

type TRoute = {
  href: string;
  label: string;
};

type TProps = NoChildren & {
  routes: RoA<TRoute>;
  pathname: string;
};

export const NavMobile: React.FC<TProps> = ({ routes, pathname }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="flex lg:hidden w-full justify-end">
      <Drawer
        open={isOpen}
        onOpenChange={setIsOpen}
        direction="right"
        disablePreventScroll
        autoFocus
      >
        <DrawerTrigger asChild>
          <button className="py-2 pl-4 pr-0">
            <Menu width="32px" height="32px" />
            <span className="sr-only">Hlavní navigace stránky - otevřít</span>
          </button>
        </DrawerTrigger>
        <DrawerContent
          autoFocus
          className="h-full w-4/5 bg-white top-0 bottom-0 right-0 p-8 pt-12"
        >
          <DrawerClose className="absolute right-0 top-0 p-4">
            <X className="text-gray-500" />
            <span className="sr-only">Zavřít menu</span>
          </DrawerClose>
          <DrawerTitle className="sr-only">Hlavní menu</DrawerTitle>
          <ul>
            {routes.map(({ href, label }) => (
              <li
                key={href}
                className="border-b border-gray-300 text-gray-500 font-light p-4"
              >
                <Link
                  onClick={() => setIsOpen(false)}
                  href={href}
                  className={cn(`uppercase`, {
                    "text-black": href === pathname,
                  })}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </DrawerContent>
      </Drawer>
    </div>
  );
};
