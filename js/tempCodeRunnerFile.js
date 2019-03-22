let options = {          // создание обьект
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