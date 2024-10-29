import { Time } from "../components/Time"
import "../index.css"

import { useNavigate } from "react-router-dom"

import triangulo from "../imgs/triamgulo.svg"
import { TitlePegunta } from "../components/TitlePergunta"

export function Times() {
    
    const navigate = useNavigate()
    
    return(

        <>
            <div className="w-full h-2/5 bg-[linear-gradient(90deg,#FE6D92,#2897FF)] border-fundo -z-10 absolute"></div>

            <main className="relative">



                <div className="pt-10">
                    <div>
                        <TitlePegunta texto={'Definam as perfuntas'}/>
                    </div>

                    <div className="flex justify-evenly w-full mt-36 ">
                        <Time color={'red'}/> 
                        <Time color={'blue'}/> 
                    </div>

                    <div className="mt-8 w-full flex justify-center items-center relative">
                        <div className="absolute w-28 h-28 resto-button bg-[linear-gradient(120deg,#FF5B85,#2897FF)] "></div>

                        <button onClick={()=> navigate("/perguntas")} className="flex justify-center items-center h-24 w-24 border-none bg-transparent relative z-10 border-50">
                            <div className="h-full w-full flex justify-center items-center tamanho-botao">
                                <img src={triangulo} alt=""/>
                            </div>
                        </button>
                    </div>


                    <div className="w-full ml-20 font-semibold text-2xl text-logo mt-10">
                        <p>Semana da Qualidade</p>
                    </div>
                </div>
                
            </main>
            
        </>

       
    )
}