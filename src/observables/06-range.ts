/**
 *  Función range
 *  Es una función que crea un observable que emite
 *  una secuencia de numeros con un rango específico.
 *  Es una emisión sincrona, pero puede hacerse asíncrona
 *  usando un schedulerLike
 * 
 *  range(1,3);
 * 
 *  salida$ ==1==2==3|=============================>
 * 
 * 
 */


 import {of, range, asyncScheduler} from 'rxjs';


 //crea un observable que emite una secuencia de números del 1 al 5
 // const src$ = of(1,2,3,4,5); 
 // y del 1 al 100? al 1000?
 // const src$ = range(1,5); 
 // const src$ = range(1,100); 
 // const src$ = range(); 
 // const src$ = range(5); // 5 EMISIONES DESDE EL 0 SALDRA 4
 const src$ = range(1,5, asyncScheduler); 
 
 
 
 console.log('Inicio')
 //nos suscribimos para comenzar la emisión del flujo de datos
 src$.subscribe(console.log);
 console.log('fin');