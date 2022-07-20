/**
 * takeWhile
 * 
 * observable$--2--3--4--5--6--|-------------->
 *             takeWhile(x => x < 4)
 *            --2--3--|-------------------->
 * 
 * 
 */

import { fromEvent} from "rxjs";
import { takeWhile,map } from "rxjs/operators";


const click$ = fromEvent<MouseEvent>( document, 'click');
 
click$.pipe(
    map( ({x,y }) => ({x,y}) ),
    takeWhile( ({ y }) => y <= 150 , true ) //boolean true:Indica el último valor que rompe la condición
)
.subscribe({
    next: val=>console.log('next: ',val),
    complete:()=> console.log('complete')    
});