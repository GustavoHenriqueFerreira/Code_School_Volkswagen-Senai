import PromptSync from "prompt-sync";
const prompt = PromptSync();
export default function fibonacci(limiteFibonacci: number) {
    console.log(0)
    console.log(1)
    for (let fibonacci = [0, 1], i = 2; i < limiteFibonacci; i++) {
        fibonacci.push(fibonacci[i - 1] + fibonacci[i - 2]);
        console.log(fibonacci[i]);
    }
}