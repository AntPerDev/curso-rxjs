/**
 *  of
 *  convierte el argumento en una secuencia observable
 * 
 *  of(1,2,3,4,5,6)
 * 
 * 
 *  Firma:
 *  of<T>(...arg: Array<T | SchedulerLike>): Observable<T>
 *  
 * 
 *  Emite los valores en secuencia, uno por uno, de manera síncrona
 *  cuando emite el último valor se completa el observable
 * 
 * 
 * 
 *  observable$ ====================
 *  observable$ =1=2=3=4=5=6|=======
 * 
 */


import { of } from 'rxjs';


// const obs$ = of(1, 2, 3, 4, 5, 6);
const obs$ = of<number>(...[1, 2, 3, 4, 5, 6], 2,3,4,5,6);
// const obs$ = of([1,2],{a:1,b:2}, function(){},true,Promise.resolve(true));

console.log('Inicio del Obs$')
// obs$.subscribe( console.log );
obs$.subscribe(
    next => console.log('next: ', next),
    null,
    () => console.log('Terminamos la secuencia!')
);

console.log('Fin del Obs$')