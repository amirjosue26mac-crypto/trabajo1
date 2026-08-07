// Botón para volver arriba
const botonArriba = document.getElementById("arriba");

window.addEventListener("scroll", () => {

    if (window.scrollY > 300) {
        botonArriba.style.display = "block";
    } else {
        botonArriba.style.display = "none";
    }

});

botonArriba.addEventListener("click", () => {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

});

// Animación de aparición
const secciones = document.querySelectorAll("section");

const mostrar = () => {

    secciones.forEach(seccion => {

        const posicion = seccion.getBoundingClientRect().top;

        if (posicion < window.innerHeight - 100) {
            seccion.style.opacity = "1";
            seccion.style.transform = "translateY(0)";
        }

    });

};

secciones.forEach(seccion => {

    seccion.style.opacity = "0";
    seccion.style.transform = "translateY(40px)";
    seccion.style.transition = "all .8s";

});

window.addEventListener("scroll", mostrar);
window.addEventListener("load", mostrar);

// Evita que el formulario recargue la página
const formulario = document.querySelector("form");

formulario.addEventListener("submit", function(e){

    e.preventDefault();

    alert("¡Gracias por contactarnos! Te responderemos pronto.");

    formulario.reset();

});