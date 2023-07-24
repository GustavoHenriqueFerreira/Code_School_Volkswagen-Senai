import PromptSync from "prompt-sync";
const prompt = PromptSync();
import imprimirNumeros from "../Aula 5/exerciciosFor/1-10_numeros.js";
import imprimirNumerosPares from "../Aula 5/exerciciosFor/2-pares.js";
import imprimirNumerosImpares from "../Aula 5/exerciciosFor/3-impares.js";
import tabuada from "../Aula 5/exerciciosFor/4-tabuada.js";
import fibonacci from "../Aula 5/exerciciosFor/5-fibonacci.js";
import verificarIdade from "./idade.js";
import diaSemana from "../Aula 3/2exercicioDiaSemana.js";
import PA from "../Aula 5/exerciciosWhile/7-soma_de_intervalos.js";
import contagemRegressiva from "../Aula 5/exerciciosWhile/9-contagem_regressiva.js/index.js";
import acertarNumero from "../Aula 5/exerciciosWhile/10-diferente_de_zero.js";
import IMC from "../Aula 3/6exercicioIMC.js";

function menu() {
    let sairMenu = false;
    let numeroEscolhidoMenu;
    //menu para escolher qual exercicio o usuário escolher
    let string = `
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
        numeroEscolhidoMenu = parseInt(prompt(string));

        switch (numeroEscolhidoMenu) {
            case 0:
                sairMenu = true;
                console.log(`\nObrigado por utilizar nosso sistema!`);
                break;
            case 1:
                imprimirNumeros();
                break;
            case 2:
                imprimirNumerosPares();
                break;
            case 3:
                imprimirNumerosImpares();
                break;
            case 4:
                tabuada();
                break;
            case 5:
                fibonacci();
                break;
            case 6:
                diaSemana();
                break;
            case 7:
                PA();
                break;
            case 8:
                verificarIdade();
                break;
            case 9:
                contagemRegressiva();
                break;
            case 10:
                acertarNumero();
                break;
            case 11:
                IMC();
                break;
            default:
                numeroEscolhidoMenu = parseInt(prompt(string));
                break;
        }
    } while (sairMenu !== true);
}

menu();