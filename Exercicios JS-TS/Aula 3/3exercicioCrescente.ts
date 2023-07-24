import PromptSync from "prompt-sync";
const prompt = PromptSync();

function ordemCrecesnte(numero1: number, numero2: number, numero3: number) {
    if (numero1 <= numero2 && numero2 <= numero3) {
        console.log(`Os números estão em ordem crescente`);
    } else {
        let array: any = [numero1, numero2, numero3]

        for (let i = 0; i < array.length - 1; i++) {
            let minimo = i;

            for (let j = i + 1; j < array.length; j++) {
                if (array[j] < array[minimo])
                    minimo = j;
            }
            let temp: number = array[minimo];
            array[minimo] = array[i];
            array[i] = temp;
        }

        return console.log(`Os números não estão em ordem crescente, A ordem correta seria ${array}`);
    }
}