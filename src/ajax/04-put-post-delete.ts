import {ajax} from 'rxjs/ajax';

const url = 'https://httpbin.org/delay/1';

// //posar raton sobre el get, para ver la construccion,
// ajax.get( url, {

// });
// //posar raton sobre el post, para ver la construccion
// ajax.post( url, {
//     id:1,
//     nombre: 'Fernando'
// }, {
//     "mi-token":'ABC123'
// }).subscribe(console.log);

// ajax.delete( url, {
//     id:1,
//     nombre: 'Fernando'
// }).subscribe(console.log);

ajax({
    url:url,
    method:'POST',
    headers: {
        'mi-token':'ABC123',

    },
    body:{
        id: 1,
        nombre: 'Fernando'
    }

}).subscribe( console.log)