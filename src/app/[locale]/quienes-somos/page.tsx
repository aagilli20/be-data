import { type Metadata } from "next";
import Image from "next/image";
import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/../i18n/navigation";
import { getLocaleUrl } from "@/lib/utils";
import { locales } from "../../../../i18n/config";

type Member = { name: string; role: string; bio: string };
type Titled = { title: string; desc: string };

const photos = ["gabi2.webp", "ale-2.webp", "jime-2.webp"];
const valueIcons = ["Recurso-1centrado-1.png", "Recurso-2funcionalidad-1.png", "Group-39453.png", "Layer-2.png", "Group.png"];

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("AboutPage");
  const locale = await getLocale();
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: getLocaleUrl(locale, "/quienes-somos"),
      languages: Object.fromEntries(locales.map((l) => [l, getLocaleUrl(l, "/quienes-somos")])),
    },
  };
}

export default async function AboutPage() {
  const t = await getTranslations("AboutPage");
  const team = t.raw("team") as Member[];
  const steps = t.raw("steps") as Titled[];
  const values = t.raw("values") as Titled[];

  return (
    <>
      <section className="mx-auto max-w-4xl px-4 py-16 md:py-24">
        <h1 className="mb-6 text-4xl font-extrabold text-brand-navy md:text-5xl">{t("title")}</h1>
        <p className="mb-4 text-lg leading-relaxed text-foreground/80">{t("p1")}</p>
        <p className="text-lg leading-relaxed text-foreground/80">{t("p2")}</p>
      </section>

      <section className="mx-auto grid max-w-6xl gap-8 px-4 pb-16 md:grid-cols-3">
        {team.map((m, i) => (
          <article key={m.name} className="overflow-hidden rounded-3xl bg-white shadow-lg shadow-brand-navy/10">
            <Image src={`/bedata/about/${photos[i]}`} alt={m.name} width={400} height={400} className="aspect-square w-full object-cover" />
            <div className="p-6">
              <h2 className="text-xl font-extrabold text-brand-navy">{m.name}</h2>
              <p className="mb-3 text-sm font-semibold text-brand-blue">{m.role}</p>
              <p className="text-sm leading-relaxed text-foreground/75">{m.bio}</p>
            </div>
          </article>
        ))}
      </section>

      <section className="bg-brand-mist py-16">
        <div className="mx-auto max-w-6xl px-4">
          <h2 className="mb-10 text-center text-3xl font-extrabold text-brand-navy">{t("methodTitle")}</h2>
          <ol className="grid gap-6 md:grid-cols-3">
            {steps.map((s, i) => (
              <li key={s.title} className="rounded-3xl bg-white p-6 shadow-md shadow-brand-navy/10">
                <span className="mb-3 flex h-10 w-10 items-center justify-center rounded-full bg-brand-blue font-bold text-white">{i + 1}</span>
                <h3 className="mb-2 text-xl font-bold text-brand-navy">{s.title}</h3>
                <p className="text-sm leading-relaxed text-foreground/75">{s.desc}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="mb-3 text-center text-2xl font-extrabold tracking-wide text-brand-navy md:text-3xl">{t("differentTitle")}</h2>
        <p className="mb-10 text-center text-foreground/75">{t("differentDesc")}</p>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {values.map((v, i) => (
            <article key={v.title} className="rounded-3xl border border-brand-blue/20 p-6">
              <Image src={`/bedata/about/${valueIcons[i]}`} alt="" width={56} height={56} className="mb-4 h-14 w-14 object-contain" />
              <h3 className="mb-2 text-lg font-bold text-brand-navy">{v.title}</h3>
              <p className="text-sm leading-relaxed text-foreground/75">{v.desc}</p>
            </article>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/#contacto" className="inline-flex h-11 items-center rounded-full bg-brand-blue px-8 text-sm font-semibold text-white transition hover:bg-brand-blue/90">
            {t("cta")}
          </Link>
        </div>
      </section>
    </>
  );
}
