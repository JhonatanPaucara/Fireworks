function Particle(x,y,color, rebentar,vx,vy){
    this.pos = createVector(x,y);
    this.desaparecer = 255;
    if (!rebentar){
        this.vel = createVector(0,random(-10,-5));
    }else if (y>=height/2){
        this.vel = p5.Vector.random2D();
        this.vel.mult(random(1,random(6,15)));
    } else{
        this.vel = createVector(vx,vy);
    }
    this.acc = createVector(0,0);

    //Creamos una funcion interna para la fuerza
    this.applyForce = function(force){
        this.acc.add(force);
    }
    //Creamos una funcion interna para actualizar los valores de posicion y velocidad
    this.update = function(){
        if (rebentar){
            this.vel.mult(0.9);
            this.desaparecer -= 4;
        }
        this.pos.add(this.vel);
        this.vel.add(this.acc);
        this.acc.mult(0);
    }

    //Creamos la funcion para eliminar las particulas
    this.done = function(){
        if (this.desaparecer < 0){
            return true;
        } else{
            return false;
        }
    }
    //Creamos una funcion interna para dibujar la posición instantanea
    this.show = function(){
        colorMode(HSB);
        if (rebentar){
            strokeWeight(2);
            stroke(color,255,255,this.desaparecer)
        }
        else {
            strokeWeight(4)
            stroke(color,255,255);
        }
        point(this.pos.x, this.pos.y);
    }
}