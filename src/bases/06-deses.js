
// Desestructuracion

const { useContext } = require("react");

// Asignacion desestructurante
const persona = {
  nombre: 'Erika',
  edad: 18,
  clave: 'Iroman'
};

// const { edad, clave, nombre, } = persona;

// console.log( persona.nombre )
// console.log( persona.edad )
// console.log( persona.clave )


const miUseContext = ({clave, nombre, edad, rango = 'General'}) => {
  
  

  // console.log( nombre, edad, rango );

    return {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 65.9878,
        lng: -78.8756
      }
    }

}

const { nombreClave, anios, latlng: { lat, lng } } = miUseContext( persona );

console.log(nombreClave, anios);
console.log( lat, lng );