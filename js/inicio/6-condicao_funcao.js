/* 
Testar 5 idades ao mesmo tempo

2, 12, 15, 18, 30
*/


function verificarIdade(idade) {

    if (idade <= 3 ) {
        console.log("É bebê!");
    } else if (idade > 3 && idade <= 12) {
        console.log('É criança');
    } else if (idade > 12 && idade < 18) {
        console.log('É adolescente');
    }else if (idade > 18) {
        console.log('É adulto');
    }else {
        console.log("É de menor!");
    }
    /* if (idade >= 18 ) {
        console.log("É de maior!");
    } else if (idade <= 12 && idade > 3) {
        console.log('É criança');
    } else if (idade >=13 && idade < 18) {
        console.log('É adolescente');
    }else if (idade <= 3) {
        console.log('É um bebê');
    }else {
        console.log("É de menor!");
    } */
}


verificarIdade(2);
verificarIdade(12);
verificarIdade(15);
verificarIdade(18);
verificarIdade(30);
