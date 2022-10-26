class TypeWriter {
  constructor(txtElement, words, wait = 1500) {
    this.txtElement = txtElement
    this.words = words
    this.wait = wait
    this.wordIndex = 0
    this.txt = ''
    this.isDeleting = false
    this.type()
  }

  type() {
    let speed = 300
    let currentIndex = this.wordIndex % this.words.length
    let currentWord = this.words[currentIndex]

    if (this.isDeleting) {
      speed = speed / 2
      this.txt = currentWord.substring(0, this.txt.length - 1)
    } else {
      speed = 500
      this.txt = currentWord.substring(0, this.txt.length + 1)
    }

    this.txtElement.innerHTML = this.txt

    if (!this.isDeleting && this.txt === currentWord) {
      this.isDeleting = true
      speed = this.wait
    } else if (this.isDeleting && this.txt === '') {
      this.wordIndex++
      this.isDeleting = false
    }

    setTimeout(() => this.type(), speed)

  }
}

document.addEventListener('DOMContentLoaded', init)

function init() {
  let txtElement = document.querySelector('.text')
  let words = JSON.parse(txtElement.getAttribute('data-words'))
  let wait = txtElement.getAttribute('data-wait')
  new TypeWriter(txtElement, words, wait)
}