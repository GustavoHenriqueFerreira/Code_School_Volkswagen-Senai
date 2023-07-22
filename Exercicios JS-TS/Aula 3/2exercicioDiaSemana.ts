export default function diaSemana(numero : number) {
    const diasSemana: any = {
        1: "Segunda",
        2: "Terça",
        3: "Quarta",
        4: "Quinta",
        5: "Sexta",
        6: "Sábado",
        7: "Domingo",
    }

    return console.log(`O dia é ${diasSemana[numero]}`);
}