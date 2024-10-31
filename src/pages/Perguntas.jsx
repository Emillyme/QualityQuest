import { TitlePegunta } from "../components/TitlePergunta";
import { PerguntaButton } from "../components/PerguntaButton";
import { useEffect, useState } from "react";
import { data } from "../components/quizData";

function sortearQuestao(){
    return Math.floor(Math.random() * data.length);
}

export function Perguntas (){

    let index = sortearQuestao();
    const [dataG, setDataG] = useState(data[index])
    const [progresso, setProgresso] = useState(0)
    const maxProgresso = 100
    const incremento = 2

    data.splice(index, 1);

    const passarQuestao = () => {
        index = sortearQuestao();

        setDataG(data[index])
        data.splice(index, 1);
        setProgresso(0);
    }

    

    useEffect(()=> {
        // fetch('../data/data.json')
        // .then(response =>{
        //     if (!response.ok) {
        //         throw new Error(`HTTP error! status: ${response.status}`);
        //     }
        //     console.log(response.json())
        //     return response.json();
        // })
        // .then ((dataJson)=> {
        //     console.log(dataJson)
        //     setData(dataJson)
        // })
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



    // useEffect(()=>{
    //     const intervalo = setInterval(()=>{
    //         setProgresso(prevProgresso=>{
    //             if(prevProgresso < 100){
    //                 clearInterval(intervalo)
    //                 return prevProgresso
    //             }
    //         })
    //     }, 1000)
    //     return ()=> clearInterval(intervalo)
    // }, [])


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
                        <PerguntaButton opcao={dataG.opcoes[0]} funcao={passarQuestao} index={0} indexCorreto={1}/>
                        <PerguntaButton opcao={dataG.opcoes[1]}/>
                        <PerguntaButton opcao={dataG.opcoes[2]}/>
                        <PerguntaButton opcao={dataG.opcoes[3]}/>
                    </div>
                </main>

            </div>
    )
}