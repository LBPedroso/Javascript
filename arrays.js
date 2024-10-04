let teste = [10, 2, 7, 6]
/////////////0,  1, 2, 3//

console.log(teste[3])
//// array pode ser de qualquer coisa

let testenome = ["Luã", 10, true, null, undefined]
console.log(testenome [0])

console.log(testenome,teste)

teste.push(11)

for (let i = 0; i  < 5; i++){
    const Valor=teste[i]
    
    console.log(teste[i])
}

teste.pop()
teste.shift()

console.log(teste)

const idx = teste.findIndex((value) => value === 10)
console.log(idx)


const numeroImpar = teste.findIndex((numeroImpar) => numeroImpar % 2 !== 0)
console.log(numeroImpar)

for(let i = 0; i < teste.length; i++){
    console.log(teste[i])
}

console.log("ForEach")

let soma3 = 0
teste.forEach((value) => {
    soma3 += value
});

console.log(soma3)

////// me perdi na aula
///teste.map(()=>{
///
///})


let teste3 = [10, 4, 6, 7, 3];
let resultado = teste3.map(elemento => elemento * 2);

console.log(resultado);

const array = [1,2,3,4,5,6]
const novoArray = array.map((elemento)=>elemento*2)
console.log(novoArray)

const array2 = [1,2,3,4,5,6]
const novoArray2 = array2.map((elemento)=>elemento**2)
console.log(novoArray2)

const array21 = [1,2,3,4,5,6]
const novoArray21 = array21.map((elemento)=>elemento*elemento)
console.log(novoArray21)

const array22 = [1,2,3,4,5,6]
const novoArray22 = array22.map((elemento)=>elemento^2)
console.log(novoArray22)

const primeiroPar2 = [3, 5, 15, 30, 35];
const primeiroNumpar = primeiroPar2.find((primeiroPar2) => primeiroPar2 % 2 === 0);

console.log(primeiroNumpar);

let numeros = [10, 4, 6, 7, 3, 5, 8, 11];
let impares = numeros.filter(numero => numero % 2 !== 0);

console.log(impares);

const removePares = (arr) => {
    const impares1 = []; // Array para armazenar os números ímpares

    for (let i = 0; i < arr.length; i++) {
        const elemento = arr[i];
        if (elemento % 2 !== 0) {
            impares1.push(elemento); // Adiciona números ímpares ao novo array
        }
    }

    return impares1; // Retorna o array com números ímpares
};

// Array fornecido
let array4 = [10, 4, 6, 7, 3, 5, 8, 11];
const impares1 = removePares(array4);
console.log(impares); // Saída: [7, 3, 5, 11]

// Array fornecido
let array5 = [10, 4, 6, 7, 3, 5, 8, 11];
const impares2 = removePares(array5);
console.log(impares2); 

const todosPositivos = (arr) => {
    return arr.every(elemento => elemento > 0);
};

let array6 = [-10, -4, 6, -7, 3, -5, 8, 11];
const resultado6 = todosPositivos(array6);
console.log(resultado6); 

let array7 = [10, 4, 6, 7, 3, 5, 8, 11];
const resultado7 = todosPositivos(array7);
console.log(resultado7); 