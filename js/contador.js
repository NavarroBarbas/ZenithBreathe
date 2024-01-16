let vibracion;

function comenzar() {
    let botonComienza = document.getElementById("boton");
    let botonAcaba = document.getElementById("paraboton");
    
    let start = document.getElementById("start");
    let lungs = document.getElementById("lungs");

    if(botonComienza) {
        botonComienza.setAttribute("id", "contadoractivo");
        start.innerHTML = "PAUSE";
        start.style.display = "none";
        lungs.style.display = "none";
        
        let cuentaAtras = document.createElement("h3");
        cuentaAtras.setAttribute("id", "numero");
        cuentaAtras.classList.add("numero");
        let tres = document.createTextNode("3");
        cuentaAtras.appendChild(tres);
        botonComienza.appendChild(cuentaAtras);

        setTimeout(() => cuentaAtras.innerHTML = "2" , 1000);
        setTimeout(() => cuentaAtras.innerHTML = "1" , 2000);
        setTimeout(() => {
            cuentaAtras.classList.add("fade-out");
            setTimeout(() => {
                girar();
                navigator.vibrate(100);
                vibracion = setInterval(function () {navigator.vibrate(100);}, 2000);
                botonComienza.setAttribute("id", "paraboton");
                cuentaAtras.style.display = "none";
                start.style.display = "block";
                lungs.style.display = "block";
            }, 1000);
        }, 3000);
        
    }

    if(botonAcaba) {
        parar();
    }
}

function girar() {
    let barra = document.getElementById("segundero");
    barra.style.animation = "rotateAndPause 8s linear infinite";
    setTimeout(() => {
        parar();
    }, 300000);
}

function parar() {
    clearInterval(vibracion);
    navigator.vibrate(0);
    let barra = document.getElementById("segundero");
    let botonAcaba = document.getElementById("paraboton");
    barra.style.animation = "none";
    start.innerHTML = "START";
    botonAcaba.setAttribute("id", "boton");
}