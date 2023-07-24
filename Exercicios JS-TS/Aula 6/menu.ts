import PromptSync from "prompt-sync";
const prompt = PromptSync();
import imprimirNumeros from "../Aula 5/exerciciosFor/1-10_numeros.ts";
import imprimirNumerosPares from "../Aula 5/exerciciosFor/2-pares.ts";
import imprimirNumerosImpares from "../Aula 5/exerciciosFor/3-impares.ts";
import tabuada from "../Aula 5/exerciciosFor/4-tabuada.ts";
import fibonacci from "../Aula 5/exerciciosFor/5-fibonacci.ts";
import verificarIdade from "./idade.ts";
import diaSemana from "../Aula 3/2exercicioDiaSemana.ts";
import PA from "../Aula 5/exerciciosWhile/7-soma_de_intervalos.ts";
import contagemRegressiva from "../Aula 5/exerciciosWhile/9-contagem_regressiva.ts";
import acertarNumero from "../Aula 5/exerciciosWhile/10-diferente_de_zero.ts";
import IMC from "../Aula 3/6exercicioIMC.ts";

function menu() {
    let sairMenu: boolean = false;
    let numeroEscolhidoMenu: number;
    //menu para escolher qual exercicio o usuário escolher
    let menu: string = `
|-------------------------------------------|
|      Opções do Menu:                      |      
|                                           |
|     1 - Imprimir números                  |
|     2 - Números pares                     |
|     3 - Números ímpares                   |  
|     4 - Tabuada de um número              |
|     5 - Fibonacci                         |
|     6 - Mostrar dia da semana             |
|     7 - Soma de um intervalo de números   |  
|     8 - Maior ou menor de idade           |
|     9 - Contagem regressiva               |
|     10 - Acerte o número e ganhe uma coca |
|     11 - IMC                              |
|     0 - Sair                              |  
|-------------------------------------------|\n`;
    do {
        numeroEscolhidoMenu = parseInt(prompt(menu));
        switch (numeroEscolhidoMenu) {
            case 0:
                sairMenu = true;
                console.log(`\nObrigado por utilizar nosso sistema!`);
                break;
            case 1:
                let primeiroNumero: number = parseInt(prompt("Digite o primeiro número que será imprimido: "));
                let ultimoNumero: number = parseInt(prompt("Digite o último número que será imprimido: "));
                imprimirNumeros(primeiroNumero, ultimoNumero);
                break;
            case 2:
                let primeiroNumeroPar: number = parseInt(prompt("Digite o primeiro número que será imprimido: "));
                let ultimoNumeroPar: number = parseInt(prompt("Digite o último número que será imprimido: "));
                imprimirNumerosPares(primeiroNumeroPar, ultimoNumeroPar);
                break;
            case 3:
                let primeiroNumeroImpar: number = parseInt(prompt("Digite o primeiro número que será imprimido: "));
                let ultimoNumeroImpar: number = parseInt(prompt("Digite o último número que será imprimido: "));
                imprimirNumerosImpares(primeiroNumeroImpar, ultimoNumeroImpar);
                break;
            case 4:
                let numeroTabuada: number = parseInt(prompt("Digite um número para listar sua tabuada: "));
                tabuada(numeroTabuada);
                break;
            case 5:
                let limiteFibonacci: number = parseInt(prompt("Digite o limite de números listados da sequência de Fibonacci: "));
                fibonacci(limiteFibonacci);
                break;
            case 6:
                let numero: number = parseInt(prompt("Digite um número: "));
                diaSemana(numero);
                break;
            case 7:
                let primeiroTermo: number = parseInt(prompt("Primeiro número do intervalo somado: "));
                let ultimoTermo: number = parseInt(prompt("Último número do intervalo somado: "));
                PA(primeiroTermo, ultimoTermo);
                break;
            case 8:
                let idade: number = parseInt(prompt("Digite sua idade: "));
                let nome: string = (prompt("Digite seu nome: "));
                verificarIdade(idade, nome);
                break;
            case 9:
                let numeroRegressivo: number = parseInt(prompt("Digite um número: "));
                contagemRegressiva(numeroRegressivo);
                break;
            case 10:
                let numeroEscolhido: number = parseInt(prompt("Digite um número: "));
                acertarNumero(numeroEscolhido);
                break;
            case 11:
                let peso: number = parseFloat(prompt("Digite o seu peso: "));
                let altura: number = parseFloat(prompt("Digite a sua altura: "));
                IMC(peso, altura);
                break;
            default:
                numeroEscolhidoMenu = parseInt(prompt(menu));
                break;
        }
    } while (sairMenu !== true);
}

menu();