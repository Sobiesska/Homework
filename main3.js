/*
let user = {
    name: 'Dima',
    age: 35,
    eyeColor: 'green',
    weight: 90,
    canRun: true,
/*
    run: function () {
console.log('RUN');
    },
    back: function () {
        console.log('BACK');
    },
    /*

};
/*
user.back();
user.height = '180';
user.eyeColor = 'black';

for (let prop in user) {
    console.log(user[prop]);
}
*/

// First issue
let user = {
    name: 'Dima',
    age: 35,
    eyeColor: 'green',
    weight: 90,
    canRun: true,
};
function copy(object) {
    let copy = {};
    for (let prop in object) {
        copy[prop] = user[prop];
    }
    return copy;
};
let newUser = copy(user);
console.log(newUser);

// Second issue
let article1 = {
    title: 'hoodie',
    color: 'beige',
    size: 'M',
    height: 70,
    width: 80,
    material: 'coton',
    availability: true,
};
let article2 = {
    title: 'hoodie',
    color: 'beige',
    size: 'S',
    height: 68,
    width: 70,
    material: 'coton',
    availability: true,
};
function isEquil(firstObject, secondObject) {
    if (Object.values(firstObject).length !== Object.values(secondObject).length) {
        return false;
    }
    for (let key in firstObject) {
        if (firstObject[key] !== secondObject[key]) {
            return false;
        }
    }
    return true;
}
let result = isEquil(article1, article2);
console.log(result);





/*

ДЗ:
    1. Создать функцию copy, которая принимает на вход один объект и возвращает точную копию (новый объект) с
теми же свойствами.
2. Создать функцию isEquil, которая принимает на вход 2 объекта, сравнивает их свойства, возвращает true - если объекты
одинаковы по значениям или false, если чем-то отличаются


3. первая задачка но с измением name, age color -> перезаписать любыми значениями


function copyWithModify(origin, name, age, color) {

}

copyWithModify(user, 'Max', 20, 'red');
 */