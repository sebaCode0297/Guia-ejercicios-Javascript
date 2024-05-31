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

juegos.push('F-Zero');