import { from, of } from 'rxjs';
import { distinct } from 'rxjs/operators';
/**
 * Distinct
 * Deja pasar los valores que no han sido emitidos anteriormente 
 * por el observable
 * 
 * interval$:--1--1--2--3--3--4--1----------->
 *           distinct()
 *           --1-----2--3-----4-------------->
 * 
 *
 */


const numeros$ = of<number | string>(1, '1', 1, 3, 3, 2, 2, 4, 4, 5, 3, 1, '1');
numeros$
    .pipe(
        distinct() // usa el operador exactamente igual ===
    )
    .subscribe(console.log);


interface Personaje {
    nombre: string
}


const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Zero'
    },
    {
        nombre: 'Dr.Willy'
    },
    {
        nombre: 'x'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },

];

// from(personajes)
//     .pipe(distinct())
//     .subscribe(console.log);

//Es raro pq los resultados se repiten
//Se repiten porque son objetos y cada uno es un objeto distinto
//por tanto pasa el filtro ===, pq no son exactamente iguales, no apuntan
//al mismo espacio en memoria, no son lo mismo



from(personajes)
    .pipe(distinct(
        p => p.nombre // Indicamos el campo del objeto del que distinct
                      // debe estar pendiente de las emisiones
    ))
    .subscribe(console.log);

// con el predicado p=>p.nombre, ya no se emiten repetidos