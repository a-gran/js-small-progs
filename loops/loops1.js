// first

let out = document.querySelector('.out1')

for (let i = 0; i < 5; i++) {
  // console.log('*')
  for (let j = 0; j < 10; j++) {
    out.innerHTML += j
  }
  out.innerHTML += '#<br>'
}

//second

let out2 = document.querySelector('.out2')

for (let b = 2; b < 6; b++) {
  for (let k = 1; k < 10; k++) {
    out2.innerHTML += `${b} * ${k} = ${k * b}<br>`
  }
  out2.innerHTML += '<hr>'
}