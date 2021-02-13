let particle;
let particleSystem;
let isClicked = false;
let w = 1000;
let h = 500;
function setup() {
    // var w = 200, h = 3000
    cnv = createCanvas(w, h);
    cnv.position(100, 0);

    cnv.mouseClicked(createParticle)

    particleSystem = new ParticleSystem();

    // particle = new Particle(
    //     createVector(1, 1), // position at the center of the window
    //     1, // velocity 
    //     color(255, 87, 120), // color
    //     100, // lifetime
    //     'rect', // shape
    //     createVector(200, 200), // size width and height
    //     255, // transparency from 0 to 255
    //     5, // force 
    //     w,
    //     h,
    //     2 //life reduced per edge bump
    // );
}

function draw() {
    background(255, 204, 0);
    particleSystem.run();
}

function createParticle(){
    
    particleSystem.addParticle(mouseX, mouseY);
    // isClicked = true;
    // particle = new Particle(
    //     createVector(mouseX, mouseY), // position at the center of the window
    //     1, // velocity 
    //     color(255, 87, 120), // color
    //     100, // lifetime
    //     'rect', // shape
    //     createVector(50, 100), // size width and height
    //     255, // transparency from 0 to 255
    //     5, // force 
    //     w,
    //     h,
    //     2 //life reduced per edge bump
    // );
}