---
name: servicenow-fluent
description: "SDK project setup and project-specific conventions for the snow-workspace-booking scoped app. Use when: initializing or configuring a now-sdk project; authoring .now.ts Fluent files; running now-sdk build/deploy; or applying workspace guardrails (scope prefix, PRD data model, approval flow). For platform API reference (GlideRecord, GlideAjax, g_form, templates, SDK doc URLs), use the global servicenow-fluent skill at ~/.copilot/skills/servicenow-fluent/."
---

# ServiceNow Fluent — Workspace Overlay

Project-specific conventions for `snow-workspace-booking`. For platform API
docs and code patterns (GlideRecord, GlideAjax, g_form, templates, SDK docs),
use the **global** `servicenow-fluent` skill at
`~/.copilot/skills/servicenow-fluent/SKILL.md`.

> After `now-sdk init`, the SDK writes its own versioned skills into
> `.claude/skills/` — those supersede this file for Fluent API details.

---

## SDK Project Setup

1. **Initialize once:** `npx now-sdk init`
   - Template: `now-sdk boilerplate`
   - App name: `Office Equipment & Workspace Booker`
   - NPM package name: `workspace-booking`
   - Scoped: **Yes** — scope `x_custom_workspace_booking`
2. **Authentication:** `npx now-sdk auth` — configures endpoint mapping to target instance
3. **Install dependencies:** `npm install`
4. **Download metadata:** `npx now-sdk download .` — pulls instance dictionaries to workspace
5. **Generate types:** `npx now-sdk dependencies` — creates `@servicenow/sdk/core/tables` type configs
6. **Build:** `npx now-sdk build` — transpiles TypeScript + generates XML payloads
7. **Deploy:** `npx now-sdk install` — pushes packaged build to active instance scope

---

## Standard Project Architecture

Every SDK workspace must adhere to this monorepo structural layout. Do not deviate
from these folder conventions:

```
├── .nowrc                             # Encrypted local instance auth profiles
├── now.config.json                    # App metadata (scope name, app identity)
├── package.json                       # Dependencies (@servicenow/sdk, @servicenow/glide, typescript)
├── tsconfig.json                      # TypeScript compiler targeting ServiceNow runtimes
└── src/
    ├── server/                        # Server-side business logic (runtime execution)
    │   ├── businessRules/             # Table-level database transaction hooks
    │   ├── clientScripts/             # Native UI execution scripts
    │   └── scriptIncludes/            # Reusable OO APIs & UI Actions
    └── fluent/                        # Schema and declarative infrastructure (Fluent DSL)
        ├── tables/                    # Table definitions, dictionary overrides, columns
        ├── security/                  # Access Control Lists (ACLs) and Roles
        ├── flows/                     # Workflow Automation (WFA) Engine definitions
        └── generated/
            └── keys.ts                ← SDK-managed sys_id registry, NEVER edit
```

**File naming:** kebab-case ending in `.now.ts` (e.g. `booking-approval.now.ts`)

**Scope isolation:** Every table and metadata asset must match the scope prefix
declared in `now.config.json` (this project: `x_custom_workspace_booking`).

---

## CLI Command Reference

| Command | Purpose |
|---------|---------|
| `npx now-sdk auth` | Configure instance authentication profiles |
| `npx now-sdk auth --use <alias>` | Switch between authenticated instances |
| `npx now-sdk download .` | Pull instance metadata/dictionaries to workspace |
| `npx now-sdk dependencies` | Generate `@servicenow/sdk/core/tables` type definitions |
| `npx now-sdk build` | Transpile TypeScript + validate + generate XML |
| `npx now-sdk install` | Deploy package to active instance scope |
| `npx now-sdk transform` | Convert legacy XML to Fluent TypeScript |

---

## Common Build Errors & Resolutions

### TS211 / TS243: Type Resolution Failures
**Error:** `failed to resolve expression` or `Unknown instance type`

**Cause:** Fields assigned to untyped wrappers or `unknown`/`any` interfaces.

**Fix:**
1. Run `npx now-sdk dependencies` to regenerate type definitions
2. Do NOT use `declare`, `interface`, `unknown`, or type casts (`as`) in `.now.ts`
   Fluent files — the SDK compiler rejects them (TS138, TS264, TS159)
3. Use dot notation directly: `params.trigger.current.bookable_item`

### TS4111: Index Signature Property Access
**Error:** `Property 'field' comes from an index signature, so it must be accessed with ['field']`

**Cause:** Custom table fields on `params.trigger.current` have index signatures
because the SDK hasn't generated explicit types for in-project tables.

**Workaround:** Add `// @ts-ignore` on the line above the `wfa.dataPill()` call.
Bracket notation (`['field']`) is NOT an option — it triggers TS212 from the SDK's
FlowInstancePlugin. This is a known SDK limitation for custom tables.

```typescript
// @ts-ignore TS4111 - custom table field from index signature
conditions: `sys_id=${wfa.dataPill(params.trigger.current.bookable_item, 'string')}`
```

### TS6133: Unused Imports
**Error:** `'x' is declared but its value is never read`

**Cause:** SDK enforces `noUnusedLocals` regardless of tsconfig.

**Fix:** Remove the import. Do NOT import table definitions just for type resolution
in flows — it doesn't help and triggers this error.

### Scope Mismatch
**Error:** `No valid scope found`

**Cause:** `scope` property in `now.config.json` doesn't match instance `sys_app` record.

**Fix:**
1. Query `sys_app.list` on the instance to find the correct scope name
2. Update `now.config.json` with exact scope string
3. Re-run `npx now-sdk download .`

### Syntax/Type Errors
- Missing field references (rule references field not on table)
- Type mismatches (field declared one type, used as another)
- Missing imports from `@servicenow/sdk/core` or `@servicenow/glide`

---

## Flow Authoring Lessons (WFA)

### Globals available without import
`TemplateValue`, `Time`, `Duration`, and `Now.ID[...]` are runtime globals from
`@servicenow/sdk/global`. Do NOT import `TemplateValue` from `@servicenow/sdk/automation`.

### Flow logic methods
- `wfa.flowLogic.if()` — standard conditional
- `wfa.flowLogic.elseIf()` — chained conditional (follows an `if`)
- `wfa.flowLogic.else()` — default branch (follows an `if` or `elseIf`)
- **`ifElse` does NOT exist** — use separate `if` blocks or `if` + `else`

### Data pill rules
- First argument MUST be a property access expression (dot notation)
- Action results captured as `const` IS allowed and is the standard chaining pattern
- `approval_state` is lowercase (not `Approval_State`)
- For the whole trigger record: `wfa.dataPill(params.trigger.current, 'reference')`
- Template literals only work in `conditions`, `ah_subject`, `log_message` —
  NOT inside `TemplateValue({...})` or `ah_body`

### Forbidden TypeScript in Fluent files
These are all rejected by the SDK compiler:
- `declare` statements (TS138/TS262)
- `interface` declarations (TS264)
- `unknown` keyword (TS159)
- Type assertions / `as` casts (TS243)
- Helper functions / factories (DSL-only paradigm)

---

## Role & ACL Patterns

- Define roles once in a single file and `export` them
- Import roles where needed — do NOT redeclare with duplicate `$id` values
- ACL scripts run in a context where `current` and `gs` are available globals

---

## Project Guardrails

- Read `docs/PRD.md` before creating any table, rule, or flow.
- Enforce no-double-booking and approval routing exactly as the PRD describes.
- Always derive the scope prefix from `now.config.json` → `"scope"` field. Never
  hardcode or guess it — the prefix is assigned by the instance and may contain
  a numeric publisher prefix (e.g. `x_2057715_equipmen`). Use
  `cat now.config.json | grep scope` to confirm before creating tables or records.
- Keep changes minimal and scoped; never commit credentials or secrets.
