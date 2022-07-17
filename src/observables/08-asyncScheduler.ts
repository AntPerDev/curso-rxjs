/**
 * scheduler 
 * No crea un observable
 * Crea una subscripcion
 * Una suscripción es el producto de un subscribe
 * 
 * 
 */

import { asyncScheduler } from 'rxjs'

// setTimeout(() => { }, 3000);

// setInterval( ()=>{ },3000 );


/**
 * con asyncScheduler podemos hacer lo mismo que con los anteriores
 * settimeout y setInterval, pero con más control
 * 
 */

//Settimeout
const saludar = () => console.log('Hola mundo');
const saludar2 = nombre => console.log(`Hola ${nombre}`);


// asyncScheduler.schedule( saludar, 2 );
// asyncScheduler.schedule( saludar2, 2000,'Antonio' );

// setInterval
// asyncScheduler.schedule( function(state){

//     console.log('state:', state );
// },3000 , state )
const subs = asyncScheduler.schedule(function (state) {

    console.log('state:', state);

    this.schedule(state + 1, 1000);

}, 3000, 0);

// setTimeout(() => {
//     subs.unsubscribe(); //destruye el ciclo infinito que se creó antes con el asyncSheduler state+1
// }, 6000);


asyncScheduler.schedule( ()=>subs.unsubscribe(), 6000);