Welcome to Minseok's Personal Website.

## GitHub Pages deployment

If you see **"There isn't a GitHub Pages site here"** or 404s:

1. **Enable GitHub Pages**  
   Repo → **Settings** → **Pages** → **Build and deployment**  
   - Source: **GitHub Actions** (not "Deploy from a branch").

2. **Use the correct URL**  
   After the first deploy, the site is at:  
   `https://<your-username>.github.io/<repo-name>/`  
   (e.g. `https://johndoe.github.io/My-Website/`).  
   The root `https://<username>.github.io/` only works for a *user* site, not a *project* site.

3. **Trigger a deploy**  
   Push to `main` or run the **Deploy to GitHub Pages** workflow from the **Actions** tab.
