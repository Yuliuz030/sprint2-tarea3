const url = "https://fedeperin-harry-potter-api.herokuapp.com/db"
const $logo = document.getElementById("logo");
const $imgPersonaje = document.getElementById("img-personaje");
const $nombre = document.getElementById("nombre");
const $casa = document.getElementById("casa");
const $btnEmpezar = document.getElementById("btn-empezar");
const $btnGenerar = document.getElementById("btn-generar");
const $ctnEmpezar = document.getElementById("ctn-empezar");
const $ctnCard = document.getElementById("ctn-card");

let personajes = [];
const imagenes = ['images/g.jpg','images/r.jpg','images/s.jpg'];

//Obteniendo data
async function getPotter(numero) {
    fetch(url)
	.then((res) => res.json())
	.then((data) => {
		/*
			Trae toda la info de la API y la deja dentro de la variable data
			También muestra la variable data por consola
		*/
        personajes = data.personajes;
        
        $imgPersonaje.src = personajes[numero].imagen;
        $nombre.innerHTML =  personajes[numero].personaje;
        $casa.innerHTML = personajes[numero].casaDeHogwarts;
        switch (personajes[numero].casaDeHogwarts) {
            case "Gryffindor":
                $logo.src = imagenes[0]
                break;
            case "Ravenclaw":
                        $logo.src = imagenes[1]
            case "Slytherin":
                $logo.src = imagenes[2]
            default: null
                break;
        }
	})
	.catch((e) => console.log(e))
}
getPotter(0)

document.addEventListener('click', e =>{
    if(e.target === $btnEmpezar){
        $ctnCard.style.display = "flex"
        $ctnEmpezar.style.display = "none"
    }
    if(e.target === $btnGenerar){
        let ramdom = Math.random() * (22 - 0) + 0;
        console.log(Math.floor(ramdom))
        console.log(personajes)
        getPotter(Math.floor(ramdom))
    }
})

