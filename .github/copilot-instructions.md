# GitHub Copilot — Project Instructions

This is a **ServiceNow scoped application** built with the **ServiceNow SDK**
(Fluent / TypeScript), not Studio. Copilot is the coding agent for this repo.

## What this app is
Office Equipment & Workspace Booker — see [docs/PRD.md](../docs/PRD.md) for the
full spec (tables, roles, business rules, approval flow).

## Tech & conventions
- Source lives in `src/fluent/` as `.now.ts` Fluent files. Do **not** hand-write
  GlideRecord migrations here — declare platform metadata in Fluent and let the
  SDK compile it.
- Group files by artifact type: `tables/`, `business-rules/`, `script-includes/`,
  `client-scripts/`, `acls/`. Name files in kebab-case ending in `.now.ts`.
- Never edit `src/fluent/generated/keys.ts` — the SDK regenerates it on build.
- `now.config.json` holds scope/name config. Instance credentials are managed by
  `now-sdk auth`, never committed.

## Commands
- Build: `now-sdk build`
- Deploy to the authenticated PDI: `now-sdk deploy`
- Manage instance auth: `now-sdk auth`
- Install deps: `npm install`

## Guardrails
- Keep changes minimal and scoped to the request.
- Enforce no-double-booking and approval routing exactly as described in the PRD.
- Do not commit secrets, tokens, or credentials.
