// Pomodoro Timer App - Main Logic

class PomodoroTimer {
    constructor() {
    // Settings
    this.workDuration = parseInt(localStorage.getItem('workDuration') || '45');
        this.breakDuration = parseInt(localStorage.getItem('breakDuration') || '5');
        
        // State
        this.isRunning = false;
        this.isWorkSession = true;
        this.totalSeconds = this.workDuration * 60;
        this.remainingSeconds = this.totalSeconds;
        this.intervalId = null;
        
        // DOM Elements
        this.timerDisplay = document.getElementById('timerDisplay');
        this.sessionInfo = document.getElementById('sessionInfo');
        this.toggleBtn = document.getElementById('toggleBtn');
        this.toggleIcon = document.getElementById('toggleIcon');
        this.toggleText = document.getElementById('toggleText');
        this.resetBtn = document.getElementById('resetBtn');
        this.settingsBtn = document.getElementById('settingsBtn');
        this.timerCard = document.getElementById('timerCard');
        this.settingsPanel = document.getElementById('settingsPanel');
        this.workDurationInput = document.getElementById('workDuration');
        this.breakDurationInput = document.getElementById('breakDuration');
        this.countdownFooter = document.getElementById('countdownFooter');
        
        // Audio context for sound
        this.audioContext = null;
        
        // Initialize
        this.setupEventListeners();
        this.updateDisplay();
        this.loadSettings();
    }

    setupEventListeners() {
        this.toggleBtn.addEventListener('click', () => this.toggle());
        this.resetBtn.addEventListener('click', () => this.reset());
        this.settingsBtn.addEventListener('click', () => this.toggleSettings());
        
        this.workDurationInput.addEventListener('change', (e) => {
            this.workDuration = parseInt(e.target.value) || 45;
            localStorage.setItem('workDuration', this.workDuration);
            if (!this.isRunning && this.isWorkSession) {
                this.totalSeconds = this.workDuration * 60;
                this.remainingSeconds = this.totalSeconds;
                this.updateDisplay();
            }
        });
        
        this.breakDurationInput.addEventListener('change', (e) => {
            this.breakDuration = parseInt(e.target.value) || 5;
            localStorage.setItem('breakDuration', this.breakDuration);
            if (!this.isRunning && !this.isWorkSession) {
                this.totalSeconds = this.breakDuration * 60;
                this.remainingSeconds = this.totalSeconds;
                this.updateDisplay();
            }
        });
    }

    loadSettings() {
        this.workDurationInput.value = this.workDuration;
        this.breakDurationInput.value = this.breakDuration;
    }

    toggleSettings() {
        this.settingsPanel.classList.toggle('open');
    }

    toggle() {
        this.isRunning = !this.isRunning;
        
        if (this.isRunning) {
            this.start();
        } else {
            this.pause();
        }
    }

    start() {
        this.toggleIcon.textContent = '⏸';
        this.toggleText.textContent = 'Pause';
        
        this.intervalId = setInterval(() => {
            this.remainingSeconds--;
            this.updateDisplay();
            
            if (this.remainingSeconds <= 0) {
                this.complete();
            }
        }, 1000);
    }

    pause() {
        clearInterval(this.intervalId);
        this.toggleIcon.textContent = '▶';
        this.toggleText.textContent = 'Resume';
    }

    reset() {
        this.pause();
        this.isRunning = false;
        this.remainingSeconds = this.isWorkSession ? 
            this.workDuration * 60 : 
            this.breakDuration * 60;
        this.updateDisplay();
        this.timerCard.classList.remove('shake', 'pulse');
    }

    complete() {
        this.pause();
        this.isRunning = false;
        
        // Animation
        this.timerCard.classList.add('shake');
        setTimeout(() => {
            this.timerCard.classList.remove('shake');
            this.timerCard.classList.add('pulse');
        }, 500);
        
        // Notification
        this.sendNotification();
        
        // Sound
        this.playSound();
        
        // Switch sessions
        setTimeout(() => {
            this.switchSession();
            this.timerCard.classList.remove('pulse');
        }, 1000);
    }

    switchSession() {
        this.isWorkSession = !this.isWorkSession;
        this.totalSeconds = this.isWorkSession ? 
            this.workDuration * 60 : 
            this.breakDuration * 60;
        this.remainingSeconds = this.totalSeconds;
        this.updateDisplay();
        
        // Auto-start next session (optional, commented out for user preference)
        // this.toggle();
    }

    updateDisplay() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;
        
        this.timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        this.sessionInfo.textContent = this.isWorkSession ? 'work session' : 'break time';
        
        // Update footer countdown
        this.updateFooterCountdown();
        
        // Update page title
        document.title = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} - Pomodoro`;
        
        // Update favicon (optional, for browser tab indication)
        this.updateFavicon(minutes, seconds);
    }

    updateFooterCountdown() {
        const minutes = Math.floor(this.remainingSeconds / 60);
        const seconds = this.remainingSeconds % 60;
        
        if (this.isRunning) {
            this.countdownFooter.textContent = `⏱ ${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')} remaining`;
        } else {
            this.countdownFooter.textContent = this.isWorkSession ? 
                '⏱ Ready to work' : 
                '⏱ Time to relax';
        }
    }

    updateFavicon(minutes, seconds) {
        // Create dynamic favicon with remaining time
        const canvas = document.createElement('canvas');
        canvas.width = 180;
        canvas.height = 180;
        const ctx = canvas.getContext('2d');
        
        // Background
        ctx.fillStyle = '#FF3B30';
        ctx.fillRect(0, 0, 180, 180);
        ctx.fillStyle = 'rgba(255, 255, 255, 0.15)';
        
        // Rounded corners
        const borderRadius = 40;
        ctx.beginPath();
        ctx.moveTo(borderRadius, 0);
        ctx.lineTo(canvas.width - borderRadius, 0);
        ctx.quadraticCurveTo(canvas.width, 0, canvas.width, borderRadius);
        ctx.lineTo(canvas.width, canvas.height - borderRadius);
        ctx.quadraticCurveTo(canvas.width, canvas.height, canvas.width - borderRadius, canvas.height);
        ctx.lineTo(borderRadius, canvas.height);
        ctx.quadraticCurveTo(0, canvas.height, 0, canvas.height - borderRadius);
        ctx.lineTo(0, borderRadius);
        ctx.quadraticCurveTo(0, 0, borderRadius, 0);
        ctx.fill();
        
        // Time text
        ctx.fillStyle = 'white';
        ctx.font = 'bold 48px -apple-system, sans-serif';
        ctx.textAlign = 'center';
        ctx.textBaseline = 'middle';
        ctx.fillText(`${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`, 90, 90);
        
        // Update favicon
        const link = document.querySelector("link[rel='icon']") || document.createElement('link');
        link.rel = 'icon';
        link.href = canvas.toDataURL();
        document.head.appendChild(link);
    }

    sendNotification() {
        if ('Notification' in window && Notification.permission === 'granted') {
            const title = this.isWorkSession ? 'Break Time! 🎉' : 'Time to Work! 💪';
            const options = {
                body: this.isWorkSession ? 
                    'Great work! Take a break and recharge.' : 
                    'Break is over. Let\'s get back to focus!',
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><rect fill="%23FF3B30" width="180" height="180" rx="40"/><circle cx="90" cy="90" r="50" fill="white" opacity="0.2"/><circle cx="90" cy="90" r="35" fill="none" stroke="white" stroke-width="3"/><line x1="90" y1="55" x2="90" y2="70" stroke="white" stroke-width="3" stroke-linecap="round"/><line x1="125" y1="90" x2="110" y2="90" stroke="white" stroke-width="3" stroke-linecap="round"/></svg>',
                badge: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 180 180"><rect fill="%23FF3B30" width="180" height="180" rx="40"/></svg>',
                tag: 'pomodoro-timer',
                requireInteraction: false,
            };
            
            new Notification(title, options);
        }
    }

    playSound() {
        // Play a pleasant notification sound
        try {
            // Use Web Audio API for cross-browser compatibility
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            
            const ctx = this.audioContext;
            const now = ctx.currentTime;
            
            // Create oscillators for a pleasant chime
            const notes = [523.25, 659.25, 783.99]; // C5, E5, G5 (C Major)
            
            notes.forEach((frequency, index) => {
                const osc = ctx.createOscillator();
                const gain = ctx.createGain();
                
                osc.frequency.value = frequency;
                osc.type = 'sine';
                
                gain.gain.setValueAtTime(0.3, now + index * 0.1);
                gain.gain.exponentialRampToValueAtTime(0.01, now + index * 0.1 + 0.4);
                
                osc.connect(gain);
                gain.connect(ctx.destination);
                
                osc.start(now + index * 0.1);
                osc.stop(now + index * 0.1 + 0.4);
            });
        } catch (err) {
            console.log('Audio playback error:', err);
            // Fallback: try using HTML5 audio
            this.playFallbackSound();
        }
    }

    playFallbackSound() {
        // Fallback sound using a data URI
        const audio = new Audio('data:audio/wav;base64,UklGRiYAAABXQVZFZm10IBAAAAABAAEAQB8AAAB9AAACABAAZGF0YQIAAAAAAA==');
        audio.play().catch(e => console.log('Fallback audio error:', e));
    }
}

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    new PomodoroTimer();
});

// Handle app visibility changes
document.addEventListener('visibilitychange', () => {
    if (document.hidden) {
        // App in background
    } else {
        // App in foreground - could refresh display if needed
    }
});
