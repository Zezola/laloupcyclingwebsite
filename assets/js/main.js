/* Making the navbar slide to the side */
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const nav = document.querySelector('.nav__links');

    burger.addEventListener('click', () => {
        nav.classList.toggle('nav-active');
    })
}
var c = 0;

const backgroundImageSlider = () => {
    const arrow_left = document.querySelector("#left-arrow");
    const arrow_right = document.querySelector("#right-arrow");
    const currentBackgroundImg = document.querySelector("")    
    
}

/* Calling the functions */
navSlide();
