const menuBtn = document.querySelector('.header__btn-burger');
const menuMobile = document.querySelector('.header__top');

menuBtn.addEventListener('click', () => {
  menuMobile.classList.toggle('nav--open');
});

menuBtn.addEventListener('click', () => {
  menuBtn.classList.toggle('active');
});
