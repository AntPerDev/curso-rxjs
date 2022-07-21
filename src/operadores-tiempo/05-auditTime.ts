/**
 * auditTime
 * deja pasar el último valor emitido por el observable
 * en un periodo de tiempo determinado.
 * 
 *  auditTime
 *  click$: --axy--------b-x-----cx--|--------->
 *           auditTime(2000)
 *   subs   -------y----------x------|--------->
 *            ----->     ----->   ----->
 *            2 seg      2 seg    2 seg
 *  nada mas que el observable emite 'a' auditTime
 *  comienza a contar 2 segundos, si el observable
 *  emite otros valores deja pasar el último valor 
 *  emitido por el observable en esos 2 segundos
 * 
 * 
 * subs = subscription 
 * | = complete
 */

import { fromEvent, pipe } from 'rxjs';
import { auditTime, map, tap } from 'rxjs/operators';

const click$ = fromEvent<PointerEvent>( document, 'click' );

click$
.pipe(
    map( ({x }) => x ),
    tap(val=>console.log('tap',val)),
    auditTime(2000)
) 
.subscribe( console.log );