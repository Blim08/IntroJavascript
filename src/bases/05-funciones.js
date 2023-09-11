
// Funciones en JS 
// const  saludar = function ( nombre ) {
//   return `Hola,  ${ nombre }`;
// }

const  saludar2 =  ( nombre ) => {
  return `Hola,  ${ nombre }`;
}

const  saludar3 =  ( nombre ) => `Hola,  ${ nombre }`;
const  saludar4 =  () => `Hola Mundo `;

// console.log( saludar('Erika') )

console.log( saludar2('Jairo') );
console.log( saludar3('Erika') );
console.log( saludar4() );

const getUser = () => ({
  uid: 'ABC123',
  username: 'Blim_blim08'
});

const user = getUser();
console.log(user);

// Tarea
// 1. Transformen a una funcion de Flecha
// 2. Tiene que retornar un objeto implicito
// 3. Prueba

const getUsuarioActivo = ( nombre ) => ({
  uid: 'ABC567',
  username: nombre
});


const usuarioActivo  = getUsuarioActivo('Merys');
console.log( usuarioActivo );