//let titulo = document.querySelector('h1'); //titulo da pagina ou mudar o titulo
//titulo.innerHTML = 'jogo do Número Secreto';   // titulo da pagina

//let paragrafo = document.querySelector('p');   // escolher um numero de 1 a 10
//paragrafo.innerHTML = 'Escolha um número entre 1 e 10';

let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); // declara a variavel para declarar a função gerarNumeroAleatorio
let tentativas = 1;

function exibirTextoNaTela(tag, texto){  // tag subistitui valor 'h1'
  let campo = document.querySelector(tag);
       campo.innerHTML = texto;
  
       // exibir voz no HTML
        if ('speechSynthesis' in window) {   
            let utterance = new SpeechSynthesisUtterance(texto);
            utterance.lang = 'pt-BR'; 
            utterance.rate = 1.2; 
            window.speechSynthesis.speak(utterance); 
        } else {
            console.log("Web Speech API não suportada neste navegador.");
        }
    
       }
 function exibirMensagemInicial(){
  exibirTextoNaTela('h1', 'Número Secreto');  // substitui valor texto
  exibirTextoNaTela('p', 'Escolha um número de 1 a 10');  // substitui o valor chute

 }

function verificarChute(){  // função em Java Script
    let chute = document.querySelector('input').value;
    console.log(chute == numeroSecreto);

    if (chute == numeroSecreto){
    exibirTextoNaTela('h1', 'Acertou!');
    let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
    let mensagemTentativas = 'Você descobriu o número secreto com ' + tentativas + ' ' +palavraTentativa;
    exibirTextoNaTela ('p ', mensagemTentativas);
    document.getElementById('reiniciar').removeAttribute('disabled');
  

    }else {
     if (chute > numeroSecreto){
         exibirTextoNaTela('p', 'O número secreto é menor');


    }else{
     exibirTextoNaTela('p', 'O número secreto é maior');

    }
     tentativas++;
      limparcampo();
}
}
 function gerarNumeroAleatorio(){
      let NumeroEscolhido= parseInt(Math.random() * numeroLimite + 1);
      let quantidadeDeElementosNalista = listaDeNumerosSorteados.length;
      
    if (quantidadeDeElementosNalista == 3){
        listaDeNumerosSorteados = []



    }

    if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {  // includes verifica se o elemento está na lista
         return gerarNumeroAleatorio();

 
    }else{
        listaDeNumerosSorteados.push(NumeroEscolhido); //push pega um número aleatorio
        console.log(listaDeNumerosSorteados);
      return NumeroEscolhido;

    }

 }
  
 function limparcampo(){
    document.querySelector('input').value = '';

 }

 function reiniciarJogo(){  // função para clicar no botão
      numeroSecreto = gerarNumeroAleatorio();
      limparcampo();
      tentativas = 1;
     exibirMensagemInicial();  // exibi a mensagem inicial na funcão inicial no inicio
    document.getElementById('reiniciar').setAttribute('disabled',true);
  
    
 }                   
 document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);

 document.addEventListener("DOMContentLoaded", function() {  //exibe a mensagem na tela
    exibirMensagemInicial();
});