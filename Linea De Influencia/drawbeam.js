function drawBeam(length, y, beamHeight) {
    
    // Dimensiones de la viga
    //var beamHeight = 10;
    
    // Dibujar la viga
    ctx.beginPath();
    ctx.rect(50, canvas.height/y, length, beamHeight);
    ctx.fillStyle = "gray";
    ctx.fill();
    ctx.closePath();
    
}
