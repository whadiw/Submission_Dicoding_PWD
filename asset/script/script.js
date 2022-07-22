// Script ini digunakan untuk mengubah warna background-color pada navbar ketika website di scroll
const nav = document.querySelector('nav');

window.addEventListener('scroll', function () {
    scrollposition = window.scrollY;
    if (scrollposition >= 60) {
        nav.classList.add('nav-dark');
    } else if (scrollposition <= 60) {
        nav.classList.remove('nav-dark');
    }
})