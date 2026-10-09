import { useTranslations } from "next-intl";
import Link from "next/link";
import { CircleCheck } from "lucide-react";

type Plan = { name: string; for: string; price: number; price12: number; price6: number; badge: string; features: string[] };

export default function Plans() {
  const t = useTranslations("Plans");
  const plans = t.raw("items") as Plan[];

  return (
    <section id="planes" className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <h2 className="mb-12 text-center text-4xl font-extrabold text-brand-navy">{t("title")}</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {plans.map((p) => (
            <article key={p.name} className="relative flex flex-col overflow-hidden rounded-3xl border-2 border-brand-blue/20 bg-white p-6 shadow-lg shadow-brand-blue/10">
              <span className="absolute right-[-38px] top-6 w-36 rotate-45 bg-brand-blue py-1 text-center text-[10px] font-bold tracking-wider text-white">
                {p.badge}
              </span>
              <h3 className="mb-2 text-center text-3xl font-extrabold text-brand-navy">{p.name}</h3>
              <p className="mx-auto mb-4 min-h-[3rem] max-w-[17rem] text-center text-xs text-foreground/70">{p.for}</p>
              <div className="mb-5 text-center text-brand-navy">
                <div className="text-sm text-foreground/50 line-through">${p.price}</div>
                <div className="flex items-start justify-center gap-1">
                  <span className="mt-2 text-xl font-bold">$</span>
                  <span className="text-6xl font-extrabold leading-none">{p.price12}*</span>
                </div>
                <div className="mt-1 text-sm">{t("currency")}</div>
              </div>
              <ul className="mb-6 flex-1 divide-y divide-brand-navy/10 border-y border-brand-navy/10 text-sm">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2 py-2.5 text-brand-navy">
                    <CircleCheck className="h-4 w-4 shrink-0 text-brand-navy" />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href="#contacto" className="mx-auto inline-flex h-11 items-center rounded-full bg-brand-mint px-8 text-sm font-bold text-brand-deep transition hover:brightness-95">
                {t("cta")}
              </Link>
              <p className="mt-4 text-center text-[11px] leading-snug text-brand-blue">
                {t("footnote", { p6: p.price6, p: p.price })}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
