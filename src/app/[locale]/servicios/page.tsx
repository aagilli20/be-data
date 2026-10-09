import { type Metadata } from "next";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Check } from "lucide-react";
import { Link } from "@/../i18n/navigation";
import { getLocaleUrl } from "@/lib/utils";
import { locales } from "../../../../i18n/config";

type Block = { title: string; intro: string; provides: string; highlight: string; highlightDesc: string; bullets: string[] };

const powerLogos = [
  { src: "02-power-automate.webp", alt: "Power Automate" },
  { src: "03-power-bi.webp", alt: "Power BI" },
  { src: "04-power-apps1.webp", alt: "Power Apps" },
  { src: "04-power-visual-agents.webp", alt: "Power Virtual Agents" },
];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("ServicesPage");
  const locale = await getLocale();
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: getLocaleUrl(locale, "/servicios"),
      languages: Object.fromEntries(locales.map((l) => [l, getLocaleUrl(l, "/servicios")])),
    },
  };
}

export default async function ServicesPage() {
  const t = await getTranslations("ServicesPage");
  const blocks = t.raw("blocks") as Block[];

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16 text-center md:py-24">
        <h1 className="mb-6 text-4xl font-extrabold text-brand-navy md:text-5xl">{t("title")}</h1>
        <p className="mb-4 text-lg text-foreground/75">{t("intro1")}</p>
        <p className="text-foreground/75">{t("intro2")}</p>
      </section>

      <section className="bg-gradient-to-br from-brand-navy via-[#046a86] to-brand-mint py-14 text-white">
        <div className="mx-auto max-w-5xl px-4 text-center">
          <h2 className="mb-2 text-3xl font-extrabold">{t("powerTitle")}</h2>
          <p className="mb-8 text-white/85">{t("powerDesc")}</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {powerLogos.map((l) => (
              <Image key={l.src} src={`/bedata/services/${l.src}`} alt={l.alt} width={160} height={80} className="h-16 w-auto object-contain" />
            ))}
          </div>
        </div>
      </section>

      <div className="mx-auto max-w-5xl space-y-12 px-4 py-16">
        {blocks.map((b) => (
          <article key={b.title} className="rounded-3xl bg-white p-8 shadow-lg shadow-brand-navy/10 md:p-10">
            <h2 className="mb-4 text-3xl font-extrabold text-brand-navy">{b.title}</h2>
            <p className="mb-4 text-foreground/80">{b.intro}</p>
            {b.provides && <p className="mb-4 font-semibold text-brand-navy">{b.provides}</p>}
            <div className="mb-6 rounded-2xl bg-brand-mist p-6">
              <h3 className="mb-2 text-lg font-bold text-brand-blue">{b.highlight}</h3>
              <p className="text-sm leading-relaxed text-foreground/75">{b.highlightDesc}</p>
            </div>
            <ul className="grid gap-3 sm:grid-cols-2">
              {b.bullets.map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm font-medium text-brand-navy">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-brand-mint" />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>

      <section className="bg-brand-deep px-4 py-16 text-center text-white">
        <h2 className="mx-auto mb-8 max-w-2xl text-2xl font-extrabold md:text-3xl">{t("ctaTitle")}</h2>
        <Link href="/#contacto" className="inline-flex h-11 items-center rounded-full bg-brand-blue px-8 text-sm font-semibold transition hover:bg-brand-blue/90">
          {t("ctaAction")}
        </Link>
      </section>
    </>
  );
}
