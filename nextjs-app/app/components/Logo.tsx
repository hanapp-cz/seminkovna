import * as React from "react";

import Image from "next/image";
import Link from "next/link";

import logo from "../../public/images/logo.png";

type TProps = NoChildren & {
  className?: PropsOf<typeof Link>["className"];
};

export const Logo: React.FC<TProps> = ({ className }) => {
  return (
    <Link href="/" className={className}>
      <Image
        alt="Semínkovna ve Vyškově - logo"
        src={logo}
        height={190}
        className="h-16 w-auto"
      />
      <span className="sr-only">Semínkovna ve Vyškově - domovská stránka</span>
    </Link>
  );
};
