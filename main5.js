//* First issue (push)
let arr = ['jhsjdjk', 'eirukmna'];
function push(arr) {
    let i = 1;
    for (; i < arguments.length; i++) {
        console.log(arguments[i]);
    }
}
push(arr, 1, 5, 986897698, 'jkkkjbk', 'df');


//* First issue forEach(arr, fn)
let list = ['kdsb', 'hjdb', 'cbcnx'];
let str = '';
function forEach(arr, fn) {
    let i = 0;
    for (; i < arr.length; i++) {
        fn( (arr[i], i, arr) );
    }
}
forEach(list, fn:function (item, index, arr) {
    str += item;
});


//* Issue deepEqual
let first = {
 name: 'Dima',
    age: 29,
    isAdmin: true,
    adress : {
        line1: "55 Green Park Road",
        line2: "Purple Valley"
    },
    parents : [
        'mother', 'father'
    ],
    sum : function(a, v) {
        return a + v;
    },
    mul1 : function(q, w) {
        return q * w;
    }
};
let second = {
    name: 'Dima',
    age: 29,
    isAdmin: true,
    adress : {
        line1: "55 Green Park Road",
        line2: "Purple Valley"
    },
    parents : [
        'mother', 'father'
    ],
    sum : function(a, v) {
        return a + v;
    },
    mul1 : function(q, w) {
        return q * w;
    }
};
function deepEqual(first,second) {
    if (typeof first == 'object' && typeof second == 'object') {
        if (typeof first === 'undefined' || first === null || Number.isNaN(first) || Number.isFinite(first) ||
        first === '0' || second === 'undefined' || second === null || Number.isNaN(second) || Number.isFinite(second)
        || second === '0') {
            return false;
    } else if (Object.keys(first).length == Object.keys(second).length) {
            if (Object.keys(first) == Object.keys(second) && Object.values(first) == Object.values(second)) {
                return true;
            }
            return false;
        }
        return false;
    }
    return false;
}
console.log(deepEqual(first, second));


/*
Сделать реализицию нативных (встроенных) методов испльзуя только цикл for (var i = 0; i < arr.length; i++)
Функция принимают на вход массив и функцию колбэк

push(arr, 'df')

arr.forEach(fn) уже есть в JS
forEach(arr, fn) вы сами делает

arr.map(fn)
map(arr, fn)

some(arr, fn)
every(arr, fn)

filter(arr, fn)

 */