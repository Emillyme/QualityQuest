import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

// Array de pares de cartas
const cardPairs = [
    { image: '/imagens/1.png', type: 'imagem' },
    { image: '/respostas/1.png', type: 'resposta' },
    { image: '/imagens/2.png', type: 'imagem' },
    { image: '/respostas/2.png', type: 'resposta' },
    { image: '/imagens/3.png', type: 'imagem' },
    { image: '/respostas/3.png', type: 'resposta' },
    { image: '/imagens/4.png', type: 'imagem' },
    { image: '/respostas/4.png', type: 'resposta' },
    { image: '/imagens/5.png', type: 'imagem' },
    { image: '/respostas/5.png', type: 'resposta' },
    { image: '/imagens/6.png', type: 'imagem' },
    { image: '/respostas/6.png', type: 'resposta' },
    { image: '/imagens/7.png', type: 'imagem' },
    { image: '/respostas/7.png', type: 'resposta' },
    { image: '/imagens/8.png', type: 'imagem' },
    { image: '/respostas/8.png', type: 'resposta' },
    { image: '/imagens/9.png', type: 'imagem' },
    { image: '/respostas/9.png', type: 'resposta' },
    { image: '/imagens/10.png', type: 'imagem' },
    { image: '/respostas/10.png', type: 'resposta' },
    { image: '/imagens/11.png', type: 'imagem' },
    { image: '/respostas/11.png', type: 'resposta' },
    { image: '/imagens/12.png', type: 'imagem' },
    { image: '/respostas/12.png', type: 'resposta' },
    { image: '/imagens/13.png', type: 'imagem' },
    { image: '/respostas/13.png', type: 'resposta' },
    { image: '/imagens/14.png', type: 'imagem' },
    { image: '/respostas/14.png', type: 'resposta' },
];

const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5);

export function MemoryGame() {
    const navigate = useNavigate();
    const [cards, setCards] = useState(shuffledCards);
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [lockBoard, setLockBoard] = useState(false);
    const [timeAtual, setTimeAtual] = useState('red');
    const [pontuacao, setPontuacao] = useState({ red: 0, blue: 0 });

    useEffect(() => {
        if (matchedCards.length === cards.length) {
            setTimeout(() => navigate('/palavraoculta'), 1000);
        }
    }, [matchedCards, cards.length, navigate]);

    const handleCardClick = (index) => {
        if (lockBoard || flippedIndices.includes(index) || matchedCards.includes(index)) return;

        setFlippedIndices((prev) => [...prev, index]);

        if (flippedIndices.length === 1) {
            setLockBoard(true);
            const firstIndex = flippedIndices[0];

            if (cards[firstIndex].image.split('/').pop() === cards[index].image.split('/').pop()) {
                setMatchedCards((prev) => [...prev, firstIndex, index]);
                aumentarPontuacao();
            } else {
                setTimeout(() => {
                    setTimeAtual((prevTime) => (prevTime === 'red' ? 'blue' : 'red'));
                    resetBoard();
                }, 1000);
            }
        }
    };

    const aumentarPontuacao = () => {
        setPontuacao((prevPontuacao) => ({
            ...prevPontuacao,
            [timeAtual]: prevPontuacao[timeAtual] + 1,
        }));
        setLockBoard(false);
        resetBoard();
    };

    const resetBoard = () => {
        setFlippedIndices([]);
        setLockBoard(false);
    };

    return (
        <div
            className={`font-josefin flex flex-col items-center justify-center text-center p-[50px] ${
                timeAtual === 'red' ? 'bg-[#dd2e44]' : 'bg-[#046FD2]'
            }`}
        >
            <h2 className="text-2xl font-bold mb-4 text-white">Combine as cartas de acordo com o texto</h2>
            <div className="grid grid-cols-7 gap-4 mb-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`w-[200px] h-[200px] bg-white rounded-lg flex items-center justify-center cursor-pointer transition-transform duration-300 transform ${
                            flippedIndices.includes(index) || matchedCards.includes(index) ? 'rotate-y-180' : ''
                        }`}
                        onClick={() => handleCardClick(index)}
                    >
                        {flippedIndices.includes(index) || matchedCards.includes(index) ? (
                            <img src={card.image} alt={`Card ${index}`} className="w-full h-full rounded-lg" />
                        ) : (
                            <div className="bg-[#6e78b3] text-white w-full h-full flex items-center justify-center text-xl rounded-lg shadow-lg">QBasics</div>
                        )}
                    </div>
                ))}
            </div>

            <div className="flex justify-between w-full mt-10">
                <div className="w-28 h-28 bg-[#dd2e44] rounded-lg flex justify-center items-center text-white font-semibold text-3xl">
                    <p>{pontuacao.red}</p>
                </div>
                <div className="w-28 h-28 bg-[#046FD2] rounded-lg flex justify-center items-center text-white font-semibold text-3xl">
                    <p>{pontuacao.blue}</p>
                </div>
            </div>
        </div>
    );
}
