document.addEventListener("DOMContentLoaded", () => {
/*INICIO 
    CAPTURAR ELEMENTO PARA MODIFICARO DESDE JS (querySelector)
        CREAR UN ARRAY DE MENU DE NAVEGACION 
        CREAR OTRO ARRAY CON LAS FOTOS GALERIA 
            en el array de galeria asignarles otro array con los atributos del array anterior 
        HACER BOTONES ESTATICOS A PARTIR DE ESE ARRAY 
            (crear un elemento y asignarle atributos; vincularlo con la futura funcion, color)
        
FIN*/



//CAMPURAR
const menuBotones= document.querySelector("#menuBotones"); //captura un div para el menu
//console.log(menuBotones);
const capturarGaleria= document.querySelector("#galeria"); //captura seccion para las fotos
//console.log(capturarGaleria);
const fragment = document.createDocumentFragment();

//ARRAYS

const arrayEncabezado= ["cielo", "mar", "edificio", "señales", "montaña", "arena", "chica"];
const arrayGaleria= [ 
{
    src: '../materiales/viajes/viajes-1.jpg',
    title: 'Viaje 1',
    id : ["cielo", "mar", "arena", "chica"],
    alt: 'Este es el alt de foto 1',
},{
    src: '../materiales/viajes/viajes-2.jpg',
    title: 'Viaje 2',
    id : ["cielo", "mar"],
    alt: 'Este es el alt de foto 2'
},{
    src: '../materiales/viajes/viajes-3.jpg',
    title: 'Viaje 3',
    id : ["cielo","señales"],
    alt: 'Este es el alt de foto 3'
},{
    src: '../materiales/viajes/viajes-4.jpg',
    title: 'Viaje 4',
    id : ["edificio"],
    alt: 'Este es el alt de foto 4'
},{
    src: '../materiales/viajes/viajes-5.jpg',
    title: 'Viaje 5',
    description: ["edificio"],
    alt: 'Este es el alt de foto 5'
},{
    src: '../materiales/viajes/viajes-6.jpg',
    title: 'Viaje 6',
    description: ["montaña", "mar"],
    alt: 'Este es el alt de foto 6'
},{
    src: '../materiales/viajes/viajes-7.jpg',
    title: 'Viaje 7',
    description: ["montaña", "mar"],
    alt: 'Este es el alt de foto 7'
},
]

//FUNCIONES 
const darAtributosBoton= ()=> {
    arrayEncabezado.forEach((tag) => { //recorer array de botones 
            const boton = document.createElement("button"); //en cada vuelta pintar un boton 
            boton.id= tag;
            boton.textContent= tag; //asignar atributos (id, atributo texto)
menuBotones.append(boton);
    });
};
darAtributosBoton ();
//console.log(menuBotones);

//sumar a esa funcion un condicional ternario para pintar en pantalla las imagen que coincidan con los tag delimitados en el array id de cada imagen.
//separar en dos funciones (una para delimitar card con sus atributos y otra para filtrar imagenes);

const generarEventoBoton= () => {
menuBotones.addEventListener("click", () => {
    arrayGaleria.forEach((foto) => {   //recorrer el array para encontarr las palabras claves
      const card = document.createElement("div");  //contenedor para las imagenes 
      card.src= foto; 
      card.title= foto;     //asignar atributos 
      card.alt= foto;
capturarGaleria.append(card);   // pintar en documento 
    });         
};

generarEventoBoton();
console.log(generarEventoBoton);










//EVENTOS 

}); //FINAL