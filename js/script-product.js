var swiper = new Swiper('.swiper-small', {
  loop: true,
  freeMode: true,
  watchSlidesProgress: true,
});
var swiper2 = new Swiper('.swiper-big', {
  loop: true,
  navigation: {
    nextEl: '.product__button-up',
    prevEl: '.product__button-down',
  },
  thumbs: {
    swiper: swiper,
  },
});

var swiper = new Swiper('.mySwiper-mob', {
  pagination: {
    el: '.swiper-pagination-mob',
  },
});

jQuery('.product__mid-states').click(function (e) {
  e.preventDefault();

  if (!jQuery(this).hasClass('product__mid-states--active')) {
    jQuery('.product__mid-states--active').removeClass(
      'product__mid-states--active'
    );
    jQuery(this).addClass('product__mid-states--active');
  }
});

jQuery('.product__mid-color').click(function (e) {
  e.preventDefault();

  if (!jQuery(this).hasClass('product__mid-color--active')) {
    jQuery('.product__mid-color--active').removeClass(
      'product__mid-color--active'
    );
    jQuery(this).addClass('product__mid-color--active');

    var colorTitle = jQuery(this).attr('title');
    jQuery('.product__mid-colors-value').text(' ' + colorTitle);
  }
});
