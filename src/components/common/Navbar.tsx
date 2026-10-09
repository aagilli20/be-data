"use client";
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import LanguageSwitch from './LanguageSwitch';
import { Link } from '@/../i18n/navigation';
import { Button } from '@/components/ui/button';
import { Menu } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { key: 'home', href: '/' },
  { key: 'services', href: '/servicios' },
  { key: 'about', href: '/quienes-somos' },
  { key: 'contact', href: '/#contacto' },
] as const;

export default function Navbar() {
  const t = useTranslations('Navbar');

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 shadow-md shadow-brand-navy/10 backdrop-blur">
      <div className="mx-auto flex h-[72px] max-w-7xl items-center justify-between px-4 md:px-8">
        <Link href="/" aria-label="Be Data Global">
          <Image src="/bedata/logo-1536.png" alt="Be Data Global" width={182} height={53} priority className="h-11 w-auto" />
        </Link>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navItems.map(({ key, href }) => (
            <Link key={key} href={href} className="text-sm font-medium text-brand-navy transition-colors hover:text-brand-blue">
              {t(key)}
            </Link>
          ))}
          <LanguageSwitch />
        </nav>

        <div className="flex items-center gap-1 md:hidden">
          <LanguageSwitch />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" aria-label={t('menu')}>
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[240px] sm:w-[280px]">
              <SheetHeader>
                <SheetTitle>{t('menu')}</SheetTitle>
              </SheetHeader>
              <nav className="mt-8 flex flex-col gap-4">
                {navItems.map(({ key, href }) => (
                  <Link key={key} href={href} className="text-base font-medium text-brand-navy hover:text-brand-blue">
                    {t(key)}
                  </Link>
                ))}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
