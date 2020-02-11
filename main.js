/* Zero issue */
let first = 127;
let second = 204;
let third = 192;
let random = Math.random();

console.log ('background-color: rgba('
    + String(first) + ', '
    + String(second) + ', '
    + String(third) + ', '
    + String(random) + ')');

/* First issue */
const MIN_AGE = 18;
let age = 30;
if (typeof age === 'undefined' || Number.isNaN(age) || !Number.isFinite(age)) {
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

/* Second issue */
let firstNumber = 10;
let secondNumber = 15;
let max = secondNumber > firstNumber ? secondNumber : firstNumber;
console.log(max);


/* Third issue */
const TIME = +prompt('Введите число от 0 до 23', '');

switch (TIME) {
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
        alert('Мам, можно еще чуть-чуть поспать');
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
        alert('Урррааа :)');
        break;
    default:
        alert( 'Вы ввели число не из диапазона' );
}

/* Third issue (additional) */
const TIME2 = +prompt('Введите число от 0 до 23', '');

if (TIME2 >= 0 && TIME2 < 2) {
    alert('Сутки только начались');
} else if (TIME2 >= 2 && TIME2 < 5) {
    alert('Еще рано, можно спать');
} else if (TIME2 >= 5 && TIME2 < 7) {
    alert('Мам, можно еще чуть-чуть поспать');
} else if (TIME2 >= 7 && TIME2 < 10) {
    alert('Собираемся в школу');
} else if (TIME2 >= 10 && TIME2 < 14) {
    alert('Уроки в школе');
} else if (TIME2 >= 14 && TIME2 < 17) {
    alert('Продленка');
} else if (TIME2 >= 17 && TIME2 < 19) {
    alert('Дорога домой');
} else if (TIME2 >= 19 && TIME2 <= 23) {
    alert('Урррааа :)');
} else
    alert( 'Вы ввели число не из диапазона' );


