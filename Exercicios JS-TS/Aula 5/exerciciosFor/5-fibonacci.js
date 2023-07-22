/* Imprimir os primeiros 10 números da sequência de Fibonacci. */
/* let numerosFibonacci = []
for (let i = 0; i < 10; i++) {
    if (i === 0) {
        numerosFibonacci.push(0);
    } else if (i === 1) {
        numerosFibonacci.push(1);
    }
    else {
        numerosFibonacci.push(numerosFibonacci[i - 1] + numerosFibonacci[i - 2]);
    }
    
    console.log(numerosFibonacci[i]);
} */

/* Melhorando o código da sequência de Fibonnaci e transformando em função*/
import PromptSync from "prompt-sync";
const prompt = PromptSync();
let limiteFibonacci = parseInt(prompt("Digite o limite de números listados da sequência de Fibonacci: "));
export default function fibonacci(limiteFibonacci) {
    console.log(0)
    console.log(1)
    for (let fibonacci = [0, 1], i = 2; i < limiteFibonacci; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        console.log(fibonacci[i]);
    }
}

/* Fibonacci com while */
/* function fibonacciWhile() {
    let limiteFibonacciWhile = parseInt(prompt("Digite o limite de números listados da seuqência de Fibonacci: "));
    let array = [];
    let i = 0;
    let j = 1;
    array.push(i);
    array.push(j);
    while (array.length - 1 <= limiteFibonacciWhile) {
        console.log(array[i]);
        array.push(array[j] + array[i]);
        j++;
        i++;
    }
}; */