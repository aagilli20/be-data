import { useTranslations } from "next-intl";
import CountUp from "./CountUp";

export default function Stats() {
  const t = useTranslations("Stats");

  return (
    <section className="py-12 md:py-20">
      <div className="mx-auto grid max-w-5xl items-center gap-6 px-4 md:grid-cols-3 md:px-8">
        <div className="flex h-52 flex-col items-center justify-center rounded-3xl bg-brand-blue text-white">
          <CountUp to={10} className="text-6xl font-extrabold" />
          <span className="mt-2 text-sm">{t("years")}</span>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 text-brand-blue">
          <CountUp to={150} className="text-6xl font-extrabold" />
          <span className="rounded-full bg-brand-blue px-5 py-2 text-sm font-semibold text-white">{t("projects")}</span>
        </div>
        <div className="flex h-52 flex-col items-center justify-center rounded-3xl border-2 border-brand-blue text-brand-blue">
          <CountUp to={5} className="text-6xl font-extrabold" />
          <span className="mt-2 text-sm">{t("industries")}</span>
        </div>
      </div>
    </section>
  );
}
