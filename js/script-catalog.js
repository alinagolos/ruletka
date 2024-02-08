var btnMob = document.querySelector('.catalog__category-btn--mob');
var modal = document.querySelector('.catalog__category--mob');
var btnClose = document.querySelector('.catalog__category-btn--close');

btnMob.addEventListener('click', function () {
  modal.classList.add('open-menu');
});

btnClose.addEventListener('click', function () {
  modal.classList.remove('open-menu');
});
