import { fromEvent, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";
import { debounceTime, map, mergeAll, pluck } from 'rxjs/operators';
// import { GithubUser } from './interfaces/github-user.interface';
import { GithubUser } from '../interfaces/github-user.interface';
// import { GithubUsersResp } from "./interfaces/github-users.interface";
import { GithubUsersResp } from "../interfaces/github-users.interface";

//Referencias
const body = document.querySelector('body');

const textInput = document.createElement('input');
const orderList = document.createElement('ol');


body.append( textInput, orderList);

//helpers
const mostrarUsuarios = (usuarios: GithubUser[]) => {

    console.log(usuarios);
    orderList.innerHTML='';

    for( const usuario of usuarios ){
        const li = document.createElement('li');
        const img = document.createElement('img');
        img.src = usuario.avatar_url;

        const anchor  = document.createElement('a');
        anchor.href   = usuario.html_url;
        anchor.text   = 'Ver página';
        anchor.target = '_blank';

        li.append( img );
        li.append( usuario.login+' ' );
        li.append( anchor );

        orderList.append(li);
    }
}

//streams
const input$ = fromEvent<KeyboardEvent>( textInput, 'keyup');

input$.pipe(
    debounceTime<KeyboardEvent>(500),
    pluck<KeyboardEvent, string>('target', 'value' ),
    map<string, Observable<GithubUsersResp>>( texto => 
        ajax.getJSON(`https://api.github.com/search/users?q=${ texto }`)),
    mergeAll<GithubUsersResp>(),
    pluck<GithubUsersResp,  GithubUser[]>('items')
).subscribe(  mostrarUsuarios  );

// Lo importante es tipar el inicio y el final 


/**
 * mergeAll
 * Sirve para trabajar con observables que internamente devuelven
 * observables
 * 
 * 
 * source$:-----------------------------------------|------>
 *         --a           -e  
 *             --b          -- 
 *                 --c         --
 *                     --             --f
 *                        --             --
 *                           -- d            --
 *                               --           -- 
 *                                   -- |         --
 * 
 *           mergeAll()
 * 
 * 
 *     
 *            --a--b--c------e----d--------f-------------------------> 
 * 
 * 
 * 
 * 
 * Se conocen como operadores de aplanamiento o flattening operators
 * el observable no se termina hasta que no se completan todos los
 * observables que está eschuchando.
 * 
 */