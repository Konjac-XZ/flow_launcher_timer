# Repository Guidelines

## Project Structure & Module Organization
- Flow Launcher plugin written in TypeScript; entrypoint is `src/main.ts`, compiled to `dist/main.js` referenced by `plugin.json`.
- Validation logic for timer input lives under `src/validator/` (`index.ts`, `normalize.ts`, `rules`, `types.ts`); keep new parsing rules isolated here with matching tests.
- Tests sit in `test/` (`validator.test.ts`). Assets for the plugin UI are in `img/` and `help/`; the bundled Hourglass executable lives in `hourglass/`. `SettingsTemplate.yaml` defines Flow defaults.

## Build, Test, and Development Commands
- `npm install` – install dependencies.
- `npm run build` – type-checks and emits compiled JS into `dist/`. Run before packaging or publishing updates.
- `npm test` – executes the Vitest suite headlessly; add `--watch` locally when iterating.
- During Flow Launcher debugging, ensure `dist/main.js` is fresh and the `hourglass` directory stays adjacent so the runtime can locate `Hourglass.exe`.

## Coding Style & Naming Conventions
- TypeScript with strict checks (`strict`, `noImplicitAny`, `strictNullChecks`); prefer explicit types when clarity helps.
- ES modules with Node 16 resolution; use 4-space indentation, semicolons, and double quotes to match existing files.
- Functions and variables use `camelCase`; exported enums/types use `PascalCase`. Keep side effects in `main.ts` and leave `validator` modules pure.

## Testing Guidelines
- Extend `*.test.ts` files in `test/` for parsing rules or time-normalization tweaks; cover both valid and invalid inputs.
- When modifying behavior, capture representative Flow queries (e.g., `5:30 pizza`, `until 5`) and assert normalized time strings and notes.
- Keep tests fast and deterministic; do not invoke the real Hourglass binary.

## Commit & Pull Request Guidelines
- Follow the conventional-commit style (`feat:`, `fix:`, `chore:`) seen in history. Keep messages scoped to one change.
- In PRs, include: behavior summary, sample queries affected, test results (`npm test`), and docs touched (`README.md`, `help/help.html`, `plugin.json` version bumps).
- For user-facing changes, add screenshots or short notes on Flow results to speed verification.

## Security & Configuration Tips
- Do not commit extra executables beyond `hourglass/`; keep paths relative so Flow can launch without elevated permissions.
- Avoid introducing network calls; the plugin should interact only with local Hourglass and Flow APIs. Validate inputs through the `validator` layer before spawning processes.
