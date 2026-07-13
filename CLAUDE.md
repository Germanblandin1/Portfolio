# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project status

This repository is currently empty of implementation code (no site has been scaffolded yet). It
has been set up with [GitHub Spec Kit](https://github.com/github/spec-kit) (spec-driven
development), a one-line statement of intent in `idea.md`, a ratified constitution, and one
planned feature: `specs/001-basic-portfolio-site/` (spec + plan complete, `tasks.md` not yet
generated).

**Stack is decided and constitutionally fixed: Hugo** (extended binary) — see Constitution below
and `specs/001-basic-portfolio-site/plan.md`/`research.md` for the concrete design (content
types, layout, deploy pipeline). Do not introduce Node/npm tooling, third-party Hugo themes, or a
different static site generator without first amending the constitution.

## Spec-driven development workflow

This project uses Spec Kit slash commands (available as Claude Code skills) to go from an idea to
working code. The intended sequence for any new feature/capability is:

1. `speckit-constitution` — establish/update project principles in `.specify/memory/constitution.md`
   (currently an unfilled template — fill this in before or during the first real feature work).
2. `speckit-specify` — turn a natural-language feature description into a spec under `specs/<NNN-feature>/spec.md`.
3. `speckit-clarify` — (optional but recommended before planning) ask targeted clarification questions and encode answers into the spec.
4. `speckit-plan` — generate the technical implementation plan for the feature.
5. `speckit-tasks` — generate a dependency-ordered `tasks.md` from the plan.
6. `speckit-analyze` — (optional) cross-check spec/plan/tasks for consistency before implementing.
7. `speckit-implement` — execute the tasks in `tasks.md`.
8. `speckit-converge` — (as needed) reconcile the codebase against spec/plan/tasks if implementation drifted or was done partially outside the flow.

Each feature gets its own numbered directory under `specs/` (sequential numbering, per
`.specify/init-options.json`). Templates for these artifacts live in `.specify/templates/`.

On Windows, Spec Kit's helper scripts are PowerShell (`.specify/scripts/powershell/*.ps1`) —
`create-new-feature.ps1`, `setup-plan.ps1`, `setup-tasks.ps1`, `check-prerequisites.ps1`,
`common.ps1`. The slash-command skills invoke these; you generally won't need to call them directly.

## Constitution

`.specify/memory/constitution.md` (v1.1.0, last amended 2026-07-10) governs this project. Its
core, non-negotiable rule is **Frictionless Publishing**: adding a new portfolio project or blog
post must require editing exactly one content file — no template/layout/nav edits, no manual index
updates. Other principles: static-first output for GitHub Pages (no backend/server to maintain),
simplicity over sophistication (YAGNI — the owner is a backend developer, not a frontend one),
strict content/code separation, and a low-dependency, long-shelf-life stack.

Since v1.1.0, the Technology Constraints section also locks in concrete, binding rules now that
the stack is decided: Hugo is the fixed static site generator (changing it is a MAJOR
constitutional amendment); zero Node/npm; no third-party themes/submodules (layouts are
hand-written and owned in-repo); every content collection (projects, skills, future blog, etc.)
MUST be a native Hugo content type under `content/` — one Markdown file per entry, never a data
blob array; plain hand-written CSS, vanilla JS only if strictly necessary; deploy via GitHub
Actions using the official `actions/deploy-pages` mechanism with the Hugo version pinned (not the
legacy Jekyll build, not a manual `gh-pages` branch).

Any technical decision MUST be checked against these before proceeding; deviations need explicit
justification in the relevant plan's Complexity Tracking section.

## Environment notes

- OS: Windows. Use the Bash tool (Git Bash/POSIX) or PowerShell tool as appropriate; Spec Kit's own
  scripts on this machine are the `.ps1` variants under `.specify/scripts/powershell/`.
- No package manager, build, lint, or test commands exist yet because there is no source tree.
  Once a stack is chosen (via the plan step above), this file should be updated with the actual
  commands.
