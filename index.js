const navS = document.querySelector('.navbar');
window.addEventListener('scroll', function () {
    if (window.scrollY >= 56) {
        navS.classList.add('navbar-scrolled');
    }
    else {
        navS.classList.remove('navbar-scrolled');
    }
})