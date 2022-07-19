/**
 * reduce
 * 
 *  aplica una función acumuladora a las emisiones producidas por el observable. No hay ninguna emisión hasta que se completa el observable
 * 
 * input$: --1--2--3--4--5--6---------------------------->
 *          reduce( (acc,curr) => acc + curr, 0 )
 *         ------------------21|------------------------->
 * 
 * 
 */

 import { interval } from "rxjs";
 import { reduce, take, tap } from "rxjs/operators";
 
 //Js
 const numbers = [1, 2, 3, 4, 5];
 
 const totalReducer = (accumulador: number, valorActual: number) => {
     return accumulador + valorActual;
 }
 
 const total = numbers.reduce(totalReducer, 0);
 
 
 console.log('Total arr', total);
 
 
 interval(500)
     .pipe(
         take(6),
         tap(console.log),
         reduce( totalReducer,0)
     )
     .subscribe({
         next: val => console.log('next:',val),
         complete: () => console.log('Complete')
     })