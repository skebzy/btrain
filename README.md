# Btrain

A quiet, personal brain-training and study app built with Next.js 16, React 19, TypeScript, and CSS. No AI service or API key is needed. All practice content is generated from checked rules or an authored collection.

## Run

```sh
npm install
npm run dev
```

Open http://localhost:3000. For another device on the same trusted Wi-Fi, open `http://YOUR_COMPUTER_LAN_IP:3000` while the server is running and your firewall allows it. `localhost` on your phone refers to the phone, not this computer. Browser data stays on each device separately; use Settings → Export / Import to move a backup. A hosted deployment can be built with `npm run build` and served with `npm start`, or deployed to a Next.js-compatible host. This task does not publish a hosted website.

## What is included

- **19 exercise types:** digit recall, reverse recall, visual patterns, word associations, name-object pairs, running totals, selective attention, arithmetic, percentages, estimates, probability, deduction, counterexamples, arguments, code tracing, complexity, cognitive biases, evidence evaluation, and manipulation literacy.
- **Daily sessions:** a balanced randomized plan, adjustable question counts, and a two-question entry point. Question counts are stopping points, not enforced timers.
- **Adaptive generated drills:** sustained performance without an in-app hint adjusts levels from 1–5. Authored reasoning scenarios retain a fixed level. Help, fresh examples, and pauses remain available.
- **Spaced study cards:** create/edit/delete your own cards, add a 12-card starter collection, save suitable exercise questions or lesson recall checks, and self-rate review. Again = 10 minutes; Good begins at 1 day; Easy begins at 4 days. Later intervals expand with the rating. This is a simple heuristic, not FSRS or a validated forgetting model.
- **28 field-guide lessons:** read a short technique, close the notes, recall the principle, compare your explanation, and save a card for tomorrow. Covers memory, independent thinking, attention, psychology, manipulation literacy, creativity, and critical thinking.
- **Thinking notebook:** 12 open-ended prompts with initial ideas, changed constraints, reflection, and saved revisions. No automated grading or creativity score.
- **Actual progress:** daily activity, per-exercise accuracy and levels, confidence-rated answer calibration, in-app hint use, and review counts. Practice time excludes hidden tabs, pause screens, and feedback reading. No IQ or “brain age” claims.
- **Phone layout:** bottom navigation, safe-area padding, responsive dialogs, readable text, large inputs, horizontally scrollable category filters, and compact single-column cards on narrow phones. Tested with a simulated phone viewport; physical keyboard and device testing remain advisable.
- **Local persistence:** `localStorage`, JSON backups with validation and replace confirmation, explicit reset confirmation. Corrupt storage is not silently overwritten. `?preview=1` uses a separate storage key for testing.
- **Focus timer:** a separate optional timer; closing it stops it. It does not inflate exercise practice time.

## Research

[docs/RESEARCH.md](docs/RESEARCH.md) contains a 28-source evidence synthesis, limitations, and feature implications. The in-app Science page has concise summaries and primary links. The Field Guide is an educational adaptation, not a validated intervention. Techniques such as a premortem, fair restatement, and estimation are reasoning frameworks here, not independently validated promises from the adjacent general critical-thinking research.

Retrieval, feedback, and spacing are core learning methods. Memory-game performance is task-specific; the app does not establish improved intelligence, cure attention problems, or diagnose AI dependence. Manipulation questions include legitimate counterexamples to discourage blanket distrust. Novel numerical combinations are reusable practice, not unlimited conceptual content.

## Checks

```sh
npm run typecheck
npm test
npm run build
```

Tests sample all 19 generators across five levels, independently verify arithmetic / code traces / recall / scanning, check answer normalization, adaptive boundaries, scheduler intervals, backup validation, calendar streaks, and mixed-session balance.

## Structure

- `app/page.tsx`: views, practice sessions, review, field guide, notebook, preferences.
- `app/globals.css`: desktop and phone layouts, theme, reduced-motion support.
- `lib/training.ts`: generation, grading, adaptation, card schedule, persistence schema.
- `lib/psychology.ts`: authored manipulation / argument scenarios, lessons, creative prompts.
- `lib/references.ts`: concise research summaries.
- `docs/RESEARCH.md`, `public/research.md`: full evidence rationale and browser-accessible copy.

No account, sync service, push notifications, or AI grading is included. External source links open the original publishers. Fonts have a system fallback when the font service is unavailable.
