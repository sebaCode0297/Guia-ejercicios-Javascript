'use strict'

let juegos = ['Mario Broos','Ajedrez','Metal Slug'];

console.log(juegos[2]); // accedemos a posicion de un elemento de un array
console.log(juegos.length); // obtenemos el largo del array
console.log({juegos}); // Accedemos a la información completa del array

let arreglosCosas = [
    true,
    123,
    'Fernando',
    1 + 2,
    function getName() {},
    () =>{},
    {a: 1},
    ['x','Megaman','Zero','Dr.Light', [
        'Saludo',
        'Despedida'
    ]]
];

console.log(arreglosCosas.length);
console.log({arreglosCosas});
console.log(arreglosCosas[7][3]);
console.log(arreglosCosas[7][4][1]);

