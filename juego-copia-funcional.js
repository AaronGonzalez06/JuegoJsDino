var contexto = document.getElementById("lienzoJuego").getContext("2d");
contexto.canvas.width = 900;
contexto.canvas.height = 400;
var FPS = 60;
var gravedad = 0;
var metros = 0;

var personaje = {
    x:150,
    //y:150,
    y: 280.5,
    w:50,
    h:50
}


var tuberias = new Array();
tuberias[0] = {
    x: contexto.canvas.width - 150,
    y:0
}

var tuberias2 = new Array();

tuberias2[0] = {
    x: contexto.canvas.width -150,
    y: 250
}


var bird = new Image(1,1);
//bird.src = "imagenes/primera.jpg";
bird.src = "imagenes/9/0.png";

var background = new Image();
background.src = "imagenes/escenario.jpg";

var tuberiaSur = new Image();
tuberiaSur.src = "imagenes/demonio.png";

//var tuberiaNorte = new Image();
//tuberiaNorte.src = "imagenes/tuberiaNorte.png";

var tuberiaNorte = new Image();
tuberiaNorte.src = "imagenes/dragon.png";

//audio
var dragon = new Audio();
dragon.src = "sonido/dragon.mp3";

var salto = new Audio();
salto.src = "sonido/salto.mp3";


setInterval(loop,1000/FPS);

function presionar(){
    if (personaje.y == 280.5 ){
//    console.log("presiono");
    gravedad = 4;
   personaje.y -=2;
   salto.play();
//console.log(personaje.y);
    }
}

//cambiar de enemigo
var exit = 2;


function loop(){
    contexto.clearRect(0,0,900,400);
    //fondo
    contexto.drawImage(background,0,0); 
    //personaje
    contexto.drawImage(bird, personaje.x, personaje.y);
    
    // LOGICA DE MOVIMIENTO PERSONAJE
       if(personaje.y <= 278.6  ){
        //console.log("segundo: " + personaje.y);  
        personaje.y -= gravedad; 
        }
        if(personaje.y == 38.5){
            //console.log("se entra en el cambio");
            gravedad = - 4
        }
        if(personaje.y == 282.5 ){
            personaje.y -=2;
            }
    //console.log(personaje.y);
           // console.log(gravedad);
            //contexto.drawImage(tuberiaNorte,contexto.canvas.width -150,0);
           // contexto.drawImage(tuberiaSur,contexto.canvas.width -150,250);
           // FIN DE LOGICA DE MOVIMIENTO PERSONAJE
            
           //console.log(exit);




           if( exit == 1) {
            metros+=1;
            for(var i =0; i <tuberias.length;i++){
                //var constante = tuberiaNorte.height + 50;
                //dragon.play();
                contexto.drawImage(tuberiaNorte,tuberias[i].x,tuberias[i].y);
                //contexto.drawImage(tuberiaSur,tuberias[i].x,tuberias[i].y + constante);
                
                //velocidad del bicho
                if(metros == 1000){
                    tuberias[i].x -=12;
               } else{

                tuberias[i].x -=1;
               }

                
                //debe de ser menor que -80
                /*console.log("primera: " + tuberias[i].y);
                console.log("segunda: " + tuberiaNorte.height);
                var suma = tuberias[i].y + tuberias[i].y ;
                console.log(" suma " + suma);*/

        
                //calibrar dragon 
                //funciona a priori. lo damos por bien
                if( tuberias[i].y + tuberias[i].y  < -120){
                    tuberias[i].y = 0
                }
        
        
                //esto es para que salga el siguiente enemigo
                if(tuberias[i].x == 100){
                    tuberias.push({
                        x: contexto.canvas.width,
                        y: Math.floor(Math.random()*tuberiaNorte.height) - tuberiaNorte.height
                    
                    })
                }

                //console.log(tuberias[i].x);
                //console.log(tuberias[i].y);

                var sumita2 = personaje.y - tuberias[i].x;
                console.log("coordenada del enemigo: " + tuberias[i].x +" -- sumita: " + sumita2 );
                
        
                //condiciones
           /*if(a){
                location.reload();
            }*/
        

            }



            //FIN dragon
            
            
            // enemigo suelo funciona no tocar.
            //a no ser que sea para perfeccionarlo.

           } else if ( exit == 2){
            metros+=1;



            for(var i =0; i <tuberias2.length;i++){
                //var constante = tuberiaNorte.height + 50;
                //contexto.drawImage(tuberiaNorte,tuberias[i].x,tuberias[i].y);
                contexto.drawImage(tuberiaSur,tuberias2[i].x,tuberias2[i].y);

                if(metros > 1000){
                    tuberias2[i].x -=10;
               } else{

                tuberias2[i].x -=5;
               }

                
                //tuberias2[i].x -=5;
        
                if(tuberias2[i].y + tuberiaNorte.height < 80){
                    tuberias2[i].y = 0
                }
        
        
                //esto es para que salga el siguiente enemigo
                if(tuberias2[i].x == 100 ){
                    tuberias2.push({
                        x: contexto.canvas.width,
                        y: 250
                    
                    })
                }

                //console.log(tuberias[i].x);
                //console.log(tuberias[i].y);

                //var sumaAmigo = personaje.y + bird.height;
                //var sumaEnemigo = tuberiaSur.height + tuberias2[i].y;
                /*console.log("suma amigo: " + sumaAmigo );
                console.log("suma enemigo: " + sumaEnemigo );*/

                var sumita = personaje.y - tuberias2[i].x;
                console.log("coordenada del enemigo: " + tuberias2[i].x +" -- sumita: " + sumita );

                if( sumita == 130.5 ){
                    console.log("entro");
                    location.reload();
                    //tuberias2[i].x = 0;
                }
                

            }




           }

           contexto.fillStyle = "black";
           contexto.font = "25px Arial";
           contexto.fillText("distancia: "+metros,10,contexto.canvas.height-40)


 }
 window.addEventListener("keydown",presionar);

 //alert(Math.floor(Math.random() * (3 - 1)) + 1);








