

const persona = {
  nombre: 'Erika',
  apellido: 'Perez',
  edad: 18,
  direccion: {
    ciudad: 'Los Cordobas',
    zip: 23323333,
    lat: 13.45566,
    lng: 24.4346576,
  }

};


// console.table( persona );

const persona2 = {...persona};
persona2.nombre = 'Maria';


console.log( persona );
console.log( persona2 );


