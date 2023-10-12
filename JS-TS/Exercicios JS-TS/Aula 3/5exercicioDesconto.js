/* Imagine uma loja de roupas que dê um desconto ao cliente, dependendo do valor que ele
pague. Faça um programa para loja, que solicite o valor total da compra ao usuário e assim,
aplique um desconto de acordo com o valor total da compra. Siga a tabela:
Valor total da compra até R$ 100,00: sem desconto.
Valor total da compra de R$ 100,01 a R$ 200,00: desconto de 10%.
Valor total da compra acima de R$ 200,00: desconto de 20%.
Exiba o valor final da compra com o desconto aplicado. */

import PromptSync from "prompt-sync";
const prompt = PromptSync();

let valorCompra = parseInt(prompt("Digite o valor da compra: "));
function desconto(valorCompra) {
    let valorDescontado;
    if (valorCompra <= 100) {
        console.log(`Você não possui desconto pois o valor da compra é menor que R$100`);
    } else if(valorCompra > 100 && valorCompra <= 200){
        valorDescontado = valorCompra * 0.9;
        console.log(`Você possui desconto de 10%, o valor da compra seria ${valorCompra} e agora será ${valorDescontado}`)
    } else {
        valorDescontado = valorCompra * 0.8;
        console.log(`Você possui desconto de 20%, o valor da compra seria ${valorCompra} e agora será ${valorDescontado}`)
    }
}