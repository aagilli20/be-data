import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";

export default function AboutHome() {
  const t = useTranslations("AboutHome");

  return (
    <section className="px-4 py-12 md:px-8 md:py-20">
      <div
        className="mx-auto flex max-w-7xl flex-col items-start gap-6 rounded-3xl bg-brand-navy bg-cover bg-center p-8 text-white md:p-14"
        style={{ backgroundImage: "url(/bedata/about-bg.webp)" }}
      >
        <Image src="/bedata/hero-mark.png" alt="" width={55} height={55} className="h-12 w-12" />
        <h2 className="text-3xl font-extrabold md:text-4xl">{t("title")}</h2>
        <p className="max-w-2xl text-[15px] leading-relaxed text-white/90">{t("description")}</p>
        <p className="max-w-2xl text-[15px] leading-relaxed text-white/90">{t("description2")}</p>
        <Link href="/servicios" className="inline-flex h-11 items-center rounded-full bg-brand-blue px-7 text-sm font-semibold transition hover:bg-brand-blue/90">
          {t("action")}
        </Link>
      </div>
    </section>
  );
}
