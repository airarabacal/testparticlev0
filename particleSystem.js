class ParticleSystem {
    constructor(){
        this.particles = [];
    }

    addParticle(x, y){
        var vParticle = new Particle(
            createVector(x, y), // position at the center of the window
            1, // velocity 
            color(255, 87, 120), // color
            100, // lifetime
            'rect', // shape
            createVector(50, 100), // size width and height
            255, // transparency from 0 to 255
            5, // force 
            w,
            h,
            2 //life reduced per edge bump
        )
        this.particles.push(vParticle);
    }

    run(){
        for (let particle of this.particles) {
            // if(particle.isDead)
            //     continue;
            particle.update();
            particle.render();
        }
    }
}