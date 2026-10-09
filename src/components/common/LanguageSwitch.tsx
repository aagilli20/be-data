'use client';

import { useLocale } from 'next-intl';
import { Globe } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { localeItems } from "@/../i18n/config";
import { usePathname, useRouter } from "@/../i18n/navigation";
import { Button } from "@/components/ui/button";

export default function LanguageSwitch() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className="flex items-center gap-2 hover:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
          aria-label="Select language"
          aria-haspopup="menu"
        >
          <Globe className="h-4 w-4" />
          <span className="hidden md:inline-block">
            {localeItems.find(lang => lang.code === locale)?.name ?? 'Language'}
          </span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" aria-label="Language selection menu">
        {localeItems.map((lang) => (
          <DropdownMenuItem
            key={lang.code}
            role="menuitem"
            aria-label={`Switch to ${lang.name}`}
            disabled={locale === lang.code}
            onClick={() => router.replace(pathname, { locale: lang.code })}
            className={locale === lang.code ? 'bg-accent' : ''}
          >
            {lang.name}
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
