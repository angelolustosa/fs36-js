/* 
    Objetivo: Calcular a média de 2 números

    1 - Pegar os dois números
    2 - Somar os dois números
    3 - Dividir a soma pela quantidade
*/

let n1 = 100;
let n2 = 900;

function soma() {
    let resultado = n1+n2;
    return resultado;
}

function media() {
    let resultado = soma() / 2;
    return resultado;
}

console.log(media())
