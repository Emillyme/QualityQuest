import { useState } from "react"

export function PerguntaButton({opcao, funcao, index, indexCorreto}){

    const [correct, setCorrect] = useState("")

    // const corrijir = () => {
    //     if(index === indexCorreto){
    //         setCorrect(true);
    //     }
    //     else{
    //         setCorrect(false);
    //     }
    // }

    // const eventosBotao = () => {
    //     corrijir
    //     funcao

    // }

    return(
        <button className={`${correct ? "bg-correct" : "bg-wrong"} text-opcao font-semibold text-2xl
        bg-white sombra-perguntas py-4 `} onClick={funcao}>{opcao}</button>
    )
}