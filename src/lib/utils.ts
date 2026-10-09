import { env } from "@/env"
import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/** Absolute URL for a locale. The default locale (es) has no prefix. */
export function getLocaleUrl(locale: string, path = "") {
  const prefix = locale === "es" ? "" : `/${locale}`
  return `${env.DOMAIN}${prefix}${path}`
}
