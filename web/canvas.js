var data = [];
var path = [];

var time = 0;


function setup() {
    createCanvas(850, 650);
}

function draw() {
    background(0);

    if (data.length > 0) {

        let centerX = 400;
        let centerY = 325;

        for (var i = 0; i < data.length; i++) {

            let frequency = data[i]["frequency"];
            let radius = data[i]["amplitude"];
            let phase = data[i]["phase"];

            x = radius * cos(frequency * time + phase);
            y = radius * sin(frequency * time + phase);

            stroke(255, 100);
            noFill();
            ellipse(centerX, centerY, radius * 2);
            stroke(255);
            line(centerX, centerY, centerX + x, centerY - y);

            centerX += x;
            centerY -= y; // negative to compensate flipped coordinate system (compared to complex plane)
        }

        path.unshift(createVector(centerX, centerY));
        beginShape();
        noFill();
        stroke(255, 204, 0);
        for (let i = 0; i < path.length; i++) {
        vertex(path[i].x, path[i].y);
        }
        endShape();

        const dt = TWO_PI / data.length;  
        time += dt;
    
        if (time > TWO_PI) {
            time = 0;
            path = [];
        }
    }
}


eel.expose(draw_fourier_transform);             
        function draw_fourier_transform(dft) {
            console.log(dft);
            data = dft;
            time = 0;
        }
        