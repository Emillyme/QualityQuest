import { data } from "./quizData.js";
const timeEscolhido = localStorage.getItem('team');

let indexNumeroQuestao = 0; // É oq vai aparecer no titulo da questão (ex: questao 1, questão 2...)
let pontosVermelho = 0;
let pontosAzul = 0;

let numeroQuestao = document.getElementById("numero-questao");
let textoQuestao = document.getElementById("texto-questao");
let opcaoSelecionada = null;

function carregaQuestao() {
    const questao = data[indexNumeroQuestao];
    numeroQuestao.innerHTML = `Questão ${indexNumeroQuestao + 1}`;
    textoQuestao.innerHTML = questao.questao;

    const opcoesQuestao = document.getElementById("lista-opcoes");
    opcoesQuestao.innerHTML = "";

    questao.opcoes.forEach((opcao, index) => {
        const li = document.createElement("li");
        li.innerHTML = `<input type="radio" name="option" value="${index}"> ${opcao}`;
        opcoesQuestao.appendChild(li);

        li.addEventListener("click", () => {
            opcaoSelecionada = index;
            proximaQuestao(opcaoSelecionada);
        });
    });
}

function proximaQuestao(opcaoSelecionada) {
    if (opcaoSelecionada == data[indexNumeroQuestao].resposta) {
        if (timeEscolhido === 'red') {
            pontosVermelho++;
        } else if (timeEscolhido === 'blue') {
            pontosAzul++;
        }
    }
    // Fazer a logica deposi de que se o time q começou errar, 
    // vai mostrar o resultado e vai para proxima pergunta e o 
    // outro tem chance de tentar. Porém, se os dois errarem mostra
    // o resultado e vai pra proxima pergunta.
    console.log(`Vermelho: ${pontosVermelho} --- Azul: ${pontosAzul}`);

}

carregaQuestao();