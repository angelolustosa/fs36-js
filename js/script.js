// Pegar os números dos inputs do HTML e converter para Float, pois será possível fazer o cálculo com inteiros e decimais
const numero1 = document.getElementById('n1');
const numero2 = document.getElementById('n2');
const conteudoDiv = document.querySelector('.resultado');

function calcular(e) {
    if (numero1.value !== '' && numero2.value !== '') {
        console.log('id:', e.innerText)
        const id = e.innerText;

        executarOperacao(id)

    } else {
        if (numero1.value === '' && numero2.value === '') {
            console.log('alerta preencher campos');
            alert('Preencha os campos!');
        } else {
            if (numero1.value === '') {
                alert('Preencha o número 1 para realizar a operação!');
            } else {
                alert('Preencha o número 2 para realizar a operação!');
            }
        }
    }



}

function executarOperacao(idOperacao) {
    // Executa a operação correspondente
    if (idOperacao === '+') {
        soma();
    } else if (idOperacao === '-') {
        subtrair();
    } else if (idOperacao === '*') {
        multiplicacao();
    } else if (idOperacao === '/') {
        divisao();
    } else {
        console.log('Operação inválida.');
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