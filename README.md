# Be Data

Sitio de [Be Data Global](https://bedata.com.ar) (Data & BI, Power BI) reescrito en Next.js 15 + Tailwind + next-intl (es / en / pt).

## Desarrollo

```bash
pnpm install
cp .env.example .env   # completar Firebase y GA
pnpm dev
```

`pnpm check` corre lint + typecheck. `pnpm build` genera el build de producción.

## Estructura

```
src/app/[locale]/        home, /servicios, /quienes-somos
src/components/home/     secciones de la home (Hero, Feature, Stats, Plans, Courses, Industries, Testimonial, AboutHome)
src/components/contact/  formulario (Firestore + aviso por formsubmit.co)
i18n/locales/*.json      textos por idioma (es es el idioma por defecto, sin prefijo)
public/bedata/           imágenes copiadas de bedata.com.ar
```

## Variables de entorno

- `DOMAIN`: URL pública (canonical, sitemap, hreflang).
- `GA_ID`: Google Analytics (opcional).
- `NEXT_PUBLIC_FIREBASE_*`: proyecto de Firebase donde se guarda la colección `contact`.
- `NEXT_PUBLIC_CONTACT_EMAIL`: destino del aviso por mail (por defecto `aagilli20@gmail.com`).

## Licencia

MIT
