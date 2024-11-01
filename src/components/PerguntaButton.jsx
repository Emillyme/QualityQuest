import { useState } from "react"

export function PerguntaButton({opcao, passarQuestao, indexCorreto, index}){
    
    

    const [mostrarCor, setMostrarCor] = useState(false);

    const correta = index === indexCorreto;

    const eventosBotao = () => {
        setMostrarCor(true);
        setTimeout(() => {
            passarQuestao(index);
            setMostrarCor(false);
        }, 1000);
        
    }

    return(
        <button className={`${!mostrarCor ? "bg-white": correta ? "bg-correct" : "bg-wrong"} text-opcao font-semibold text-2xl
        sombra-perguntas py-4 `} onClick={eventosBotao}>{opcao}</button>
    )
}