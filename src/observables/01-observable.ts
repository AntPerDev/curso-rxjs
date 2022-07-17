import { Observable, Observer } from 'rxjs';

// Esta es la manera menos usada menos comun
// const obs$ = Observable.create();
// $ para indicar que es un observable


const observer:Observer<any>= {
    next: value => console.log('Siguiente [next]: ',value ),
    error: error => console.warn('error [obs]:', error),
    complete:()=> console.info('Completado [obs]')
}

// Esta es la manera mas usada mas comun de crear un observable
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

    // despues de que el observable envíe el complete
    // el observador dejará de escuchar al observable por lo que
    // las siguientes emisiones del observable no seran tenidas en cuenta
    // por el observer
    // Pero seguiran siendo emitidas. Pudiendo producir fugas de memoria

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
