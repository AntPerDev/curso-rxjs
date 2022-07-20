import { from } from 'rxjs';
import {  distinctUntilKeyChanged } from 'rxjs/operators';


/**
 * 
 * DistinctUntilKeyChange => Emite valores siempre y cuando la emision
 * anterior no sea la misma
 * 
 * source$:--{k:1}--{k:2}--{k:2}--{k:1}--{k:3}-->
 *           DistinctUntilKeyChange('k')
 *         --{k:1}--{k:2}---------{k:1}--{k:3}-->
 * 
 *
 */




interface Personaje {
    nombre: string
}


const personajes: Personaje[] = [
    {
        nombre: 'Megaman'
    },
    
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
        nombre: 'X'
    },
    {
        nombre: 'X'
    },
    {
        nombre: 'Megaman'
    },
    {
        nombre: 'Zero'
    },

];


from(personajes)
    .pipe( distinctUntilKeyChanged('nombre') )
    .subscribe(console.log);

// con el predicado p=>p.nombre, ya no se emiten repetidos


