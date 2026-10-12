# Reittherapie Bachmaier

Static website built with [Astro](https://astro.build) for my mother's small business: https://reittherapie-bachmaier.de

## Development

Requires Node.js 22.12 or newer.

```sh
npm install
npm run dev      # dev server on http://localhost:4321
npm run build    # static output in dist/
npm run preview  # serve the built dist/ locally
```

`dist/` is a plain static site and can be hosted anywhere (Netlify, GitHub Pages, ...). It expects to be served from the domain root; for a sub-path such as `user.github.io/repo/`, set `base` in `astro.config.mjs`. `netlify.toml` and `public/_headers` only add Netlify build settings and cache headers.

## Project structure

| Path | Purpose |
| --- | --- |
| `src/content/` | Page content as Markdown (see below) |
| `src/content.config.ts` | Frontmatter schema per content folder |
| `src/assets/img/` | Images, optimized at build time |
| `src/pages/` | Routes; `[slug].astro` files generate one page per Markdown file |
| `src/layouts/`, `src/components/` | Page layout and building blocks (header, hero, carousel, ...) |
| `src/styles/`, `src/fonts/` | Bootstrap 4 based "Alotan" theme, animations, Font Awesome 4, Tahu font |
| `public/` | Files copied as-is (favicons, web manifest, `_headers`) |

`/leistungen/` and `/pferde/` have no overview page and redirect to the home page (configured in `astro.config.mjs`).

## Editing content

All content is Markdown in `src/content/`, images live in `src/assets/img/`. Commit changes via git; the build fails if a referenced image is missing or a required field is absent (see `src/content.config.ts`).

| Folder | URL | Fields (optional in *italics*) |
| --- | --- | --- |
| `seiten/` | `/`, `/interessantes/`, `/ueber-mich/`, `/impressum/`, `/datenschutz/` | fixed pages, one file each; `siteTitle` plus the fields already present in each file |
| `leistungen/` | `/leistungen/<file name>/` | `siteTitle`, `navigationOrder`, `name`, `previewImage`, `headerImage`, `image`, `headline`, *`subheadline`*, `textNextToImage`, body |
| `pferde/` | `/pferde/<file name>/` | `siteTitle`, `navigationOrder`, `name`, `description`, `headerImage`, `image`, `headline`, *`subheadline`*, body |
| `interessantes/` | `/interessantes/<file name>/` | `siteTitle`, `headerImage`, `image`, `headline`, *`subheadline`*, body |

- To add a horse, therapy or news item, copy an existing file in the same folder and adjust it. The file name becomes the URL.
- To remove one, delete its file; navigation, carousel and overview sections update automatically.
- `navigationOrder` sorts menu entries, the therapy boxes and the horse carousel (smallest first).
- News items on `/interessantes/` are listed alphabetically by file name.
- The body and `textNextToImage` support Markdown; `impressum.md` and `datenschutz.md` contain plain HTML.
- Images are referenced relative to the Markdown file, e.g. `image: ../../assets/img/pferd-duna.jpg`. Use file names without spaces or umlauts. Images are resized and converted to WebP during the build.
