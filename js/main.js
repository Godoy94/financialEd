const display = document.querySelector('#visor');
const numeros = document.querySelectorAll('[id*=tecla]');
const operadores = document.querySelectorAll('[id*=operador]');

let novoNumero = true;
let operador;
let numeroAnterior;

const operacaoPendente = () => operador !== undefined;

const calcular = () => {
    if(operacaoPendente()){
        const numeroAtual = parseFloat(display.textContent).toLocaleString('pt-BR');
        novoNumero = true;

        if(operador === '+'){
            resultado = numeroAnterior + numeroAtual;
            atualizarDisplay(resultado);
        }else if(operador === '-'){
            resultado = numeroAnterior - numeroAtual;
            atualizarDisplay(resultado);
        }else if(operador === 'X'){
            resultado = numeroAnterior * numeroAtual;
            atualizarDisplay(resultado);
        }else if(operador === '/'){
            resultado = numeroAnterior / numeroAtual;
            atualizarDisplay(resultado);
        }
    }
}

const atualizarDisplay = (texto) => {
    if(novoNumero) {
        display.textContent = texto;
        novoNumero = false;
    }else{
        display.textContent += texto;
    }
}

const inserirNumero = (evento) => atualizarDisplay(evento.target.textContent);

numeros.forEach(numero => numero.addEventListener('click', inserirNumero));

const selecionarOperador = (evento) => {
    if(!novoNumero){
        calcular(); 
        novoNumero = true;
        operador = evento.target.textContent;
        numeroAnterior = parseFloat(display.textContent).toLocaleString('pt-BR');
    
        console.log(novoNumero, operador, numeroAnterior);
    }

}
operadores.forEach(operador => operador.addEventListener('click', selecionarOperador));

const ativarIgual = () => {
    calcular();
    operador = undefined;
}

const resetarDisplay = () => {
    atualizarDisplay('');
}

document.getElementById("operadorIgual").addEventListener('click', ativarIgual);
document.getElementById("operadorApagar").addEventListener("click", resetarDisplay);