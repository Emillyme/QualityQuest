// gifs 
import gifTrofeu from "../imgs/trofeu.gif"
import gifConfete from "../imgs/confetes.gif"
import gifEstrelas from "../imgs/estrelas.gif"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useNavigate } from "react-router-dom"

import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";


import "../index.css"
import {useState, useEffect} from 'react'


export default function Vencedor(){

  const navigate = useNavigate()
  const [pontuacao, setPontuacao] = useState(localStorage.getItem('pontuacao') ? JSON.parse(localStorage.getItem('pontuacao')) : { red: 0, blue: 0 });

  function definirVencedor(){
    if (pontuacao['red'] > pontuacao['blue']){
      return 'Equipe Vermelha'
    }
    else if (pontuacao['red'] < pontuacao['blue']){
      return 'Equipe Azul'
    }
    else{
      return 'Empate'
    }
  
  }

    const [vencedor, setVencedor] = useState(definirVencedor())
    const [visible, setVisible] = useState(false);
    const [visibleBotao, setVisibleBotao] = useState(false)

    const retornarInicio = () => {

      setPontuacao({ red: 0, blue: 0 })
      localStorage.setItem('pontuacao', JSON.stringify({ red: 0, blue: 0 }))
      navigate('/')

    }


    useEffect(() => {
        // Define um temporizador que altera o estado para true após 3 segundos
        const timer = setTimeout(() => {
          setVisible(true);
        }, 2000); // 3000ms = 3 segundos
    
        // Cleanup do temporizador
        return () => clearTimeout(timer);
      }, []);

    useEffect(() => {
        // Define um temporizador que altera o estado para true após 3 segundos
        const timer = setTimeout(() => {
          setVisibleBotao(true);
        }, 2500); // 3000ms = 3 segundos
    
        // Cleanup do temporizador
        return () => clearTimeout(timer);
      }, []);
    return(
        <>
         <div className="w-full h-2/5 bg-[linear-gradient(90deg,#FE6D92,#2897FF)] border-fundo -z-10 absolute"></div>

         <main className="flex flex-col items-center mt-28">
            <div className="my-5 flex">
                <img className="tamanho-git-trofeu" src={gifTrofeu}></img>
            </div>

            <div className="text-center flex flex-col gap-y-7 items-center">

                <h2 className="font-medium text-4xl text-[#3B3636] primaru">Vencedor</h2>

                {visible && <h1 className={`${vencedor == 'Equipe Vermelha'? "text-[#FF3F5F]" : vencedor == "Equipe Azul"? "text-[#469ef0]" : "text-[#a375c6]"} font-bold  text-6xl animate-bounce`}>{vencedor}</h1>}

                {visibleBotao &&  <button className="bg-[linear-gradient(90deg,#EEA0C7,#8DB9F8)] rounded-full py-3 font-semibold w-3/6 ml-7 text-white text-xl mt-12 " onClick={retornarInicio}>Inicio</button>}

            </div>





         </main>

       
        </>
    )
}