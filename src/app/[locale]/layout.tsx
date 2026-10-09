import React from "react";
import { cn } from "@/lib/utils";
import { Manrope } from "next/font/google";
import { NextIntlClientProvider, useLocale, useMessages, useTranslations } from 'next-intl';
import Navbar from "@/components/common/Navbar";
import Footer from '@/components/common/Footer';
import { WhatsappIcon } from "@/components/common/WhatsappIcon";
import { GoogleAnalytics } from '@next/third-parties/google'
import { env } from "@/env";
import { WHATSAPP_URL } from "@/lib/rich";
import { type Metadata } from "next";

const manrope = Manrope({
    subsets: ["latin"],
    variable: "--font-manrope",
});

export function generateMetadata(): Metadata {
    return {
        metadataBase: new URL(env.DOMAIN),
        title: { default: "Be Data", template: "%s" },
    };
}

export default function LocaleLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const locale = useLocale();
    const messages = useMessages();
    const t = useTranslations("Common");

    return (
        <html lang={locale} className={cn(manrope.variable, "scroll-smooth")}>
            <body suppressHydrationWarning className="font-sans text-foreground antialiased">
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <Navbar />
                    <main>{children}</main>
                    <Footer />
                </NextIntlClientProvider>
                {env.GA_ID && <GoogleAnalytics gaId={env.GA_ID} />}

                {/* Floating WhatsApp Button */}
                <a
                    href={WHATSAPP_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
                    aria-label={t("whatsapp")}
                >
                    <WhatsappIcon className="h-8 w-8" />
                </a>
            </body>
        </html>
    );
}
