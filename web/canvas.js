const dt = 10/1000;

var data = [];
var path = [];

var time = 0.0;


function setup() {
    createCanvas(800, 600);

}

async function draw() {
    background(0);

    let centerX = 200;
    let centerY = 200;

    for (var i = 0; i < data.length; i++) {

        let frequency = data[i]["frequency"];
        let radius = data[i]["amplitude"];
        let phase = data[i]["phase"];

        x = radius * cos(frequency * time + phase);
        y = radius * sin(frequency * time + phase);

        stroke(255, 100);
        noFill();
        //ellipse(centerX, prevy, radius * 2);
        stroke(255);
        line(centerX, centerY, centerX + x, centerY + y);

        centerX += x;
        centerY += y;
    }

    path.unshift(createVector(centerX, centerY));
    beginShape();
    noFill();
    for (let i = 0; i < path.length; i++) {
      vertex(path[i].x, path[i].y);
    }
    endShape();

    time += dt/10;
}


eel.expose(draw_fourier_transform);             
        function draw_fourier_transform(dft) {
            console.log(dft);
            data = dft;
            time = 0;
        }
        