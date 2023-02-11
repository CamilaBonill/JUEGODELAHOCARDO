var color = "#82C2E5"
if (window.matchMedia("(max-width: 768px)").matches) {
  // Si es menor o igual a 768px, cambiar el valor de las variables
  color = "#FF0000";
  
}
function dibujarTablero() {
  tablero.lineWidth=
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.fillStyle= "transparent"
  tablero.strokeStyle = color
  tablero.fillRect(0,0,1200,400)
  tablero.beginPath();
  tablero.moveTo(400, 300)
  tablero.lineTo(900,300)
  tablero.stroke()
  tablero.closePath()
}

function dibujarLineas() {
  tablero.lineWidth=6
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.strokeStyle = color
  tablero.beginPath()
  let ancho=600/palabraSecreta.length
  for (let i=0;i<palabraSecreta.length;i++){
    tablero.moveTo(380+(ancho*i),380)
    tablero.lineTo(430+(ancho*i),380)
  }
  tablero.stroke()
  tablero.closePath()
}
function escrribirLetraCorrecta(index) {
  tablero.save()
  tablero.shadowBlur=15;
  tablero.shadowOffsetX=0;
  tablero.shadowOffsetY=0;
  tablero.shadowColor="#2ef8a0";
  tablero.font = 'bold 35px Inter';
  tablero.lineWidth=2
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.fillStyle= "#2ef8a0"
  let ancho=600/palabraSecreta.length
  tablero.fillText(palabraSecreta[index],385+(ancho*index),370);
  tablero.restore()
  tablero.stroke()
}

function escribirLetraIncorrecta(letra, errorsLeft) {
  tablero.lineWidth=1
  tablero.font = 'bold 25px Inter';
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.fillStyle= color
  tablero.fillText(letra,480+(40*(10-errorsLeft)),420,25)
}

function dibujarAhorcado(puntaje) {
  tablero.lineWidth=2
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.strokeStyle = color
  if(puntaje===8){
  //poste lateral
  tablero.moveTo(400,300)
  tablero.lineTo(400,20)
  }
  if(puntaje===7){//teto 
  tablero.moveTo(600,20)
  tablero.lineTo(400,20)
  }
  if(puntaje===6){//corda
  tablero.moveTo(600,20)
  tablero.lineTo(600,50)
  }
  if(puntaje===5){//para cara
  tablero.moveTo(640,90)
  tablero.arc(600,90,40,0,Math.PI*2)
  }
  if(puntaje===4){//para cuerpo
  tablero.moveTo(600,130)
  tablero.lineTo(600,230)
  }
  if(puntaje===3){//para perna izquierda
  tablero.moveTo(600,230)
  tablero.lineTo(570,300)
  }
  if(puntaje===2){//para perna derecha
  tablero.moveTo(600,230)
  tablero.lineTo(630,300)
  }
  if(puntaje===1){//para mano izquierda
  tablero.moveTo(600,130)
  tablero.lineTo(550,170)
  }
  if(puntaje===0){//para mano derecha
  tablero.moveTo(600,130)
  tablero.lineTo(650,160)
  }
  tablero.stroke()
  tablero.closePath()
}

function perdiste() {
  tablero.font = ' bold 42px Inter';
  tablero.lineWidth=4
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.fillStyle="red"
  tablero.fillText("Fin del juego!",930,320)
}

function ganaste() {
  tablero.font = 'bold 42px Inter';
  tablero.lineWidth=4
  tablero.lineCap="round"
  tablero.lineJoin="round"
  tablero.fillStyle="green"
  tablero.fillText("Ganaste,",950,320)
  tablero.fillText("Felicidades!",930,360)
}   

