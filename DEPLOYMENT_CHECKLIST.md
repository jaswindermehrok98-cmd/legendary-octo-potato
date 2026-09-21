# UNPLUG LABS® OFFLINE OS — Part 2 Deployment Checklist

## Before GitHub
- Replace `YOUR-OFFLINE-OS-DOMAIN.vercel.app` everywhere with the final production hostname.
- Replace `YOUR-ACCOUNT` with the real GitHub account/organization.
- Set the final security/contact emails.
- Replace legal placeholders only after legal review.
- Set the actual signed APK filename and release URL.
- Confirm `release.json` matches the GitHub release.

## GitHub
- Create the source repository for the website.
- Keep the APK out of normal Git history.
- Create a GitHub Release for each signed APK.
- Attach the signed APK to the release.
- Keep release notes aligned with `/releases` and `/changelog`.

## Vercel
- Import the GitHub repository.
- Deploy the static site.
- Confirm `vercel.json` clean-route rewrites work.
- Confirm the production hostname is the same hostname referenced by canonical URLs, `robots.txt`, `sitemap.xml`, `llms.txt`, and JSON resources.

## Search / AI discovery
- Verify `/robots.txt`.
- Verify `/sitemap.xml`.
- Verify `/llms.txt` and `/llms-full.txt`.
- Verify `/ai-map.json`, `/site-map.json`, and `/release.json`.
- Validate JSON-LD against visible page content.
- Add the production property to Google Search Console.
- Submit `/sitemap.xml`.
- Inspect the key product/download URLs.

## APK trust
- Keep the Android signing key private and outside GitHub.
- Publish checksum/signing information on the security page when the signed release exists.
- Ensure the download link points to the intended GitHub Release asset.
