# noahswilson.com

Hosting scaffold for Noah Wilson's personal portfolio website.

The frontend is intentionally not implemented yet. GitHub Pages will publish the contents of `public/` when changes land on `main`.

## Hosting

- Platform: GitHub Pages
- Domain: `noahswilson.com`
- Publish source: GitHub Actions
- Published directory: `public/`
- Domain source of truth: repository Settings > Pages > Custom domain

## Next setup steps

1. Create a GitHub repository and push this project to its `main` branch.
2. In the repository settings, open Pages and set the source to GitHub Actions.
3. Set the custom domain to `noahswilson.com`.
4. Configure DNS records with your domain provider using the values in `docs/github-pages-setup.md`.
5. After DNS settles, enable Enforce HTTPS in the repository's Pages settings.

When the portfolio frontend is ready, add the site files to `public/` or update `.github/workflows/pages.yml` to upload the frontend build output instead.
