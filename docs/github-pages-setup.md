# GitHub Pages Setup

This project is ready to publish a static site through GitHub Pages, but GitHub and DNS still need a few account-level settings.

The `public/CNAME` file records the intended domain in the repo. For this GitHub Actions publishing setup, the repository's Pages custom domain setting is still the source of truth.

## GitHub repository

1. Create a repository on GitHub.
2. Push this folder to the repository's `main` branch.
3. Go to Settings > Pages.
4. Under Build and deployment, choose GitHub Actions as the source.
5. Set the custom domain to `noahswilson.com`.
6. Wait for the first deployment workflow to finish.
7. Enable Enforce HTTPS once GitHub allows it.

## DNS records

For the apex domain, add these `A` records:

| Type | Name | Value |
| --- | --- | --- |
| A | @ | 185.199.108.153 |
| A | @ | 185.199.109.153 |
| A | @ | 185.199.110.153 |
| A | @ | 185.199.111.153 |

Optional IPv6 records:

| Type | Name | Value |
| --- | --- | --- |
| AAAA | @ | 2606:50c0:8000::153 |
| AAAA | @ | 2606:50c0:8001::153 |
| AAAA | @ | 2606:50c0:8002::153 |
| AAAA | @ | 2606:50c0:8003::153 |

For `www.noahswilson.com`, add a `CNAME` record that points to your GitHub Pages default domain:

| Type | Name | Value |
| --- | --- | --- |
| CNAME | www | YOUR-GITHUB-USERNAME.github.io |

Replace `YOUR-GITHUB-USERNAME` with the GitHub account or organization that owns the repository.

DNS changes can take up to 24 hours to propagate.
