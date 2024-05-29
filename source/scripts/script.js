const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');
const navList = document.querySelector('.navigation__list');

navMain.classList.remove('navigation--nojs');

navToggle.addEventListener('click', () => {
  if (navMain.classList.contains('navigation--closed')) {
    navMain.classList.remove('navigation--closed');
    navList.classList.remove('navigation__list--closed');

    navMain.classList.add('navigation--opened');
    navList.classList.add('navigation__list--open');
  } else {
    navMain.classList.add('navigation--closed');
    navList.classList.add('navigation__list--closed');

    navMain.classList.remove('navigation--opened');
    navList.classList.remove('navigation__list--open');
  }
});
