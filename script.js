// ===================================
// KRA iTax Redesign Portfolio
// Redline UX Collective
// JavaScript Interactions
// ===================================

// ===================================
// Navigation Toggle for Mobile
// ===================================
const navToggle = document.getElementById('navToggle');
const navMenu = document.getElementById('navMenu');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        }
    });
}

// ===================================
// Smooth Scrolling for Navigation Links
// ===================================
navLinks.forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            const navHeight = document.querySelector('.navbar').offsetHeight;
            const targetPosition = targetSection.offsetTop - navHeight - 20;

            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Active Navigation Link Highlighting
// ===================================
function updateActiveNavLink() {
    const sections = document.querySelectorAll('.section');
    const navHeight = document.querySelector('.navbar').offsetHeight;

    let currentSection = '';

    sections.forEach(section => {
        const sectionTop = section.offsetTop - navHeight - 100;
        const sectionHeight = section.offsetHeight;

        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            currentSection = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${currentSection}`) {
            link.classList.add('active');
        }
    });
}

// ===================================
// Scroll to Top Button
// ===================================
const scrollToTopBtn = document.getElementById('scrollToTop');

if (scrollToTopBtn) {
    // Show/hide button based on scroll position
    window.addEventListener('scroll', () => {
        if (window.scrollY > 500) {
            scrollToTopBtn.classList.add('visible');
        } else {
            scrollToTopBtn.classList.remove('visible');
        }

        // Update active nav link
        updateActiveNavLink();
    });

    // Scroll to top on click
    scrollToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ===================================
// Navbar Background on Scroll
// ===================================
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.98)';
        navbar.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)';
    } else {
        navbar.style.backgroundColor = 'rgba(255, 255, 255, 0.95)';
        navbar.style.boxShadow = '0 1px 2px 0 rgba(0, 0, 0, 0.05)';
    }
});

// ===================================
// Intersection Observer for Animations
// ===================================
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Observe all cards and sections
const animateElements = document.querySelectorAll(
    '.issue-card, .persona-card, .team-card, .feature-card, .scenario-card, .exercise-card, ' +
    '.assessment-card, .method-card, .criteria-card, .ds-card, .final-stat, .slide-card, ' +
    '.alternative-block, .analysis-card, .point-card, .summary-card'
);

animateElements.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    observer.observe(el);
});

// Add animation class styles dynamically
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        opacity: 1 !important;
        transform: translateY(0) !important;
    }
`;
document.head.appendChild(style);

// ===================================
// Counter Animation for Stats
// ===================================
function animateCounter(element, target, duration = 2000, suffix = '') {
    const start = 0;
    const increment = target / (duration / 16);
    let current = start;

    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current) + suffix;
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target + suffix;
        }
    };

    updateCounter();
}

// Animate stats when they come into view
const statNumbers = document.querySelectorAll('.stat-number, .problem-number, .metric-value, .method-number, .issues-number, .ab-value');
const statObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
            const target = entry.target.textContent.trim();

            // Check if it's a pure number
            if (/^\d+$/.test(target)) {
                animateCounter(entry.target, parseInt(target));
            }
            // Check if it's a percentage
            else if (target.includes('%')) {
                const number = parseInt(target);
                animateCounter(entry.target, number, 2000, '%');
            }
            // Check if it ends with + (like 7M+)
            else if (target.includes('+')) {
                const parts = target.match(/^([\d.]+)([A-Za-z]*)\+$/);
                if (parts) {
                    const num = parseFloat(parts[1]);
                    const unit = parts[2];
                    animateCounter(entry.target, num, 2000, unit + '+');
                }
            }
            // Check if it's a time format (like "35-45 min")
            else if (target.includes('min')) {
                // Don't animate time ranges, just show them
            }
            // Handle decimal numbers
            else if (/^[\d.]+$/.test(target)) {
                const num = parseFloat(target);
                if (num < 100) {
                    // Likely a score like 82.5
                    let currentVal = 0;
                    const increment = num / 125;
                    const animate = () => {
                        currentVal += increment;
                        if (currentVal < num) {
                            entry.target.textContent = currentVal.toFixed(1);
                            requestAnimationFrame(animate);
                        } else {
                            entry.target.textContent = num;
                        }
                    };
                    animate();
                }
            }

            entry.target.classList.add('counted');
            statObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statNumbers.forEach(stat => {
    statObserver.observe(stat);
});

// ===================================
// Frustration Bars Animation
// ===================================
const frustrationBars = document.querySelectorAll('.frustration-bar');
const frustrationObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const targetWidth = entry.target.style.width;
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.transition = 'width 1s ease-out';
                entry.target.style.width = targetWidth;
            }, 100);
            frustrationObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

frustrationBars.forEach(bar => {
    frustrationObserver.observe(bar);
});

// ===================================
// Chart Bars Animation
// ===================================
const chartBars = document.querySelectorAll('.bar-old, .bar-new, .stat-bar');
const chartObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting && !entry.target.classList.contains('animated')) {
            const targetWidth = entry.target.style.width;
            if (targetWidth) {
                entry.target.style.width = '0';
                setTimeout(() => {
                    entry.target.style.transition = 'width 0.8s ease-out';
                    entry.target.style.width = targetWidth;
                }, 200);
            }
            entry.target.classList.add('animated');
            chartObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

chartBars.forEach(bar => {
    chartObserver.observe(bar);
});

// ===================================
// Lazy Loading for Images
// ===================================
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            }
        });
    });

    const images = document.querySelectorAll('img[data-src]');
    images.forEach(img => imageObserver.observe(img));
}

// ===================================
// Image Load Error Handling
// ===================================
document.querySelectorAll('img').forEach(img => {
    img.addEventListener('error', function() {
        // Replace with a placeholder if image fails to load
        this.style.backgroundColor = '#f3f4f6';
        this.style.display = 'flex';
        this.style.alignItems = 'center';
        this.style.justifyContent = 'center';
        this.alt = 'Image not found';
    });
});

// ===================================
// Notification Toast
// ===================================
function showNotification(message, duration = 3000) {
    const notification = document.createElement('div');
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        bottom: 32px;
        left: 50%;
        transform: translateX(-50%);
        background-color: #1F2937;
        color: white;
        padding: 12px 24px;
        border-radius: 8px;
        box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
        z-index: 10000;
        opacity: 0;
        transition: opacity 0.3s ease-in-out;
        font-size: 14px;
        font-weight: 500;
    `;

    document.body.appendChild(notification);

    setTimeout(() => {
        notification.style.opacity = '1';
    }, 10);

    setTimeout(() => {
        notification.style.opacity = '0';
        setTimeout(() => {
            document.body.removeChild(notification);
        }, 300);
    }, duration);
}

// ===================================
// Keyboard Navigation Support
// ===================================
document.addEventListener('keydown', (e) => {
    // Press 'Escape' to close mobile menu
    if (e.key === 'Escape' && navMenu && navMenu.classList.contains('active')) {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    }

    // Press 'Home' to scroll to top
    if (e.key === 'Home' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Press 'End' to scroll to bottom
    if (e.key === 'End' && e.ctrlKey) {
        e.preventDefault();
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    }
});

// ===================================
// Focus Visible for Accessibility
// ===================================
document.addEventListener('mousedown', () => {
    document.body.classList.add('using-mouse');
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        document.body.classList.remove('using-mouse');
    }
});

// Add styles for focus visibility
const focusStyle = document.createElement('style');
focusStyle.textContent = `
    .using-mouse *:focus {
        outline: none;
    }

    *:focus-visible {
        outline: 2px solid #DC2626;
        outline-offset: 2px;
    }
`;
document.head.appendChild(focusStyle);

// ===================================
// Hero Section (static, no parallax)
// ===================================

// ===================================
// Progress Bar for Page Scroll
// ===================================
function createProgressBar() {
    const progressBar = document.createElement('div');
    progressBar.id = 'scroll-progress';
    progressBar.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(to right, #DC2626, #16A34A);
        width: 0%;
        z-index: 10000;
        transition: width 0.1s ease-out;
    `;
    document.body.appendChild(progressBar);

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = scrolled + '%';
    });
}

// Enable progress bar
createProgressBar();

// ===================================
// Section Progress Indicator
// ===================================
function updateSectionIndicator() {
    const sections = document.querySelectorAll('.section[id]');
    const total = sections.length;
    let currentIndex = 0;

    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top < window.innerHeight / 2 && rect.bottom > 0) {
            currentIndex = index + 1;
        }
    });

    // You can use this to show current section number
    // console.log(`Section ${currentIndex} of ${total}`);
}

window.addEventListener('scroll', updateSectionIndicator);

// ===================================
// Smooth Reveal for Research Stats
// ===================================
const statBars = document.querySelectorAll('.stat-bar');
const statBarObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const width = getComputedStyle(entry.target).getPropertyValue('--width');
            entry.target.style.width = '0';
            setTimeout(() => {
                entry.target.style.transition = 'width 1s ease-out';
                entry.target.style.width = width;
            }, 100);
            statBarObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.5 });

statBars.forEach(bar => statBarObserver.observe(bar));

// ===================================
// Print Functionality
// ===================================
function printPortfolio() {
    window.print();
}

// Add print button functionality if needed
const printBtn = document.getElementById('printBtn');
if (printBtn) {
    printBtn.addEventListener('click', printPortfolio);
}

// ===================================
// Initialize on DOM Ready
// ===================================
document.addEventListener('DOMContentLoaded', () => {
    console.log('Redline UX Collective - KRA iTax Redesign Portfolio loaded successfully!');

    // Update active nav link on load
    updateActiveNavLink();

    // Add loaded class to body for any CSS transitions
    document.body.classList.add('loaded');
});

// ===================================
// Performance Monitoring
// ===================================
if (window.performance && window.performance.timing) {
    window.addEventListener('load', () => {
        const perfData = window.performance.timing;
        const pageLoadTime = perfData.loadEventEnd - perfData.navigationStart;

        console.log(`Page Load Time: ${pageLoadTime}ms`);
    });
}
