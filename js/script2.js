/* 
    Objetivo: Calcular a média de 2 números

    1 - Pegar os dois números
    2 - Somar os dois números
    3 - Dividir a soma pela quantidade
*/

let n1 = 100;
let n2 = 900;

function soma() {
    console.log(n1+n2)
    return n1+n2
}

soma()

/* function media() {
    console.log((n1+n2) / 2)
} */

function media() {
    console.log(soma() / 2)
}

media()