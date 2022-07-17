import {fromEvent} from 'rxjs';

/**
 * Eventos del DOM
 *  Función fromEvent:
 * Permite crear eventos en función de un eventTarget
 */

const src1$ = fromEvent<MouseEvent>(document,'click');
const src2$ = fromEvent<KeyboardEvent>(document,'keyup');


const observer = {
    next: val => console.log('next:', val)
}


// src1$.subscribe(observer);
// src1$.subscribe(ev => {
//     console.log(ev.x);
//     console.log(ev.y);
// });
src1$.subscribe( ({x,y}) => {
    console.log('x: ',x);
    console.log('y: ',y);
});
// src2$.subscribe(observer);
src2$.subscribe(evento =>{
    console.log(evento.key);
});