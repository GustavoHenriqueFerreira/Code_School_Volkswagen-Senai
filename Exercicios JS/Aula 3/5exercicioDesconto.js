let prompt = require("prompt-sync")();
let valorCompra = parseInt(prompt("Digite o valor da compra: "));
let valorDescontado;

if (valorCompra <= 100) {
    console.log(`Você não possui desconto pois o valor da compra é R$100`);
} else if(valorCompra > 100 && valorCompra <= 200){
    valorDescontado = valorCompra * 0.9;
    console.log(`Você possui desconto de 10%, o valor da compra seria ${valorCompra} e agora será ${valorDescontado}`)
} else {
    valorDescontado = valorCompra * 0.8;
    console.log(`Você possui desconto de 20%, o valor da compra seria ${valorCompra} e agora será ${valorDescontado}`)
}