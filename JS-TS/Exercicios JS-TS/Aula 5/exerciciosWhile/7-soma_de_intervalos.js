import PromptSync from "prompt-sync";
const prompt = PromptSync();
/* Calcular a soma dos números de 1 a 100 utilizando a estrutura
while. */
/* let contador = 1
let soma = 0
while (contador <= 100) {
    soma = contador + soma;
    contador++;
}
console.log(soma); */

/* Soma de um intervalo de números, famosa soma de PA. */
let primeiroTermo = parseInt(prompt("Primeiro número do intervalo somado: "));
let ultimoTermo = parseInt(prompt("Último número do intervalo somado: "));
export default function PA(primeiroTermo, ultimoTermo) {
    let contador = primeiroTermo;
    let soma = 0;
    while (contador <= ultimoTermo) {
        soma = contador + soma;
        contador++;
    }
    console.log(soma);
}