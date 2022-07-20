/**
 * sampleTime
 * Permite obtener el último valor emitido
 * en un intervalo de tiempo
 * 
 * 
 * sampleTime
 * source$:     abc----b------------ctx----------->
 *              sampleTime(1000)
 *              ----c----b--------------x------>
 * subscription:---->---->---->---->---->---->---->---->---->
 *              1seg 1seg 1seg 1seg 1seg 1seg 1seg 1seg 1seg 
 *   
 * sampleTime: nos permite tener una susbscripcion que esta pendiente
 * de cada una de sus emisiones en periodos de tiempo.
 */

 import { fromEvent } from "rxjs";
 import { map, sampleTime } from "rxjs/operators";
 
 const click$ = fromEvent<MouseEvent>(document, 'click');
 
 click$
     .pipe(
         sampleTime(2000), //Es más eficiente colocar el sampletime arriba 
                            //antes que se inicien los calculos en el map
                            //si estuviera abajo el consumo de memoria seria mayor
 
         map(({ x, y }) => ({ x, y })),
     )
     .subscribe(console.log)
 