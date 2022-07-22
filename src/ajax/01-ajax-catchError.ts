import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError, map, pluck } from 'rxjs/operators';

const url='https://api.github.com/users?per_page=5';
// const url='https://api.github.com/usXXXers?per_page=5';

const manejaErrores = (response: Response )=> {
    if( !response.ok ){
        throw new Error( response.statusText );
    }
    return response;
}

const atrapaError = (err:AjaxError) => {
    console.warn('Error en:',err.message)
    return of([{}]); //Devuelve objeto vacio para no romper el programa
}

//trabaja en base a promesaas y no a observables
//esto es una desventaja
//si una peticion esta mal la cancelamos
//cargara los 1000 reg de la peticion erronea
//mas los 1000 registros de la peticion buena
//con rxjs y los observables podríamos cancelar 
//la primera peticion erronea para que no se cargue
// por completo




const fetchPromesa = fetch(url);


// fetchPromesa
//     .then( resp => resp.json() )
//     .then( data => console.log('data', data) ) 
// .catch( err => console.warn('error en usuarios', err) )


// fetchPromesa
//     .then( manejaErrores )
//     .then( resp => resp.json() )
//     .then( data => console.log('data', data) ) 
//     .catch( err => console.warn('error en usuarios', err) )



/**
 * catchError: sirve para capturar cualquier error en el observable
 * source$: --a--b----X---------------------------------------------->
 *                    ----1--2--3--|--------------------------------->
 *          catch(atrapaError )
 *          --a--b--------1--2--3--|--------------------------------->
 */





ajax(url)
.pipe(
    pluck( 'response' ),
    catchError( atrapaError )
)
.subscribe( users => console.log('usuarios',users)) ;