import { of } from 'rxjs';
import { ajax, AjaxError } from 'rxjs/ajax';
import { catchError } from 'rxjs/operators';


// const url='https://api.github.com/users?per_page=5';
// const url = "https://httpbin.org/delay/1"
const url = "https://httpbinXXX.org/delay/1"
//Api para simular pruebas, en este caso con retardo de 1 segundo

const manejaError = (resp: AjaxError) => {
    console.warn('Errors', resp.message);
    return of({
        ok: false,
        usuarios: []
    })
}

// const obs$ = ajax.getJSON(url).pipe( 
//   catchError( manejaError ) 
// );
// const obs2$ = ajax(url).pipe( 
//   catchError( manejaError ) 
// );

const obs$ = ajax.getJSON(url).pipe(
    catchError(manejaError)
);
const obs2$ = ajax(url).pipe(
    catchError(manejaError)
);

// obs$.subscribe(data => console.log('data', data));
// obs2$.subscribe(data => console.log('data', data));

obs2$.subscribe(data => console.log('data', data));
obs$.pipe(
    catchError( manejaError )
).subscribe({
    next: val => console.log('next', val),
    error: err => console.warn('error', err),
    complete: () => console.log('complete'),

});