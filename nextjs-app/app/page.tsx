import { Suspense } from "react";

import Image from "next/image";
import Link from "next/link";

import { ROUTES } from "@/config/routes";
import zelenina from "@/public/images/zelenina.webp";
import { cn } from "@/utils/cn";

import { ButtonLink } from "./components/ButtonLink";
import { AllPosts } from "./components/Posts";

export default async function Page() {
  return (
    <>
      <div>
        <Image
          src={zelenina}
          alt=""
          className="h-[400px] w-full relative object-cover"
        />
      </div>

      <section className="bg-[url(@/public/images/bg-pattern.jpg)] py-20 px-5">
        <div className="container flex flex-col gap-8 md:gap-16 items-center justify-center">
          <h1 className="text-text-primary font-medium text-2xl md:text-3xl text-center">
            Co je to semínkovna a kdo za tímto projektem stojí?
          </h1>
          <ButtonLink variant="dark" href={ROUTES.we.href}>
            {ROUTES.we.label}
          </ButtonLink>
        </div>
      </section>
      <section
        className={cn(
          `bg-primary-dark text-white`,
          `py-20 px-5`,
          `font-light text-xl text-center`
        )}
      >
        <div className="container relative md:grid md:grid-cols-2 gap-x-8 gap-y-12 flex flex-col justify-center">
          <div className="flex flex-col gap-8 items-center flex-[3]">
            <p>
              Vyškovská semínkovna a její členové se věnují udržování starých a
              netradičních odrůd zeleniny, které nejsou běžně dostupné. Více o
              odrůdách které pěstujeme a semenaříme naleznete zde:
            </p>
            <ButtonLink href={ROUTES.seeds.href}>
              {ROUTES.seeds.label}
            </ButtonLink>
          </div>
          <div className="flex flex-col gap-8 flex-[2] items-center">
            <p>Jak funguje Semínkovna ve Vyškově a jak mohu semínka získat?</p>
            <ButtonLink href={ROUTES.getSeeds.href}>
              {ROUTES.getSeeds.label}
            </ButtonLink>
          </div>
        </div>
      </section>

      <section className="bg-[url(@/public/images/bg-pattern.jpg)] py-20 px-5">
        <div className="container flex flex-col gap-8 md:gap-16 items-center justify-center">
          <h2 className="text-text-primary text-center uppercase">
            <Link
              href={ROUTES.news.href}
              className="underline font-medium text-3xl md:text-5xl"
            >
              Aktuality a události
            </Link>
          </h2>
          <p className="font-light text-xl">
            Několikrát do roka pořádáme různé akce. Pokud nechcete přijít o
            události, které jako Semínkovna ve Vyškově pořádáme. Sledujte naši
            FB stránku:{" "}
            <Link
              href="www.facebook.com/SeminkovnaveVyskove"
              target="_blank"
              className="text-text-primary underline"
            >
              Semínkovna ve Vyškově
            </Link>
          </p>
        </div>
      </section>

      <section className="px-6 py-8">
        <div className="shadow-md p-8 bg-white container">
          <aside className="grid gap-x-8 gap-y-10 grid-cols-[repeat(auto-fill,minmax(auto,320px))] justify-evenly">
            <Suspense>{await AllPosts()}</Suspense>
          </aside>
        </div>
      </section>

      <section className="px-6 pb-8 pt-4">
        <div
          className={cn(
            `shadow-md px-8 py-16 bg-white container`,
            `text-text-primary font-medium text-xl md:text-2xl text-center`
          )}
        >
          <p>
            Jste nadšení pěstitelé a baví vás semenařit? A chcete se k nám
            připojit?
          </p>
          <p className="mt-6">
            Kontaktujte nás:{" "}
            <Link href={"mailto:seminkovnavevyskove@gmail.com"}>
              seminkovnavevyskove@gmail.com
            </Link>
          </p>
        </div>
      </section>
    </>
  );
}
