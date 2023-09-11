
const personajes =['Erika', 'Merys', 'Jairo'];
const [ , , p3 ] = personajes;
console.log( p3 )


const retornaArreglo = () =>{
    return ['ABC', 123];
}

const [ letras, numeros] = retornaArreglo();
console.log(letras,numeros);


// Tareas
// 1. el primer valor del arr se llamara nombre
// 2. se llamara setnombre

const miUseState = ( valor ) =>{
    return [ valor, ()=>{ console.log('Hola Mundo')}];
}

const [nombre, setNombre ]= miUseState( ' Erika' );

console.log( nombre )
setNombre();