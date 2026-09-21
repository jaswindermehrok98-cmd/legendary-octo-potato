# UNPLUG LABS® OFFLINE OS — Website

Standalone static website for the real Android launcher.

## Before publishing
1. Open `site-config.js`.
2. Replace `YOUR-OFFLINE-OS-DOMAIN.vercel.app` with the real production domain.
3. Replace `YOUR-ACCOUNT` with the real GitHub account/repository.
4. Set the real contact and security email values.
5. Update the release filename/download URL when the signed APK exists.
6. Replace legal placeholders with the final reviewed business/legal details.
7. Keep the APK out of normal Git history; publish it as a GitHub Release asset.

## Deploy
This is a static site. It can be committed to GitHub and connected to Vercel with no framework build step.

## Included discovery resources
- `robots.txt`
- `sitemap.xml`
- `llms.txt`
- `llms-full.txt`
- `ai-map.json`
- `site-map.json`
- `release.json`
- `humans.txt`
- `.well-known/security.txt`
- Human site map

## Clean product routes
The Vercel config exposes clean routes such as `/offline-os`, `/download`, `/docs`, `/roadmap`, `/privacy`, and `/site-map` while keeping the static files easy to inspect in GitHub.

## Architecture
Public product site → GitHub source → Vercel deployment → GitHub Release APK.
