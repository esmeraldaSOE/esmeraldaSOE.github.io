let sketchProc = function(processingInstance) {
     with (processingInstance) {
 
        size(1000, 600); 
        frameRate(300);
      // A partir de esta linea podemos codificar nuestros dibujos
 
 
        let colorFondo = color(45,39,240);
        let puntos=0;
        let x=500;
        direccion = 1;

        let y= 0;
        let xAleatorio = 500;
        let dvr =1 //dir.vertical del rectangulo
        let dhr =1 //dir. horizontal del rectangulo
        draw=function(){
            background(colorFondo);

            textSize(50);
            fill(0,0,0);
            text("Puntos: "+puntos ,380,100);

            // rectangulo
            fill(85,244,34)
            rect(xAleatorio,y,25,25);

            // y++;
            y=y+dvr;
            xAleatorio = xAleatorio + dhr;

             if (xAleatorio >= 1000) {
                dhr = - 1;
             }

             if( y>= 600 ){ //choque abajo
               dvr=0;
               
               textSize(100);
               fill(0,0,0);
               text("GAME OVER" ,200,300);
             }

             if (y ==0) { //choque arriba
             	dvr = + 1;
             }

             if (xAleatorio == 0) {
             	dhr = + 1;
             }

             // if( y>= 600 ){
               // y=0;
               // xAleatorio = random(1,1000);
               // }

             if(xAleatorio <= x+50 && xAleatorio >= x-50 && y>=450 && y<=550){
             	textSize(60);
             	fill(0,0,0);
             	text("CHOQUE",200,200);
             	// colorFondo=color(0,0,0);
             	dvr = - 1
             	puntos = puntos + 1;
             }

             //rect//
              fill(39,240,236);
             rect(x,500,100,100);


             
              x = x + direccion;

             keyPressed=function(){

             	 if (key.code == 65){
             	    direccion = - 2;	
                 }

                 if (key.code == 68){
                 	 direccion = + 2;
                 	 // colorFondo = color(0,255,0)
                 }
             }

             mousePressed =function(){

             	if (mouseX < 500) {
             		direccion = - 2;
             	}

             	if (mouseX > 500) {
             		direccion = + 2;
             	}

             }

             if ( x>= 975){
             	direccion = - 2;
             }

             if ( x<= 25){
             	direccion = + 2;
             }

         }

 
 
 
	//------------------------------------------------------
 
    }};
    let canvas = document.getElementById("mycanvas"); 
    let processingInstance = new Processing(canvas, sketchProc); 
 
