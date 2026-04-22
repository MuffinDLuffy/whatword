# Netlify & GitHub Actions: Secrets and setup

This project uses GitHub Actions to build and deploy to Netlify. Before the workflow can deploy, add the following repository secrets under **Settings → Secrets and variables → Actions**.

- `NETLIFY_AUTH_TOKEN` (required)
  - Create a personal access token at: https://app.netlify.com/user/applications#personal-access-tokens
  - Give it a descriptive name (e.g. `github-actions-deploy`) and copy the token value.

- `NETLIFY_SITE_ID` (required)
  - In Netlify, open your site → Site settings → Site information → Site details → copy the `Site ID` (also called API ID).
  - Alternatively run `netlify sites:list` with the Netlify CLI and find the ID.

- `SITE_URL` (optional)
  - Set this to your production URL (e.g. `https://yourdomain.com`) so `generate-sitemap.js` writes correct links.

How to add a secret in GitHub:

1. Go to your repository on GitHub.
2. Click `Settings` → `Secrets and variables` → `Actions` → `New repository secret`.
3. Enter the **Name** (e.g. `NETLIFY_AUTH_TOKEN`) and **Value** (the token or ID), then click **Add secret**.

Notes
- `GITHUB_TOKEN` is provided automatically by GitHub Actions — you do not need to add it.
- The workflow file is at `.github/workflows/netlify-deploy.yml` and will:
  - Deploy preview builds for pull requests (non-prod) and post the preview URL as a PR comment.
  - Deploy production builds on pushes to `main`/`master`.

If you want, I can add step-by-step screenshots or a small script to validate the secrets from the CLI.
