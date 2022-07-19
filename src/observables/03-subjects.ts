import { Observable, Observer, Subject } from 'rxjs';

const observer: Observer<any> = {
    next: value => console.log('next: ', value),
    error: error => console.warn('error: ', error),
    complete: () => console.info('Completado')
}
//subject un tipo especial de observable

const intervalo$ = new Observable<number>(subs => {
    const intervalID = setInterval(
        () => subs.next(Math.random()), 1000
    );

    return () => {
        clearInterval(intervalID);
        console.log(' Intervalo destruido ')
    }

    /**
     * el return anterior para limpiar, destruir el intervalo
     * no se ejecuta hasta que no se manda llamar el unsubscribe
     * de la subscripcion intervalo$.subscribe(subject$)
     */
})


//subject es un tipo especial de observable
/**
 * 1.- Casteo multiple - puede tener multiples observadores de la misma informacion
 * 2.- también es un observer
 * 3.- podemos mandarle un subject
 * 4.- Puede manejar Next, error y complete
 */
const subject$ = new Subject();
const subscrition = intervalo$.subscribe(subject$);


// const subs1 = intervalo$.subscribe(rnd =>console.log('subs1: ', rnd))
// const subs2 = intervalo$.subscribe(rnd =>console.log('subs2: ', rnd))


// const subs1 = subject$.subscribe(rnd =>console.log('subs1: ', rnd))
// const subs2 = subject$.subscribe(rnd =>console.log('subs2: ', rnd))
const subs1 = subject$.subscribe(observer);
const subs2 = subject$.subscribe(observer);

//subs1 y subs2 seran el mismo numero, resutado

//el código sigue ejecuntandose hasta el final de los tiempos
//oo hasta que llame al unsubscribe
// o hasta que el subscribe se complete

setTimeout(() => {
    subject$.next(10);
    subject$.complete();
    /**
     * Al lanzar el subject complete puede dar la falsa sensacion
     * de que el observable intervalo$ se ha destruido ha parado,
     * se ha destruido,
     * pero no lo ha hecho,
     * sigue emitiendo valores
     * 
     * 
     *  */

    subscrition.unsubscribe();
    /**
     *  Con esta linea deberiamos ver la limpieza
     *  del setinterval indicando que el intervalo$ se ha detenido y se ha limpiado
     *  un log en consola diciendo intervalo destruido
     */

}, 3500);

// un subject permite convertir un cold observable 
// en un hot observable al inyectar datos en el stream en "vivo"