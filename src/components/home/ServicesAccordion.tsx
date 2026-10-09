"use client";

import * as AccordionPrimitive from "@radix-ui/react-accordion";
import { Minus, Plus } from "lucide-react";
import type { ReactNode } from "react";

type Item = { id: string; title: string; desc: ReactNode };

export default function ServicesAccordion({ items }: { items: Item[] }) {
  return (
    <AccordionPrimitive.Root type="single" collapsible defaultValue={items[0]?.id} className="w-full">
      {items.map((it) => (
        <AccordionPrimitive.Item key={it.id} value={it.id} className="border-b border-brand-navy/10 last:border-0">
          <AccordionPrimitive.Header>
            <AccordionPrimitive.Trigger className="group flex w-full items-center gap-3 py-4 text-left text-lg font-bold text-brand-navy">
              <Plus className="h-4 w-4 shrink-0 group-data-[state=open]:hidden" />
              <Minus className="hidden h-4 w-4 shrink-0 group-data-[state=open]:block" />
              {it.title}
            </AccordionPrimitive.Trigger>
          </AccordionPrimitive.Header>
          <AccordionPrimitive.Content className="overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down">
            <p className="pb-5 pl-7 text-[15px] leading-relaxed text-brand-navy/80">{it.desc}</p>
          </AccordionPrimitive.Content>
        </AccordionPrimitive.Item>
      ))}
    </AccordionPrimitive.Root>
  );
}
