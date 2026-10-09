import { useTranslations } from "next-intl";
import Image from "next/image";

type Item = { quote: string; author: string; role: string; company: string };

const clients = [
  { src: "mercap.png", alt: "Mercap", w: 197, h: 52 },
  { src: "aldea.webp", alt: "Aldea", w: 197, h: 52 },
  { src: "gatti.png", alt: "Gatti", w: 120, h: 121 },
  { src: "logo-png.png", alt: "Flexio", w: 1536, h: 1024 },
  { src: "picture4.png", alt: "Cliente", w: 2168, h: 1601 },
  { src: "sinercom.png", alt: "Sinercom", w: 197, h: 52 },
  { src: "kalel.png", alt: "Kalel", w: 197, h: 52 },
  { src: "bbraun.png", alt: "B. Braun", w: 197, h: 52 },
  { src: "romedical.png", alt: "Romedical", w: 197, h: 52 },
  { src: "salmones-austral.png", alt: "Salmones Austral", w: 197, h: 52 },
];

function LogoRow() {
  return (
    <>
      {clients.map((c) => (
        <Image key={c.src} src={`/bedata/clients/${c.src}`} alt={c.alt} width={c.w} height={c.h} className="mx-8 h-14 w-36 shrink-0 object-contain" />
      ))}
    </>
  );
}

export default function Testimonial() {
  const t = useTranslations("Testimonial");
  const items = t.raw("items") as Item[];

  return (
    <section className="bg-gradient-to-br from-brand-navy via-[#046a86] to-brand-mint py-16 text-white md:py-24">
      <div className="mx-auto grid max-w-7xl gap-6 px-4 md:grid-cols-3 md:px-8">
        {items.map((it) => (
          <figure key={it.author} className="flex flex-col rounded-3xl bg-white/10 p-6 backdrop-blur">
            <blockquote className="flex-1 text-sm leading-relaxed text-white/90">“{it.quote}”</blockquote>
            <figcaption className="mt-5 text-sm">
              <div className="font-bold">{it.author}</div>
              <div className="text-white/80">{it.role}</div>
              <div className="font-semibold text-brand-mint">{it.company}</div>
            </figcaption>
          </figure>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-6xl overflow-hidden px-4" aria-label="Clientes">
        <div className="flex w-max animate-marquee items-center hover:[animation-play-state:paused]">
          <LogoRow />
          <LogoRow />
        </div>
      </div>
    </section>
  );
}
