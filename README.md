# ServiceNow Workspace Booking (SDK + GitHub Copilot)

ServiceNow scoped application built with the **ServiceNow SDK** (Fluent /
TypeScript) and developed with **GitHub Copilot**. See [docs/PRD.md](docs/PRD.md)
for the product spec and [.github/copilot-instructions.md](.github/copilot-instructions.md)
for the agent context.

## Toolchain
- Node.js (LTS, v20+) — installed locally to `%USERPROFILE%\nodejs` and on the user PATH.
- ServiceNow SDK — `@servicenow/sdk`, invoked as `now-sdk`.
- git — for version control / GitHub.

## Common commands
```powershell
now-sdk build      # compile Fluent sources
now-sdk deploy     # deploy to the authenticated PDI
now-sdk auth       # manage instance credentials
npm install        # install project dependencies
```

## What's already done
- Node.js v24 LTS installed to `%USERPROFILE%\nodejs` and added to your user PATH.
- ServiceNow SDK (`now-sdk` 4.7.1) installed globally.
- Project context: `.github/copilot-instructions.md`, `docs/PRD.md`, this README.
- Local git ignore rules (`.gitignore`).

> If `now-sdk` isn't found in a new terminal, open a **fresh** terminal (so it
> picks up the updated PATH) or run:
> `$env:Path = "$env:USERPROFILE\nodejs;$env:Path"`

## First-time setup (requires your input — run these yourself)

### 1. Authenticate the SDK to your PDI
Credentials are managed by the SDK and stored locally (never committed):
```powershell
now-sdk auth --add
```
You'll be prompted for your instance URL, username, and password.

### 2. Scaffold the SDK project
Run in this folder and follow the prompts (template: `now-sdk boilerplate`,
app name e.g. "Office Equipment & Workspace Booker", package name
`servicenow-workspace-booking`, **Scoped**, scope e.g. `x_custom_workspace_booking`):
```powershell
now-sdk init
npm install
now-sdk build
now-sdk deploy
```

### 3. Connect this repo to GitHub
```powershell
git remote add origin https://github.com/<you>/servicenow-workspace-booking.git
git branch -M main
git push -u origin main
```
Create the empty GitHub repo first (no README/.gitignore/license).

> Note: a GitHub Personal Access Token + ServiceNow credential record is only
> needed for **Studio** Source Control. With the SDK + git workflow used here,
> you authenticate to GitHub with your normal git credentials and to the PDI
> with `now-sdk auth`.
