let juegos = ['Zelda','Mario','Metroid','Chrono']
console.log('Largo : ' + juegos.length); // 4 elementos
console.log(juegos); // ['Zelda','Mario','Metroid','Chrono']

let primero = juegos[0];
console.log(primero);
let ultimo = juegos[juegos.length - 1];
console.log(ultimo);

console.log({primero, ultimo});

juegos.forEach((elemento, indice, arr) => {
    console.log({elemento, indice, arr});
});

let nuevaLongitud = juegos.push('F-ZERO');
console.log('Nueva Longitud: ' + {nuevaLongitud});

nuevaLongitud = juegos.unshift('Fire-Emblem');
console.log({nuevaLongitud, juegos});

//.pop nos sirve para eliminar un elemento del arreglo
let juegoBorrado = juegos.pop();
console.log({juegoBorrado, juegos});

let pos = 1;
juegos.splice(pos, 2); //splice method

let juegosBorrados = juegos.splice(pos, 2);
console.log({juegosBorrados, juegos});

let metroidIndex = juegos.indexOf('Metroid'); // caseSensitive
console.log({metroidIndex});