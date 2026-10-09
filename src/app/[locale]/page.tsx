import { type Metadata } from 'next'
import { getLocale, getTranslations } from "next-intl/server";
import { getLocaleUrl } from "@/lib/utils";
import { locales } from "../../../i18n/config";
import Hero from "@/components/home/Hero";
import Feature from "@/components/home/Feature";
import Stats from "@/components/home/Stats";
import Plans from "@/components/home/Plans";
import Courses from "@/components/home/Courses";
import Industries from "@/components/home/Industries";
import Testimonial from "@/components/home/Testimonial";
import AboutHome from "@/components/home/AboutHome";
import ContactSection from "@/components/contact/ContactSection";

export const revalidate = 3600; // Revalidate every hour

export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations('website');

  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: getLocaleUrl(locale),
      languages: {
        ...Object.fromEntries(locales.map((l) => [l, getLocaleUrl(l)])),
        "x-default": getLocaleUrl("es"),
      },
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: getLocaleUrl(locale),
      siteName: 'Be Data',
      images: [{ url: '/webbedata.webp', width: 540, height: 456, alt: 'Be Data' }],
      locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t("title"),
      description: t("description"),
      images: ['/webbedata.webp'],
    },
  };
}

export default function HomePage() {
  return <>
    <Hero />
    <Feature />
    <Stats />
    <Plans />
    <Courses />
    <Industries />
    <Testimonial />
    <AboutHome />
    <ContactSection />
  </>;
}
