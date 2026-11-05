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
    const menuBotones = document.querySelector("#menuBotones"); //captura un div para el menu
    //console.log(menuBotones);
    const galeria = document.querySelector("#galeria"); //captura seccion para las fotos
    //console.log(capturarGaleria);
    const fragment = document.createDocumentFragment();

    const urlBase = 'assets/'

    //ARRAYS -------------------------------------------------------------------------

    const arrayEncabezado = ["cielo", "mar", "edificio", "señales", "montaña", "chica"];
    const arrayGaleria = [
        {
            src: `${urlBase}/viajes-1.jpg`,
            title: 'Viaje 1',
            id: ["señales", "cielo"],
            alt: 'Este es el alt de foto 1',
            descripcion: 'Este es la descripción de foto 1',
        }, {
            src: `${urlBase}/viajes-2.jpg`,
            title: 'Viaje 2',
            id: ["cielo", "mar", "montaña"],
            alt: 'Este es el alt de foto 2',
            descripcion: 'Este es la descripción de foto 2',
        }, {
            src: `${urlBase}/viajes-3.jpg`,
            title: 'Viaje 3',
            id: ["cielo", "mar"],
            alt: 'Este es el alt de foto 3',
            descripcion: 'Este es la descripción de foto 3',
        }, {
            src: `${urlBase}/viajes-4.jpg`,
            title: 'Viaje 4',
            id: ["chica", "mar"],
            alt: 'Este es el alt de foto 4',
            descripcion: 'Este es la descripción de foto 4',
        }, {
            src: `${urlBase}/viajes-5.jpg`,
            title: 'Viaje 5',
            id: ["edificio"],
            alt: 'Este es el alt de foto 5',
            descripcion: 'Este es la descripción de foto 5',
        }, {
            src: `${urlBase}/viajes-6.jpg`,
            title: 'Viaje 6',
            id: ["montaña", "edificio"],
            alt: 'Este es el alt de foto 6',
            descripcion: 'Este es la descripción de foto 6',
        }, {
            src: `${urlBase}/viajes-7.jpg`,
            title: 'Viaje 7',
            id: ["edifico"],
            alt: 'Este es el alt de foto 7',
            descripcion: 'Este es la descripción de foto 7',
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
    //EVENTOS ------------------------------------------------------------------------
    document.addEventListener("click", (ev) => { //estar atento a cuando de presione le boton 
        if (ev.target.matches("#menuBotones button")) { //(al presionar si coincide se ejecuta la accion)//(condicional ternario)
            const tag = ev.target.id;
            recorrerGaleria(tag);           //console.log(arrayFiltrado)
        }
    });
    //FUNCIONES --------------------------------------------------------------------------

    //crea el boton con los tag especificados en el arrayEncabezado 
    //luego la funcion creara los tag automaticamnete con los id de las imagenes 
  
    const crearBoton = (tag) => { //(FUNCION ANTERIOR PARA CREAR BOTON CON EL ARRAY FIJO)
        arrayEncabezado.forEach((tag) => { //recorer array de botones 
            const boton = document.createElement("button"); //en cada vuelta pintar un boton 
            boton.id = tag;
            boton.textContent = tag; //asignar atributos (id, atributo texto)
            menuBotones.append(boton);
        });
    };

    const fltrarCards = (tag) => {
        const arrayFiltrado = arrayGaleria.filter((objetos) => objetos.id.includes(tag));  //ese "nuevo array" es el que se envia a "pintarGaleria".
        return arrayFiltrado;
        
    };

    //pinta en la pantalla las fotos que coincidan (figuran en el nuevo array que devuelve la funcion "filtrarCards")
    
    const recorrerGaleria = (tag) => {
        galeria.innerHTML = ''
        const arrayFiltrado = fltrarCards(tag);
        arrayFiltrado.forEach((objeto) => {
            pintarGaleria(objeto);
        })
      galeria.append(fragment)   
    }

    const pintarGaleria = (objeto) => {
        const card = document.createElement('article');
        const cajaFoto = document.createElement('div')
        const fotoCard = document.createElement('img');
        fotoCard.src = objeto.src;
        fotoCard.id = objeto.id;
        fotoCard.alt = objeto.alt;
        const tituloCard = document.createElement('h3');
        tituloCard.textContent = objeto.title;
        const descripcionCard = document.createElement('P');
        descripcionCard.textContent = objeto.descripcion;
        cajaFoto.append(fotoCard);
        card.append(tituloCard, cajaFoto, descripcionCard); //contenedor para las imagenes 

        fragment.append(card)    
        
    };

/*
INICIO 
    recibe el arrayFiltrado y muestra el undice[0] en grande y las demas opciones en una seccion de "imagenes relacionadas"
    para mostrar una foto grande:
        ver metodos de seleccionar el primero del array
            pintar en pantalla 
    para el resto de las fotos:
        ver metodo para seleccionar una parte del array 
            pintar en pantalla 
ADEMAS:
    evento de click en el que se cambian las imagenes de posicion y colocar una secundaria como una principal 





//DECLARAR FUNCIONES ------------------------------------------------------------------
crearBoton();

}); //FINAL (document.addEventListener("DOMContentLoaded")
