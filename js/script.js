//console.log('Script via body', document.getElementById('n1')) 

function soma() {
    // Pegar os números dos inputs do HTML e converter para Float, pois será possível fazer o cálculo com inteiros e decimais
    let numero1 = parseFloat(document.getElementById('n1').value);
    let numero2 = parseFloat(document.getElementById('n2').value);

    //
    let resultado = numero1 + numero2;

    //console.log(numero1, numero2 );
    console.log(resultado);
}