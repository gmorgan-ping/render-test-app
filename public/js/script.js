// WebSolutions - Interactive Functionality

// Show professional alert messages
function showAlert(type) {
    let message = '';
    let title = '';
    
    switch(type) {
        case 'consultation':
            title = 'Free Consultation';
            message = 'Thank you for your interest! We\'ll contact you within 24 hours to schedule your free consultation.';
            break;
        case 'contact':
            title = 'Contact Information';
            message = 'Email: hello@websolutions.com\nPhone: (555) 123-4567\nWe\'ll get back to you within 24 hours!';
            break;
        default:
            title = 'WebSolutions';
            message = 'Thank you for visiting our website!';
    }
    
    alert(`${title}\n\n${message}`);
}

// Smooth scroll to section
function scrollToSection(sectionId) {
    const element = document.getElementById(sectionId);
    if (element) {
        element.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Add smooth scrolling to all anchor links
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
    
    // Add loading animation effect
    const serviceCards = document.querySelectorAll('.service-card');
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
    
    serviceCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
    
    console.log('WebSolutions site loaded successfully!');
});