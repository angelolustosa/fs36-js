// Pegar os números dos inputs do HTML e converter para Float, pois será possível fazer o cálculo com inteiros e decimais
const numero1 = document.getElementById('n1');
const numero2 = document.getElementById('n2');
const conteudoDiv = document.querySelector('.resultado');


function calcular(e) {
    //console.log(e.innerText);
    const operacao = e.innerText;

    //se os dois campos estiverem
    if (numero1.value === '' && numero2.value === '') {
        alert('Preencher os campos');
    } else {
        if (numero1.value === '') {
            alert('Por favor, Preencher o campo 1')
        } else if(numero2.value === '') {
            alert('Por favor, Preencher o campo 2')
        } else {
           executarOperacao(operacao);
        }
    }
}

function executarOperacao(op) {
    if(op === '+') {
        soma()
    } else if(op === '-') {
        subtrair()
    } else if(op === '*') {
        multiplicacao()
    } else if(op === '/') {
        divisao()
    }
}

function soma() {
    let resultado = parseFloat(numero1.value) + parseFloat(numero2.value);
    exibirResultado(resultado);
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