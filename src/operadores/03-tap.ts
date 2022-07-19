/**
 * tap: dispara "efectos secundarios"
 * 
 * input$--0--1--2--3--4--5--6----------->
 *          tap(x=>console.log(x))
 *       --0--1--2--3--4--5--6----------->
 *
 * 
 *  
 */

 import { range } from "rxjs";
 import { map, tap } from "rxjs/operators";
 
 
 const numeros$ = range(1, 5);
 
 numeros$.pipe(
     tap(x => { 
         console.log('antes', x)
         return 100;
     }),
     map( val => val*10 ),
     tap({
         next: valor => console.log('despues',valor),
         complete:() => console.log('se terminó todo')
     })
 ).subscribe(val => console.log('subscribe', val));