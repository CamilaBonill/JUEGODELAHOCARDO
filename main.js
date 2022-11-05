
//variable
let words = ['ALURA', 'AHORCADO', 'HTML', 'ORACLE', 'JAVASCRIPT', 'LOGICA', 'PROGRAMACION', 'DESAFIO'];
let tablero = document.getElementById("pizarra").getContext("2d");
let palabraSecreta = "";
let letras = []
let errores = 9;
var palabraCorrecta = "";
let letrasIncorrectas = [];
let numeroDeErrores = 9
let letraElegida = [];

//funciones

function inicio(){
    document.getElementById("btn-inicio").style.display = "none";
    document.getElementById("btn-agregarpalabra").style.display = "none";
    document.getElementById("jugando").style.display = "flex";
    document.getElementById("pizarra").style.display = "flex";
    document.getElementById("contac").style.top= "78%"
    
    chooseword()
    dibujarTablero()
    dibujarLineas()
    document.onkeydown = (e) => {
        // pone la letra en letra mayuscula
        let letra = e.key.toUpperCase()
        //verifica si el usuario todavia no ha perdido
        if (letrasIncorrectas.length <= numeroDeErrores) {
          if (!verificarLetraClicada(e.key) && verificarLetra(e.keyCode)) {
            if (palabraSecreta.includes(letra)) {
              adicionarLetraCorrecta(palabraSecreta.indexOf(letra))
              for (let i = 0; i < palabraSecreta.length; i++) {
                if (palabraSecreta[i] === letra) {
                  escrribirLetraCorrecta(i)
                  verificarVencedor(letra)
    
                }
              }
    
            }
            // si el usuario cometió más errores de los que son permitidos, 
            //llama las funciones que dibujan el ahorcado y exibe el mensaje de fin de juego
            else {
              if (!verificarLetraClicada(e.key) && !verificarVencedor(letra)) return
              dibujarAhorcado(errores)
              verificarFinJuego(letra)
            }
          }
        }

    };
}
//eventos

function agregarpalabra(){
    document.getElementById("btn-inicio").style.display = "none";
    document.getElementById("btn-agregarpalabra").style.display = "none";
    document.getElementById("inputwold").style.display = "flex";
    document.getElementById("contac").style.top= "10%"
}

//elegir palabra secreta

function chooseword(){
    let word = words[Math.floor(Math.random()*words.length)]
    palabraSecreta = word;
    return word
}

function play(){
    document.getElementById("jugando").style.display = "flex";
    document.getElementById("inputwold").style.display = "none"
}
//comprobacion letra
function comprobarletra(key){
    let estado = false
    if(key >= 65 && letras.indexOf(key) || key <= 90 && letras.indexOf(key)){
        letras.push(key)
        return estado
    }else{
        estado = true
        return estado
    }
}
function counterror(){
    errores -= 1
}

//actualiza la pantalla cuando el usuario hace click en el botón "nuevo juego"

function upgrade(){
    location.reload();
}

//agregar palabra

function guardarPalabra(){
  
    let nuevaPalabra = document.getElementById("inputTexto").value;
  
    // incluye la palabra que el usuario digitó en el array de las palabras a seren sorteadas
    if(nuevaPalabra !== ""){
      words.push(nuevaPalabra);
    
      // haz con que los componentes de la pantalla de agregar palabra desaparezcan
      document.getElementById("inputwold").style.display = "none";
      inicio();
      
    }
    else{
      alert("Ninguna palabra ha sido digitada")
    }
  
}

// verifica cual es la letra en que el usuario hizo clic
function verificarLetraClicada(key) {
    if (letras.length < 1 || letras.indexOf(key) < 0) {
      letras.push(key)
      return false
      
    }
    else {
      letras.push(key)
      return true
    }
}
  
  //impide que teclas como shift y otras, sean consideradas errores y sean escritas
function verificarLetra(keyCode) {
    if (typeof keyCode === "number" && keyCode >= 65 && keyCode <= 90) {
      return true;
    } else {
      return false;
    }
}

function adicionarLetraCorrecta(i) {
    palabraCorrecta += palabraSecreta[i].toUpperCase()
}
  
function adicionarLetraIncorrecta(letter) {
    if (palabraSecreta.indexOf(letter) <= 0) {
      errores -= 1
    }
}
  
function verificarFinJuego(letra) {
    //checa si la letra ha sido incluída en el array de  las letras correctas o incorrectas
   if(letraElegida.length < palabraSecreta.length) { 
      //incluye las letras ya digitadas en el arrau
      letrasIncorrectas.push(letra);
      
  
      //valida se el usuário cometió el numero maximo de errores
      if (letrasIncorrectas.length > numeroDeErrores) {
        //perdiste()
        document.getElementById("text-loser").style.display = "flex";
      }
      else if(letraElegida.length < palabraSecreta.length) {
        adicionarLetraIncorrecta(letra)
        escribirLetraIncorrecta(letra, errores)
      }
    }
} 
//Verifica si el usuario ha ganad
function verificarVencedor(letra) {
    letraElegida.push(letra.toUpperCase());
    if (letraElegida.length == palabraSecreta.length) {
      document.getElementById("text").style.display = "flex";
      //ganaste()
      
    }
  
}