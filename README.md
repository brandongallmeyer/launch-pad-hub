# Welcome to your Lovable project

## Project info

**URL**: https://lovable.dev/projects/7bf57f80-3107-47c0-915f-fdd2575bb82e

## How can I edit this code?

There are several ways of editing your application.

**Use Lovable**

Simply visit the [Lovable Project](https://lovable.dev/projects/7bf57f80-3107-47c0-915f-fdd2575bb82e) and start prompting.

Changes made via Lovable will be committed automatically to this repo.

**Use your preferred IDE**

If you want to work locally using your own IDE, you can clone this repo and push changes. Pushed changes will also be reflected in Lovable.

The only requirement is having Node.js & npm installed - [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating)

Follow these steps:

```sh
# Step 1: Clone the repository using the project's Git URL.
git clone <YOUR_GIT_URL>

# Step 2: Navigate to the project directory.
cd <YOUR_PROJECT_NAME>

# Step 3: Install the necessary dependencies.
npm i

# Step 4: Start the development server with auto-reloading and an instant preview.
npm run dev
```

**Edit a file directly in GitHub**

- Navigate to the desired file(s).
- Click the "Edit" button (pencil icon) at the top right of the file view.
- Make your changes and commit the changes.

**Use GitHub Codespaces**

- Navigate to the main page of your repository.
- Click on the "Code" button (green button) near the top right.
- Select the "Codespaces" tab.
- Click on "New codespace" to launch a new Codespace environment.
- Edit files directly within the Codespace and commit and push your changes once you're done.

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## How can I deploy this project?

Simply open [Lovable](https://lovable.dev/projects/7bf57f80-3107-47c0-915f-fdd2575bb82e) and click on Share -> Publish.

## Build & Deploy Targets (Vite + GitHub Pages)

Local development

```sh
npm run dev
```

Build for GitHub Pages under /launch-pad-hub

```sh
npm run build:gh
# postbuild copies dist -> docs
```

Build for a custom domain at root (/)

```sh
npm run build:root
# postbuild copies dist -> docs
```

Notes

- The build base path is controlled by `VITE_BASE` (set by the scripts above).
- `build:gh` sets `VITE_BASE=/launch-pad-hub/` for `brandongallmeyer.github.io/launch-pad-hub`.
- `build:root` sets `VITE_BASE=/` for custom domains like `brandongallmeyer.com`.
- The `docs/` folder is the GitHub Pages source and is refreshed automatically after each build via the `postbuild` script.

GitHub Pages setup

1) Repo Settings → Pages → Source: `main` branch, `/docs` folder.
2) For a custom domain, add a `CNAME` file inside `docs/` with your domain name, e.g. `brandongallmeyer.com`.
3) Point your domain DNS to GitHub Pages per GitHub’s docs (A/AAAA or CNAME record).

## Can I connect a custom domain to my Lovable project?

Yes, you can!

To connect a domain, navigate to Project > Settings > Domains and click Connect Domain.

Read more here: [Setting up a custom domain](https://docs.lovable.dev/features/custom-domain#custom-domain)
