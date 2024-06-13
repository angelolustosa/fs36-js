let idade = 12;

/* 
 se a idade for = 18 é de maior
 se idade menor que 18 é de menor
*/

/* === -> estritamente igual, veririfica o tipo e o valor */
if (idade >= 18 ) {
    console.log("É de maior!");
} else if (idade <= 12 && idade > 3) {
    console.log('É criança');
} else if (idade >=13 && idade < 18) {
    console.log('É adolescente');
}else if (idade <= 3) {
    console.log('É um bebê');
}else {
    console.log("É de menor!");
}