/* в этот файл добавляет скрипты*/
const header = document.querySelector('.header');
const navMain = document.querySelector('.navigation');
const navToggle = document.querySelector('.navigation__toggle');

header.classList.remove('header--nojs');
navMain.classList.remove('navigation--nojs');
navMain.classList.remove('navigation--opened');

const interactiveMap = document.querySelector('.contacts__map');
interactiveMap.classList.remove('contacts__map--nojs');

navToggle.addEventListener('click', () => navMain.classList.toggle('navigation--opened'));
