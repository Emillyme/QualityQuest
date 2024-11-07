import React from "react";
import { useEffect, useState } from 'react';
import "../index.css"

const termos = {
    termo1: ['gato', 'cachorro', 'animal'],
    termo2: ['carro', 'moto', 'transporte']
};

const PalavraOculta = () => {
    const[input, setInput] = useState('');
    const[pontos, setPontos] = useState(0);
    const[termoSelecionado, setTermoSelecionado] = useState('termo1');
    const[palavrasTentadas, setPalavrasTentadas] = useState(new Set());


    // cronometro 
    const [timeLeft, setTimeLeft] = useState(300)

    useEffect(()=> {
        let interval = null

        if (timeLeft > 0) {
           interval = setInterval(()=>{
            setTimeLeft(prevTime => prevTime - 1)
           }, 1000)
        }else if (timeLeft === 0){
            clearInterval(interval)
        }

        return () => clearInterval(interval)
    }, [timeLeft])

    const formatMinutes = (time)=> {
        const minutes = Math.floor(time / 60 )
        return `${String(minutes).padStart(2,'0')}`
    }

    const formatSeg = (time)=> {
        const seconds = time % 60;
        return `${String(seconds).padStart(2,'0')}`
    }

    const verificarPalavra = () => {
        const palavra = input.trim().toLowerCase();

        if(termos[termoSelecionado].includes(palavra) && !palavrasTentadas.has(palavra)){
            setPontos(pontos + 1);
            setPalavrasTentadas(new Set(palavrasTentadas).add(palavra));
            setInput('');
        }
        else {
            alert('Palavra jÃ¡ tentada ou nÃ£o relacionada')
        }
    };

    console.log(formatMinutes)

    return(
        <div className=' bg-[linear-gradient(90deg,#374E97,#549BF8)] w-screen h-screen flex flex-col items-center'>

            <h1 className='text-white font-semibold text-5xl text-center py-24 mr-14'>Tema: Q1</h1>
            {/* <select onChange={(e) => setTermoSelecionado(e.target.value)} value={termoSelecionado}>
                <option value="termo1">Tema 1</option>
                <option value="termo2">Tema 2</option>
                </select> */}

            {/* cronometro  */}
            <div className='flex gap-x-20 mb-28'>
                <div className='bg-white w-32 h-32 rounded-xl flex justify-center items-center text-5xl font-semibold text-cronometro flex flex-col'>
                    <p>{formatMinutes(timeLeft)}</p>
                    <p className='text-label-cronometro text-xl'>min</p>
                </div>
                <div className='bg-white w-32 h-32 rounded-xl flex justify-center items-center text-5xl font-semibold text-cronometro flex flex-col'>
                    <p>{formatSeg(timeLeft)}</p>
                    <p className='text-label-cronometro text-xl'>seg</p>
                </div>
            </div>

            <div className='mb-10'>
                <h2 className='text-white font-medium text-2xl'>Pontos: {pontos}</h2>
            </div>

            <div className='flex gap-x-10 ml-20'>

                <div>
                    <input
                        className='bg-[rgba(255,255,255,0.4)] tamanho-inout-wordle px-5 py-3 rounded-full text-white'
                        type="text"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                    />
                    <p className='text-white font-regular text-center mt-5'>Digite uma palavra relacionada</p>
                </div>
               
                <button className='bg-white h-14 px-6 rounded-lg font-medium' onClick={verificarPalavra}>Enviar</button>
            </div>
        </div>
    );
};

export default PalavraOculta;