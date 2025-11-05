# Pomodoro - Apple Design System PWA

A beautiful, minimal Pomodoro timer built as a Progressive Web App with Apple Design System principles. Focus, work, and achieve your goals! 🍅

## Features

✨ **Apple Design System Principles**
- San Francisco font stack with -apple-system
- Minimalist, clean interface
- Glassmorphism with backdrop blur effects
- White space and generous padding
- Safe area support for notches and home indicators

⏱️ **Smart Timer**
- 25-minute work sessions, 5-minute breaks (customizable)
- Play/Pause functionality
- Reset button for quick restart
- Real-time countdown display

🔔 **Notifications & Sound**
- Desktop notifications when timer completes
- Pleasant chime notification sound (Web Audio API)
- Customizable session durations
- Smart animations (shake & pulse effects)

📱 **Progressive Web App**
- Install on home screen (iOS & Android)
- Works offline
- Service Worker for caching
- Responsive design for desktop and mobile portrait
- Haptic feedback and smooth animations

📊 **Customizable Settings**
- Adjust work duration (1-60 minutes)
- Adjust break duration (1-30 minutes)
- Settings persist across sessions

## Quick Start

### Local Development

1. Clone this repository:
```bash
git clone https://github.com/devonepao/pomodore.git
cd pomodore
```

2. Serve locally (Python 3):
```bash
python3 -m http.server 8000
```

3. Or using Node.js/npm (http-server):
```bash
npx http-server
```

4. Open in browser: `http://localhost:8000`

### Deployment to GitHub Pages

1. Push to your GitHub repository:
```bash
git add .
git commit -m "Initial Pomodoro PWA commit"
git push origin main
```

2. In GitHub Settings:
   - Navigate to Settings → Pages
   - Select "Deploy from a branch"
   - Select `main` branch and `/ (root)` folder
   - Click Save

3. Your app will be available at: `https://yourusername.github.io/pomodore/`

### Installing as PWA

**iOS:**
1. Open in Safari
2. Tap Share button
3. Select "Add to Home Screen"
4. Name your app and tap Add

**Android:**
1. Open in Chrome
2. Tap the menu button (⋮)
3. Select "Install app" or "Add to Home screen"
4. Tap Install

## Usage

1. **Start Timer**: Click the ▶ Start button to begin a work session
2. **Pause**: Click ⏸ Pause to temporarily stop the timer
3. **Reset**: Click Reset to restart the current session
4. **Settings**: Click ⚙️ to adjust work and break durations
5. **Get Notifications**: When timer completes, you'll receive a notification and hear a pleasant chime

## Browser Support

- Chrome/Edge 90+
- Firefox 88+
- Safari 14+
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android 8+)

## Technical Stack

- **HTML5**: Semantic structure with safe area support
- **CSS3**: Modern features (backdrop-filter, grid, gradients)
- **Vanilla JavaScript**: No dependencies
- **Web Audio API**: For notification sounds
- **Service Workers**: For offline functionality
- **Web App Manifest**: PWA installation support

## Privacy & Storage

- All data stored locally in browser (localStorage)
- No server communication
- No analytics or tracking
- No personal data collection

## Customization

### Change Primary Color

Edit `index.html` and replace `#FF3B30` (Tomato Red) with your preferred color:
```css
.btn-primary {
    background: linear-gradient(135deg, YOUR_COLOR 0%, LIGHTER_COLOR 100%);
}
.timer-display {
    color: YOUR_COLOR;
}
```

### Adjust Default Durations

In `app.js`:
```javascript
this.workDuration = parseInt(localStorage.getItem('workDuration') || '25'); // Change 25
this.breakDuration = parseInt(localStorage.getItem('breakDuration') || '5'); // Change 5
```

### Enable Auto-start Next Session

In `app.js`, uncomment this line in the `switchSession()` method:
```javascript
this.toggle(); // Auto-start next session
```

## Accessibility Features

- Semantic HTML structure
- High contrast text (WCAG AA compliant)
- Touch-friendly button sizes (min 44x44px)
- Keyboard support for all controls
- System font stack for readability
- Color-independent messaging

## Performance Optimizations

- Minimal CSS with critical path inlining
- No external dependencies or CDNs
- Efficient animations using CSS transforms
- Service worker caching strategy
- Gzip compression ready
- ~50KB total size (uncompressed)

## Animation & Effects

- Smooth fade-in and slide-up entrance animations
- Shake animation when timer completes
- Pulse animation for completion feedback
- Glassmorphism effects with backdrop blur
- Smooth button hover and click transitions
- Scale and shadow effects for depth

## Tips for Best Experience

1. **Enable Notifications**: Grant permission for desktop notifications
2. **Add to Home Screen**: Install as PWA for best experience
3. **Keep Screen On**: Use device settings to prevent auto-sleep during breaks
4. **Dark Mode**: Works seamlessly with system dark mode preference
5. **Safe Area**: Works perfectly with notched devices and home indicators

## License

MIT License - Feel free to use, modify, and distribute

## About

Created with ❤️ at **Solvepao Research**

---

**Ready to boost your productivity? Start your first Pomodoro now! 🍅**
