var chispitas = [];//Declaramos nuestra chispita como un arreglo para que hayan varias  la vez
var gravedad;//Declaramos la gravedad

function setup(){
    createCanvas(400,300);//crea el campo negro
    colorMode(HSB);
    gravedad = createVector(0,0.2);//Definimos la gravedad
    background(0,0,0);
    stroke(255);//define la intensidad del brillo
    strokeWeight(4);//define el tamaño del punto
    
}

function draw(){
    colorMode(RGB)
    background(0,0,0,25);//Define el color del cuadro y el segundo un efecto de transición
    if (random(1)<0.02)
        chispitas.push(new Firework());//creamos una nueva chispita
    for (var i=chispitas.length-1; i>=0; i--){
        chispitas[i].update();
        chispitas[i].show();
        if (chispitas[i].done()){
            chispitas.splice(i,1);
        }
    }
    
}