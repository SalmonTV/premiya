const mobileOpenButton = document.getElementById('mobile-menu-icon');
const mobileCloseButton = document.getElementById('mobile-menu-close-button');
const mobileNav = document.getElementById('mobile-nav');
const mobileMenuLinks = document.querySelectorAll('._nav--mobile ._nav__link');

mobileOpenButton.onclick = function () {
  mobileNav.classList.add('mobile-nav--active');
  return false;
}

mobileCloseButton.onclick = function () {
  mobileNav.classList.remove('mobile-nav--active');
  return false;
}

Array.from(mobileMenuLinks).forEach(link => {
  link.addEventListener('click', function (event) {
    mobileNav.classList.remove('mobile-nav--active');
    return false;
  });
});