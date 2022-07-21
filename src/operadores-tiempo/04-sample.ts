/**
 * sample:  deja pasar el último valor emitido por el observable (interval$)
 * cuando en el segundo observable (click$) se emite el evento 'click'
 * 
 * interval$:--a------b----c-------------d---------|---->
 *    click$:-----ev------------ev--ev--------ev-----|-->
 *           sample(click$)
 * subscrip: -----a--------------c-------------d---|---->
 * 
 * 
 *  
 */

 import { fromEvent, interval } from "rxjs";
 import { sample } from "rxjs/operators";
 
 const interval$ = interval(500);
 const click$ = fromEvent(document, 'click');
 
 
 interval$
     .pipe(
         sample( click$ )
     )
     .subscribe(console.log);