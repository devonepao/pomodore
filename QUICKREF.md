# Quick Reference - Pomodoro PWA

## Keyboard Shortcuts & Controls

| Action | Method |
|--------|--------|
| **Start/Pause** | Click ▶/⏸ button or spacebar |
| **Reset** | Click Reset button |
| **Settings** | Click ⚙️ gear icon |
| **Change Work Duration** | Open Settings, adjust work duration input |
| **Change Break Duration** | Open Settings, adjust break duration input |

## Features at a Glance

### 🍅 Core Features
- **Timer**: 25-min work, 5-min break (customizable)
- **Play/Pause**: Full control over timer
- **Reset**: Instantly restart current session
- **Settings**: Adjust durations (1-60 min for work, 1-30 min for break)

### 🔔 Notifications
- Desktop notification when timer completes
- Pleasant chime sound (Web Audio API)
- Footer countdown display
- Session status indicator

### 💾 Offline Support
- Works completely offline
- Cached for instant loading
- Settings persist across sessions
- No internet connection required

### 🎨 Design Features
- Apple Human Interface Guidelines
- Glassmorphism UI with backdrop blur
- Responsive for desktop and mobile
- Dark mode support
- Smooth animations and transitions

## Installation Instructions

### iOS
1. Open in Safari
2. Tap Share ↗️
3. Select "Add to Home Screen"
4. Name your app (default: "Pomodoro")
5. Tap "Add"

### Android
1. Open in Chrome
2. Tap ⋮ (menu)
3. Select "Install app" or "Add to Home screen"
4. Confirm installation

### Web
- Open at: `https://devonepao.github.io/pomodore/`
- Add bookmark to access quickly

## Tips & Tricks

### 💡 Productivity Tips
1. **First Session**: Start with 25 minutes for full focus
2. **Notifications**: Enable notifications for alerts
3. **Phone-Free**: Put phone away during work sessions
4. **Break Activities**: Use breaks to stretch, walk, or hydrate
5. **Custom Duration**: Adjust timer for your focus style

### 🔧 Technical Tips
1. **Offline Mode**: Turn off WiFi/data to test offline functionality
2. **Clear Cache**: Force reload with Cmd+Shift+R (Mac) or Ctrl+Shift+R (PC)
3. **Reinstall PWA**: Delete app and reinstall for fresh start
4. **Dark Mode**: Automatically respects system dark mode

### 🎵 Sound Issues
- If no sound: Check browser notification settings
- Enable notifications in app or browser
- Some devices mute notifications in Do Not Disturb mode
- Try different browser if sound doesn't work

## System Requirements

### Minimum
- Browser: Chrome 90+, Firefox 88+, Safari 14+, Edge 90+
- Mobile: iOS 14+ or Android 8+
- Storage: ~5MB (including app and cache)
- No internet required (after first load)

### Recommended
- Desktop: Latest browser version
- Mobile: Latest OS version
- Screen: Minimum 320px width (supports all phones)
- Internet: For initial download and automatic updates

## Troubleshooting

### Timer not working
- Refresh page (Cmd+R or Ctrl+R)
- Check browser console (F12 → Console) for errors
- Try different browser
- Clear browser cache

### No notifications
- Ensure notifications are enabled
- Browser → Settings → Notifications → Allow
- Some devices require notification permission grant
- Check system Do Not Disturb settings

### App won't install (PWA)
- Ensure app is on HTTPS (always is on GitHub Pages)
- Refresh page first
- Try in different browser or mobile browser
- Check internet connection

### Settings not saving
- Ensure browser localStorage is enabled
- Check if in Private/Incognito mode (localStorage disabled)
- Try regular browsing mode
- Clear browser cookies and try again

### Offline not working
- Ensure service worker is registered (DevTools → Application)
- Try accessing page after closing browser
- Some privacy browsers may disable service workers
- Try different browser

## Accessing Developer Tools

### To Enable Debugging
- **Desktop**: Press F12 or Cmd+Option+J (Mac)
- **Mobile iOS**: Use Safari's inspect element (requires Mac)
- **Mobile Android**: Chrome → ⋮ → More tools → Remote devices

### Key Console Commands
```javascript
// Check service worker status
navigator.serviceWorker.ready.then(r => console.log('Ready:', r))

// View stored settings
console.log(localStorage)

// Manually trigger sound
app.playSound()

// Check cache
caches.keys().then(k => console.log('Caches:', k))
```

## Privacy & Permissions

### Permissions Requested
- **Notifications**: For timer completion alerts
- **Nothing else!** ✓

### Data Collection
- ❌ No analytics
- ❌ No tracking
- ❌ No ads
- ✓ Only local storage
- ✓ Only on your device

### What Gets Saved
- Work duration preference (localStorage)
- Break duration preference (localStorage)
- That's it!

## Keyboard Navigation

- **Tab**: Move between buttons
- **Enter/Space**: Activate button
- **Arrow Keys**: Adjust settings (when in input field)

## File Size & Performance

| Component | Size |
|-----------|------|
| HTML | ~10KB |
| JavaScript | ~12KB |
| CSS | ~8KB |
| Total | ~30KB |
| **Cached** | ~50KB |
| **Load Time** | <1 second |

## Browser Support Status

| Browser | Support | Notes |
|---------|---------|-------|
| Chrome/Edge | ✅ Full | Best experience |
| Firefox | ✅ Full | Full PWA support |
| Safari | ✅ Full | iOS 14+ required |
| Opera | ✅ Full | Chromium-based |
| Mobile Safari | ✅ Full | iOS 14+ required |
| Chrome Mobile | ✅ Full | Best on Android |

## Contact & Support

- **Issues/Bugs**: Report on GitHub
- **Suggestions**: Open GitHub discussion
- **Questions**: Check DEVELOPMENT.md

## Credits

### Design
- Apple Human Interface Guidelines
- Glassmorphism principles

### Technology
- Web Audio API
- Service Workers
- Progressive Web App Standards

### Team
- Created at **Solvepao Research**

---

**v1.0 - Built with ❤️ for productivity**

**Start your first Pomodoro session now! 🍅⏱️**
