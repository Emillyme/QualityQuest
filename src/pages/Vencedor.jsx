// gifs 
import gifTrofeu from "../imgs/trofeu.gif"
import gifConfete from "../imgs/confete.gif"


import "../index.css"
import {useState} from 'react'


export default function Vencedor(){

    const [vencedor, setVencedor] = useState('vermelha')

    return(
        <>
         <div className="w-full h-2/5 bg-[linear-gradient(90deg,#FE6D92,#2897FF)] border-fundo -z-10 absolute"></div>

         <main className="flex flex-col items-center mt-28">

            <div>
                <img className="tamanho-git-trofeu" src={gifTrofeu}></img>
            </div>

            <div>

                <h1 className="">Equipe Vencedora</h1>

            </div>



         </main>
        </>
    )
}