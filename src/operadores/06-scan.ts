/**
 * scan es igual que reduce
 * la diferencia
 * los valores van saliendo conforme se van emitiendo, y regresa su valor acumulado
 * 
 * scan
 * input$==1==3==5=================================================>
 *       scan( (acc,cur) => acc+ curr,0 );
 *       ==1==4==9==|===============================================>
 * acc acumulador
 * cur current actual
 */

import { from } from "rxjs";
import { map, reduce, scan } from "rxjs/operators";

const numeros = [1, 2, 3, 4, 5];

// const totalAcumulador = (acc,cur) =>{
//     return acc = cur;
// }

const totalAcumulador = (acc, cur) => acc + cur;

// from( numeros )
//     .pipe( 
//         reduce( totalAcumulador )
//     )
//     .subscribe( console.log );

//scan
from(numeros).pipe(
    scan(totalAcumulador)
)
    .subscribe(console.log);

// Patron Redux 
//Manejar el estado global de mi aplicacion en un solo objeto

interface Usuario {
    id?: string;
    autenticado?: boolean;
    token?: string;
    edad?: number
}

const user: Usuario[] = [
    {id: 'fher',autenticado: false, token:null},
    {id: 'fher',autenticado: true, token:'abc'},
    {id: 'fher',autenticado: true, token:'abc123'},
]


const state$ = from ( user ).pipe( 
    scan<Usuario>( (acc,cur)=>{
        return{...acc,...cur}
    },{edad:33} )
);


const id$ = state$.pipe( 
    map( state => state)
)

id$.subscribe( console.log );