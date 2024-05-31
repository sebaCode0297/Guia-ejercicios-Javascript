// 1. Multiplicar 2 numeros sin utilizar el simbolo de multiplicar

let x = 2
let y = 10


const multiplication = (x, y) => {
     let multiplication = 0;
     for (let index = 0; index < y; index++){
          multiplication += x;
     }
     return multiplication;
}
let result = multiplication(x, y)
console.log(`1. El resultado de la multiplicación es: ${result}`);

// 2. Obtener l numero mayor en un arreglo, se debe iterar este arreglo solo 1 vez.

const numbers = [1, 2, 4, 5, 6, 9];
// console.log(Math.max.apply(null, numbers));

let max = 0;
numbers.forEach(num => {
    if (num > max) {
        max = num;
    }
});
console.log(`2. Número mayor es: ${max}`);


// 3. Iterar un arreglo solo 1 vez, escribir función que elimine los valores undefinded, false, 0 y null

const values = [1, " OK", undefined, false, 0, null];
const cleanValues = values.filter(value => { if (value) return value });

console.log(`3. Array limpio: ${cleanValues}`);

// 4. Escribir una función que aplane los arreglos en 1 nivel. Ej input [[1,2],[[3,4]],[5]] output: [1,2,[3,4],5]

function flattenArray(arr) {
    if (!Array.isArray(arr)) throw "No es un array";
    return arr.flat(1);
}

console.log(`4. Aplanar array: ${flattenArray([[1, 2], [[3, 4]], [5]])}`);

// 5. Escribir una función que cuente la cantidad de veces que se repite una palabra

function counterWord(str, searchWord, counter = 0) {
    if (str.includes(searchWord)) {
        let index = str.indexOf(searchWord);
        str = str.substring((index + searchWord.length), str.length);
        counter++;
        if (str.includes(searchWord)) {
            counter = counterWord(str, searchWord, counter);
        }
    }
    return counter;
}

console.log(`5. Contador de palabra: ${counterWord("Hola Mundo Hola Mundo Hola Hola 1 Mundo Hola", "Hola")}`);

// 6. Verificar si una cadena de texto es un palíndromo.

function isPalindromo(str) {
    str = str.toLowerCase();
    const arr = [...str];
    const reverse = [...str].reverse();
    return arr.every((char, index) => char === reverse[index]);
}

console.log(`6. Palabra es palíndromo: ${isPalindromo("Anna")}`);