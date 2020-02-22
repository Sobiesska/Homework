//* First issue (forEach)
let array = [10, 20, 40, 5, 13];
let sum = 0;
function getSum(item) {
    sum += item;
}
array.forEach(getSum);
console.log(sum);


//* First issue (for)
function sumInput() {
    let array = [10, 20, 40, 5, 13];
    let sum = 0;
    for (let key of array) {
        sum += key;
    }
    return sum;
}
console.log(sumInput());


//* Second issue (forEach)
let first = [2, 3];
let second = [3, 8];
let result = [];
if (first.length == second.length) {
    function newArray(item, index, array) {
        result[index] = first[index] + second[index];
    }
    second.forEach(newArray);
    console.log(result);
} else
    console.log('Arrays have different lengths');


//* Second issue (for)
let first = [2, 7];
let second = [3, 8];
let result = [];
let i = 0;
if (first.length == second.length) {
    function newArray(item, index, array) {
        for (; i < first.length; i++) {
            result[i] = first[i] + second[i];
        }
        return result;
    }
    console.log(newArray());
} else console.log('Arrays have different lengths');


//* Third issue (forEach)
let firstArray = [10, 12];
let secondArray = [10, 70];
let thirdArray = [10, 13, 100];
let sum = 0;
let result = [];
result = result.concat(firstArray, secondArray, thirdArray);
function arraysSum(item) {
    sum += item;
}
result.forEach(arraysSum);
console.log(sum);


//* Third issue (for)
let firstArray = [10, 12];
let secondArray = [10, 70];
let thirdArray = [10, 13, 110];
let sum = 0;
let fourthArray = [];
let result = fourthArray.concat(firstArray, secondArray, thirdArray);
function arraysSum(item) {
    for (let key of result) {
        sum += key;
    }
    return sum;
}
console.log(arraysSum());


//* Fourth issue (.map)
let primaryArray = [1, 4, 5, 1, 3, 3];
let secondaryArray = primaryArray.map(item => item*item);
console.log(secondaryArray);


//* Fourth issue (for)
let primaryArray = [1, 4, 5, 1, 3, 3];
let secondaryArray = [];
let i = 0;
for (let key of primaryArray) {
    secondaryArray[i] = key*key;
    i++;
}
console.log(secondaryArray);


//* Fifth issue (.filter)
let allNames = ['fasf', 'cer', 'fdsfkjdh', 'kot'];
let fewNames = [];
function isShortName(item, array) {
    fewNames = allNames.filter(item => item.length < 4);
}
isShortName(allNames);
console.log(fewNames);


//* Fifth issue (for)
let allNames = ['fasf', 'cer', 'fdsfkjdh', 'kot'];
let fewNames = [];
function isShortName(item, index, array) {
    for (let key of allNames) {
        if (key.length < 4) {
            fewNames.push(key);
        }
    }
}
isShortName(allNames);
console.log(fewNames);



/* Задание:
1. Есть массив чисел, посчитать сумму всех элементов используя
for обычный и forEach. Реализовать через функцию, которая на вход принимает
массив.

2. Функиция принимает два массива. Возвращает новый массив, где каждый элемент это сумма двух других массив
var first = [2, 3]
var second = [3, 2]
var result = [5, 5];
Реализовать через forEach и for

    3.  Есть 3 массива, посчитать их общую сумму. На выходе одно число.
    Должна быть функция, которая принимае эти 3 массива, на выходе возвращает 1 число
var first = [2, 3]
var second = [3, 2]
var result = [5, 5];

4. Есть массив [1, 4, 5, 1, 3, 3] На основе его создать новый массив, где
будут квардат каждого число, используя for и map

5. Есть массив имен ['fasf', 'cvser', 'fdsf']. На вход функции
Создать новый массив на выходе, который вернет имена, которые меньше 4 букв
Цикл for метод filter
 */