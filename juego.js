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
    x: contexto.canvas.width  - 150,
    //y: 250
    y: 200
}


var bird = new Image();
//bird.src = "imagenes/primera.jpg";
//bird.src = "imagenes/9/0.png";
bird.src = "imagenes/amigo/amigo1.png";

//var background = new Image();
//background.src = "imagenes/escenario.jpg";

var moon = new Image();
moon.src = "imagenes/moon.png";

var amarillo = new Image();
amarillo.src = "imagenes/amarillo.png";

var background = new Image();
background.src = "imagenes/escenario/escenario1.png";

var escultura = new Image();
escultura.src = "imagenes/escenario/escultura.png";

var sky = new Image();
sky.src = "imagenes/escenario/sky.png";

var tree = new Image();
tree.src = "imagenes/escenario/tree.png";

var suelo = new Image();
suelo.src = "imagenes/escenario/sand.png";

var tuberiaSur = new Image();
//tuberiaSur.src = "imagenes/demonio1.png";

//var tuberiaNorte = new Image();
//tuberiaNorte.src = "imagenes/tuberiaNorte.png";

var tuberiaNorte = new Image();
tuberiaNorte.src = "imagenes/dragon.png";

//Medusa
var medusa = new Image();
//medusa.src = "imagenes/medusa/medusa1.png";

//audio
var dragon = new Audio();
dragon.src = "sonido/dragon.mp3";

var salto = new Audio();
salto.src = "sonido/salto.mp3";

//alert("Aguanta hasta que se vaya la luna.");
setInterval(loop,1000/FPS);

function presionar(){
    if (personaje.y == 280.5 ){
//    console.log("presiono");
    gravedad = 4;
   personaje.y -=2;
   salto.play();
//console.log(personaje.y);

for(var z =1; z<4; z++){
    bird.src = "imagenes/amigo/amigo"+ z +".png";
}
    }

}

//cambiar de enemigo
var exit = Math.floor(Math.random() * (3 - 1)) + 1;

var animacion = 1;

//var exit = 2;
//-111.20000000004593

var movimiento = 800
//var animacion = 1;
function loop(){
    contexto.clearRect(0,0,900,400);
    //fondo
    contexto.drawImage(sky,0,0); 
    contexto.drawImage(moon,movimiento,0); 
    contexto.drawImage(background,0,0); 
    contexto.drawImage(escultura,0,200);
    contexto.drawImage(tree,200,210);
    contexto.drawImage(tree,300,210);
    contexto.drawImage(tree,500,210);
    //movimiento-=0.2;
    movimiento-=0.2;
    //console.log("luna: " + movimiento);
    //contexto.drawImage(suelo,0,0); 
   // contexto.drawImage(moon,150,280.5);
    //personaje
    contexto.drawImage(bird, personaje.x, personaje.y);
    //console.log(personaje.y);
   // console.log(gravedad);
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
           // FIN DE LOGICA DE MOVIMIENTO PERSONAJE

           if(gravedad == -4 && personaje.y == 280.5 ){
            bird.src = "imagenes/amigo/amigo1.png";

           }

           if( movimiento == -111.20000000004593){
               alert("has sobrevivido.");
               location.reload();

           }


           if( exit == 1) {

            enemigo(medusa,200,"medusa");

            //fin medusa
           } else if ( exit == 2){
            enemigo(tuberiaSur,200,"demonio");
           }
           //contexto.fillStyle = "black";
           //contexto.font = "25px Arial";
          // contexto.fillText("distancia: "+metros,10,contexto.canvas.height-40)
}
//fin loop

 window.addEventListener("keydown",presionar);

 //alert(Math.floor(Math.random() * (3 - 1)) + 1);




function enemigo (img,num,nombre) { 
   // metros+=1;
    
    //console.log("animacion: " + animacion);

    for(var i =0; i <tuberias2.length;i++){
        //var constante = tuberiaNorte.height + 50;
        //contexto.drawImage(tuberiaNorte,tuberias[i].x,tuberias[i].y);


        contexto.drawImage(img,tuberias2[i].x,tuberias2[i].y);


        if (tuberias2[i].x ==  750){

            img.src = "imagenes/"+nombre+"/"+nombre+"1.png";
            //animacion++;
            metros+=1;
        }else if (tuberias2[i].x ==  650){
    
            img.src = "imagenes/"+nombre+"/"+nombre+"2.png";
            //animacion++;
            metros+=2;
        } else if(tuberias2[i].x ==  550){
    
            img.src = "imagenes/"+nombre+"/"+nombre+"3.png";
           // animacion-=2;
           metros+=3;
        }  else if(tuberias2[i].x ==  450){
    
            img.src = "imagenes/"+nombre+"/"+nombre+"2.png";
           // animacion-=2;
           metros+=4;
        }  else if(tuberias2[i].x ==  350){
    
            img.src = "imagenes/"+nombre+"/"+nombre+"1.png";
           // animacion-=2;
           metros+=5;
        }  else if(tuberias2[i].x ==  250){
    
            img.src = "imagenes/"+nombre+"/"+nombre+"2.png";
           // animacion-=2;
           metros+=6;
        }  else if(tuberias2[i].x ==  150){
    
            img.src = "imagenes/"+nombre+"/"+nombre+"3.png";
           // animacion-=2;
           metros+=5;
        }  else if(tuberias2[i].x ==  50){
    
            img.src = "imagenes/"+nombre+"/"+nombre+"2.png";
           // animacion-=2;
           metros+=4;
        }  else if(tuberias2[i].x ==  -50){
    
            img.src = "imagenes/"+nombre+"/"+nombre+"1.png";
           // animacion-=2;
           metros+=3;
        }  else if(tuberias2[i].x ==  -150){
    
            img.src = "imagenes/"+nombre+"/"+nombre+"2.png";
           // animacion-=2;
           metros+=2;
        } 


        //añadir mas velocidad a los enemigo
        tuberias2[i].x -=5;

        



        
        //tuberias2[i].x -=5;

        if(tuberias2[i].y + tuberiaNorte.height < 80){
            tuberias2[i].y = 0
        }


        //esto es para que salga el siguiente enemigo
        if(tuberias2[i].x == -100 ){

            tuberias2.push({
                x: contexto.canvas.width,
                y: num
            
            })
            exit =  Math.floor(Math.random() * (3 - 1)) + 1;
        }
        var sumita = personaje.y - tuberias2[i].x;
       // console.log("coordenada del enemigo: " + tuberias2[i].x +" -- sumita: " + sumita );

        if( sumita == 130.5 ){
            //console.log("entro");
            location.reload();
            //tuberias2[i].x = 0;
        }               
    }

 }














             /*
            for(var i =0; i <tuberias.length;i++){
                //var constante = tuberiaNorte.height + 50;
                //dragon.play();
                contexto.drawImage(tuberiaNorte,tuberias[i].x,tuberias[i].y);
                //contexto.drawImage(tuberiaSur,tuberias[i].x,tuberias[i].y + constante);
                
                //velocidad del bicho
                tuberias[i].x -=5;


        
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


                   //exit =  Math.floor(Math.random() * (3 - 1)) + 1;

                }

                var sumita2 = personaje.y - tuberias[i].x;
                console.log("coordenada del enemigo: " + tuberias[i].x +" -- sumita: " + sumita2 );
                
        

            }
            //FIN dragon
            // enemigo suelo funciona no tocar.
            //a no ser que sea para perfeccionarlo.
*/
