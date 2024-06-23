let personaje = {
    nombre: 'Tony Stark',
    codeName: 'Iron man',
    vivo: false,
    coords: {
        lat: 34.034,
        lng: -118.70,
    },
    trajes: ['Mark I', 'Mark V', 'MarkBuster'],
    direccion: {
        zip: '10880, 90265',
        ubicacion: 'Malibu, california',
    },
    'ultima-pelicula': 'Infinity War'
};

console.log('Objeto completo: ', personaje);
console.log('Nombre: ', personaje.codeName );
console.log('CodeName: ', personaje['codeName']);

console.log('Cordenadas: ', personaje.coords.lat);

console.log('Trajes mas poderoso: ', personaje.trajes[2]);
console.log('cantidad de trajes: ', personaje.trajes.length);

console.log('Ultimo traje: ', personaje.trajes[personaje.trajes.length - 1]);

const x = 'vivo';
console.log('Vivo: ', personaje[x]);

console.log('Ultima pelicula:', personaje['ultima-pelicula']);

// Mas detalles
delete personaje.edad;
console.log('Datos dentro del Obj Literal: ',personaje);

const entriesPares = Object.entries(personaje);
console.log(entriesPares);

const entriesKeys = Object.keys(personaje);
console.log(entriesKeys);

const entriesValues = Object.values(personaje);
console.log(entriesValues);



