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
- The portfolio is a single landing page at `/` built from section components in `src/components/portfolio/`; nav uses in-page anchors because the brief asked for one scrolling page.
- Contact details, project list and links live in `src/lib/site.ts` so content edits never touch layout code.
- The quote form has no backend: it validates with zod (`src/lib/quote.ts`) and opens WhatsApp with a prefilled message.
