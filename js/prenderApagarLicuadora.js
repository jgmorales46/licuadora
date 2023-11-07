var estadoLicuadora = "apagado";
var licuadora = document.getElementById("licuadora");
var sonidoLicuadora = document.getElementById("licuadora-sonido");
var botonLicuadora = document.getElementById("licuadora-boton-sonido");

function controlarLicuadora() {
    if (estadoLicuadora == "apagado") {
        estadoLicuadora = "encendido";
        hacerRuido();
        licuadora.classList.add("active");
        // console.log("me prendiste");
    } else {
        estadoLicuadora = "apagado";
        hacerRuido();
        licuadora.classList.remove("active");
        // console.log("me apagaste");
    }
}

function hacerRuido() {
    if (sonidoLicuadora.paused) {
        botonLicuadora.play();
        sonidoLicuadora.play();
    } else {
        botonLicuadora.play();
        sonidoLicuadora.pause();
        sonidoLicuadora.currentTime = 0;
    }
}