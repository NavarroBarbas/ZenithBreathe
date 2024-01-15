function comenzar() {
    let botonComienza = document.getElementById("boton");
    let botonAcaba = document.getElementById("paraboton");
    
    let start = document.getElementById("start");
    let lungs = document.getElementById("lungs");
    if(botonComienza) {
        start.innerHTML = "PAUSE";
        botonComienza.setAttribute("id", "paraboton");
        start.style.display = "none";
        lungs.style.display = "none";
        
        let cuentaAtras = document.createElement("h3");
        cuentaAtras.setAttribute("id", "tres");
        cuentaAtras.classList.add("numero");
        let tres = document.createTextNode("3");
        cuentaAtras.appendChild(tres);
        botonComienza.appendChild(cuentaAtras);

        setTimeout(() => cuentaAtras.innerHTML = "2" , 1000);
        setTimeout(() => cuentaAtras.innerHTML = "1" , 2000);
        setTimeout(() => {girar();
            cuentaAtras.style.display="none";
            start.style.display = "block";
            lungs.style.display = "block";
        }, 3000);
        
    }

    if(botonAcaba) {
        parar();
        start.innerHTML = "START";
        botonAcaba.setAttribute("id", "comienza");
    }
}

function girar() {
    let barra = document.getElementById("segundero");
    barra.style.animation = "rotateAndPause 10s linear infinite";
}

function parar() {
    let barra = document.getElementById("segundero");
    barra.style.animation = "none";
}