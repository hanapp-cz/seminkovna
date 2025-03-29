import Link from 'next/link';

import { cn } from '@/utils/cn';

import { ButtonLink } from '../components/ButtonLink';

const FORMS_LINK = "https://forms.gle/gBA99tzbYfPQcoPv6";
const TERMS_ID = "pravidla";

export default async function Page() {
  return (
    <div className="grid">
      <header className={cn(`bg-decorative bg-cover bg-bottom shadow-lg`)}>
        <div
          className={cn(
            `container max-w-3xl py-12 min-h-64`,
            `lg:min-h-80 lg:max-w-full`,
            `flex justify-center items-center`,
            `text-center `
          )}
        >
          <h1 className="uppercase text-2xl md:text-3xl lg:text-5xl tracking-tight leading-loose text-gray-900 font-medium heading-shadow">
            Pravidla + Jak mohu semínka získat
          </h1>
        </div>
      </header>
      <main className="leading-relaxed lg:text-lg">
        <section className="bg-pattern py-8 lg:py-12" id={TERMS_ID}>
          <div className="page-content">
            <h2 className="lg:text-3xl">
              Jak funguje Semínkovna ve Vyškově a proč má svá pravidla?
            </h2>
            <p>
              Naše semínkovna se liší od běžných semínkoven, kde si lidé
              anonymně berou a vkládají balíčky semínek do krabic. My jsme
              zvolili jiný přístup, protože{" "}
              <strong>chceme mít přehled o půdvodu a kvalitě semínek</strong>,
              která Vyškovská Semínkovna nabízí.
            </p>

            <h3 className="font-medium lg:text-2xl">
              Proč jsme zavedly pravidla?
            </h3>
            <ol className="flex flex-col gap-y-4 mb-8">
              <li>
                <strong>1. Chceme zajistit kvalitu a správnost</strong> -
                Nechceme aby si někdo odnesl semínka a vyrostlo mu něco úplně
                jiného kvůli nechtěnému křížení.
              </li>
              <li>
                <strong>2. Máme možnost zpětné vazby</strong> - Pokud by se u
                semínek objevila odchylka, můžeme pěstitele kontaktovat a
                předejít dalším chybám.
              </li>
            </ol>

            <h2 className="uppercase text-2xl lg:text-3xl">Pravidla</h2>
            <p>
              Odběr semínek není nikterak zpoplatněn, pěstitel se však{" "}
              <strong>zavazuje</strong>, že se upřímně pokusí zvolená semínka
              odsemenařit a v závěru sezóny poskytne semínkovně{" "}
              <Link
                className="text-text-primary underline font-medium"
                href={FORMS_LINK}
              >
                PĚSTITELSKOU ZPRÁVU
              </Link>
              , ve které popíše své pěstitelské/semenářské postupy a výsledky.
              Pěstitelská zpráva je vytvořena formou dotazníku. Když se
              nezadaří, nevadí, tak jako tak je pěstitelská zpráva velice
              zásadní – <strong>i informace o neúspěchu je důležitá</strong>!
            </p>

            <ButtonLink
              variant="dark"
              href={FORMS_LINK}
              className="w-fit self-center"
            >
              Pěstitelská zpráva
            </ButtonLink>
            <p>
              Semínka jako taková není vyloženě nutné do semínkovny vracet (byť
              správně odsemenařená semínka jsou cenným zvýšením genetické
              diverzity u některých odrůd!! - informace najdete u každé
              zeleniny).
            </p>
            <p>
              V Ekošpajce ve Vyškově vedeme evidenci zapůjčených semen, v
              případě zaslání a objednání online si vedeme evidenci sami. Do
              této evidence prosím napište čitelně platný kontakt na pěstitele
              (e-mail popřípadě tel. číslo) + jaká semínka jste si odnesli. V
              případě, že by došlo na nejhorší a nepodařilo se nám zajistit
              dostatek semínek, obrátili bychom se na Vás s žádostí o dodání
              semen.
            </p>
            <p className="text-text-primary">
              DOPORUČENÍ: pokud jste spíše začátečník, přečtěte si prosím nejpve
              text věnovaný začínajícím semenářům
            </p>
          </div>
        </section>
        <section>
          <div className="bg-white py-8 lg:py-12">
            <div className="container page-content">
              <h2 className="lg:text-3xl">
                Chci semínka ze semínkovny, jak na to a kde je sehnat?
              </h2>
              <p>
                Jsou dvě možnosti kde semínka sehnat a to osobně v Ekošpajzka ve
                Vyškově nebo zasláním poštou přes Nakrmduši (více informací o
                možnostech vyzvednutí a zaslání najdete níže).
              </p>
            </div>
          </div>
          <div>
            <div className="container py-8 lg:py-12 page-content">
              <h3 className="uppercase text-2xl text-center lg:text-3xl">
                OSOBNÍ VYZVEDNUTÍ
              </h3>
              <p>V bezodpadovém obchůdku Ekošpajzka ve Vyškově.</p>
              <p>
                Semínkovna je zde dostupná každoročně po zahájení sezóny
                přibližně od konce února až do června.
              </p>
              <p>
                Semínka jsou zde dostupná dle{" "}
                <Link className="underline font-medium" href={`#${TERMS_ID}`}>
                  PRAVIDEL
                </Link>{" "}
                uvedených výše.
              </p>
              <address>
                Adresa: Ekošpajzka, Palánek 373/19a, 682 01 Vyškov
              </address>
            </div>
          </div>
          <div className="bg-primary-medium">
            <div className="container py-8 lg:py-12 page-content">
              <h3 className="uppercase text-2xl lg:text-3xl text-center">
                ZASÍLÁNÍ A OBJEDNÁNÍ ONLINE
              </h3>
              <p>
                Máte to do Vyškova daleko? Díky úzké spolupráci s místní
                profesionální semenářkou z{" "}
                <Link
                  className="underline text-text-primary font-medium"
                  href={"www.nakrmdusi.cz/"}
                >
                  Nakrmduši
                </Link>
                , se nám podařilo domluvit i tuto možnost. Vybraná semínka Vám
                kolegyně vyzvedne ze semínkovny, zabalí a odešle.
              </p>
              <p>
                Službu si můžete objednat kliknutím na položku{" "}
                <span className="text-text-primary font-medium">
                  &quot;semínkovna-balné&quot;
                </span>{" "}
                a vložíte ji do košíku tolikrát, kolik různých semínek budete
                chtít. Do poznámky při objednávce pak uvedete názvy vybraných
                odrůd.
              </p>

              <div>
                <h4 className="font-medium mb-2">
                  PŘÍKLAD: Mám zájem o fazole Skunk a rajče Atomic Red
                </h4>
                <ol className="list-decimal pl-4">
                  <li>
                    Kliknu na položku{" "}
                    <strong className="font-medium">semínkovna - balné</strong>{" "}
                    a vložím jej 2x do košíku
                  </li>
                  <li>Do poznámky napíšu &quot;Atomic Red, Skunk&quot;</li>
                  <li>Dále pokračuji již jako s klasickou objednávkou</li>
                </ol>
              </div>

              <p>
                I zde platí stejná pravidla semínkovny jako u osobního
                vyzvednutí.
              </p>
              <p>
                Tato služba je sohledem na časovou náročnost zpoplatněna. Cena
                zahrnuje čas vynaložený na přípravu a zabalení balíčku.
              </p>
              <Link href="https://www.nakrmdusi.cz/zelenina/seminkovna/">
                Odkaz zde:{" "}
                <span className="underline">
                  https://www.nakrmdusi.cz/zelenina/seminkovna/
                </span>
              </Link>
            </div>
          </div>
        </section>
        <section className="p-4 lg:p-8">
          <div className="bg-white p-8 container max-w-5xl">
            <div className="text-center text-lg lg:text-2xl lg:leading-relaxed font-medium">
              <p>
                Vítáme každého, kdo by chtěl rozšířit naše řady a stát se
                garantem některé z tradičních odrůd. Pokud se k nám chcete
                přidat, napište nám e-mail:{" "}
                <Link href="mailto:seminkovnavevyskove@gmail.com">
                  seminkovnavevyskove@gmail.com
                </Link>{" "}
                !
              </p>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
