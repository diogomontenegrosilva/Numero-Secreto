
let listaDeNumerosSorteados = [];
let numeroLimite = 10;
let numeroSecreto = gerarNumeroAleatorio(); 
let tentativas = 1;

function exibirTextoNaTela(tag, texto){  
  let campo = document.querySelector(tag);
       campo.innerHTML = texto;
  
    
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
  exibirTextoNaTela('h1', 'Número Secreto');  
  exibirTextoNaTela('p', 'Escolha um número de 1 a 10');  

 }

function verificarChute(){  
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

    if (listaDeNumerosSorteados.includes(NumeroEscolhido)) {  
         return gerarNumeroAleatorio();

 
    }else{
        listaDeNumerosSorteados.push(NumeroEscolhido); 
        console.log(listaDeNumerosSorteados);
      return NumeroEscolhido;

    }

 }
  
 function limparcampo(){
    document.querySelector('input').value = '';

 }

 function reiniciarJogo(){  
      numeroSecreto = gerarNumeroAleatorio();
      limparcampo();
      tentativas = 1;
     exibirMensagemInicial();  
    document.getElementById('reiniciar').setAttribute('disabled',true);
  
    
 }                   
 document.getElementById('reiniciar').addEventListener('click', reiniciarJogo);

 document.addEventListener("DOMContentLoaded", function() {  
    exibirMensagemInicial();
});