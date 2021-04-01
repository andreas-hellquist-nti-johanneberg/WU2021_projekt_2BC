const toggleHamburgerMenu = () => {
    document.querySelector ("nav#mobile-hamburger-menu").classList.toggle ("show");
    document.querySelector ("div.fade-layer").classList.toggle ("show");

    // Stop the scrolling of the webpage below
    document.querySelector ("body").classList.toggle ("stop-scroll");
}

document.querySelector ("nav#top-nav-mobile #hamburger-menu-button").addEventListener ("click", toggleHamburgerMenu);
// If the user clicks on one of the links the menu should obviously hide
document.querySelector ("nav#mobile-hamburger-menu").addEventListener ("click", toggleHamburgerMenu);
// If the user clicks outside of the menu it should hide
document.querySelector ("div.fade-layer").addEventListener ("click", toggleHamburgerMenu);
