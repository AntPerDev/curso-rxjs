/**
 * Más ejemplos con from y of
 * 
 */

import {from, of} from 'rxjs';

/**
 * of toma argumentos y genera una secuencia de valores
 * from crea un observable en base a un array, promise, iterable, observable....
 */

const observer = {
    next: val => console.log('next', val),
    complete: ()=>console.log('complete')
}


// const source$ = from([1,2,3,4,5]); //Emite cada uno de los valores
// const source$ = of([1,2,3,4,5]); //Una sola emision con el array y todos sus valores
// const source$ = of(...[1,2,3,4,5]); //Emision  igual que el from una emision por valor cada del array
//  const source$ = from('Antonio'); //Una emisión por cada letra
//  const source$ = of('Antonio'); //Una sola emision con toda la cadena

/**
 * 
 * El from permite tomar casi cualquier cosa y convertirla en un observable
 */

// const source$=from ( fetch('https://api.github.com/users/klerith'));

// source$.subscribe( async resp =>{

//     console.log( resp.ok );
    
//     const dataResp = await resp.json();
//     console.log(dataResp);

// } );


// source$.subscribe( observer );



/**
 *  fUNCION GENERADORA
 */

const miGenerador = function*(){
    yield 1;
    yield 2;
    yield 3;
    yield 4;
    yield 5;
}

const miIterable = miGenerador();

// for(let id of miIterable){
//     console.log(id);
// }
from(miIterable).subscribe(observer);