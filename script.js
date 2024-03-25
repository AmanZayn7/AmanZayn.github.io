window.addEventListener('DOMContentLoaded', function() {
    // Trigger the fade effect when scrolling
    window.addEventListener('scroll', function() {
        var aboutSection = document.getElementById('about');
        var introSection = document.getElementById('intro');
        var introOffset = introSection.offsetHeight;
        var scrollPosition = window.scrollY;

        if (scrollPosition >= introOffset) {
            aboutSection.style.opacity = '1';
        } else {
            aboutSection.style.opacity = '0';
        }
    });

    // Trigger the fade effect when clicking the "About" button in the navigation menu
    var aboutButton = document.querySelector('a[href="#about"]');
    aboutButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        var aboutSection = document.getElementById('about');
        aboutSection.style.opacity = '1';
        // Scroll to the about section smoothly
        window.scrollTo({
            top: aboutSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    // Trigger the fade effect when scrolling
    window.addEventListener('scroll', function() {
        var aboutSection = document.getElementById('about');
        var projectsSection = document.getElementById('projects');
        var aboutOffset = aboutSection.offsetHeight;
        var scrollPosition = window.scrollY;

        if (scrollPosition >= aboutOffset) {
            projectsSection.style.opacity = '1';
        } else {
            projectsSection.style.opacity = '0';
        }
    });

    // Trigger the fade effect when clicking the "Projects" button in the navigation menu
    var projectsButton = document.querySelector('a[href="#projects"]');
    projectsButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default anchor behavior
        var projectsSection = document.getElementById('projects');
        projectsSection.style.opacity = '1';
        // Scroll to the projects section smoothly
        window.scrollTo({
            top: projectsSection.offsetTop,
            behavior: 'smooth'
        });
    });
});

window.addEventListener('DOMContentLoaded', function() {
    // Trigger the fade effect when scrolling
    window.addEventListener('scroll', function() {
        var aboutSection = document.getElementById('about');
        var introSection = document.getElementById('intro');
        var projectsSection = document.getElementById('projects');
        var contactSection = document.getElementById('contact');
        var introOffset = introSection.offsetHeight;
        var aboutOffset = aboutSection.offsetHeight;
        var projectsOffset = projectsSection.offsetHeight;
        var scrollPosition = window.scrollY;

        if (scrollPosition >= introOffset + aboutOffset + projectsOffset) {
            contactSection.style.opacity = '1';
        } else {
            contactSection.style.opacity = '0';
        }
    });

    // Trigger the fade effect for the Contact section
    window.addEventListener('scroll', function() {
        var aboutSection = document.getElementById('about');
        var projectsSection = document.getElementById('projects');
        var contactSection = document.getElementById('contact');
        var projectsOffset = projectsSection.offsetHeight;
        var scrollPosition = window.scrollY;

        if (scrollPosition >= projectsOffset) {
            contactSection.style.opacity = '1';
        } else {
            contactSection.style.opacity = '0';
        }
    });
});