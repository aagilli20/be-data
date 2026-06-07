import { useTranslations } from 'next-intl';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from "@/components/ui/button";
import Link from "next/link";

const services = [
  { id: 'item-1', titleKey: 'service1Title', descKey: 'service1Desc' },
  { id: 'item-2', titleKey: 'service2Title', descKey: 'service2Desc' },
  { id: 'item-3', titleKey: 'service3Title', descKey: 'service3Desc' },
  { id: 'item-4', titleKey: 'service4Title', descKey: 'service4Desc' },
];

export default function Feature() {
  const t = useTranslations('Feature');
  
  return (
    <section className="py-24 bg-[#F8F9FA]" id="servicios">
      <div className="container px-8 mx-auto max-w-7xl flex flex-col md:flex-row gap-16">
        <div className="flex-1">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6 text-[#1A1A1A]">
            {t('title')}
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            {t('description')}
          </p>
          <Link href="/servicios">
            <Button size="lg" className="bg-[#32373c] hover:bg-black text-white rounded-full">
              {t('action')}
            </Button>
          </Link>
        </div>

        <div className="flex-1">
          <Accordion type="single" collapsible defaultValue="item-1" className="w-full bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
            {services.map((service) => (
              <AccordionItem key={service.id} value={service.id} className="border-b last:border-0 border-gray-100">
                <AccordionTrigger className="text-left text-lg font-semibold text-[#1A1A1A] hover:no-underline py-4">
                  {t(service.titleKey)}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600 leading-relaxed pb-4">
                  {t(service.descKey)}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
} 