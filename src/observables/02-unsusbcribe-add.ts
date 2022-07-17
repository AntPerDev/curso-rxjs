import { Observable, Observer } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
}

//subscribe & unsubscribe


const intervalo$ = new Observable<number>(subscriber => {

    //Crear un contador, 1,2,3,4,5,.....
    let count = 0;


    const interval = setInterval(() => {
        //Cada segundo
        count++;
        subscriber.next(count);
        console.log(count);
    }, 1000);

    //El unsubcribe y el complete NO SON LO MISMO
    setTimeout(() => {
        subscriber.complete()
    }, 2500);

    return () => {
        clearInterval(interval)
        console.log('Intervalo destruido')
    }
});


// intervalo$.subscribe(console.log)
// subscription
// const subs1 = intervalo$.subscribe(num => console.log('Num:', num));
const subs1 = intervalo$.subscribe( observer );
// const subs2 = intervalo$.subscribe(num => console.log('Num:', num));
const subs2 = intervalo$.subscribe( observer );
// const subs3 = intervalo$.subscribe(num => console.log('Num:', num));
const subs3 = intervalo$.subscribe( observer );

// Terminar observables en cadena
subs1.add( subs2 )
     .add( subs3 );
//La diferencia con el metodo comentado abajo es que solo subs1 emite el evento complete

setTimeout( () => {
    subs1.unsubscribe();
    // subs2.unsubscribe();
    // subs3.unsubscribe();

    console.log('Completado timeout')
}, 6000)