/**
 * first
 * input$--a--b--c--d--e--f--g--h|----->
 *       first() /| fist(x => x>=10)
 *       --a|-------------------------->
 */


import { first, map, take, tap } from 'rxjs/operators';
import { fromEvent } from 'rxjs';


const click$ = fromEvent<MouseEvent>(document,'click');

click$.pipe( 
    // take(1),
    // tap( ()=>console.log('tap')),
    tap<MouseEvent>( console.log),
    // map(event=>({
    //     clientY: event.clientY,
    //     clientX: event.clientX
    // }))
    map( ({clientX, clientY}) =>({ clientY,clientX }) ),

    first( event => event.clientY >= 150 )
    
    ).subscribe({
    next: val => console.log('next:',val),
    complete: () => console.log('complete')
});