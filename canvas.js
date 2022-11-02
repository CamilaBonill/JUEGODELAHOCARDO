function drawcanvas(){
    pantalla.lineWidth = 8;
    pantalla.lineCap = "round";
    pantalla.lineJoin = "round";
    pantalla.fillStyle = "black";
    pantalla.strokeStyle = 'white';

    pantalla.fillRect(0,0,1200,400);
    pantalla.beginPath();
    pantalla.moveTo(400, 300);
    pantalla.lineTo(900, 300);
    pantalla.stroke();
    pantalla.closePath();

}
function dibujar(){
    pantalla.lineWidth = 6;
    pantalla.lineCap = "round";
    pantalla.lineJoin = "round";
    pantalla.fillStyle = "#F3F5F6";
    pantalla.strokeStyle = "#0A3871";

    let anchura = 600/(palabraSecreta.length)
    for (let i = 0; i < palabraSecreta.length; i++){
        pantalla.moveTo(300 + (anchura*i), 320)
        pantalla.lineTo(350 + (anchura*i), 320)
       
    }
    pantalla.stroke();
    pantalla.closePath();
}

function escribirletracorrecta(index){
    
    pantalla.font = 'bold 63px inter';
    pantalla.lineWidth = 6;
    pantalla.lineCap = "round";
    pantalla.lineJoin = "round";
    pantalla.fillStyle = "#0A3871";
  
    
    let anchura = 600/palabraSecreta.length
    pantalla.fillText(palabraSecreta[index], 305 + (anchura*index), 315)
    pantalla.stroke()
}
function escribirletraIncorrecta(letra, errorleft){
    pantalla.font = 'bold 40px inter';
    pantalla.lineWidth = 6;
    pantalla.lineCap = "round";
    pantalla.lineJoin = "round";
    pantalla.fillStyle = '#495057';
    pantalla.fillText(letra, 400 + (40*(10- errorleft)), 380, 40)
}