import { TitlePegunta } from "../components/TitlePergunta";
import { PerguntaButton } from "../components/PerguntaButton";

export function Perguntas (){
    return(
            <div className="overflow-x-hidden">
                <div className="w-full h-2/5 bg-[linear-gradient(90deg,#046FD2,#58ABF9)] border-fundo -z-10 absolute"></div>
        
                <main className="overflow-x-hidden">
                    <div className="mt-32">
                        <TitlePegunta texto={'alguma pergunta alguma pergunta'}/> 
                    </div>

                    <div className=" flex-col gap-10 mt-80 justify-center ">
                        <PerguntaButton opcao={"A"}/>
                        <PerguntaButton opcao={"B"}/>
                        <PerguntaButton opcao={"C"}/>
                        <PerguntaButton opcao={"D"}/>
                    </div>
                </main>

            </div>
    )
}