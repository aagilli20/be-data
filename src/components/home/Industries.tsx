import { useTranslations } from "next-intl";
import Image from "next/image";

const images = ["textil", "energia", "medicina", "peces", "software"];

export default function Industries() {
  const t = useTranslations("Industries");
  const items = t.raw("items") as string[];

  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto grid max-w-7xl gap-4 px-4 md:grid-cols-3 md:px-8">
        <div className="flex flex-col justify-start px-2 py-4 md:pr-8">
          <h2 className="mb-4 max-w-[16rem] text-2xl font-extrabold leading-tight text-brand-navy">{t("title")}</h2>
          <span className="h-1 w-10 rounded-full bg-brand-blue" />
        </div>
        {items.map((label, i) => (
          <div key={label} className="relative h-56 overflow-hidden rounded-3xl bg-brand-navy">
            <Image src={`/bedata/industries/${images[i]}.webp`} alt={label} fill sizes="(min-width: 768px) 33vw, 100vw" className="object-cover" />
            <div className="absolute inset-0 bg-gradient-to-br from-brand-navy/70 to-brand-mint/30" />
            <span className="absolute inset-0 flex items-center justify-center text-lg font-extrabold tracking-wide text-white">{label}</span>
          </div>
        ))}
      </div>
    </section>
  );
}
