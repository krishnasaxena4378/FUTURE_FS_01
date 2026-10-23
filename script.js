// Portfolio JavaScript - simple and beginner friendly.
// Everything runs after the page has finished loading.

document.addEventListener('DOMContentLoaded', function () {

    // ---------- 1. Mobile menu (hamburger button) ----------
    var menuToggle = document.getElementById('menuToggle');
    var navLinks = document.getElementById('navLinks');

    // Clicking the hamburger adds/removes the "open" class, which shows/hides the menu in CSS.
    menuToggle.addEventListener('click', function () {
        var isOpen = navLinks.classList.toggle('open');
        menuToggle.setAttribute('aria-expanded', isOpen); // helps screen readers
    });

    // When a menu link is clicked, close the menu again.
    navLinks.querySelectorAll('a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('open');
            menuToggle.setAttribute('aria-expanded', 'false');
        });
    });

    // ---------- 2. Highlight the nav link of the section you are viewing ----------
    var sections = document.querySelectorAll('main section');
    var links = navLinks.querySelectorAll('a');

    // IntersectionObserver tells us when a section is on screen.
    var observer = new IntersectionObserver(function (entries) {
        entries.forEach(function (entry) {
            if (entry.isIntersecting) {
                links.forEach(function (link) {
                    // Add "active" only to the link whose href matches this section's id.
                    link.classList.toggle('active', link.getAttribute('href') === '#' + entry.target.id);
                });
            }
        });
    }, { rootMargin: '-40% 0px -55% 0px' }); // a section counts when it crosses the middle of the screen

    sections.forEach(function (section) { observer.observe(section); });

    // ---------- 3. Contact form ----------
    // There is no server, so the form opens the visitor's email app with the message filled in.
    var form = document.getElementById('contactForm');
    var note = document.getElementById('formNote');

    form.addEventListener('submit', function (event) {
        event.preventDefault(); // stop the page from reloading

        var name = document.getElementById('name').value.trim();
        var email = document.getElementById('email').value.trim();
        var message = document.getElementById('message').value.trim();

        var subject = encodeURIComponent('Portfolio message from ' + name);
        var body = encodeURIComponent(message + '\n\nFrom: ' + name + ' (' + email + ')');

        // Opens the email app addressed to you.
        window.location.href = 'mailto:krishnasaxena4378@gmail.com?subject=' + subject + '&body=' + body;

        note.textContent = 'Opening your email app...';
        form.reset();
    });

    // ---------- 4. Footer year updates itself ----------
    document.getElementById('year').textContent = new Date().getFullYear();
});
