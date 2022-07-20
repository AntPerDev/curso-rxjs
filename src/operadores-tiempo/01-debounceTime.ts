/**
 * debounceTime
 * Trabaja en base a intervalos de tiempo
 * ayuda a contar milesimas de segundos desde la ultima emision
 * y si esas milesimas contadas sobrepasan el parametro que tenemos entre
 * parentesis entonces emitirá ese valor.
 * 
 * Restringe la cantidad de emisiones del observable
 * 
 * source$:--a-------b--c-------d-------->
 *         debounceTime(1000) 
 *         - -----a---------c--------d--->
 *           ---->      ---->   ---->
 *            1seg       1seg   1seg
 */

 import { fromEvent } from "rxjs";
 import { debounceTime, pluck, distinctUntilChanged } from 'rxjs/operators';
 
 
 const click$ = fromEvent(document,'click');
 click$.pipe( 
     debounceTime(3000)
 )//.subscribe( console.log );
 
 //Ejemplo 2
 const input = document.createElement('input');
 document.querySelector('body').append(input);
 
 
 const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
 
 input$
     .pipe(
         debounceTime(1000),
         pluck('target','value'),
         distinctUntilChanged()
     )
     .subscribe( console.log );