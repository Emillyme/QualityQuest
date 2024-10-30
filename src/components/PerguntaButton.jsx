import { useState } from "react"

export function PerguntaButton({opcao}){

    const [correct, setCorrect] = useState("")

    return(
        <button className={`${correct ? "bg-correct" : "bg-wrong"} text-opcao font-semibold text-2xl
        bg-white sombra-perguntas py-4 `}>opção {opcao}</button>
    )
}