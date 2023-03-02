// eje 
function eje(x, y, z, J, i, color){
    ctx.strokeStyle = color
    ctx.lineWidth= i //(50, ((canvas.height/1.5)-50), 120, (canvas.height/1.5), 6, "red")
    ctx.beginPath();
    ctx.moveTo(x, y); //100, 300
    ctx.lineTo((x + z), (y + J));
    ctx.stroke();
}


// carga

function carga(x, y, z, color){
    ctx.strokeStyle = color
    ctx.lineWidth= 3
    ctx.beginPath();
    ctx.moveTo(x, y - z); //150, 250
    ctx.lineTo(x, (y + 50));
    ctx.stroke();
    triangulo(x, y, color)
}
 // triangulo
  function triangulo(x, y, color){
    
    ctx.beginPath();
    ctx.moveTo(x, (y + 50));
    ctx.lineTo((x - 10), (y + 30));
    ctx.lineTo((x + 10), (y + 30));
    ctx.lineTo(x, (y + 50));
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();
        
  }

  function triangulo2(n, y, color){
    let x = 50 + n
    ctx.beginPath();
    ctx.moveTo(x, (y + 10));
    ctx.lineTo((x - 10), (y + 30));
    ctx.lineTo((x + 10), (y + 30));
    ctx.closePath();
    ctx.fillStyle = color;
    ctx.fill();

        
  }

  function circulo(x){
    const centerX = 50 + x
    const centerY = canvas.height / 3.3;
    const radius = 8;

    ctx.beginPath();
    ctx.fillStyle = '#0077aa';
    ctx.strokeStyle = '#0077aa47';
    ctx.lineWidth = 2;

    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    ctx.fill();
    ctx.stroke();
  }

  function letra(g, x, y){
    // Definir el tamaño del número y su posición en el canvas
    const fontSize = 18;

    // Configurar el tamaño y estilo de la fuente
    ctx.font = `${fontSize}px Arial`;
    ctx.fillStyle = '#000';

    // Dibujar el número en el canvas
    ctx.fillText(g, x, y);
  }