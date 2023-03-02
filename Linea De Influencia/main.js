const canvas = document.querySelector('canvas');
const ctx = canvas.getContext('2d');
var lastImage = canvas.toDataURL();
const apoyos = []; // Array para almacenar los apoyos


class Apoyo {
    constructor(tipo, posicion) {
      this.tipo = tipo; // Puede ser "empotrado", "articulado" o "rodillo"
      this.posicion = posicion; // La posición del apoyo en la viga (puede ser "izquierda", "centro" o "derecha")
    }
}
  
// viga
function viga() {
    lastImage = canvas.toDataURL(); // Guardar una copia de la imagen actual
    const  Escala = (parseFloat(document.getElementById('es').value));
    const  length = (parseFloat(document.getElementById('Longitud_Viga').value))*Escala;
    drawBeam(length, 3.3, 10)
}
function distaciaentreapoyo(ultimo, penultimo, PosicionApoyo, Escala){
    const  length = (parseFloat(document.getElementById('Longitud_Viga').value))*Escala;
    const apoyo1 = apoyos[penultimo]
    const apoyo2 = apoyos[ultimo]
    var distaciaentreapoyos = apoyo2.posicion - apoyo1.posicion;
    drawBeam(length, 2.9, 3)
    letra(distaciaentreapoyos/Escala, (40 + PosicionApoyo - distaciaentreapoyos/2), canvas.height/2.7)
    console.log(distaciaentreapoyos)
}
function AddApoyo() {
    lastImage = canvas.toDataURL(); // Guardar una copia de la imagen actual
    const  Escala = (parseFloat(document.getElementById('es').value));
    const  PosicionApoyo = (parseFloat(document.getElementById('Apoyo').value))*Escala;
    triangulo2(PosicionApoyo, canvas.height/3.3, "red")
    eje(50 + PosicionApoyo, canvas.height/3.3, 2, 600, 2, "black")
    
    

    apoyos.push(new Apoyo("articulado", PosicionApoyo));
    if(apoyos.length >= 2){
        const ultimo = apoyos.length - 1;
        const penultimo = apoyos.length - 2;
        console.log(ultimo, penultimo)
        distaciaentreapoyo(ultimo, penultimo, PosicionApoyo, Escala)
    }
}
function Addnudo(){
    lastImage = canvas.toDataURL(); // Guardar una copia de la imagen actual
    const  Escala = (parseFloat(document.getElementById('es').value));
    const  PosicionApoyo = (parseFloat(document.getElementById('nudo').value))*Escala;
    circulo(PosicionApoyo)
    eje(50 + PosicionApoyo, canvas.height/3.3, 2, 600, 2, "red")
    apoyos.push(new Apoyo("nudo", PosicionApoyo));
    if(apoyos.length >= 2){
        const ultimo = apoyos.length - 1;
        const penultimo = apoyos.length - 2;
        console.log(ultimo, penultimo)
        distaciaentreapoyo(ultimo, penultimo, PosicionApoyo, Escala)
    }
}
cuadricula()
function ejes(){
    lastImage = canvas.toDataURL(); // Guardar una copia de la imagen actual
    const  Escala = (parseFloat(document.getElementById('es').value));
    const  length = (parseFloat(document.getElementById('Longitud_Viga').value))*Escala;
    const y = (parseFloat(document.getElementById('lineinfluencia').value))
    drawBeam(length, y, 5)
}
//diagrama
function LineaInfluencia(){
    lastImage = canvas.toDataURL(); // Guardar una copia de la imagen actual
    const  Escala = (parseFloat(document.getElementById('es').value));
    const  iniciox = 50 + (parseFloat(document.getElementById('inicox').value))*Escala;
    const  inicioy =  (parseFloat(document.getElementById('inicoy').value));
    const distaciax = (parseFloat(document.getElementById('distanciax').value))*Escala;
    const distaciax2 = (parseFloat(document.getElementById('distanciax2').value))*Escala;
    const distaciax3 = (parseFloat(document.getElementById('distanciax3').value))*Escala;
    let distanciay = (parseFloat(document.getElementById('distanciay').value));
    const y = (parseFloat(document.getElementById('lineinfluencia').value)) // posicion en y

    if(distanciay == 0){
        
        ay = ((distaciax2*1)/distaciax)*50
        let u = inicioy - ay
        console.log(50 + distaciax2)
        eje(iniciox + distaciax2, (((canvas.height/y)-inicioy) + ay), distaciax3, u, 2, "red")
        
    }else{
        ay = (parseFloat(document.getElementById('distanciay').value));
    }
     
   
    
    //console.log(ay, u)
    
    // eje (iniciox , inicioy, distaciax, distaciay, spesordeleje, color)
    eje(iniciox, ((canvas.height/y)-inicioy), distaciax2, ay, 2, "red")
    //eje(50 + distaciax2, (((canvas.height/y)-inicioy) + ay), distaciax3, u, 2, "red")

    
}

function undo() {
    ctx.clearRect(0, 0, canvas.width, canvas.height); // Borrar todo el contenido del canvas
    var img = new Image();
    img.src = lastImage; // Cargar la imagen anterior desde la variable
    img.onload = function() {
      ctx.drawImage(img, 0, 0); // Dibujar la imagen anterior en el canvas
    };
}

var undoButton = document.getElementById("undoButton");
undoButton.addEventListener("click", undo);
