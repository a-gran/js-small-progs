// #1 возвращение двух массивов четных и нечетных чисел из массива чисел

let arr = [4, 5, 10, 13, 0, -7, 8, 12, 36];

let arrEven = []; // массив четных чисел
let arrOdd = []; // массив нечетных чисел

function number(arr) {
    for(let i = 0; i <arr.length; i++) {
        if (arr[i] % 2) {
            arrOdd.push(arr[i]);
        } else {
            arrEven.push(arr[i]);
        }
    }

    return arrEven, arrOdd;
}

number(arr);
console.log(arrEven);
console.log(arrOdd);

// #2 возвращение кол-ва четных и нечетных чисел из массива чисел, исключая 0

let arr1 = [4, 5, 10, 13, 0, -7, 8, 12, 36, 67, 101];

function number1() {
    let even = 0; // кол-во четных чисел
    let odd = 0; // кол-во нечетных чисел
    let arr2 = [];

    for(let i = 0; i < arr1.length; i++) if (arr1[i] !== 0) arr2.push(arr1[i]);

    for(let i = 0; i < arr2.length; i++) {
        if (arr2[i] % 2) odd++; 
        else even++;
    }

    return [even, odd];
}

number1(arr1);
console.log('number1(arr1)', number1(arr1));

// #3 возвращение кол-ва четных и нечетных цифр в числе, исключая 0

let num = '1245672890005677';

function evenOddNum() {
    let even = 0; // кол-во четных чисел
    let odd = 0; // кол-во нечетных чисел
    let numWithout0 = [];

    for(let i = 0; i < num.length; i++) if (num[i] != 0) numWithout0.push(num[i]);

    for(let j = 0; j < numWithout0.length; j++) {
        if (numWithout0[j] % 2) odd++; 
        else even++;
    }

    return [even, odd];
}

evenOddNum(num);
console.log('evenOddNum(num)', evenOddNum(num))

// #4 вывести первые 5 чисел последовательности фибоначи

let num3 = 40;

function fib (count) {
    let fib = [];

    for (let i = 0; i < count; i++) {
        if(i === 0) fib[i] = 1;
        if(i === 1) fib[i] = 2;
        else {
            fib.push(fib[i - 1] + fib[i - 2]);
        }        
    }

    return fib;
}

console.log(fib(num3));