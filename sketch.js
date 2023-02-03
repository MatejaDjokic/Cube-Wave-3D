// Daniel Shiffman
// https://thecodingtrain.com/challenges/86-cube-wave-by-bees-and-bombs
// https://youtu.be/H81Tdrmz2LA
// https://beesandbombs.tumblr.com/post/149654056864/cube-wave

let angle = 0;
let w = 24;
let ma;
let maxD;

let frames = 60;

function setup() {
    createCanvas(800,800, WEBGL);
    ma = atan(cos(PI));
    maxD = dist(0, 0, 200, 200);
}

function keyPressed() {
    if (key == " ") {
        const options = {
            units: "frames",
            delay: 0
        }
        saveGif("beesandbombs.gif", frames, options);
    }
}

function draw() {
    background(100);
    ortho(-windowWidth, windowWidth, windowWidth, -windowWidth, 0, windowWidth * 100);
    rotateX(-ma);
    rotateY(-QUARTER_PI);

    for (let z = 0; z < height; z += w) {
        for (let x = 0; x < width; x += w) {
            push();
            let d = dist(x, z, width / 2, height / 2);
            let offset = map(d, 0, maxD, -PI, PI);
            let a = angle + offset;
            let h = floor(map(sin(a), -1, 1, 100, 300));
            translate(x - width / 2, 0, z - height / 2);
            normalMaterial();
            box(w, h, w);
            //rect(x - width / 2 + w / 2, 0, w - 2, h);
            pop();
        }
    }

    angle -= TWO_PI / frames;
}