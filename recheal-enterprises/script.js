const toggle = document.querySelector('.menu-toggle'); const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => nav.classList.toggle('open'));
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => nav.classList.remove('open')));
document.querySelector('#contactForm').addEventListener('submit', e => { e.preventDefault(); document.querySelector('#formMessage').textContent = 'Thank you! Your enquiry has been recorded in this demo.'; e.target.reset(); });
