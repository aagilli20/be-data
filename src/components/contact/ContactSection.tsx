import { useTranslations } from "next-intl";
import { Mail, Linkedin, Youtube } from "lucide-react";
import ContactForm from "./ContactForm";
import { CALENDLY_URL, EMAIL, LINKEDIN_URL, WHATSAPP_URL, YOUTUBE_URL, rich } from "@/lib/rich";
import { WhatsappIcon } from "@/components/common/WhatsappIcon";

const social = [
  { href: `mailto:${EMAIL}`, label: "Email", Icon: Mail },
  { href: WHATSAPP_URL, label: "WhatsApp", Icon: WhatsappIcon },
  { href: LINKEDIN_URL, label: "LinkedIn", Icon: Linkedin },
  { href: YOUTUBE_URL, label: "YouTube", Icon: Youtube },
];

export default function ContactSection() {
  const t = useTranslations("Contact");

  return (
    <section id="contacto" className="scroll-mt-20 px-4 py-16 md:px-8 md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-[4fr_5fr_auto]">
        <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-white to-brand-mint/20 p-8 shadow-lg shadow-brand-navy/10">
          <h2 className="mb-5 text-3xl font-extrabold leading-tight text-brand-navy md:text-4xl">{t("title")}</h2>
          <p className="mb-6 text-sm leading-relaxed text-foreground/70">{t.rich("description", rich)}</p>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex rounded-full bg-brand-blue px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-blue/90"
          >
            {t("call")}
          </a>
        </div>

        <div className="rounded-3xl bg-brand-navy p-8 md:p-10">
          <ContactForm />
        </div>

        <ul className="flex flex-row justify-center gap-4 rounded-full bg-brand-mist p-4 md:flex-col md:justify-center md:px-4 md:py-8">
          {social.map(({ href, label, Icon }) => (
            <li key={label}>
              <a
                href={href}
                target={href.startsWith("http") ? "_blank" : undefined}
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-10 w-10 items-center justify-center rounded-full text-brand-navy transition hover:bg-brand-blue hover:text-white"
              >
                <Icon className="h-5 w-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
