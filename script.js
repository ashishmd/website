// Portfolio Website JavaScript
// Ashish Muralidharan - Tech Lead & Senior Software Engineer

document.addEventListener('DOMContentLoaded', () => {
    // Mobile menu functionality
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('#header a[href^="#"], #mobile-menu a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            // Close mobile menu if open
            if (mobileMenu && !mobileMenu.classList.contains('hidden')) {
                mobileMenu.classList.add('hidden');
            }
            
            // Smooth scroll to target section
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    // Intersection Observer for fade-in animations
    const faders = document.querySelectorAll('.fade-in');
    const appearOptions = {
        threshold: 0.15,
        rootMargin: "0px 0px -50px 0px"
    };
    
    const appearOnScroll = new IntersectionObserver(function(entries, appearOnScroll) {
        entries.forEach(entry => {
            if (!entry.isIntersecting) {
                return;
            } else {
                entry.target.classList.add('visible');
                appearOnScroll.unobserve(entry.target);
            }
        });
    }, appearOptions);

    faders.forEach(fader => {
        appearOnScroll.observe(fader);
    });

    // Skills Chart using Chart.js
    const ctx = document.getElementById('skillsChart');
    if (ctx) {
        const skillsChart = new Chart(ctx.getContext('2d'), {
            type: 'bar',
            data: {
                labels: ['Node.js & Next.js', 'Java & Spring Boot', 'Ruby on Rails', 'Python & Django'],
                datasets: [{
                    label: 'Years of Experience',
                    data: [3, 3, 3, 2],
                    backgroundColor: [
                        'rgba(20, 184, 166, 0.6)',
                        'rgba(59, 130, 246, 0.6)',
                        'rgba(139, 92, 246, 0.6)',
                        'rgba(245, 158, 11, 0.6)',
                    ],
                    borderColor: [
                        'rgba(20, 184, 166, 1)',
                        'rgba(59, 130, 246, 1)',
                        'rgba(139, 92, 246, 1)',
                        'rgba(245, 158, 11, 1)',
                    ],
                    borderWidth: 1
                }]
            },
            options: {
                indexAxis: 'y',
                responsive: true,
                maintainAspectRatio: false,
                scales: {
                    x: {
                        beginAtZero: true,
                        grid: {
                            color: '#e5e7eb',
                        },
                        ticks: {
                            callback: function(value) {
                                return value + ' yrs';
                            },
                            color: '#4b5563',
                            font: {
                                family: "'Inter', sans-serif"
                            }
                        }
                    },
                    y: {
                        grid: {
                            display: false,
                        },
                        ticks: {
                            color: '#1f2937',
                            font: {
                                family: "'Inter', sans-serif",
                                size: 14
                            }
                        }
                    }
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: '#1f2937',
                        titleFont: {
                            size: 16,
                            family: "'Inter', sans-serif"
                        },
                        bodyFont: {
                            size: 14,
                            family: "'Inter', sans-serif"
                        },
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.x !== null) {
                                    label += context.parsed.x + ' years';
                                }
                                return label;
                            }
                        }
                    }
                }
            }
        });
    }

    // Header scroll effect
    const header = document.getElementById('header');
    if (header) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                header.classList.add('shadow-lg');
                header.classList.add('bg-stone-100');
            } else {
                header.classList.remove('shadow-lg');
                header.classList.remove('bg-stone-100');
            }
        });
    }

    // Add hover effects to project cards
    const projectCards = document.querySelectorAll('.project-card');
    projectCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.transform = 'translateY(-4px)';
        });
        
        card.addEventListener('mouseleave', () => {
            card.style.transform = 'translateY(0)';
        });
    });

    // Add click tracking for analytics (if needed)
    const trackClick = (element, event) => {
        // You can add Google Analytics or other tracking here
        console.log(`Clicked: ${event} on ${element}`);
    };

    // Track external link clicks
    document.querySelectorAll('a[target="_blank"]').forEach(link => {
        link.addEventListener('click', () => {
            trackClick(link.href, 'external_link');
        });
    });

    // Track email clicks
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.addEventListener('click', () => {
            trackClick('email', 'email_click');
        });
    });
});

// Utility functions
const utils = {
    // Debounce function for performance optimization
    debounce: (func, wait) => {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    },

    // Smooth scroll to element
    scrollToElement: (elementId) => {
        const element = document.getElementById(elementId);
        if (element) {
            element.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    },

    // Check if element is in viewport
    isInViewport: (element) => {
        const rect = element.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }
}; 