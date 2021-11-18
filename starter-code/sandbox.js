
/*

let mobileToggle = document.querySelector('.mobile-nav-toggle');

let navbar = document.querySelector('#primary-navigation');

mobileToggle.addEventListener('click', showMobileNav);

let navState = 0;

function showMobileNav() {
  if(navState === 0) {
    mobileToggle.style.backgroundImage = 'url(./assets/shared/icon-close.svg)';
    navbar.style.transform = 'translateX(0)';
    navState ++;
  } else {
    mobileToggle.style.backgroundImage = 'url(./assets/shared/icon-hamburger.svg)';
    navbar.style.transform = 'translateX(100%)';
    navState --;
  }
}

*/

const nav = document.querySelector(".primary-navigation");
const navToggle = document.querySelector(".mobile-nav-toggle");

navToggle.addEventListener("click", () => {
    
    const visiblity = nav.getAttribute("data-visible");
    if (visiblity === "false") {
        nav.setAttribute("data-visible", true);
        navToggle.setAttribute("aria-expanded", true);
    } else {
        nav.setAttribute("data-visible", false);
        navToggle.setAttribute("aria-expanded", false);
    }
})