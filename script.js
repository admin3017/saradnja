// Glatko skrolovanje do sekcija
document.querySelectorAll('.main-nav a[href^="#"], .btn-primary[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').slice(1);
        const target = document.getElementById(targetId);
        if (!target) return;

        const offset = document.querySelector('.main-nav').offsetHeight + 10;
        const rect = target.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const targetY = rect.top + scrollTop - offset;

        window.scrollTo({
            top: targetY,
            behavior: 'smooth'
        });
    });
});

// Scroll-spy za navigaciju
const sections = document.querySelectorAll('main section[id]');
const navLinks = document.querySelectorAll('.main-nav a[href^="#"]');

function onScroll() {
    const scrollPos = window.scrollY + (window.innerHeight * 0.25);

    sections.forEach(section => {
        const rect = section.getBoundingClientRect();
        const top = rect.top + window.scrollY;
        const bottom = top + section.offsetHeight;

        if (scrollPos >= top && scrollPos < bottom) {
            const id = section.getAttribute('id');
            navLinks.forEach(link => {
                link.classList.toggle('active', link.getAttribute('href') === '#' + id);
            });
        }
    });
}

window.addEventListener('scroll', onScroll);
window.addEventListener('load', onScroll);

// Dugme "Nazad na vrh"
const backToTop = document.getElementById('backToTop');

window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
