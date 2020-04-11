// Javascript file for drawing purposes

const dt = 10/1000;

var data = [];
var path = [];
var canvas; 
var context;

var time = 0.0;


window.onload = function() {
    // draw stuff here

    canvas = document.getElementById("canvas");
    context = canvas.getContext("2d");
    context.translate(0.5, 0.5);
    context.strokeStyle = "orange";

    setInterval(draw, dt*1000);
};


async function draw() {
    // Clear canvas
    context.clearRect(0, 0, canvas.width, canvas.height);

    // Clear path
    context.beginPath();

    let centerX = 200;
    let centerY = 200;

    for (var i = 0; i < data.length; i++) {

        let real = data[i]["coefficient"]["real"];
        let imag = data[i]["coefficient"]["imaginary"];
        let frequency = data[i]["frequency"];

        let pos = await eel.calculate_position(real, imag, frequency, time)();

        x = pos[0];
        y = pos[1];

        context.moveTo(centerX, centerY);
        context.lineTo(centerX + x, centerY + y);
        context.stroke();

        centerX += x;
        centerY += y;
    }

    time += dt/10;

    //if (time >= 1) time = 0;

}

eel.expose(draw_fourier_transform);             
        function draw_fourier_transform(dft) {
            console.log(dft);
            data = dft;
            time = 0;
        }
        
        

