import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-primary-medium">
      <div className="container py-16 px-8 text-xl">
        <address className="flex flex-col gap-3 font-light">
          <p className="font-medium">E-mail</p>
          <Link
            href="mailto:seminkovnavevyskove@gmail.com"
            className="underline"
          >
            seminkovnavevyskove@gmail.com
          </Link>
          <p>
            facebook:{" "}
            <Link href="" className="underline">
              Semínkovna ve Vyškově
            </Link>
          </p>
        </address>
      </div>
    </footer>
  );
}
