import { useTranslations } from "next-intl";
import Link from "next/link";
import ServicesAccordion from "./ServicesAccordion";
import { rich } from "@/lib/rich";

type Item = { title: string; desc: string };

export default function Feature() {
  const t = useTranslations("Feature");
  const raw = t.raw("items") as Item[];
  const items = raw.map((it, i) => ({
    id: `s${i}`,
    title: it.title,
    desc: t.rich(`items.${i}.desc`, rich),
  }));

  return (
    <section id="servicios" className="bg-brand-mist py-16 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 md:grid-cols-[5fr_7fr] md:px-8">
        <div className="self-start rounded-3xl bg-white p-8 shadow-lg shadow-brand-navy/10">
          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-brand-navy md:text-4xl">{t("title")}</h2>
          <p className="mb-8 text-[15px] leading-relaxed text-foreground/70">{t("description")}</p>
          <Link href="/servicios" className="inline-flex h-11 items-center rounded-full bg-brand-blue px-7 text-sm font-semibold text-white transition hover:bg-brand-blue/90">
            {t("action")}
          </Link>
        </div>
        <ServicesAccordion items={items} />
      </div>
    </section>
  );
}
