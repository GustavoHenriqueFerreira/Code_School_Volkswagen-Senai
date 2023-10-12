/* Escreva um programa que solicita três números ao usuário e verifica se eles estão em ordem
crescente. Exibindo uma mensagem indicando se os números estão em ordem crescente ou
não. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();
let primeroNumero = parseInt(prompt("Digite um número: "));
let segundoNumero = parseInt(prompt("Digite outro número: "));
let terceiroNumero = parseInt(prompt("Digite outro número: "));

function ordemCrecesnte(numero1, numero2, numero3) {
    if (numero1 <= numero2 && numero2 <= numero3) {
        console.log(`Os números estão em ordem crescente`);
    } else {
        let array = [numero1, numero2, numero3]

        for (let i = 0; i < array.length - 1; i++) {
            let minimo = i;

            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[minimo])
                    minimo = j;
            }
            let temp = array[minimo];
            array[minimo] = array[i];
            array[i] = temp;
        }

        console.log(`Os números não estão em ordem crescente, A ordem correta seria ${array}`);
    }
}