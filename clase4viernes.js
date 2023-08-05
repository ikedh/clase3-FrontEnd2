const nombre = "Miguel"

const miTemple = `Mi nombre es ${nombre}`

console.log(miTemple)


/* const etiqueta = document.querySelector("h2")

etiqueta.style.color="red" */



const sitio = document.querySelector('body');
const btnTema = document.querySelector('.tema button')
const menuItems =  document.querySelectorAll('nav li');
const contenedorNoticias = document.querySelector('main');
const articulos = document.querySelectorAll('article');
const titulos = document.querySelectorAll('article h2');


console.log(menuItems[0].style)


menuItems.forEach( item => {
    item.style.textTransform = "uppercase";
    item.style.color = "aqua";
    item.style.backgroundColor = "rgba(255,255,255,0.2)";
    item.style.borderRadius = "50vh";
})

console.log(contenedorNoticias)

/* ----------------------------- Editando clases ---------------------------- */


console.log(sitio.classList)

console.log(sitio.classList.contains('dark'))
console.log(sitio.classList)

console.log(sitio.classList.add('dark'))
console.log(sitio.classList)

console.log(sitio.classList.add('remove'))
console.log(sitio.classList)

console.log(sitio.classList.toggle('remove'))
console.log(sitio.classList)



/* -------------------------------------------------------------------------- */
/*                          CONSIGNA MESA DE TRABAJO                          */
/* -------------------------------------------------------------------------- */
// Primero debemos comentar o eliminar las líneas que modifican las clases de "sitio"
// 1- Desarrollar la función a continuacion para que el usuario elija el tema del sitio.
// 2- Debemos preguntarle al usuario mediante un confirm si desea usar el modo oscuro.
// 3- Si el usuario confirma debemos aplicar la clase "dark" al "sitio", si cancela debe quedar en modo claro.
// 4- A su vez, si está en modo onsecuritypolicyviolation, el texto del boton debe decir "Cambiar a modo claro 🌞". De lo contrario, si está en modo claro debeb decir "Cambiar a modo oscuro 🌛"
function elegirTema() {
    
}
elegirTema();