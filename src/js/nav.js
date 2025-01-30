document.addEventListener('DOMContentLoaded', () => {
    // Hide all sections except first one
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.display = 'none';
    });
    sections[0].style.display = 'block';

    // Navigation handling
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            
            // Hide all sections
            sections.forEach(section => {
                section.style.display = 'none';
            });

            // Show clicked section
            const targetId = link.getAttribute('href').slice(1);
            const targetSection = document.getElementById(targetId);
            if (targetSection) {
                targetSection.style.display = 'block';
            }

            // Update active state
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });
});