# joanbarros.me

Personal site of Joan Barros, built with [Astro](https://astro.build) and
deployed to GitHub Pages at <https://joanbarros.me>.

## Editing content

- `src/data/profile.ts` holds the name, headline, intro, strengths,
  technologies, languages and links.
- `src/data/timeline.yaml` holds jobs and education. The home page timeline
  and the `/resume/` page both read from it. Dates are `YYYY-MM` or `YYYY`.
  Leave out `end` for a current role.
- Logos live in `src/assets/timeline/`. Reference them from the YAML with a
  relative path such as `../assets/timeline/kore.png`.

## Development

```sh
npm install
npm run dev      # local dev server at http://localhost:4321
npm run build    # type-check and build to dist/
npm run preview  # serve the built site
```

## Deployment

Every push to `master` runs `.github/workflows/deploy.yml`, which builds the
site and publishes it to GitHub Pages. The repository's Pages source must be
set to **GitHub Actions** (Settings → Pages → Build and deployment).
The custom domain comes from `public/CNAME`.
