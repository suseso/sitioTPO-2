'use strict'

const grande = document.querySelector('.grande')
const punto = document.querySelectorAll('.punto')

/* cuando click en punto
- saber la posicion de ese punto
- aplicar un transform translatex al grande
- quitar la clase activo del todos los puntosç
- añadir la clase activa al punto que hemos hecho click
*/

punto.forEach( (cadapPunto , i)=>{
    punto[i].addEventListener('click', ()=>{

        let posicion = i
        //posicion es o trnasformx es o
        //posiciòn es 1 transformx es -50%
        //operacion = posicion * -50

        let operacion = posicion * -50
        grande.style.transform = `translateX($( operacion )%)`

        punto.forEach( (cadapPunto , i)=>{
            punto[i].classlist.remove('activo')
        })
        punto[i].classlist.add('activo')
    })
})
