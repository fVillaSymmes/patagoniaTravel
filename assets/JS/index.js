let seleccion = document.getElementById("actividad")
let textoDescriptor = document.getElementById("textoDescriptor")
let imagenes = document.getElementById("imagen")
let tarjetaImagen = document.getElementById("tarjetaImagen")
function imagen(source) { imagenes.setAttribute("src", source) }
let textoImagen = document.getElementById("textoImagen")

if(seleccion.value == "ferry") {
    imagen("./assets/img/ferry.jpeg")
    textoDescriptor.innerHTML = '"Embarcación que realiza alternativamente el\n mismo recorrido entre dos puntos;\n especialmente la de grandes dimensiones destinada al trasporte de cargas pesadas o pasajeros."'
    textoImagen.innerHTML = `<h2>FERRY</h2> <p><i class="fa-solid fa-location-dot"></i> Lago Llanquihue</p>`    
}


seleccion.addEventListener('change', (event) => {
    let actividad = event.target.value

    switch (actividad) {
        case 'natacion':
        imagen("./assets/img/natacion.jpeg")
        textoDescriptor.innerHTML = '"Deporte o ejercicio que consiste en nadar; en las\n pruebas de natación se compite en velocidad, en\n cualquiera de los cuatro estilos: braza, crol, espalda y mariposa."'
        textoImagen.innerHTML = `<h2>NATACIÓN</h2> <p><i class="fa-solid fa-location-dot"></i> Lago Cochrane</p>`    
            break;

        case 'ferry':
        imagen("./assets/img/ferry.jpeg")
        textoDescriptor.innerHTML = '"Embarcación que realiza alternativamente el\n mismo recorrido entre dos puntos;\n especialmente la de grandes dimensiones destinada al trasporte de cargas pesadas o pasajeros."'
        textoImagen.innerHTML = `<h2>FERRY</h2> <p><i class="fa-solid fa-location-dot"></i> Lago Llanquihue</p>`    

        break;
    
        case 'trekking':
        imagen("./assets/img/trek.jpg")    
        textoDescriptor.innerHTML = '"Modalidad de excursionismo que consiste en\n recorrer a pie largas distancias o zonas\n determinadas, generalmente de alta montaña y\n poco frecuentadas por el turismo convencional."'
        textoImagen.innerHTML = `<h2>TREKKING</h2> <p><i class="fa-solid fa-location-dot"></i> Volcán Villarrica</p>`    

        break;

        default:
            break;
    }
})

tarjetaImagen.addEventListener("mouseenter", () => {
    imagenes.setAttribute("class", "card-img opacity-25")
    textoImagen.setAttribute("class", "card-text text-center text-light position-absolute top-50 start-50 translate-middle")
})

tarjetaImagen.addEventListener("mouseleave", () => {
    imagenes.setAttribute("class", "card-img")
    textoImagen.setAttribute("class", "card-text d-none text-light position-absolute top-50 start-50 translate-middle")
})