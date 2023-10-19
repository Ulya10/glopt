const slider = tns({
  container: '.feedback__slider',
  items: 1,
  slideBy: 'page',
  autoplay: false,
  controls: false,
  nav: true,
  responsive: {
    769: {
      nav: false
    }
  }
});

document.querySelector('.feedback__left').addEventListener('click', function () {
  slider.goTo('prev');
});

document.querySelector('.feedback__right').addEventListener('click', function () {
  slider.goTo('next');
});

const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
hamburger.addEventListener('click', function(){
  openMenu(menu);
});

function openMenu(tagMenu) {
  tagMenu.classList.toggle('menu_active');
  hamburger.classList.toggle('hamburger_active');
};

function closeMenu(tagMenu){

}