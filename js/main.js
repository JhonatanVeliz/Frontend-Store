// INGRESANDO A LOS VALORES DEL MENU HAMBURGESA

let nav      = document.querySelector('#nav');
let visibled = document.querySelector('#visibled')
let disibled = document.querySelector('#disibled');

// FUNCIONES DE MOSTRAR Y OCULTAR

const mostrar = () => {
    nav.style.right = "0";
}

const ocultar = () => {
    nav.style.right = "-100%";
}

visibled.addEventListener('click', mostrar);
disibled.addEventListener('click', ocultar);
