const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector('.nav__links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}

navSlide();