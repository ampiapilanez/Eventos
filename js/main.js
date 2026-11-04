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
console.log(menuBotones);
const capturarGaleria= document.querySelector("#galeria"); //captura seccion para las fotos
//console.log(capturarGaleria);
const fragment = document.createDocumentFragment();

//ARRAYS

const arrayEncabezado= ["cielo", "mar", "edificio", "señales", "montaña", "arena", "chica"];
const arrayGaleria= [ 
{
    src: '../materiales/viajes/viajes-1.jpg',
    title: 'Viaje 1',
    id: ["cielo", "mar", "arena", "chica"],
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
    id: ["edificio"],
    alt: 'Este es el alt de foto 5'
},{
    src: '../materiales/viajes/viajes-6.jpg',
    title: 'Viaje 6',
    id: ["montaña", "mar"],
    alt: 'Este es el alt de foto 6'
},{
    src: '../materiales/viajes/viajes-7.jpg',
    title: 'Viaje 7',
    id: ["montaña", "mar"],
    alt: 'Este es el alt de foto 7'
},
]
/*INICIO 
    creado el arrayGaleria que contega objetos que contenga un id de palabras claves
    funcion pintar boton 
        create.element para un button 
        darle los atributos telimitados en el array(tag)
        meterlo dentro de un bocre para reutilizar la funcion 
    funcion fotos especificas 
        generarle un metodo "click" al botón y vincularlo al id con condicional
        condicional: crear un if(usar un ternario en este caso por ser una funcion compacta)
    funcion pintar boton 
        vinculando las dos funciones anteriores pintar boton en el tablero 
*/
//EVENTOS
/*document.addEventListener("click", (ev) => { //estar atento a cuando de presione le boton 
    if (ev.target.matches("#menuBotones button")){ //(al presionar si coincide se ejecuta la accion)//(condicional ternario)
        const tag = ev.target.id
        console.log(ev.target.id)
       }
});*/

//FUNCIONES 
const fltrarCards= (tag) => {
    const arrayFiltrado = arrayGaleria.filter((objeto)=> (id.includes(tag));  //ese "nuevo array" es el que se envia a "pintarGaleria"
    console.log(arrayFiltrado);
}; 


const crearBoton= (tag)=> {
    arrayEncabezado.forEach((tag) => { //recorer array de botones 
            const boton = document.createElement("button"); //en cada vuelta pintar un boton 
            boton.id= tag;
            boton.textContent= tag; //asignar atributos (id, atributo texto)
    menuBotones.append(boton);
    });
};
/*
const pintarGaleria= (tag) => {
    const card = document.createElement("div");  //contenedor para las imagenes 
        card.src= valor; 
        card.title= valor;
        card.id= valor;     //asignar atributos 
        card.alt= valor;
    capturarGaleria.append(card); 
};
*/

//DECLARAR FUNCIONES
fltrarCards();
//crearBoton ();
//pintarGaleria();

}); //FINAL (document.addEventListener("DOMContentLoaded")
