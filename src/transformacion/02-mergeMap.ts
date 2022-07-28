/**
 * mergeMap operador de aplanamiento
 * 
 * source$:--a----x------r------------------------------------->
 *          mergeMap( (val) => interval(1000) )
 * 
 * 
 * 
 * 
 *                      interval$--a--b--c-------------------------->
 *           interval$--0--1--2--3------------------------------->
 * salida$:-------------0--1----a-2-b-r--3--c------------------------>
 * 
 * 
 * 
 * 
 */

import { fromEvent, interval, of } from "rxjs";
import { map, mergeMap, take, takeUntil } from "rxjs/operators";


const letras$ = of('a','b','c');

letras$.pipe( 

  mergeMap( (letra ) => interval( 1000 ) .pipe( 
    map( i => letra + i ),
    take(3))
  )
)
// .subscribe({
//     next: val => console.log( 'next: ',val ),
//     complete: () => console.log('Complete')
// })

const mousedown$ = fromEvent( document, 'mousedown' );
const mouseup$ = fromEvent( document, 'mouseup' );
const interval$ = interval();


mousedown$.pipe( 
    mergeMap( () =>interval$.pipe( 
        takeUntil( mouseup$ )
    ))
).subscribe(console.log)