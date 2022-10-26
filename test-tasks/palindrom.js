// #1
/*
function palindrom(str) {
    // нижний регистр
    str = str.toLowerCase();
    // строку в массив
    let str2 = str.split('');
    // развернуть массив
    str2 = str2.reverse();
    // объединяем строку
    str2 = str2.join('');

    if (str === str2) return true;
    else return false;
}

console.log(palindrom('аппа'));
*/

// #2
/*
function palindrom(str) {
    // нижний регистр
    str = str.toLowerCase();
    return str === str.split('').reverse().join('');
}

console.log(palindrom('аппа1'));
*/
// #3

// const palindrom = str => {
//     str = str.toLowerCase();
//     return str === str.split('').reverse().join('');
// }

// console.log(palindrom('Hello'));

// #4
let str = 'abBa'

palindrom = (str) => str === str.toLowerCase().split('').reverse().join('')

// console.log(palindrom(str))

pal = (str) => str === str.toLowerCase().split('').reverse().join('')

// console.log(pal(str))

function pali(str) {
  let current = str.toLowerCase().split('').reverse().join('')
  return current == str
}

console.log('pali', pali(str))
