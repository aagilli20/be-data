import { useTranslations } from 'next-intl';
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Hero() {
  const t = useTranslations('Hero');

  return (
    <div className="flex flex-col md:flex-row items-center justify-between py-24 px-8 max-w-7xl mx-auto gap-12">
      <div className="flex-1 flex flex-col items-start text-left">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 text-[#1A1A1A]">
          {t('title')}
        </h1>
        <p className="text-lg md:text-xl text-gray-600 max-w-[600px] mb-8 leading-relaxed">
          {t('description')}
        </p>
        <Link href="#contacto">
          <Button size="lg" className="min-w-[160px] bg-[#32373c] hover:bg-black text-white rounded-full">
            {t('action')}
          </Button>
        </Link>
      </div>
      <div className="flex-1 flex justify-center md:justify-end">
        <Image
          src="/webbedata.webp"
          alt="BeData Hero"
          width={540}
          height={456}
          className="w-full max-w-[500px] h-auto object-contain"
          priority
        />
      </div>
    </div>
  );
} 