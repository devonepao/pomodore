# 📸 Visual Preview & Features Guide - Pomodoro PWA

## 🎨 Visual Design Overview

### Main Screen Layout

```
┌─────────────────────────────────┐
│   Pomodoro                      │
│   Focus. Work. Achieve.         │
├─────────────────────────────────┤
│                                 │
│  ┌───────────────────────────┐  │
│  │                           │  │
│  │      25:00                │  │
│  │                           │  │
│  │   work session            │  │
│  │                           │  │
│  └───────────────────────────┘  │
│                                 │
│  ┌─────────────┐  ┌──┐ ┌──┐   │
│  │ ▶ Start     │  │◎ │ │⚙️│   │
│  └─────────────┘  └──┘ └──┘   │
│                                 │
├─────────────────────────────────┤
│ ⏱ Ready to work                 │
│ © 2025 Solvepao Research        │
└─────────────────────────────────┘
```

### Timer Card (Frosted Glass)
- Semi-transparent background with blur effect
- Rounded corners (40px border radius)
- Subtle shadow for depth
- Radial gradient overlay from top-left
- Large red countdown display (72px font)
- Session status text below timer

### Control Buttons

**Start/Pause Button (Primary - Red)**
```
┌─────────────────────┐
│ ▶ Start             │  → White text on red gradient
│ (or ⏸ Pause)       │  → Hover: Lifts up with shadow
│                     │  → Click: Pressed effect
└─────────────────────┘
```

**Reset Button (Secondary - Frosted)**
```
┌────┐
│◎ R │  → Frosted glass background
└────┘  → Smaller size, compact
```

**Settings Button (Secondary - Frosted)**
```
┌────┐
│⚙️  │  → Gear icon
└────┘  → Frosted glass background
```

### Settings Panel

When clicking ⚙️, a panel appears:
```
┌─────────────────────────────────┐
│ Work Duration    [25] min       │
├─────────────────────────────────┤
│ Break Duration   [5]  min       │
└─────────────────────────────────┘
```
- Hidden by default, slides down when opened
- Frosted glass design matching theme
- Input fields with number spinners
- Changes apply immediately

### Footer Area

```
⏱ XX:XX remaining      ← Shows time left during countdown
© 2025 Solvepao Research ← Copyright notice
```

Or when paused:
```
⏱ Ready to work        ← Status message
© 2025 Solvepao Research
```

## 🎯 Color Scheme

### Light Mode (Default)
```
Background:     Linear gradient f5f5f7 → ffffff
Text Primary:   #1d1d1f (Dark gray)
Text Secondary: #86868b (Medium gray)
Timer Color:    #FF3B30 (Apple Tomato Red)
Card Background: rgba(255,255,255,0.7)
Button Primary:  #FF3B30 → #FF453A gradient
Button Secondary: rgba(255,255,255,0.6)
```

### Dark Mode
```
Background:     Linear gradient 1d1d1f → 000000
Text Primary:   #f5f5f7 (Light gray)
Text Secondary: #a1a1a6 (Medium gray)
Timer Color:    #FF3B30 (Same red)
Card Background: rgba(45,45,47,0.6)
Button Primary:  #FF3B30 → #FF453A (same)
Button Secondary: rgba(58,58,60,0.6)
```

## ✨ Animation Guide

### Page Load
1. **Header fades in** (0.8s)
2. **Timer card slides up** (0.6s, delayed)
3. **Controls fade in** (0.8s, 0.2s delay)

### Timer Completion

**Sequence:**
1. Timer reaches 0:00
2. Card **shakes** for 500ms (alert effect)
3. **Pause** briefly (100ms)
4. Card **pulses** for 400ms (celebration effect)
5. Session switches automatically

### Button Interactions

**On Hover (Desktop):**
- Button **lifts up** (translateY(-2px))
- Shadow deepens
- Slight scale increase

**On Click:**
- Button **presses down** (no translateY)
- Background opacity increases
- Shadow reduces

### Settings Panel

**On Open:**
- Slides down (0.4s animation)
- Fades in (opacity 0 → 1)
- Slight scale up effect

**On Close:**
- Slides up smoothly
- Fades out

## 📱 Responsive Design

### Mobile Portrait (320px - 480px)
```
┌──────────────────┐
│  Pomodoro        │  (Smaller header: 24px)
│  Focus. Work...  │
├──────────────────┤
│                  │
│  ┌────────────┐  │
│  │            │  │
│  │   25:00    │  │  (Timer: 64px)
│  │            │  │
│  │ work...    │  │
│  └────────────┘  │
│                  │
│  [Start] [R] [⚙] │
│                  │
├──────────────────┤
│⏱ Ready to work   │
│© Solvepao...     │
└──────────────────┘
```

### Mobile Landscape (480px - 800px)
```
┌─────────────────────────┐
│ Pomodoro - Focus...     │
│  [Start] [R] [⚙]        │
│   ┌────────────────┐    │
│   │     25:00      │    │  (Centered)
│   │  work session  │    │
│   └────────────────┘    │
│ ⏱ Ready to work         │
│ © Solvepao Research     │
└─────────────────────────┘
```

### Desktop (800px+)
```
┌─────────────────────────────────┐
│          Pomodoro               │ (Centered)
│     Focus. Work. Achieve.       │
├─────────────────────────────────┤
│   ┌───────────────────────┐     │
│   │                       │     │
│   │      25:00            │     │
│   │                       │     │
│   │   work session        │     │
│   │                       │     │
│   └───────────────────────┘     │
│   [Start] [Reset] [⚙️]           │
├─────────────────────────────────┤
│  ⏱ Ready to work                 │
│  © 2025 Solvepao Research        │
└─────────────────────────────────┘
```

## 🔔 Notification Design

### Desktop Notification

**When work session ends:**
```
╔════════════════════════════════╗
║ 🍅 Break Time! 🎉              ║  ← Notification header
║                                ║
║ Great work! Take a break and   ║
║ recharge.                      ║
║                                ║
║ [Dismiss]                      ║
╚════════════════════════════════╝
```

**When break ends:**
```
╔════════════════════════════════╗
║ 💪 Time to Work! 💪             ║
║                                ║
║ Break is over. Let's get back  ║
║ to focus!                      ║
║                                ║
║ [Dismiss]                      ║
╚════════════════════════════════╝
```

### Sound Notification

**Musical notes:** C5 → E5 → G5 (C major chord)
- Frequency: 523Hz → 659Hz → 783Hz
- Type: Sine wave (pure tone)
- Duration: ~400ms total
- Volume: 0.3 (not too loud)
- Fallback: Works on all browsers

## 📊 Typography Specimens

### Header (h1)
```
POMODORO
Font: San Francisco, -apple-system
Size: 28px
Weight: 600 (Semi-bold)
Color: #1d1d1f
Letter Spacing: -0.5px
```

### Subtitle (p)
```
Focus. Work. Achieve.
Font: San Francisco
Size: 13px
Weight: 500 (Medium)
Color: #86868b (Secondary)
```

### Timer Display
```
25:00
Font: San Francisco Mono / Tabular numbers
Size: 72px
Weight: 700 (Bold)
Color: #FF3B30 (Red)
Letter Spacing: -2px
Feature: font-variant-numeric: tabular-nums
```

### Session Info
```
WORK SESSION
Font: San Francisco
Size: 13px
Weight: 500 (Medium)
Color: #86868b
Text Transform: UPPERCASE
Letter Spacing: 0.5px
```

### Button Text
```
▶ Start    OR    ⏸ Pause
Font: San Francisco
Size: 14px
Weight: 600 (Semi-bold)
Color: White (primary) or #1d1d1f (secondary)
```

## 🎯 Interactive States

### Button States

**Idle/Normal:**
- Background color at normal opacity
- Slight shadow
- No transform

**Hover (Desktop only):**
- Lifts up 2px (translateY(-2px))
- Shadow increases (0 12px 24px)
- Background slightly brighter

**Pressed/Active:**
- Back at normal height
- Shadow reduced
- Background slightly darker
- Visual feedback of interaction

**Disabled (future):**
- Opacity 50%
- Cursor not-allowed
- No hover effect

### Input Fields (Settings)

**Normal:**
- Border: 1px solid rgba(0,0,0,0.1)
- Background: rgba(255,255,255,0.8)
- Padding: 6px 8px

**Focus:**
- Border color brightens
- Background opacity increases
- Outline visible

### Timer Card States

**Running:**
- Continues normal appearance
- Time updates every second

**Paused:**
- Time freezes
- Card brightness unchanged

**Complete:**
- Shake animation (50ms intervals)
- Then pulse animation
- Visual celebration effect

## 🌙 Dark Mode Appearance

### Changes for dark mode:
- Background becomes dark gray/black
- Text becomes light gray
- Cards become darker with different transparency
- Borders become more subtle
- All colors adapted for dark backgrounds

**Dark Mode Detection:**
Uses `@media (prefers-color-scheme: dark)` CSS

**User Preference:**
- Automatic based on system settings
- No manual toggle (follows Apple HIG)

## 🎨 Glassmorphism Effects

### Frosted Glass Components:

**Timer Card:**
```
background: rgba(255,255,255,0.7)
backdrop-filter: blur(20px)
border: 1px solid rgba(255,255,255,0.5)
box-shadow: 0 8px 32px rgba(0,0,0,0.08)
border-radius: 40px
```

**Button (Secondary):**
```
background: rgba(255,255,255,0.6)
backdrop-filter: blur(20px)
border: 1px solid rgba(255,255,255,0.4)
box-shadow: 0 4px 12px rgba(0,0,0,0.05)
border-radius: 24px
```

**Settings Panel:**
```
background: rgba(255,255,255,0.5)
backdrop-filter: blur(20px)
border: 1px solid rgba(255,255,255,0.4)
border-radius: 24px
```

## 📲 PWA App Icon

**Icon Style:**
- Square with rounded corners (40px radius)
- Tomato red background (#FF3B30)
- White timer symbol in center
- Clock face with 12 and 3 visible
- Simple, recognizable design

**Sizes Available:**
- 192x192px (modern devices)
- 180x180px (iOS home screen)
- Maskable version for adaptive icons

## 🎯 Safe Area Support

**iPhone notch/Dynamic Island:**
- Padding added: `max(20px, env(safe-area-inset-top))`
- Bottom: `max(20px, env(safe-area-inset-bottom))`
- Left: `max(20px, env(safe-area-inset-left))`
- Right: `max(20px, env(safe-area-inset-right))`

**Result:**
- Content never hidden behind notch
- Works perfectly on all iPhone models
- Respects Android cutouts too

## 🎪 Playful Touches

1. **Emojis in notifications:** 🎉 🍅 💪
2. **Encouraging messages:** "Great work!", "Let's focus!"
3. **Animation feedback:** Shake on completion
4. **Celebration pulse:** Post-completion feedback
5. **Footer countdown:** Shows actual time left
6. **Session context:** Shows "Work session" or "Break time"

---

**Everything is designed with care and attention to detail! 🎨**
