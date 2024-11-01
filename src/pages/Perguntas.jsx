import { TitlePegunta } from "../components/TitlePergunta";
import { PerguntaButton } from "../components/PerguntaButton";
import { useEffect, useState } from "react";
import data from "../data/data.json";





export function Perguntas (){
    
    const [pontuacao, setPontuacao] = useState({red: 0, blue: 0});
    const [passouVez, setPassouVez] = useState(false);
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

    function aumentarPontuacao(){
        setPontuacao(prevPontuacao => {
            return {
                ...prevPontuacao,
                [timeAtual]: prevPontuacao[timeAtual] + 1
            }
        });
    }

    const passarQuestao = (indexResposta) => {
        if (indexResposta !== dataG.resposta && !passouVez){
            setPassouVez(true);
            
        }
        else{
            let novoIndex = sortearQuestao();

            setIndex(novoIndex);

            setDataG(perguntas[novoIndex])
            

            setPerguntas((prevPerguntas) => {
                const novasPerguntas = [...prevPerguntas]
                novasPerguntas.splice(index, 1);
                return novasPerguntas;
            });
            setPassouVez(false);
        }
        if (indexResposta === dataG.resposta){
            aumentarPontuacao();
        }
        //console.log("entrou");
        setProgresso(0);
        //console.log(timeAtual);
        setTimeAtual(timeAtual == 'red' ? 'blue' : 'red');
        console.log(timeAtual);
    }

    

    useEffect(()=> {
        const intervalo = setInterval(() => {
            setProgresso((prev) => {
                // Se o progresso é menor que o máximo
                if (prev < maxProgresso) {
                    // Aumenta o progresso de forma segura
                    return Math.min(prev + incremento, maxProgresso);
                    
                }
                passarQuestao(5);
                console.log(timeAtual);
                
                return prev; // Caso contrário, mantém o valor atual
            });
            // requestAnimationFrame(animateProgress); // Continua a animação
        }, 1000);
        
        return () => clearInterval(intervalo);
        // Inicia a animação
        // const animationId = requestAnimationFrame(animateProgress);

        // Limpa a animação ao desmontar o componente
    }, [timeAtual]); // O array vazio garante que isso rode apenas uma vez

    // useEffect(() => {
    //     console.log(timeAtual);
    // }, []);


    return(
            <div className="overflow-x-hidden">
                <div className={`w-full h-2/5 ${ timeAtual === 'red' ? "bg-[linear-gradient(350deg,#dd2e44,#FF7699)]" : "bg-[linear-gradient(90deg,#046FD2,#58ABF9)]" } border-fundo -z-10 absolute`}></div>
        
                <main className="mx-28">

                    {/* barra do cronometro  */}
                    <div className="bg-cronometro-fundo w-full h-7 mt-8 rounded-full overflow-hidden">
                        <div className="w-full mx-0 h-full bg-correct  transition-all duration-500" style={{width: `${progresso}%`}}></div>
                    </div>

                    <div className="">

                        <TitlePegunta texto={dataG.questao}/> 
                    </div>

                    <div className=" mx-40 flex flex-col gap-10 mt-44 justify-center ">
                        <PerguntaButton opcao={dataG.opcoes[0]} passarQuestao={passarQuestao} indexCorreto={dataG.resposta} index={0}/>
                        <PerguntaButton opcao={dataG.opcoes[1]} passarQuestao={passarQuestao} indexCorreto={dataG.resposta} index={1}/>
                        <PerguntaButton opcao={dataG.opcoes[2]} passarQuestao={passarQuestao} indexCorreto={dataG.resposta} index={2}/>
                        <PerguntaButton opcao={dataG.opcoes[3]} passarQuestao={passarQuestao} indexCorreto={dataG.resposta} index={3}/>
                    </div>

                    {/* <div className={`h-32 w-32 ${timeAtual == 'red' ? "bg-red-400" : "bg-cyan-600"}`}><p>{timeAtual} : {timeAtual == 'red'? pontuacao.red : pontuacao.blue}</p></div> */}
                </main>

            </div>
    )
}