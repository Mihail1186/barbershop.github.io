ymaps.ready(init);

function init() {
   var myMap = new ymaps.Map('map', {
      center: [53.122237, 25.983599],
      zoom: 17,
      // controls: []
   }, {
      searchControlProvider: 'yandex#search'
   });

   var placemark = new ymaps.Placemark(myMap.getCenter(), {
      // Зададим содержимое заголовка балуна.
      balloonContentHeader: '<div class="map-schedule"><ul class="map-schedule__list  schedule"><li class="schedule__item"><a class="schedule__logo-link" href = "##"><img class="schedule__logo-img" src="images/logo.svg" alt="Logo"></a></li>',


      // Зададим содержимое основной части балуна.
      balloonContentBody: '<li class="schedule__item"><address class="address"><span>Адрес:</span><span>г. Барановичи,<br> улица Брестская, д. 226</span></address></li>' + '<li class="schedule__item"><ul class="schedule-schedule__list"><li class="schedule-schedule__item">Пн-Пт: 09:00 — 19:00</li><li class="schedule-schedule__item">Сб: 11:00 — 16:00</li><li class="schedule-schedule__item">Вс: выходной</li></ul></li>' + '<li class="schedule__item"><a class="schedule__feedback" href="tel:+79211637940">Связаться с мастером можно по личному телефону</a></li></ul></div>',

      // Зададим содержимое всплывающей подсказки.
      hintContent: 'Парикмахерская'




   });


   // Добавим метку на карту.
   myMap.geoObjects.add(placemark);


   // Откроем балун на метке.
   placemark.balloon.open();

   // Отключаем scrollZoom на карте
   myMap.behaviors.disable('scrollZoom');
}