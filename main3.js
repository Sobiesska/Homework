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