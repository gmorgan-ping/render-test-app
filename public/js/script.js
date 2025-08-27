// Custom JavaScript for Demo App

// Wait for DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function () {
  console.log('🚀 Demo App loaded successfully!');

  // Add fade-in animation to cards
  const cards = document.querySelectorAll('.card');
  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add('fade-in');
    }, index * 200);
  });
});

// Show alert function
function showAlert() {
  const alerts = [
    '🚀 Render.com deployment test successful!',
    '☁️ Auto-deployment from Git is working perfectly!',
    '✨ Render.com makes deployment so easy!',
    '🌟 Great! Your app is live on Render!',
    '🎯 Perfect! Deployment workflow validated!'
  ];

  const randomAlert = alerts[Math.floor(Math.random() * alerts.length)];

  // Create a Bootstrap alert
  const alertDiv = document.createElement('div');
  alertDiv.className = 'alert alert-success alert-dismissible fade show position-fixed';
  alertDiv.style.cssText = 'top: 20px; right: 20px; z-index: 9999; min-width: 300px;';
  alertDiv.innerHTML = `
        ${randomAlert}
        <button type="button" class="btn-close" data-bs-dismiss="alert"></button>
    `;

  document.body.appendChild(alertDiv);

  // Auto-remove after 3 seconds
  setTimeout(() => {
    if (alertDiv && alertDiv.parentNode) {
      alertDiv.remove();
    }
  }, 3000);
}

// Smooth scroll to about section
function scrollToAbout() {
  const aboutSection = document.getElementById('about');
  aboutSection.scrollIntoView({
    behavior: 'smooth',
    block: 'start'
  });
}

// Add some interactive features
document.addEventListener('DOMContentLoaded', function () {
  // Add click animation to badges
  const badges = document.querySelectorAll('.badge');
  badges.forEach(badge => {
    badge.addEventListener('click', function () {
      this.style.transform = 'scale(0.95)';
      setTimeout(() => {
        this.style.transform = 'scale(1.1)';
      }, 100);
      setTimeout(() => {
        this.style.transform = 'scale(1)';
      }, 200);
    });
  });

  // Add hover effect to navigation links
  const navLinks = document.querySelectorAll('.nav-link');
  navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
      if (this.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);
        if (targetElement) {
          targetElement.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
          });
        }
      }
    });
  });
});

// Add a simple visitor counter (stored in localStorage)
function updateVisitorCounter() {
  let visits = localStorage.getItem('demoAppVisits') || 0;
  visits = parseInt(visits) + 1;
  localStorage.setItem('demoAppVisits', visits);

  console.log(`� Render.com deployment test - Visit #${visits}`);

  // You could display this counter on the page if desired
  return visits;
}

// Initialize visitor counter
updateVisitorCounter();
