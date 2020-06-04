let url = "/api";

fetch(url)
    .then(res => res.json())
    .then(dataTime => drawStuff(dataTime)) 


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d')
const canvas2 = document.getElementById('canvas2');
const ctx2 = canvas2.getContext('2d')
const canvas3 = document.getElementById('canvas3');
const ctx3 = canvas3.getContext('2d')

canvas.width=275;
canvas.height=400;

canvas2.width=275;
canvas2.height=400;

canvas3.width=275;
canvas3.height=400;


let player_x1 = 28;
let player_x2 = 103;
let player_x3 = 178;
let player_x4 = 253;



let width = 20;
let height = 20;

const drawStuff = (datas) => {
    console.log(datas)
    let Yoffset1 = canvas.height - (canvas.height *(datas.data.tootsiePercentages[0]/100) )
    let Yoffset2 = canvas.height - (canvas.height *(datas.data.tootsiePercentages[1]/100) )
    let Yoffset3 = canvas.height - (canvas.height *(datas.data.tootsiePercentages[2]/100) )
    let Yoffset4 = canvas.height - (canvas.height *(datas.data.tootsiePercentages[3]/100) )
    let Yoffset5 = canvas2.height - (canvas2.height *(datas.data.videoGamePercentages[0]/100) )
    let Yoffset6 = canvas2.height - (canvas2.height *(datas.data.videoGamePercentages[1]/100) )
    let Yoffset7 = canvas2.height - (canvas2.height *(datas.data.videoGamePercentages[2]/100) )
    let Yoffset8 = canvas2.height - (canvas2.height *(datas.data.videoGamePercentages[3]/100) )
    let Yoffset9 = canvas3.height - (canvas3.height *(datas.data.accountPercentages[0]/100) )
    let Yoffset10 = canvas3.height - (canvas3.height *(datas.data.accountPercentages[1]/100) )
    let Yoffset11 = canvas3.height - (canvas3.height *(datas.data.accountPercentages[2]/100) )
    let Yoffset12 = canvas3.height - (canvas3.height *(datas.data.accountPercentages[3]/100) )

    console.log(Yoffset1)

    ctx.clearRect(0,0,600,400)

    ctx.fillStyle = '#ff1500';
    ctx.fillRect(player_x1, Yoffset1, width, canvas.height *(datas.data.tootsiePercentages[0]/100));
    ctx.font = "15px Arial";
    ctx.fillText("1", 10, 15);

    ctx.fillStyle = '#ffe933';
    ctx.fillRect(player_x2, Yoffset2, width, canvas.height *(datas.data.tootsiePercentages[1]/100));
    ctx.font = "15px Arial";
    ctx.fillText("11", 10, 30);

    ctx.fillStyle = '#0000FF';
    ctx.fillRect(player_x3, Yoffset3, width, canvas.height *(datas.data.tootsiePercentages[2]/100));
    ctx.font = "15px Arial";
    ctx.fillText("364", 10, 45);

    ctx.fillStyle = '#6bff33';
    ctx.fillRect(player_x4, Yoffset4, width, canvas.height *(datas.data.tootsiePercentages[3]/100));
    ctx.font = "15px Arial";
    ctx.fillText("Other", 10, 60);

    ctx2.fillStyle = '#ff1500';
    ctx2.fillRect(player_x1, Yoffset5, width, canvas2.height *(datas.data.videoGamePercentages[0]/100));
    ctx2.font = "15px Arial";
    ctx2.fillText("Yes", 10, 15);

    ctx2.fillStyle = '#ffe933';
    ctx2.fillRect(player_x2, Yoffset6, width, canvas2.height *(datas.data.videoGamePercentages[1]/100));
    ctx2.font = "15px Arial";
    ctx2.fillText("No", 10, 30);

    ctx2.fillStyle = '#0000FF';
    ctx2.fillRect(player_x3, Yoffset7, width, canvas2.height *(datas.data.videoGamePercentages[2]/100));
    ctx2.font = "15px Arial";
    ctx2.fillText("Maybe", 10, 45);

    ctx2.fillStyle = '#6bff33';
    ctx2.fillRect(player_x4, Yoffset8, width, canvas2.height *(datas.data.videoGamePercentages[3]/100));
    ctx2.font = "15px Arial";
    ctx2.fillText("Other", 10, 60);

    ctx3.fillStyle = '#ff1500';
    ctx3.fillRect(player_x1, Yoffset9, width, canvas3.height *(datas.data.accountPercentages[0]/100));
    ctx3.font = "15px Arial";
    ctx3.fillText("Yes", 10, 15);

    ctx3.fillStyle = '#ffe933';
    ctx3.fillRect(player_x2, Yoffset10, width, canvas3.height *(datas.data.accountPercentages[1]/100));
    ctx3.font = "15px Arial";
    ctx3.fillText("No", 10, 30);

    ctx3.fillStyle = '#0000FF';
    ctx3.fillRect(player_x3, Yoffset11, width, canvas3.height *(datas.data.accountPercentages[2]/100));
    ctx3.font = "15px Arial";
    ctx3.fillText("Maybe", 10, 45);

    ctx3.fillStyle = '#6bff33';
    ctx3.fillRect(player_x4, Yoffset12, width, canvas3.height *(datas.data.accountPercentages[3]/100));
    ctx3.font = "15px Arial";
    ctx3.fillText("Other", 10, 60);

}

// const loop = () => {
//     drawStuff();
// }

// setInterval(loop, 10000);