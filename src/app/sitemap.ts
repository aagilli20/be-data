import { type MetadataRoute } from "next";
import { locales } from "../../i18n/config";
import { getLocaleUrl } from "@/lib/utils";

const routes = ["", "/servicios", "/quienes-somos"];

export default function sitemap(): MetadataRoute.Sitemap {
  return routes.flatMap((route) =>
    locales.map((locale) => ({
      url: getLocaleUrl(locale, route),
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: route === "" ? 1 : 0.8,
      alternates: {
        languages: Object.fromEntries(locales.map((l) => [l, getLocaleUrl(l, route)])),
      },
    }))
  );
}
