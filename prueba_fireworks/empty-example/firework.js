function Firework(){
    this.color = random(255);
    this.chispita = new Particle(random(width),height,this.color,false);//crea una nueva particula
    this.rebentada = false;
    this.particulas = [];

    this.update = function(){//este update es de la funcion Firework
        if(!this.rebentada){
            this.chispita.applyForce(gravedad);//Aplicamos la gravedad a la chispita
            this.chispita.update();//Actualizamos los datos de chispita
            if(this.chispita.vel.y >= 0){
                this.rebentada = true;
                this.explotar();
            }
        }
        for (var i = this.particulas.length-1; i >= 0 ; i--){
            this.particulas[i].applyForce(gravedad);
            this.particulas[i].update();
            if (this.particulas[i].done()){
                this.particulas.splice(i,1);
            }
        }
    }

    //Creamos la funcion para eliminar la particula original

    this.done =function() {
        return (this.rebentada && this.particulas.length === 0);
    }

    //Creamos la función de exlosion
    this.explotar = function(){
        for (var i = 0; i < 100; i++){//creamos 100 chispitas
            var t=i*2*3.1416/100; //definimos el punto de origen de las chispitas
            // Ecuacion del corazon
            var velx=(16 * pow(sin(t), 3)) * -1;
            var vely=(13 * cos(t) - 5 * cos(t * 2) - 2 * cos(t * 3) - cos(t * 4)) * -1;
            var p = new Particle(this.chispita.pos.x, this.chispita.pos.y,this.color,true,velx/4,vely/4);
            this.particulas.push(p);
        }
    }

    this.show = function(){//este show es de la funcion Firework
        if(!this.rebentada) {
           this.chispita.show();//Mostramos chispita
        }
        for (var i = 0; i < this.particulas.length; i++){
            this.particulas[i].show();
        }
    }
}
