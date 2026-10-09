import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import type { AbstractIntlMessages } from 'next-intl';

import { locales } from './config';
export { localeItems, locales, defaultLocale } from './config';

export default getRequestConfig(async ({ requestLocale }) => {
    // Validate that the incoming `locale` parameter is valid
    const locale: string = await requestLocale ?? "es";
    if (!locales.includes(locale)) notFound();

    return {
        locale,
        messages: ((await import(`./locales/${locale}.json`)) as { default: AbstractIntlMessages }).default
    };
});
