// Intro screen transition
document.addEventListener('DOMContentLoaded', () => {
    const introScreen = document.getElementById('introScreen');
    const mainContent = document.getElementById('mainContent');
    let hasTransitioned = false;
    
    // Function to trigger the transition
    const triggerTransition = () => {
        if (!hasTransitioned) {
            hasTransitioned = true;
            introScreen.classList.add('slide-up');
            mainContent.classList.add('visible');
            document.body.style.overflow = 'auto';
            
            // Remove intro screen from DOM after transition
            setTimeout(() => {
                introScreen.style.display = 'none';
            }, 1000);
        }
    };
    
    // Auto-transition after GIF plays (approximately 5 seconds)
    setTimeout(triggerTransition, 5000);
    
    // Also trigger on scroll
    window.addEventListener('wheel', triggerTransition);
    window.addEventListener('touchmove', triggerTransition);
    
    // Trigger on click/tap
    introScreen.addEventListener('click', triggerTransition);
    
    // Initially hide scrollbar
    document.body.style.overflow = 'hidden';
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Apply observer to milestones
document.addEventListener('DOMContentLoaded', () => {
    const milestones = document.querySelectorAll('.milestone');
    milestones.forEach(milestone => {
        milestone.style.opacity = '0';
        milestone.style.transform = 'translateY(20px)';
        milestone.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(milestone);
    });
    
    // Apply observer to sections
    const sections = document.querySelectorAll('.focus, .writing');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        observer.observe(section);
    });
});

// Remove parallax effect to prevent overlap
// Parallax was causing the hero section to move and overlap with content

// Add subtle hover effect to CTA button
const ctaButton = document.querySelector('.cta-button');
if (ctaButton) {
    ctaButton.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-2px) scale(1.02)';
    });
    
    ctaButton.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
}