let prompt = require("prompt-sync")();

var numero = parseInt(prompt("Digite um número: "));

if(numero > 0){
    console.log(`O ${numero} é positivo`);
} else if (numero === 0) {
    console.log(`O ${numero} é neutro`);
} 
else {
    console.log(`O ${numero} é negativo`);
}