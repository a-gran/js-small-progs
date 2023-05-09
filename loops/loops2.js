// third

let out3 = document.querySelector('.out3')
let tmp = ''



// отрицательное приращение

// for (let i = 25; i > 0; i= i - 3) {
//   console.log('i', i)
// }



// break & continue

for (let i = 0; i < 10; i++) {
    if (i == 5) continue
    if (i == 7) break
    console.log('i', i)
  }



// альтернативные записи

// let i = 2
// for ( ; i < 10; i++) {
//   if (i == 5) continue
//   if (i == 7) break
//   console.log('i', i)
// }

let i = 1
for ( ; i < 10; ) {
  i++
  if (i == 5) continue
  if (i == 8) break  
  console.log('i', i)  
}



// while
let h = 0;
while (h < 8) {
  h++
  console.log('h', h)

  
}