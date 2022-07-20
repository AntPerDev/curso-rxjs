/**
 * takeUntil
 * 
 * interval$--a--b--c--d--e--f--g--|------>
 *    click$------------Ev--------------->
 *          takeUntil(clickBtn$)
 *          --a--b--c--d--|-------------->
 * 
 * 
 */


import { fromEvent, interval } from "rxjs";
import { takeUntil, skip, take, tap } from 'rxjs/operators';

const boton = document.createElement('button');
boton.innerText = 'Detener Timer';
document.querySelector('body').append(boton);

const counter$ = interval(1000);

// const clickBtn$ = fromEvent( boton, 'click');

// counter$
//     .pipe( 
//         takeUntil(clickBtn$)
//     )
//     .subscribe({
//         next: val=>console.log('next',val),
//         complete: () => {console.log('complete');
//         }
//      })



/**
 * skip
 * input$--a--b--c--d--e--f--|----------------------------->
 *        skip(3)
 *       -----------d--e--f--|----------------------------->
 */

 const clickBtn$ = fromEvent( boton, 'click').pipe( 
    tap( ()=> console.log('tap antes de skip: ', )),
    skip(1),
    tap( ()=> console.log('tap despues de skip: ', )),
)

counter$
    .pipe( 
        takeUntil(clickBtn$)
    )
    .subscribe({
        next: val=>console.log('next',val),
        complete: () => {console.log('complete');
        }
     })
