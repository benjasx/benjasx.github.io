/*obtenemos el slider id contenedor de los elemntos*/
const slider = document.querySelector("#slider");


/*almacena todos los slider section donde estan las imagenes*/
let sliderSection = document.querySelectorAll(".slider__section");


/*toma al ultimo slider section*/
let sliderSectionLast = sliderSection[sliderSection.length -1];

/*declaramos los botones*/
const btn_left = document.querySelector("#btn_left");
const btn_rigth = document.querySelector("#btn_rigth");

/*coloca el ultimo section slider despues que termina el contenedor eslider (al comienzo)*/
slider.insertAdjacentElement('afterbegin',sliderSectionLast);

function Next() {
    /*para obtener al primer elemento de los sliderContent*/
    let sliderSectiolnFirst = document.querySelectorAll(".slider__section")[0];

    /*cambia el scc de margin para enfocar al otro slider section 
    y le da una transicion*/
    slider.style.marginLeft = "-200%";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition = "none";
        /*coloca el primer elemento antes de que termine*/
        slider.insertAdjacentElement('beforeend', sliderSectiolnFirst);
        /*vuelve a la normalidad enfocando a la nueva imagen -100% */
        slider.style.marginLeft = "-100%";

        /*colocamos el mismo tiempo de duracion de la transicion*/
    },500);
}

function Back() {
    
    let sliderSection = document.querySelectorAll(".slider__section");
    let sliderSectionLast = sliderSection[sliderSection.length -1]; 
    slider.style.marginLeft = "0";
    slider.style.transition = "all 0.5s";

    setTimeout(function(){
        slider.style.transition = "none";
        slider.insertAdjacentElement('afterbegin',sliderSectionLast);
        slider.style.marginLeft = "-100%";
    },500);
}

btn_rigth.addEventListener('click', function(){
    Next();
});

btn_left.addEventListener('click', function(){
    Back();
});

setInterval(function(){
    Next();
}, 5000);
