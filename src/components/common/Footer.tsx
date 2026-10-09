import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { Mail, Linkedin, Youtube } from 'lucide-react';
import { Link } from '@/../i18n/navigation';
import { WhatsappIcon } from './WhatsappIcon';
import { EMAIL, LINKEDIN_URL, WHATSAPP_URL, YOUTUBE_URL } from '@/lib/rich';

const navItems = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/servicios' },
  { key: 'about', href: '/quienes-somos' },
  { key: 'contact', href: '/#contacto' },
] as const;

export default function Footer() {
  const t = useTranslations('Footer');
  const nav = useTranslations('Navbar');

  return (
    <footer className="bg-brand-deep text-white">
      <div className="mx-auto grid max-w-7xl gap-10 px-4 py-14 md:grid-cols-3 md:px-8">
        <div>
          <Image src="/bedata/logo-white.png" alt="Be Data Global" width={159} height={48} className="mb-4 h-12 w-auto" />
          <p className="max-w-xs text-sm text-white/75">{t('tagline')}</p>
        </div>

        <nav aria-label={t('links')}>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-mint">{t('links')}</h3>
          <ul className="space-y-2 text-sm">
            {navItems.map(({ key, href }) => (
              <li key={key}>
                <Link href={href} className="text-white/80 transition hover:text-white">{nav(key)}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h3 className="mb-4 text-sm font-bold uppercase tracking-wider text-brand-mint">{t('contactTitle')}</h3>
          <a href={`mailto:${EMAIL}`} className="text-sm text-white/80 transition hover:text-white">{EMAIL}</a>
          <ul className="mt-4 flex gap-3">
            {[
              { href: `mailto:${EMAIL}`, label: 'Email', Icon: Mail },
              { href: WHATSAPP_URL, label: 'WhatsApp', Icon: WhatsappIcon },
              { href: LINKEDIN_URL, label: 'LinkedIn', Icon: Linkedin },
              { href: YOUTUBE_URL, label: 'YouTube', Icon: Youtube },
            ].map(({ href, label, Icon }) => (
              <li key={label}>
                <a href={href} aria-label={label} target={href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer" className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition hover:bg-brand-blue">
                  <Icon className="h-4 w-4" />
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-5 text-center text-xs text-white/60">
        © {new Date().getFullYear()} Be Data Global. {t('copyright')}
      </div>
    </footer>
  );
}
