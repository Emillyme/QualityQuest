import { TitlePegunta } from "../components/TitlePergunta";
import { PerguntaButton } from "../components/PerguntaButton";
import { useEffect, useState } from "react";
import data from "../data/data.json";





export function Perguntas (){
    
    const [timeAtual, setTimeAtual] = useState(Math.random() < 0.5 ? 'red' : 'blue');
    const [perguntas, setPerguntas] = useState(data.perguntas);
    const [index, setIndex] = useState(sortearQuestao);
    const [dataG, setDataG] = useState(perguntas[index]);
    const [progresso, setProgresso] = useState(0);
    const maxProgresso = 100;
    const incremento = 2;

    function sortearQuestao(){
        return Math.floor(Math.random() * perguntas.length);
    }

    const passarQuestao = () => {
        let novoIndex = sortearQuestao();

        setIndex(novoIndex);

        setDataG(perguntas[novoIndex])
        setProgresso(0);

        setPerguntas((prevPerguntas) => {
            const novasPerguntas = [...prevPerguntas]
            novasPerguntas.splice(index, 1);
            return novasPerguntas;
        })
        console.log(perguntas.length)
    }

    const corrijir = (indexOpcao) => {

        if(indexOpcao == perguntas.resposta){
            
        }
    }

    

    useEffect(()=> {
        const intervalo = setInterval(() => {
            setProgresso((prev) => {
                // Se o progresso é menor que o máximo
                if (prev < maxProgresso) {
                    // Aumenta o progresso de forma segura
                    return Math.min(prev + incremento, maxProgresso);
                }

                return prev; // Caso contrário, mantém o valor atual
            });
            // requestAnimationFrame(animateProgress); // Continua a animação
        }, 1000);
        
        return () => clearInterval(intervalo);
        // Inicia a animação
        // const animationId = requestAnimationFrame(animateProgress);

        // Limpa a animação ao desmontar o componente
    }, []); // O array vazio garante que isso rode apenas uma vez


    return(
            <div className="overflow-x-hidden">
                <div className="w-full h-2/5 bg-[linear-gradient(90deg,#046FD2,#58ABF9)] border-fundo -z-10 absolute"></div>
        
                <main className="mx-28">

                    {/* barra do cronometro  */}
                    <div className="bg-cronometro-fundo w-full h-7 mt-8 rounded-full overflow-hidden">
                        <div className="w-full mx-0 h-full bg-correct  transition-all duration-500" style={{width: `${progresso}%`}}></div>
                    </div>

                    <div className="">

                        <TitlePegunta texto={dataG.questao}/> 
                    </div>

                    <div className=" mx-40 flex flex-col gap-10 mt-44 justify-center ">
                        <PerguntaButton opcao={dataG.opcoes[0]} funcao={passarQuestao} correct={""}/>
                        <PerguntaButton opcao={dataG.opcoes[1]}/>
                        <PerguntaButton opcao={dataG.opcoes[2]}/>
                        <PerguntaButton opcao={dataG.opcoes[3]}/>
                    </div>
                </main>

            </div>
    )
}