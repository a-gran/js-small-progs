// среднее значение целых чисел массива приведенное к целому

/* Условия:
 * Необходимо вывесте среднее значение чисел массива !
 * В массиве могут быть любые типы данных !
 * Необходимо, чтобы только целые числа использовались для вычисления !
 * Десятичные дроби долдны окрулгяться методом round !
 * числа с типом str приводится к int !
 * Результат должен быть округлен методом round до целого числа !
 * Написать тесты к этой задаче
 */

let arr1 = [1, 5, 10, '4', true]
let arr2 = [1, 5, 10, '4', true, 5.345]
let arr3 = [1, 5, 10, '4', true, 5.345, 'Hello']

function averageValueArray(arr) {
  let curArr = []
  let sum = 0
  let averValArr = 0
  for (let i = 0; i < arr.length; i++) {
    if (typeof arr[i] === 'number') {
      curArr.push(+arr[i])
    }
  }
  for (let j = 0; j < curArr.length; j++) {
    sum += Math.round(curArr[j])
  }
  averValArr = Math.round(sum / curArr.length)
  return averValArr
}

console.log(averageValueArray(arr3))
