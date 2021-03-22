//<Slider>====================================================
const sliderItem = document.querySelectorAll('.slider-item');
const sliderTrack = document.querySelector('.slider-track');
const slideNext = document.querySelector('.btn-next');
const slidePrev = document.querySelector('.btn-prev');
//============================================================

document.addEventListener('touchstart', hendleTouchStart, false);
document.addEventListener('touchmove', hendleTouchMove, false);

// const logblock = document.querySelector('');

let x1 = null;
let y1 = null;


// функция для записи координат косания
function hendleTouchStart(event) {
   const firstTouch = event.touches[0];

   x1 = firstTouch.clientX;
   y1 = firstTouch.clientY;

   // console.log(x1, y1);

}

function hendleTouchMove(event) {
   if (!x1 || !y1) {
      return false;
   }
   let x2 = event.touches[0].clientX;
   let y2 = event.touches[0].clientY;
   // console.log(x2, y2);

   let xDiff = x2 - x1;
   let yDiff = y2 - y1;

   if (Math.abs(xDiff) > Math.abs(yDiff)) {
      //по оси X
      if (xDiff > 0) console.log('right');
      else console.log('left');
   }
   else {
      //по оси Y
      if (yDiff > 0) console.log('bottom');
      else console.log('top');
   }
   x1 = null;
   y1 = null;
}


//====================================================
let count = 0;
let width;

function init() {
   // Вывод информации о том, что произошел перещет
   console.log("resize");

   // Узнаем ширину Слайдера 
   width = document.querySelector('.slider-container').offsetWidth;

   // Узнаем ширину Slider-track
   sliderTrack.style.width = width * sliderItem.length + 'px';

   // Делаем все Slider-item равными ширине Слайдера
   sliderItem.forEach(item => {
      item.style.width = width + 'px';

      // "Напоминаем" браузеру сохранять прапорции изображеня
      // Как только мы изменить ширину, высота будет изменяться автоматически
      item.style.height = "auto";
   });

   // 
   rollSlider()
}


// Добавляем событие, которое будет срабатывать при изменении размеров экрна
window.addEventListener('resize', init);

// Выводим финкцию init 
init();


// Делаем перелистывание слайдера вправо 
slidePrev.addEventListener('click', function () {
   // Листаем назад slider-track
   count--

   // Делаем проверку края смещения slider-track
   if (count < 0) {
      count = sliderItem.length - 1;
   }

   // Вызываем функциия отвечающая за смещения slider-track
   rollSlider();

});


// Делаем перелистывание слайдера влево 
slideNext.addEventListener('click', function () {
   // Листаем вперед slider-track
   count++

   // Делаем проверку края смещения slider-track
   if (count >= sliderItem.length) {
      count = 0;
   }

   // Вызываем функциия отвечающая за смещения slider-track
   rollSlider();

});


// Функциия отвечающая за смещения slider-track
function rollSlider() {
   // Смещаем slider-track влево
   sliderTrack.style.transform = 'translate(-' + count * width + 'px)';
}



// Делаем переключение Slider свайпом




// /Делаем переключение Slider свайпом

//</Slider>===================================================;

//<menu and menu-burger>======================================
const body = document.body;
const menuBtn = document.querySelector('.icon__menu');
const menuBody = document.querySelector('.menu__body');
//</menu and menu-burger>======================================


//<tabs and accordion>======================================
const tabs = document.querySelectorAll("[data-tab]");
const contentBoxes = document.querySelectorAll('[data-tab-content]')
const activeItem = document.querySelector(".accordion");
//</tabs and accordion>======================================




//<menu and menu-burger>======================================
menuBtn.addEventListener('click', function () {
   menuBtn.classList.toggle('_active');
   menuBody.classList.toggle('_active');
   body.classList.toggle('_lock');
});
//</menu and menu-burger>======================================


//<tabs and accordion>======================================
let acc = document.getElementsByClassName("accordion__title");
for (let i = 0; i < acc.length; i++) {
   acc[i].addEventListener("click", function () {
      this.classList.toggle("active");
      for (let j = 0; j < acc.length; j++) {
         if (acc[j] != this) {
            acc[j].classList.remove("active");
            acc[j].nextElementSibling.style.maxHeight = null;
         }
      }
      let panel = this.nextElementSibling;
      if (panel.style.maxHeight) {
         panel.style.maxHeight = null;
      } else {
         panel.style.maxHeight = panel.scrollHeight + "px";
      }
   });
}


// Добавляем по клику  класс category__item_active, а у остальных убираем
activeItem.addEventListener('click', function (e) {
   if (e.target.classList.contains('category__item')) {
      const selected = this.querySelector('.category__item_active');
      if (selected) {
         selected.classList.remove('category__item_active');
      }
      e.target.classList.add('category__item_active');
   }
});


tabs.forEach(function (item) {
   item.addEventListener('click', function () {

      // 1. Скрыть все content box
      contentBoxes.forEach(function (item) {
         item.classList.add('hidden');
      });

      // 2. Выбрать нужный элемент и показать его
      const contentBox = document.querySelector('#' + this.dataset.tab);
      contentBox.classList.remove('hidden');

   });
});

//</tabs and accordion>======================================




//<Пишем слово вокруг logo>===========================
function rotateMain(value) {
   const logoInner = document.querySelectorAll('.circle__inner');

   deg = -45;

   for (let item of logoInner) {
      item.style.transform = `rotate(${deg}deg)`;
      deg += value;

   }
   return value;
}
rotateMain(40);

function rotateOuther(value) {
   const logoText = document.querySelectorAll('.circle__text');

   deg = 0;
   for (let item of logoText) {
      item.style.transform = `rotate(${deg}deg)`;
      deg += value;

   }
   return value;
}
rotateOuther(26);
//</Пишем слово вокруг logo>===========================



