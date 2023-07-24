import PromptSync from "prompt-sync";
const prompt = PromptSync();

function desconto(valorCompra: number) {
    let valorDescontado : number = 0;
    if (valorCompra <= 100) {
        return console.log(`Você não possui desconto pois o valor da compra é menor que R$100`);
    } else if(valorCompra > 100 && valorCompra <= 200){
        valorDescontado = valorCompra * 0.9;
        return console.log(`Você possui desconto de 10%, o valor da compra seria ${valorCompra} e agora será ${valorDescontado}`)
    } else {
        valorDescontado = valorCompra * 0.8;
        return console.log(`Você possui desconto de 20%, o valor da compra seria ${valorCompra} e agora será ${valorDescontado}`)
    }
}