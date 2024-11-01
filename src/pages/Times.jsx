import { Time } from "../components/Time"
import { useNavigate } from "react-router-dom"
import triangulo from "../imgs/triamgulo.svg"
import { TitlePegunta } from "../components/TitlePergunta"
import { useState } from "react"
 
export function Times() {
   
    const navigate = useNavigate()
    const [activeButton, setActiveButton] = useState("red")
 
    const handleButtonClick = (color) => {
        setActiveButton(color)
        setTimeout(() => setActiveButton(null), 300) // Dura 300ms
    }
 
    return(
        <>
            <div className="w-full h-2/5 bg-[linear-gradient(90deg,#FE6D92,#2897FF)] border-fundo -z-10 absolute"></div>
 
            <main className="relative">
                <div className="pt-10">
                    <div>
                        <TitlePegunta texto={'Definam seus times e escolha quem vai começar!'}/>
                    </div>
 
                    <div className="flex justify-evenly w-full mt-36">
                        <div>
                            <Time color={'red'} onClick={() => handleButtonClick('red')} />
                        </div>
                        <div className={activeButton === 'blue'}>
                            <Time color={'blue'} onClick={() => handleButtonClick('blue')} />
                        </div>
                    </div>
 
                    <div className="hover:scale-110 mt-8 w-full flex justify-center items-center relative">
                        <div className="absolute w-28 h-28 resto-button bg-[linear-gradient(120deg,#FF5B85,#2897FF)] "></div>
 
                        <button
                            onClick={() => navigate("/perguntas")}
                            className="flex justify-center items-center h-24 w-24 border-none bg-transparent relative z-10 border-50 transform transition-transform "
                        >
                            <div className="h-full w-full flex justify-center items-center tamanho-botao">
                                <img src={triangulo} alt="" />
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