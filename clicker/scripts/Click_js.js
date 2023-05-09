let click = 0;

function increment(e) {
    let x = e.clientX - 240;
    let y = e.clientY - 160;
    let dist = Math.sqrt(y * y + x * x);
    if (dist < 50) {
        click++;
        redraw();
    }    
}

let canvasClick = document.getElementById('Canvas');
canvasClick.addEventListener('click', increment);
let ctx = canvasClick.getContext('2d');

function redraw() {
    ctx.clearRect(0, 0, canvasClick.width, canvasClick.height);
    ctx.font = '20px Verdana';
    ctx.fillText('Клики: ' + click, 190, 20);
    ctx.beginPath();
    ctx.fillStyle = 'red';
    ctx.arc(canvasClick.width/2, canvasClick.height/2, 50,0,2*3.14);
    ctx.fill();
}

redraw();