import { Observable, Observer } from 'rxjs';

// $ para indicar que es un observable
// const obs$ = Observable.create();
// Esta es la manera menos usada menos comun
const observer:Observer<any>= {
    next: value => console.log('Siguiente [next]: ',value ),
    error: error => console.warn('error [obs]:', error),
    complete:()=> console.info('Completador [obs]')
}

const obs$ = new Observable<string>( subs => {
    
    subs.next('Hola');
    subs.next('Mundo');
    subs.next('Hola');
    subs.next('Mundo');
    subs.next('Hola');
    subs.next('Mundo');

    //Forzar un error
    // const a = undefined;
    // a.nombre = 'Antonio';


    subs.complete();

    subs.next('Hola');
    subs.next('Mundo');
});


// obs$.subscribe( resp => console.log(resp));
// obs$.subscribe( console.log );
obs$.subscribe( observer );

// EL siguiente metodo está deprecated
// obs$.subscribe(
//     valor=> console.log('next: ', valor),
//     error => console.warn('error: ',error),
//     () => console.info('Completado'),
// )
