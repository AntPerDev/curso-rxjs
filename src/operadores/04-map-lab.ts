import { fromEvent } from "rxjs";
import { map, tap } from "rxjs/operators";

const texto = document.createElement('div');
texto.innerHTML = `
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi ultricies arcu augue, ac vestibulum nisl dapibus vel. In hac habitasse platea dictumst. Nam sit amet sollicitudin magna. Curabitur auctor semper libero, non pretium sem pulvinar nec. Donec non turpis vel eros accumsan dignissim. Nullam sed nibh egestas ipsum sodales imperdiet. Donec sed purus convallis, lobortis sapien ut, imperdiet nulla. Integer vehicula blandit metus cursus mattis. Duis ultrices turpis ut ex molestie, at ornare neque euismod. Nunc quam justo, maximus eget tincidunt in, vulputate non nibh.

<br/>
<br/>

Fusce eu rutrum dolor. Quisque congue eleifend vestibulum. Aliquam erat volutpat. Proin eleifend turpis scelerisque, feugiat elit eu, viverra erat. Nulla quis porta lorem. Phasellus dictum nisi turpis, id blandit libero laoreet sit amet. Proin urna velit, imperdiet sed luctus sit amet, dapibus at odio. Maecenas porta ante sit amet dui gravida aliquet eget at magna. Vestibulum sollicitudin laoreet varius. Donec et cursus dolor. Integer vulputate semper elementum. Etiam nec dolor sed neque scelerisque porta ac elementum odio. Phasellus libero leo, rutrum sit amet volutpat eu, gravida congue leo. Ut eu elit pulvinar, rhoncus justo ac, dapibus nulla.

<br/>
<br/>

Praesent dui purus, sodales eleifend vehicula et, bibendum non nulla. Fusce sed tellus vitae justo facilisis ornare vitae sed sem. In suscipit lectus vel odio laoreet commodo. Nam non tincidunt dolor. Nullam mattis mi suscipit erat volutpat, sodales placerat urna dignissim. Donec vehicula, justo id iaculis sollicitudin, velit ante congue eros, fringilla commodo est nibh sit amet sem. Donec vehicula, velit eget dignissim maximus, felis tortor sodales lorem, id tincidunt lectus metus a nunc. Praesent ultricies nibh magna, sit amet pulvinar magna interdum at. Etiam tincidunt, ex vitae consequat ullamcorper, purus risus congue arcu, eu sagittis turpis dolor in ante. Vivamus ut tortor sed elit hendrerit venenatis a sit amet orci. Aliquam nibh ex, iaculis et dictum quis, aliquam in tellus.

<br/>
<br/>

Pellentesque suscipit magna pharetra arcu faucibus tempus. Nam feugiat nisi varius, iaculis sem quis, bibendum orci. Ut neque neque, feugiat quis tempor eget, porttitor nec eros. Aliquam egestas aliquam tempor. Aenean purus est, molestie vestibulum massa blandit, fermentum ullamcorper turpis. Vivamus lobortis orci molestie dolor blandit volutpat. Mauris id mauris vitae nisi eleifend tincidunt ut sed orci. Fusce placerat massa sit amet tempus suscipit. Sed et sollicitudin tortor.

<br/>
<br/>

In et vehicula lectus. Nam interdum consectetur convallis. Quisque pharetra iaculis leo a ultricies. In rutrum magna pretium, rutrum leo a, euismod mi. Quisque laoreet justo sed massa lacinia consequat ac vitae dolor. Aliquam sit amet erat ante. Etiam vitae velit ac est ultricies tristique sit amet tempor est. Aenean tincidunt ex quis porta viverra. Morbi tincidunt, tellus vel semper bibendum, lectus neque accumsan orci, sed ultrices nulla est quis odio.

`;


const body = document.querySelector('body');
body.append(texto);


const progressBar = document.createElement('div');
progressBar.setAttribute('class', 'progress-bar');
body.append(progressBar);


// Función que haga el cálculo
const calcularPorcentajeScroll = ( event => {

    
    const {
        scrollTop,
        scrollHeight,
        clientHeight,
    } = event.target.documentElement;

    // console.log(scrollTop,scrollHeight,clientHeight );

    return (scrollTop/(scrollHeight-clientHeight))*100;

})


// Streams
const scroll$ = fromEvent(document, 'scroll');
// scroll$.subscribe(console.log);


const progress$ = scroll$.pipe(

    map( calcularPorcentajeScroll ) ,
    // tap(console.log)


);

progress$.subscribe(porcentaje => {
    progressBar.style.width = `${porcentaje}%`;
});