//Funcion Login
function abrirPopup() {
    document.getElementById('miPopup').style.display = 'block';
}

function cerrarPopup() {
    document.getElementById('miPopup').style.display = 'none';
}

window.onclick = function(event){
    var popup=document.getElementById('#miPopup');
    if (event.target == popup){
        cerrarPopup();
    }
}

//Funcion calculadora

function contarFotos() {
    var fotos = document.querySelectorAll('.foto');
    var cantidadFotos = fotos.length;
    alert("La cantidad de fotos es de: ", cantidadFotos);
}

// contador

let contador = 0;
const valor = document.querySelector('#valor');
const botones = document.querySelectorAll('.boton');

botones.forEach(boton =>{
    boton.addEventListener('click', function(e){
        const estilos = e.currentTarget.classList;
        
        if (estilos.contains('.boton disminuir')) {
            contador--;
        }
        else if (estilos.contains('.boton aumentar')) {
            contador++;
        }
        else{
            contador = 0;
        }
        valor.textContent = contador;


        if(contador > 0){
            valor.style.color = '#fff';
        }
        
        if(contador = 0){
            valor.style.color = '#ba215a';
        }
    })
})

function abrirContador() {
    document.getElementById('cont').style.display = 'block';
}

function cerrarContador() {
    document.getElementById('cont').style.display = 'none';
}

window.onclick = function(event){
    var contad=document.getElementById('#cont');
    if (event.target == contad){
        cerrarPopup();
    }
}