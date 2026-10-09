import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import HeroSlides from "./HeroSlides";
import { rich } from "@/lib/rich";

export default function Hero() {
  const t = useTranslations("Hero");

  const slides = [
    <div key="main">
      <h1 className="mb-4 text-2xl font-extrabold leading-tight text-white lg:text-3xl xl:text-4xl">{t("title")}</h1>
      <p className="text-sm leading-relaxed text-white/85 lg:text-xs xl:text-sm">{t.rich("description", rich)}</p>
    </div>,
    <div key="kicker">
      <h2 className="mb-4 text-2xl font-extrabold leading-tight text-white lg:text-3xl xl:text-4xl">{t("kicker")}</h2>
      <p className="text-sm leading-relaxed text-white/85 lg:text-xs xl:text-sm">{t("kickerDesc")}</p>
    </div>,
  ];

  return (
    <section className="mx-auto grid max-w-7xl items-center gap-10 px-4 py-12 lg:grid-cols-2 md:px-8 md:py-20">
      <div className="rounded-[2rem] bg-brand-deep p-8 lg:flex lg:aspect-[739/457] lg:flex-col lg:justify-center lg:rounded-none lg:bg-transparent lg:bg-[url(/bedata/hero-bg.webp)] lg:bg-contain lg:bg-no-repeat lg:py-0 lg:pl-[8%] lg:pr-[24%]">
        <HeroSlides
          slides={slides}
          action={
            <Link
              href="#contacto"
              className="inline-flex h-10 w-fit items-center rounded-full bg-brand-blue px-6 text-sm font-semibold text-white transition hover:bg-brand-blue/90"
            >
              {t("action")}
            </Link>
          }
        />
      </div>
      <div className="flex justify-center md:justify-end">
        <Image src="/webbedata.webp" alt="Be Data dashboards" width={540} height={456} priority className="h-auto w-full max-w-[500px] object-contain" />
      </div>
    </section>
  );
}
