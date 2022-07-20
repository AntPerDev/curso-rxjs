/**
 * throttleTime
 * operador parecido al debounceTime.
 * source$ emite valor 'a' throttleTime inmediatamente lo deja pasar y lo emite
 * comienza a contar 1seg, dentro de ese segundo si source$ emite
 * otro valor 'x','y', lo ignora. Pasando ese segundo si source emite otro 
 * valor 'b' se emite inmediatamente y comienza a contar otro segundo
 * durante ese segundo aunque source emita algo throttleTime no lo 
 * deja pasar, lo ignora
 * 
 * source$:--axy----b------c-----cxx------------------------------>
 *         throttleTime(1000)
 *         --a------b------c-----c---------------------------->
 *           --->   --->   --->  --->
 *           1seg   1seg   1seg  1seg
 * 
 */


 import { fromEvent, asyncScheduler } from 'rxjs';
 import { throttleTime, pluck, distinctUntilChanged } from 'rxjs/operators';
 
 
 const click$ = fromEvent(document,'click');
 click$.pipe( 
    throttleTime(3000)
 )//.subscribe( console.log );
 
 //Ejemplo 2
 const input = document.createElement('input');
 document.querySelector('body').append(input);
 
 
 const input$ = fromEvent<KeyboardEvent>(input, 'keyup');
 
 input$
     .pipe(
         throttleTime(1000,asyncScheduler,{
            leading:true,
            trailing:true
         }),
         pluck('target','value'),
         distinctUntilChanged()
     )
     .subscribe( console.log );