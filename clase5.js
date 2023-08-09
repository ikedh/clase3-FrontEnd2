
let nodo1 = document.createElement("h2")

let texto = document.createTextNode("Hola vengo de JS")

nodo1.appendChild(texto)

nodo1.setAttribute("color", "red")

document.body.appendChild(nodo1)

console.log(nodo1);

let imagen = document.querySelector(".ejemplo")

console.log(imagen.removeAttribute("src"))


/* 


const listadoNoticias = [{
    titulo: "La emoción de Lisandro Martínez",
    epigrafe: "La increíble ovación de los hinchas de Manchester United al defensor argentino: 'Quise llorar'.",
    foto: "./img/futbol.webp"
},
{
    titulo: "La renuncia de Liz Truss",
    epigrafe: "Boris Johnson interrumpió sus vacaciones y vuelve a sonar fuerte entre los posibles sucesores.",
    foto: "./img/boris.webp"
},
{
    titulo: "Los motivos",
    epigrafe: "Una escuela argentina fue elegida entre las diez mejores del mundo.",
    foto: "./img/escuela.webp"
}
]

// Vamos a trabajar con nodos de manera dinámica, sobre todo crearlos desde JS en vez de que estén estáticos en el HTML
// Para eso vamos a valernos de array listadoNoticias que tenemos más arriba
// ¿Cual es la idea? utilizar la información que nos llega del listado para presentarla en pantalla.

// Primero, mantengamos el HTML vinculado solo con clase5 👌

/* -------------------------- PRACTICANDO ATRIBUTOS ------------------------- */
// Completemos correctamente el 'alt' de cada imagen con la frase "miniatura de noticia"

const imagenes = document.querySelectorAll('.noticias article img');
console.log(imagenes);
console.log("alt: "+imagenes[0].getAttribute('alt')) //vemos que está vacío
// rellenamos el atributo👇
imagenes[2].setAttribute('alt', 'Soy el tercer Nodo');
console.log("alt: "+imagenes[0].getAttribute('alt')) // ahora vemos que es un texto
console.log("alt: "+imagenes[2].getAttribute('alt')) 


// Hagamoslo más dinámico y recorramos todas las imagenes👇
for (let i = 0; i < imagenes.length; i++) {
imagenes[i].setAttribute('alt', 'miniatura de noticia');
console.log(imagenes[i])
}







/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
//Primera Parte: Eliminar los Artiche del HTML e insertarlo mediante objetos
 
// Antes de comenzar vamos a comentar la parte de PRACTICANDO ATRIBUTOS y PRACTICANDO CREACION DE NODOS.
// Una vez que solo tenemos el código comentado podemos empezar la practica.
// 1- Debemos reutilizar el "listadoNoticias" para lograr el mismo resultado de crear los nodos dinamicamente.
// 2- La diferencia ahora radica en utilizar un bucle y dentro del mismo utilizar la notación de Plantillas Literales (con comillas invertidas -> ``)
// 3- El resultado debe ser el mismo que en el caso anterior pero vamos a implementar el método innerHTML para insertar la plantilla creada.
// Ejemplo: si quiero insertar un titulo en el body, haría los siguiente:
// document.querySelector('body').innerHTML += `<h1>Nuevo Título</h1>`;

function renderizandoElementos() {
// desarrollar la consigna aquí


}
renderizandoElementos();