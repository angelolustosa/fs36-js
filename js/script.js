const numero1 = document.getElementById('n1');
const numero2 = document.getElementById('n2');
const conteudoDiv = document.querySelector('.resultado');

function calcular(e) {
    const n1 = numero1.value;
    const n2 = numero2.value;

    if (!n1 || !n2) {
        alert(`Preencha o número ${!n1 ? '1' : '2'} para realizar a operação!`);
        return;
    }

    const operacao = e.innerText;
    const expressao = `${parseFloat(n1)} ${operacao} ${parseFloat(n2)}`;

    try {
        const resultado = eval(expressao);
        exibirResultado(resultado);
    } catch (error) {
        console.error('Operação inválida.', error);
    }
}

function exibirResultado(result) {
    conteudoDiv.style.display = 'flex';
    conteudoDiv.innerHTML = 'Resultado: ' + result;
}

const limpar = () => {
    conteudoDiv.style.display = 'none';
    conteudoDiv.innerHTML = 'Resultado: ';
};
