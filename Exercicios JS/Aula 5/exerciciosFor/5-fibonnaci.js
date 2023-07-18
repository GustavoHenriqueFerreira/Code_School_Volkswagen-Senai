let prompt = require("prompt-sync")();
/* Imprimir os primeiros 10 números da sequência de Fibonacci. */
let numerosFibonnaci = []
for (let i = 0; i < 10; i++) {
    if (i === 0) {
        numerosFibonnaci.push(0);
    } else if (i === 1) {
        numerosFibonnaci.push(1);
    }
    else {
        numerosFibonnaci.push(numerosFibonnaci[i - 1] + numerosFibonnaci[i - 2]);
    }

    console.log(numerosFibonnaci[i]);
}

/* Melhorando o código da sequência de Fibonnaci e transformando em função*/
function fibonacci(numerosListados) {
    console.log(0)
    console.log(1)
    for (let fibonacci = [0, 1], i = 2; i < numerosListados; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        console.log(fibonacci[i]);
    }
}
fibonacci(10);

/* Fibonacci com while */
function fibonacciWhile(numerosListados) {
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

fibonacciWhile(10);