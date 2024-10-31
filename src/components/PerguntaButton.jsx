import { useState } from "react"

export function PerguntaButton({opcao, funcao, correct}){



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
        <button className={`${correct === '' ? "bg-white": correct ? "bg-correct" : "bg-wrong"} text-opcao font-semibold text-2xl
        sombra-perguntas py-4 `} onClick={funcao}>{opcao}</button>
    )
}