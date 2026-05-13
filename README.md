# noahswilson.com

Noah Wilson's personal portfolio website.

GitHub Pages publishes the static site in `public/` when changes land on `main`.

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

The current site is plain HTML, CSS, JavaScript, and static assets. If the project later moves to a frontend framework, update `.github/workflows/pages.yml` to upload the generated build output instead of `public/`.
