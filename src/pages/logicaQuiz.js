import { data } from "./quizData.js";
localStorage.setItem('team', sortearTime());
let timeEscolhido = localStorage.getItem('team');

let tempoJogo = 0;
let indexNumeroQuestao = 0
let numQuestao = 0; // É oq vai aparecer no titulo da questão (ex: questao 1, questão 2...)
let pontosVermelho = 0;
let pontosAzul = 0;

let numeroQuestao = document.getElementById("numero-questao");
let textoQuestao = document.getElementById("texto-questao");
let opcaoSelecionada = null;

function carregaQuestao() {
    indexNumeroQuestao = sortearQuestao();

    const questao = data[indexNumeroQuestao];
    numeroQuestao.innerHTML = `Questão ${numQuestao + 1}`;
    textoQuestao.innerHTML = questao.questao;

    const opcoesQuestao = document.getElementById("lista-opcoes");
    opcoesQuestao.innerHTML = "";

    questao.opcoes.forEach((opcao, index) => {
        const div = document.createElement("div");
        div.innerHTML = opcao;
        opcoesQuestao.appendChild(div);

        div.addEventListener("click", () => {
            opcaoSelecionada = index;
            proximaQuestao(opcaoSelecionada);
        });
    });
    numQuestao++;
    data.splice(indexNumeroQuestao, 1);
}

function sortearQuestao(){
    return Math.floor(Math.random() * data.length);
}

function sortearTime() {
    return Math.random() < 0.5 ? 'red' : 'blue';
}



function trocarTime() {
    if (timeEscolhido === 'red') {
        localStorage.setItem('team', 'blue');
    } else {
        localStorage.setItem('team',  'red');
    }

    timeEscolhido = localStorage.getItem('team');
}

function proximaQuestao(opcaoSelecionada) {
    console.log(timeEscolhido);

    if (opcaoSelecionada == data[indexNumeroQuestao].resposta) {
        
        

        if (timeEscolhido === 'red') {
            pontosVermelho++;
        } else {
            pontosAzul++;
        }
    }
    else{
        console.log('Errou');
    }
    // Fazer a logica deposi de que se o time q começou errar, 
    // vai mostrar o resultado e vai para proxima pergunta e o 
    // outro tem chance de tentar. Porém, se os dois errarem mostra
    // o resultado e vai pra proxima pergunta.
    console.log(`Vermelho: ${pontosVermelho} --- Azul: ${pontosAzul}`);
    if (indexNumeroQuestao < data.length){
        trocarTime();

        setTimeout(() => {
            carregaQuestao();
        }, 2000);

    }
    
    
}

carregaQuestao();

function handleTeamChoice(team) {
    localStorage.setItem('team', team);
    window.location.href = `/pages/quiz.html`;
}



// To do

// Fazer o sistema para quando perder trocar de time
// Fazer o esquema para contar tempo paralelamente