let prompt = require("prompt-sync")();

/* Imprimir números de 1 a 10 utilizando o loop for */
/* for (let i = 1; i <= 10; i++) {
   console.log(i);
} */

/* Imprimir números pares de 1 a 10. */
/* for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0){
        console.log(i);
    }
} */

/* Faça um programa que imprima os números ímpares de 0 a 50; */
/* for (let i = 1; i <= 50; i++) {
    if (i % 2 === 1){
        console.log(i);
    }
} */

/* Faça um programa que imprima na tela a tabuada de um número
qualquer escolhido pelo usuário até o 10. */
/* let numeroTabuada = parseInt(prompt("Digite um número para listar sua tabuada: "));
for (let i = 1; i <= 10; i++) {
    let valorTabuada = numeroTabuada * i;
    console.log(valorTabuada); 
} */

/* Imprimir os primeiros 10 números da sequência de Fibonacci. */
/* let numerosFibonnaci = []
for (let i = 0; i < 10; i++) {
    if (i === 0) {
        numerosFibonnaci.push(0);
    } else if (i === 1) {
        numerosFibonnaci.push(1);
    }
    else {
        numerosFibonnaci.push(numerosFibonnaci[numerosFibonnaci.length - 1] + numerosFibonnaci[numerosFibonnaci.length - 2]);
    }

    console.log(numerosFibonnaci[i]);
} */

/* Melhorando o código da sequência de Fibonnaci e transformando em função*/
/* function fibonacci(numerosListados) {
    console.log(0)
    console.log(1)
    for (let fibonacci = [0, 1], i = 2; i < numerosListados; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        console.log(fibonacci[i]);
    }
}
fibonacci(10); */

/* Fibonacci com while */
function fibonacci(numerosListados) {
    let array = [];
    let i = 0;
    let j = 1;
    array.push(i);
    array.push(j);
    while (array.length - 1 <= numerosListados) {
        console.log(array[i]);
        array.push(array[j] + array[i]);
        j++;
        i++;
    }
};

fibonacci(10);
