// For
let sum1= 0;
let x = 0;
let string1 = 'adfsdfdsaffasfaaaaasfsfasfdsf';
for (; x < string1.length; x++) {
    if (string1[x] === 'a') {
        sum1 += 1;
    }
}
console.log(sum1);


// While
let sum2 = 0;
let y = 0;
let string2 = 'adfsdfdsaffasfaaaaasfsfasfdsf';
while (y < string2.length) {
    if (string2[y] === 'a') {
        sum2 += 1;
    }
    y += 1;
}
console.log(sum2);


// Do-While
let sum3 = 0;
let z = 0;
let string3 = 'adfsdfdsaffasfaaaaasfsfasfdsf';
do {
    if (string3[z] === 'a') {
        sum3 += 1;
    }
    z += 1;
} while (z < string3.length);
console.log(sum3);


// Function
function getSum(str, char) {
    let sum = 0;
    let i = 0;
    for (; i < str.length; i++) {
        if (str[i] === char) {
            sum += 1;
        }
    }
    return sum;
}
let result = getSum('adfsdfdsaffasfaaaaasfsfasfdsf', 'a');
console.log(result);