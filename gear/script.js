let t1, t2;
let start = false;
const engine = new Audio('./audio/engine.mp3');
const audio = new Audio('./audio/car.mp3');
engine.loop = true;
engine.volume = 0.3;

document.querySelector('.start').addEventListener('click', function () {
    if (start === false) {
        start = true;
        this.innerHTML = 'stop';
        engine.play();
        document.querySelector('.treadle').addEventListener('click', pushTreadle); // событие на педаль;
        document.querySelector('.progress-line').style.width = '100px';
    }
    else {
        // глушим
        start = false;
        this.innerHTML = 'start';
        engine.pause();
        document.querySelector('.treadle').removeEventListener('click', pushTreadle); // событие на педаль;
        document.querySelector('.progress-line').style.width = '0';
        document.querySelector('.treadle').classList.remove('treadle-push');
        t1 = clearTimeout(t1);
        t2 = clearTimeout(t2);
        audio.pause();
        audio.currentTime = 0;
    }
});

function pushTreadle() {
    t1 = clearTimeout(t1);
    t2 = clearTimeout(t2);
    this.classList.add('treadle-push');
    document.querySelector('.progress-line').style.width = '300px';
    audio.play();
    stopTreadle();
}

function stopTreadle() {
    t1 = setTimeout(() => {
        document.querySelector('.treadle').classList.remove('treadle-push');
        document.querySelector('.progress-line').style.width = '100px';
    }, 1000);
    t2 = setTimeout(() => {
        audio.pause();
        audio.currentTime = 0;
    }, 1500);
}