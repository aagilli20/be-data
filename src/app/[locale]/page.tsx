

import Hero from "@/components/home/Hero";
import Feature from "@/components/home/Feature";
import Stats from "@/components/home/Stats";
import { type Metadata } from 'next'
import { getLocale } from "next-intl/server";
import { getLocaleUrl } from "@/lib/utils";
import { locales } from "i18n/request";
import { getTranslations } from 'next-intl/server';

export const revalidate = 3600; // Revalidate every hour


export async function generateMetadata(): Promise<Metadata> {
  const locale = await getLocale();
  const t = await getTranslations('website');


  return {
    title: t("title"),
    description: t("description"),
    alternates: {
      canonical: getLocaleUrl(locale),
      languages: Object.fromEntries(
        locales.map((locale) => {
          return [locale, getLocaleUrl(locale)]
        })
      )
    },
    openGraph: {
      title: t("title"),
      description: t("description"),
      url: getLocaleUrl(locale),
      siteName: 'BeData',
      images: [
        {
          url: '/webbedata.webp',
          width: 540,
          height: 456,
          alt: 'BeData Preview',
        },
      ],
      locale: locale,
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: t("title"),
      description: t("description"),
      images: ['/webbedata.webp'],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    }
  };
}

export default async function HomePage() {
  return <>
    <Hero />
    <Feature />
    <Stats />
  </>;
}