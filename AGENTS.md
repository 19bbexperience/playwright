# AGENTS

This repository is a Playwright test project. The goal is to help AI agents quickly understand the test workflow, configuration, and repository structure so they can make useful code changes without adding unrelated application code.

## Key facts

- Playwright tests live in `tests/`.
- Configuration is in `playwright.config.ts`.
- Tests are executed with `npx playwright test`.
- Browsers are installed using `npx playwright install --with-deps`.
- The project uses `@playwright/test` v1.61.0.
- Output directories include `playwright-report/` and `test-results/`.

## What agents should know

- Do not assume there is a separate frontend or backend application in this repo; the repository is focused on browser automation tests.
- Keep changes aligned with Playwright patterns: use `test`, `expect`, and `page` from `@playwright/test`.
- Preserve existing Playwright config options, especially CI-related guards:
  - `forbidOnly` enabled when `process.env.CI`
  - `retries` set to `2` on CI, `0` locally
  - `workers` forced to `1` on CI
- Tests should be placed under `tests/` and use Playwright’s test fixtures.

## How to run

- Install dependencies: `npm ci`
- Install browsers: `npx playwright install --with-deps`
- Run tests: `npx playwright test`

## CI context

The repository uses GitHub Actions in `.github/workflows/playwright.yml` to:

- install Node.js
- install dependencies with `npm ci`
- install Playwright browsers
- execute `npx playwright test`
- upload `playwright-report/` as an artifact

## Notes for agents

- If a change requires new test coverage, add tests in `tests/` rather than creating unrelated files outside of the existing test structure.
- Do not modify generated output directories unless the purpose is to update expected test artifacts or cleanup logic.
- Keep the repository structure minimal and aligned with Playwright test conventions.
