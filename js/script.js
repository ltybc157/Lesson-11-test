/*let options = {          // создание обьект
    width : 1366,        // задали ширину
    height : 768,        // задали высоту
    background: 'red',   // задний фон красный задали виде строки
    font: {              // обьект внутри обьекта //настройки шрифта
       size: '16px',     // размер шрифта
       color: '#'        // цвет по ка задали никакой #
    }
};
//console.log(JSON.stringify(options));//встроенный обьект JSON
console.log(JSON.parse(JSON.stringify(options)));//2 способ чтобы превратить в обычный обьект
              что выполняли до 10 минуты в 11 урок*/

let inputRub = document.getElementById('rub'), //вызываем input рублей
   inputUsd = document.getElementById('usd'); //вызываем input долларов

inputRub.addEventListener('input', () => { //навышивает обработчик событий input
   let request = new XMLHttpRequest(); // это главный обьект для работы с реат запросами у него есть свое методы свойства и события
   //request.open(method, url, async, login, pass);// этот метод может принимать 5 различных элементов
   request.open('GET', 'js/current.json'); //запрос к серверу 1 задаём метод обращения 2 аргументом задаём куда обращатся
   request.setRequestHeader('Content-type', 'application/json; charset=utf-8'); //запрос к серверу 1 задаём метод обращения 2 аргументом задаём куда обращатся в кадировке  charset=utf-8
   request.send(); // он запускает запрос и обращается к серверу
   // перtчесляем свойства  send()
   // status                     // отвечает в каком состоянии находится сервер //получаем именно код 400 404 и т.д
   // statusText                 // получает именно текстовый ответ ok и т.д
   // responseText / response    // содержит текст  ответа  сервера 
   // readyState                 // содержит текущее состояние запроса
   //
   request.addEventListener('readystatechange', function () { //навешиваем на наш обработчик запрос
      //здесь сервер будет отвечать нам на запросы наши 
      if (request.readyState === 4 && request.status == 200) { //прописываем условия
          let data = JSON.parse(request.response); //создаёт переменную в которой находятся ответы сервера
          inputUsd.value = inputRub[0].value / data.usd;
      } else { // записываем если что-то пошло не так
         inputUsd.value = 'что-то пошло не так !';
      }
   });

});