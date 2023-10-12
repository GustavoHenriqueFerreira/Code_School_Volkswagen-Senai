import PromptSync from "prompt-sync";
const prompt = PromptSync();
let sair = false;
let numeroEscolhido;
let string = `
|-------------------------------------------|
|      Opções do Menu:                      |      
|                                           |
|     1 - Mostrar números 1 a 10            |
|     2 - Números pares de 1 a 10           |
|     3 - Números ímpares de 0 a 50         |  
|     4 - Tabuada de um número              |
|     5 - Fibonacci                         |
|     6 - Números pares de 0 a 20           |
|     7 - Soma de números de 1 a 100        |  
|     8 - Maior ou menor de idade           |
|     9 - Contagem regressiva               |
|     10 - Acerte o número e ganhe uma coca |
|     0 - Sair                              |  
|-------------------------------------------|\n`

do {
    numeroEscolhido = parseInt(prompt(string));
    switch (numeroEscolhido) {
        case 0:
            sair = true;
            console.log(`\nObrigado por utilizar nosso sistema!`);
            break;
        case 1:
            for (let i = 1; i <= 10; i++) {
                console.log(i);
            }
            break;
        case 2:
            for (let i = 1; i <= 10; i++) {
                if (i % 2 === 0) {
                    console.log(i);
                }
            }
            break;
        case 3:
            for (let i = 0; i <= 50; i++) {
                if (i % 2 === 1) {
                    console.log(i);
                }
            }
            break;
        case 4:
            let numeroTabuada = parseInt(prompt("\nDigite um número para listar sua tabuada: "));
            for (let i = 1; i <= 10; i++) {
                let valorTabuada = numeroTabuada * i;
                console.log(valorTabuada);
            }
            break;
        case 5:
            let numerosFibonacci = []
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
            }
            break;
        case 6:
            let contadorPar = 0
            while (contadorPar <= 20) {
                if (contadorPar % 2 == 0) {
                    console.log(contadorPar)
                }
                contadorPar++;
            }
            break;
        case 7:
            let contador = 1
            let soma = 0
            while (contador <= 100) {
                soma = contador + soma;
                contador++;
            }
            console.log(soma);
            break;
        case 8:
            let idade = parseInt(prompt("\nDigite sua idade: "));
            while (idade < 18) {
                console.log("\nVocê é menor de idade ainda, vai come terra!");
                idade = parseInt(prompt("Digite sua idade novamente: "));
            }
            console.log("\nVocê já é maior de idade, chegou o momento de paga boleto!");
            break;
        case 9:
            let numeroRegressivo = parseInt(prompt("\nDigite um número: "));
            while (numeroRegressivo >= 0) {
                console.log(numeroRegressivo);
                numeroRegressivo--;
            }
            break;
        case 10:
            let numero = parseInt(prompt("\nDigite um número: "));
            while (numero != 0) {
                console.log("\nVocê errou o número, por favor tente novamente!");
                numero = parseInt(prompt("\nDigite outro número: "));
            }
            console.log("\nVocê acertou o número, parabens você ganhou uma coca!");
            break;

        default:
            numeroEscolhido = parseInt(prompt(string));
            break;
    }
} while (sair !== true);