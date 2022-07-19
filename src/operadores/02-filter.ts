/**
 * Filter
 * 
 * Filtra las emisiones de los valores que emite
 * el observable
 * 
 * input$--0--1--2--3--4--5---------------------->
 * 
 *      filter(value=>value%2 === 1)
 * 
 *       -----1-----3-----5---------------------->
 * 
 */


import { from, fromEvent, range } from 'rxjs';
import { filter, map } from 'rxjs/operators';

// range(1,10).pipe( 
//     filter( val => val%2===1)
// ).subscribe( console.log );

range(20, 30).pipe(
    filter((val, i) => {
        console.log('index', i);
        return val % 2 === 1;
    })
)//.subscribe( console.log );


interface Personaje {
    tipo:string,
    nombre:string
};

const personajes:Personaje[] = [
    {
        tipo: 'heroe',
        nombre: 'Batman'
    },
    {
        tipo:'heroe',
        nombre:'Robin'
    },
    {
        tipo:'villano',
        nombre:'Joker'
    }
];

from(personajes)
    .pipe( 
        filter( val => {
            return val.tipo === 'heroe';
        })
    )
    .subscribe(console.log);



//Encadenamiento de operadores
//El orden es importante

const keyup$ = fromEvent<KeyboardEvent>( document,'keyup').pipe( 
    map( event => event.code ),//Recibe keyboardEvent, sale string
    filter( key => key === 'Enter' ),
);

keyup$.subscribe(console.log);