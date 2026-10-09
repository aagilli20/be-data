import { useTranslations } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { Download } from "lucide-react";

const icons = ["virtual.png", "practico.png", "personalizado.png", "material-extra.png"];

export default function Courses() {
  const t = useTranslations("Courses");
  const features = t.raw("features") as string[];

  return (
    <section className="px-4 py-8 md:px-8">
      <div
        className="relative mx-auto grid max-w-7xl gap-10 overflow-hidden rounded-3xl bg-brand-deep bg-cover bg-center p-8 text-white shadow-2xl shadow-brand-navy/20 md:grid-cols-[3fr_2fr] md:p-14"
        style={{ backgroundImage: "url(/bedata/courses-bg.webp)" }}
      >
        <div>
          <h2 className="mb-5 max-w-md text-3xl font-extrabold leading-tight md:text-4xl">{t("title")}</h2>
          <p className="mb-6 max-w-lg text-sm leading-relaxed text-white/85">{t("description")}</p>
          <p className="mb-6 text-sm font-semibold">{t("classes")}</p>
          <div className="flex flex-wrap gap-3">
            <Link href="#contacto" className="inline-flex h-11 items-center rounded-full bg-brand-blue px-7 text-sm font-semibold transition hover:bg-brand-blue/90">
              {t("enroll")}
            </Link>
            <a
              href="/bedata/programa-curso.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-11 items-center gap-2 rounded-full bg-white/25 px-7 text-sm font-semibold backdrop-blur transition hover:bg-white/35"
            >
              <Download className="h-4 w-4" />
              {t("download")}
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-4 md:pl-10">
          <Image src="/bedata/powerbi-badge.png" alt="Power BI" width={173} height={65} className="mb-2 h-auto w-40 self-end rounded-xl bg-white/90 p-2" />
          {features.map((f, i) => (
            <div key={f} className="flex items-center gap-4">
              <Image src={`/bedata/icons/${icons[i]}`} alt="" width={57} height={57} className="h-12 w-12" />
              <span className="text-sm font-bold">{f}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
