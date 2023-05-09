// MODAL WINDOW

// alert('Привет мир!')
// alert('Привет JS!')



// VARIABLES

let a = 3
let b = 5
// console.log(a + b)

let message; // a-z, A-Z, 0-9, $, _, first simbol not a number, registr, camelCase
let myMessage;
myMessage = 'Сообщение';
let myNewMessage = 'Новое сообщение'
// console.log('myNewMessage', myNewMessage)

let myNumber = -5.454 // example, all numbers
let myString = 'Привет Василиск' // all strings
let newMyString = '-4563,34' // this string too

let myBoolean = true

let myNull = null // значение переменной равно пустоте
// console.log('myNull', myNull)

let myUndefined = undefined // значение переменной не определено
// console.log('myUndefined', myUndefined)

let myNaN = NaN
// console.log('myNaN', myNaN) // not a number
// console.log('myNaN', typeof(myNaN)) // type number

let myObject = {
  name: 'Вася',
  age: 24,

  setName(name) {
    this.name = name
  },

  setCar(car) {
    this.car = car
  }
}
// console.log('myObject', typeof(myObject))

myObject.age = 35 // перезапись свойства объекта, используя обращение к соответствующему свойству объекта
myObject.isMarried = true // создание свойства объекта
myObject.setCar('bmw') // создание свойства объекта, используя метод объекта
myObject.setName('Олег') // перезапись свойства объекта, используя метод объекта

// delete myObject.name // удаление свойства объекта

// console.log('myObject', myObject)



// &#913 - заглавная буква альфа
// &#913 - заглавная буква альфа 
// &#913 - заглавная буква альфа 
// &#913 - заглавная буква альфа 




// NUMBERS

let res = 1 + 10
// alert(res)
// console.log('res', res)

let newRes = res + 1
// console.log('newres', newRes)

newRes += 1
// console.log('newRes', newRes)

newRes++
// console.log('newRes', newRes)

let resAround = Math.round(5.65)
// console.log('resAround', resAround)

let resCeil = Math.ceil(5.65)
// console.log('resCeil', resCeil)

let resFloor = Math.floor(5.65)
// console.log('resFloor', resFloor)

let newNumber = 4.68578
let newNumberFix = newNumber.toFixed(1) // отбрасывание до 1 знака с округлением
// console.log('newNumberFix', newNumberFix)



// STRINGS

let concat = res + '10' // concatenation
// console.log(concat) 

let concatString = 'hello, ' + 'JS' + '!'
// console.log('concatString', concatString)

let upStr = concatString.toLocaleUpperCase()
// console.log('upStr', upStr)

upStr = concatString.toLowerCase()
// console.log('upStr', upStr)



// ARRAYS

let names = ['John', 'Vasay', 'Merlyn']

let john = names[0]
// console.log('john', john)

let johnUp = names[0].toLocaleUpperCase()
// console.log('johnUp', johnUp)

// let arr2 = []
// замена строк в массиве на строки с заглавными буквами

names.forEach((item) => {  
  names.push(item.toUpperCase())
  names.shift()
})
// console.log('names', names)
// console.log('names[0]', names[0])
// console.log('names', names)

for(let i = 0; i < names.length; i++) {  
  names.push(names[i].toUpperCase())
  names.shift()
}
// console.log('names', names)

// let str = 'alex'
// let strUp = str[0].toUpperCase()
// console.log('strUp', strUp)

let arrStr = [ 
  ['alex'], 
  ['john'], 
  ['masha']
]

arrStr[0].forEach((item) => {  
  // console.log(item.toUpperCase())
})

let arrStr1 = ['alex', 'john', 'masha']

// так нельзя
// arrStr1[0].forEach((item) => {     
//   console.log(item.toUpperCase())
// })

// и так нельзя
// 'alex'.forEach((item) => {  
//   console.log(item.toUpperCase())
// })

arrStr1[1] = 'oleg'
// console.log('arrStr1', arrStr1)

arrStr1.push('Sveta')
// console.log('arrStr1[3]', arrStr1[3])



// CONDITIONS

/*
let condit = 5 // заготовка для игры угадай число от 0 до 10
let input = prompt()
if (input < condit) {
  alert('Число меньше!')
} 

if (input > condit) {
  alert('Число больше!')
} 

if (input == condit) {
  alert('Вы угадали!')
}
*/
let myNum = 20;
let name = 'Vasya'
// if ('5' !== 5) {
//   console.log('Условие выполнилось')
// }

// И

// if (myNum > 30 && name != 'Petya') {
//   console.log('Условие выполнено! :)')
// } else {
//   console.log('Условие НЕ выполнено :((')
// }

// ИЛИ

if (myNum > 30 || name != 'Petya') {
    // console.log('Условие выполнено! :)')
  } else {
      // console.log('Условие НЕ выполнено :((')
    }



// LOOPS

for (let i = 0; i < 15; i++) {
  i = i++
  if (i > 5 && i < 10) continue  
  // console.log(i)
}

for (let j = 0; j < arrStr1.length; j++) {
  // console.log(arrStr1[j].toUpperCase())
}

let i = 0;
while (i < arrStr1.length) {
  // console.log(arrStr1[i])
  i++
}



// FUNCTIONS

function test () {
  // console.log('делаем что-то...')
}

// test()

function sum (a, b) {
  // console.log(a + b)
}

// sum(5, 34)

let result = function (a, b) {  
  return a + b
}

// console.log(result(3, 34))



// OBJECTS

let car = {
  model: 'bmv5',
  color: 'красный',
  cost: 30000,

  getCarCharacters() {
    return 'Модель: ' + this.model + ' ' + 'Цвет: ' + this.color + ' ' + 'Цена: ' + this.cost
  }
}

console.log(car.getCarCharacters())