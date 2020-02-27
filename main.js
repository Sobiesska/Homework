//* Zero issue
let red = 127;
let green = 204;
let blue = 192;
let random = Math.random();
console.log('background-color: rgba(' + red + ',' + green + ',' + blue + ',' + random + ')');


//* First issue
const MIN_AGE = 18;
let age = 30;
if (typeof age === 'underfined' || Number.isNaN(age) || !Number.isFinite(age)) {
    console.log('Данный формат данных не поддерживается');
} else {
    age = Number(age);
    if (Number.isNaN(age)) {
        console.log('Вы ввели некорректную строку');
    } else if (age >= MIN_AGE) {
        console.log('Доступ разрешен');
    } else {
        console.log('Доступ запрещен');
    }
}


//* Second issue
let firstNumber = 10;
let secondNumber = 15;
let max = secondNumber > firstNumber ? secondNumber : firstNumber;
console.log(max);


//* Third issue
let time = +prompt('Введите число от 0 до 23', '');
switch (time) {
    case 0:
    case 1:
        alert('Сутки только начались');
        break;

    case 2:
    case 3:
    case 4:
        alert('Еще рано, можно спать');
        break;

    case 5:
    case 6:
        alert('Мам, можно еще чуть-чуть поспать?');
        break;

    case 7:
    case 8:
    case 9:
        alert('Собираемся в школу');
        break;

    case 10:
    case 11:
    case 12:
    case 13:
        alert('Уроки в школе');
        break;

    case 14:
    case 15:
    case 16:
        alert('Продленка');
        break;

    case 17:
    case 18:
        alert('Дорога домой');
        break;

    case 19:
    case 20:
    case 21:
    case 22:
    case 23:
        alert('Ураааа :)');
        break;

    default:
        alert('Вы ввели число не из диапазона');
}


//* Third issue (additional)
let time2 = +prompt('Введите число от 0 до 23', '');
if (time2 >= 0 && time2 < 2) {
    alert('Сутки только начались');
} else if (time2 >= 2 && time2 < 5) {
    alert('Еще рано, можно спать');
} else if (time2 >= 5 && time2 < 7) {
    alert('Мам, можно еще чуть-чуть поспать?');
} else if (time2 >= 7 && time2 < 10) {
    alert('Собираемся в школу');
} else if (time2 >= 10 && time2 < 14) {
    alert('Уроки в школе');
} else if (time2 >= 14 && time2 < 17) {
    alert('Продленка');
} else if (time2 >= 17 && time2 < 19) {
    alert('Дорога домой');
} else if (time2 >= 19 && time2 <= 23) {
    alert('Ураааа :)');
} else
    alert('Вы ввели число не из диапазона');



/*
Задачка 0 - конкатинация строк
Math.random() - вернет случайное число от 0 до 1;
var first = 50;
var second = 60;
var third = 100;
var random = Math.random();
Должна быть стока такого формата 'background-color: rgba(255, 255, 255, случайное число)';


Вывести сообщение либо console.log('Строка') либо alert('Строка ')
Задачка: 1

1. В начале кода обьявить переменную age любого типа данных.
2.
 - Если это число:
   - Проверьте, что если число больше 18 включительно - выведите сообщение в консоль "Доступ разрешен"'
   - Если же меньше - выведите "Доступ запрещен"
 - Если переменная строчного типа - попытаться приобразовать к числу.
   - Если значение преобразовывается к числу - проверьте это его аналогично с предыдущим условием (больше/меньше 18)
   - Если же нет - вывести ошибку что вы ввели неккоректную строку
 - Если же ввели любой другой тип данных - вывести ошибку: "Данный формат данных не поддерживается"

Задачка: 2
1. Обьявите два любых числа
2. После чего объявите переменную max и запишите в нее максимальное число из первых двух основывась на тернарном операторе


Настроятельно рекомендую
Сначала прочитать, https://learn.javascript.ru/switch - Почитать, принять, понять и смириться
потом сделать
number > 0 && number <= 2
Задачка: 3
Используя оператор switch case, на вход может придти число от 0 до 23
Если число от 0 до 2 - выведите сообщение: "Сутки только начались"
Если число от 2 до 5 - выведите сообщение: "Еще рано, можно спать"
Если число от 5 до 7 - выведите сообщение: "Мам, можно еще чуть-чуть по спать"
Если число от 7 до 10 - выведите сообщение: "Собираемся в школу"
Если число от 10 до 14 - выведите сообщение: "Уроки в школе"
Если число от 14 до 17 - выведите сообщение: "Продленка"
Если число от 17 - 19 - выведите сообщение: "Дорога домой"
Если число от 19 - 23 - выведите сообщение: "Урррааа :)"

Доп. задача
Сделать 3 задачу с помощью if else
 */
