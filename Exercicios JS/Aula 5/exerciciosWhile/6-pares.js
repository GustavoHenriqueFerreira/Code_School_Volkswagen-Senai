let prompt = require("prompt-sync")();

/* Imprimir números pares de 0 a 20 utilizando o loop while */
/* let contador = 0
while (contador <= 20) {
    if(contador % 2 == 0){
        console.log(contador)
    }
    contador++;
} */

function imprimirNumerosWhile(params) {
    let contador = 0
    while (contador <= 20) {
        if (contador % 2 == 0) {
            console.log(contador)
        }
        contador++;
    }
}

imprimirNumerosWhile()