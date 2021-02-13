class Particle {

    constructor(pos, vel, col, life, shape, size, opacity, force, innWidth, innHeight, lifeReduc) {
        this.pos = pos; // Position
        
        this.col = col; // Color
        this.life = life;
        this.origLife = life;
        this.shape = shape; // Shape p5.js 2d only supports rect and ellipse
        this.size = size; // size 
        this.opacity = opacity; // transparency
        this.force = force; // additional property for adding gravity
        this.vel = vel + force; // Velocity
        this.hasDied = false;
        this.diagX = this.pos.x;
        this.diagY = this.pos.y;
        this.byEdgeX = false;
        this.byEdgeY = false;

        this.innWidth = innWidth;
        this.innHeight = innHeight;
        //console.log(this.innHeight);
        this.lifeReduc = lifeReduc;
        
    }

    render() {
        push(); // push the state 

        const lifePercentage = this.life / this.origLife;

        var sizeX = this.size.x * lifePercentage;
        var sizeY = this.size.y * lifePercentage;
        

        if(this.checkMinEdgeX(sizeX)){
            this.byEdgeX = false;
            this.diagX = 0; //reset to 0 when position x becomes 0
            this.reduceLife();
        }

        if(this.byEdgeX){
            this.diagX = this.diagX - this.vel - 1;
        }
        else{
            this.diagX = this.diagX + this.vel + 1;
            if(!this.byEdgeX && this.checkMaxEdgeX(sizeX)){
                this.byEdgeX = true;
                this.reduceLife();
            }
        }

        if(this.checkMinEdgeY(sizeY)){
            this.byEdgeY = false;
            this.diagY = 0; //reset to 0 when position y becomes 0
            this.reduceLife();
        }
            

        if(this.byEdgeY){
            this.diagY = this.diagY - this.vel - 1;
            
        }
        else{
            this.diagY = this.diagY + this.vel + 1;
            if(!this.byEdgeY && this.checkMaxEdgeY(sizeY)){
                this.byEdgeY = true;
                this.reduceLife();
            }
        }


        // translate(this.pos.x + this.diagX, this.pos.y + this.diagY); // translate the current screen position to x, y
        translate(this.diagX, this.diagY); // translate the current screen position to x, y
        
        stroke(this.col, this.opacity); // stroke color and its transparency
        //noFill(); // inidicates that our shape should have no fill color inside

        let c = color(63, 191, 191);
        fill(c);
        

        if (this.shape === 'rect') {
            rect(0, 0, sizeX, sizeY);
        } else {
            ellipse(0, 0, sizeX, sizeY);
        }
        

        pop();  // pops our state
    }

    checkMaxEdgeX(w){
        if(this.innWidth < this.diagX + this.vel + w){
            
            return true;
        }
        
        return false;
    }

    checkMaxEdgeY(h){
        if(this.innHeight < this.diagY + this.vel + h){
            return true;
        }
        
        return false;
    }

    checkMinEdgeX(w){
        if(this.diagX <= 0){
            return true;
        }
        return false;
    }

    checkMinEdgeY(h){
        if(this.diagY <= 0 ){
            return true;
        }
        
        return false;
    }

    update() {
        //this.vel.add(this.vel);
        //console.log(this.force);
        //this.pos.add(this.vel);
        
        //this.vel.limit(3); // limits the velocity speed to 3
        //console.log(this.pos);
        // if(this.hasDied){
        //     this.life++;
        //     if(this.isFull()){
        //         this.hasDied = false;
        //     }
        // }
        // else {
        //     this.life--; // decrements life as time passes
        //     if(!this.hasDied && this.isDead()){
        //         this.hasDied = true;
        //     }
        // }
        if(this.life < 0){
            this.life = 0; 
            this.origLife = 0;
        }
        //when this.life becomes negative, this.origLife replaces the this.life
        this.opacity = map(this.life, 0, this.origLife, 0, 255); // age opacity as life decreases
        
    }

    isDead() {
        return this.life <= 0;
    }

    isFull() {
        return this.life == this.origLife;
    }

    reduceLife(){
        this.life = this.life - this.lifeReduc;
    }

}