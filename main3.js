// First issue
let user1 = {
    name: 'Dima',
    age: 35,
    eyeColor: 'green',
    weight: 90,
    canRun: true,
};
function copy(oldObj) {
    let newObj = {};
    for (let prop in oldObj) {
        newObj[prop] = oldObj[prop];
    }
    return newObj;
};
let newUser1 = copy(user1);
console.log(newUser1);


// Second issue
let article1 = {
    title: 'hoodie',
    color: 'beige',
    size: 'M',
    height: 70,
    width: 80,
    material: 'cotton',
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
function isEquil(firstObj, secondObj) {
    if (Object.values(firstObj).length !== Object.values(secondObj).length) {
        return false;
    }
    for (let key in firstObj) {
        if (firstObj[key] !== secondObj[key]) {
            return false;
        }
    }
    return true;
}
let result = isEquil(article1, article2);
console.log(result);


// Third issue
let user2 = {
    name: 'Anna',
    age: 23,
    eyeColor: 'brown',
    weight: 56,
    canRun: false,
};
function copyWithModify(origin, newName, newAge, newEyeColor) {
    const newObj = copy(origin);
    newObj.name = newName;
    newObj.age = newAge;
    newObj.eyeColor = newEyeColor;
    return newObj;
};
let user3 = copyWithModify(user2, 'Max', 20, 'red');
console.log(user3);
