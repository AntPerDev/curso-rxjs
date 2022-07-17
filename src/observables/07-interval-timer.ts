/**
 * Funciones que permiten crear observables
 * que trabajan con intervalos de tiempo
 *  interval$=============================>
 *  timer$  ==============================>
 * se ejecuta hasta el infinito
 * 
 * son asincronos por naturaleza
 */

import { interval, timer} from "rxjs";

const observer = {
    next: val => console.log('next: ',val),
    complete: () => console.log('Complete')
}

const hoyEn5 = new Date(); //ahora
hoyEn5.setSeconds(hoyEn5.getSeconds()+5);


const interval$ = interval(1000); 
/**
 * Comienza emitiendo 0 y cada segundo
* aumenta 1 el numero que emite 
* hasta el infinito
*/

// const timer$ = timer(2000);
/**
 * timer no se ejecuta instantaneamente 
 * por poner cero sino tan pronto como Js
 * y su pila de callbacks lo permita
 */
// const timer$ = timer(0); 
/**
 * Creamos un interval que inicia a los 2s
 * no para de emitir cada 1s
 * no emite el complete
 */
//  const timer$ = timer(2000,1000); 
 const timer$ = timer(hoyEn5); // es igual que timer(0)

console.log('Inicio');
// interval$.subscribe( observer ); //No emitió el complete
timer$.subscribe( observer ); // emitió el complete tras 2 s
console.log('Fin');

