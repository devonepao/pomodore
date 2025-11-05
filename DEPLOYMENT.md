# Deployment Guide - Pomodoro PWA to GitHub Pages

## Prerequisites

- GitHub account
- Git installed on your machine
- The repository already created and cloned locally

## Step-by-Step Deployment

### 1. Verify Files Are in Place

Ensure all these files are in your `/pomodore` directory:

```
pomodore/
├── index.html          # Main app file
├── app.js             # Timer logic
├── manifest.json      # PWA manifest
├── sw.js              # Service worker
├── 404.html           # Fallback for GitHub Pages
├── .gitignore         # Git ignore file
├── .nojekyll          # Tells GitHub Pages to skip Jekyll
└── README.md          # Documentation
```

### 2. Initialize Git Repository (If Not Done)

```bash
cd /Users/harshit/Documents/ghHarshityadav95/pomodore

# Initialize git
git init

# Add remote (replace USERNAME with your GitHub username)
git remote add origin https://github.com/devonepao/pomodore.git

# Or if using SSH:
# git remote add origin git@github.com:devonepao/pomodore.git
```

### 3. Commit All Files

```bash
# Stage all files
git add .

# Commit with a meaningful message
git commit -m "Initial Pomodoro PWA commit - Apple Design System"

# Push to main branch
git push -u origin main
```

### 4. Configure GitHub Pages

1. Go to your GitHub repository: https://github.com/devonepao/pomodore
2. Click on **Settings** (gear icon)
3. Scroll down to **Pages** section (left sidebar)
4. Under "Build and deployment":
   - **Source**: Select "Deploy from a branch"
   - **Branch**: Select `main` branch
   - **Folder**: Select `/ (root)`
5. Click **Save**

GitHub will now build and deploy your site. This usually takes 1-2 minutes.

### 5. Access Your Deployed App

Once deployment is complete, your app will be available at:

```
https://devonepao.github.io/pomodore/
```

You'll see a checkmark in the GitHub Pages settings indicating successful deployment.

## Testing the Deployment

### 1. Test on Desktop
- Open https://devonepao.github.io/pomodore/ in Chrome, Firefox, Safari, or Edge
- Test timer functionality
- Test notifications (grant permission when prompted)
- Test offline functionality (open DevTools → Network → Offline)

### 2. Test on Mobile
- **iOS**: Open in Safari, tap Share → Add to Home Screen
- **Android**: Open in Chrome, tap menu → Install app
- Test all functionality on mobile portrait view

### 3. Verify PWA Installation
- Check if the app appears on home screen
- Verify it works offline
- Check notification permissions

### 4. Test Settings Persistence
- Change work duration to 1 minute
- Reload the page
- Verify the setting is still there

## Troubleshooting

### Page shows 404
- Ensure `.nojekyll` file exists in the repository root
- Wait 2-3 minutes for GitHub to rebuild
- Try clearing browser cache
- Check if branch and folder are correctly set in GitHub Pages settings

### Service Worker not working
- Open DevTools → Application → Service Workers
- Verify the service worker is registered
- Try unregistering and reloading the page

### Notifications not working
- Check if you granted notification permission
- Verify browser supports Notification API
- Check browser settings for notification permissions

### Styles not loading
- Clear browser cache (Cmd+Shift+Delete)
- Verify all CSS is inline in index.html
- Check if .css files are needed (they shouldn't be - all CSS is inline)

### Build takes too long
- GitHub Pages usually deploys within 1-2 minutes
- Check the "Deployments" tab in your GitHub repo for status
- Look at deployment logs for any errors

## Custom Domain (Optional)

If you want to use a custom domain:

1. Go to GitHub Settings → Pages
2. Under "Custom domain", enter your domain (e.g., pomodoro.yourdomain.com)
3. Update your domain's DNS settings to point to GitHub Pages
4. GitHub will automatically create a CNAME file

## Continuous Updates

To update the app after deployment:

```bash
# Make changes to files

# Stage changes
git add .

# Commit with description
git commit -m "Update: Add feature description"

# Push to GitHub
git push origin main
```

GitHub Pages will automatically redeploy within 1-2 minutes.

## Performance Tips

1. **Cache Busting**: If users don't see updates, they can:
   - Clear browser cache
   - Uninstall and reinstall the PWA
   - Update via browser notifications

2. **Service Worker Updates**: The service worker checks for updates on each visit

3. **Monitor Deployment**: Check repository "Deployments" tab to see build history

## Security

- All data stays on the user's device (localStorage only)
- No external API calls
- No analytics or tracking
- No personal data collection
- HTTPS enforced by GitHub Pages

## Support

For issues, check:
- GitHub Pages documentation: https://docs.github.com/en/pages
- PWA documentation: https://web.dev/progressive-web-apps/
- This repository's Issues tab

---

**Your Pomodoro PWA is now live! 🎉**
