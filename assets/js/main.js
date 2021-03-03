const openSlideMenu = () => {
    document.getElementById('slide__menu').style.width = '250px';
    document.getElementById('content').style.marginLeft = '250px';
    return false;
}

const closeSlideMenu = () => {
    
    document.getElementById('slide__menu').style.width = '0';
    document.getElementById('content').style.marginLeft = '0';
    return false;
}

const nextBackground = () => {
    let imgName = 'bannerBackground';
    let backgroundImg = document.getElementById('hero').style.backgroundImage = "url('imgs/bannerBackground2.jpeg')";
}

window.onscroll = () => {
    console.log(window.pageYOffset);
    var nav = document.getElementById('header');
    if ( window.pageYOffset > 100 ) {
        nav.classList.add("headerMoved");
    } else {
        nav.classList.remove("headerMoved");
    }
}