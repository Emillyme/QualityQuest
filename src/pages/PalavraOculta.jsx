import { TitlePegunta } from "../components/TitlePergunta";
import { PerguntaButton } from "../components/PerguntaButton";
import { useEffect, useState } from "react";
import data from "../data/datateste.json";
import { useNavigate } from 'react-router-dom';


export function PalavraOculta (){
 return(
            <div className="overflow-x-hidden">
                Palavra Oculta
            </div>
    )
}