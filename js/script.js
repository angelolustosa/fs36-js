// Pegar os números dos inputs do HTML e converter para Float, pois será possível fazer o cálculo com inteiros e decimais
const numero1 = document.getElementById('n1');
const numero2 = document.getElementById('n2');
const conteudoDiv = document.querySelector('.resultado');

function soma() {
    if (numero1.value !== '' && numero2.value !== '') {
        console.log('somar!');
        let resultado = parseFloat(numero1.value) + parseFloat(numero2.value);
        exibirResultado(resultado);
    } else {
        console.log('alerta preencher campos');
        if (numero1.value === '') {
            alert('Preencha o número 1 para realizar a operação!');
        } else {
            alert('Preencha o número 2 para realizar a operação!');
        }
    }
}

function subtrair() {
    let resultado = parseFloat(numero1.value) - parseFloat(numero2.value);
    exibirResultado(resultado);
}

function multiplicacao() {
    let resultado = parseFloat(numero1.value) * parseFloat(numero2.value);
    exibirResultado(resultado);
}

function divisao() {
    let resultado = parseFloat(numero1.value) / parseFloat(numero2.value);
    exibirResultado(resultado);
}

function exibirResultado(result) {
    conteudoDiv.style.display = 'flex'
    conteudoDiv.innerHTML = 'Resultado: ' + result;
}

const limpar = () => {
        conteudoDiv.style.display = 'none'
    conteudoDiv.innerHTML = 'Resultado: '; //''
}