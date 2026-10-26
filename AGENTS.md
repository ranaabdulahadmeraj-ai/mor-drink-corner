<!-- LOVABLE:BEGIN -->
> [!IMPORTANT]
> This project is connected to [Lovable](https://lovable.dev). Avoid rewriting
> published git history — force pushing, or rebasing/amending/squashing commits
> that are already pushed — as it rewrites history on Lovable's side and the
> user will likely lose their project history.
>
> Commits you push to the connected branch sync back to Lovable and show up in
> the editor, so keep the branch in a working state.
<!-- LOVABLE:END -->

## Project rules

- The site is a single-page restaurant site (MOR Drink Corner): all sections
  live in `src/routes/index.tsx` and navigate via in-page anchors; do not
  split them into separate routes unless asked.
- `src/data/site.ts` is the single source of truth for business details
  (phone, address, rating, hours) and `src/data/menu.ts` for menu items.
  Update data there, never hardcode it in components.
- Menu items with `price: null` must always display "Price on request" and
  never produce a calculated total — the restaurant confirms totals on
  WhatsApp. (Covered by `src/test/whatsapp.test.ts`.)
- Brand palette (charcoal #151515, lime #B7E432, cream #FFF9EF, orange
  #FF8B36, gray #777777) lives as oklch tokens in `src/styles.css`; use
  semantic token classes (bg-charcoal, text-lime, …), never hardcoded colors.
- Product photos live in `public/images/menu/`; sample photos are AI
  placeholders the owner will replace with real photos of the same names.
