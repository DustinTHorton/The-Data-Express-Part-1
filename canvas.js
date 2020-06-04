let url = "/api";

fetch(url)
    .then(res => res.json())
    .then(dataTime => drawStuff(dataTime)) 


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d')

canvas.width=600;
canvas.height=400;

const drawStuff = () => {


    ctx.fillStyle = '#405';
    ctx.fillRect(100, 100, 80, 40);

    ctx.strokeStyle = '#3c3'
    ctx.strokeRect(200, 100, 40, 80)


    ctx.fillRect(300, 100, 80, 40);
    ctx.strokeRect(300, 100, 80, 40);

    ctx.fillStyle = '#008080';
    ctx.beginPath();
    ctx.moveTo(450, 10);
    ctx.lineTo(420, 35);
    ctx.lineTo(450, 60);
    ctx.lineTo(450, 10);
    ctx.stroke();
    
    ctx.fillStyle = '#115935';
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,50);
    ctx.lineTo(50,25);
    ctx.lineTo(25,25);
    ctx.lineTo(25,0);
    ctx.stroke();

    ctx.fillStyle = '#115935';
    ctx.beginPath();
    ctx.moveTo(0,0);
    ctx.lineTo(0,50);
    ctx.lineTo(50,25);
    ctx.lineTo(25,25);
    ctx.lineTo(25,0);
    ctx.fill();

}

const loop = () => {
    drawStuff();
}

setInterval(loop, 50);