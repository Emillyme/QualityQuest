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

// Embaralha as cartas
const shuffledCards = [...cardPairs].sort(() => Math.random() - 0.5);

export function MemoryGame() {
    const navigate = useNavigate(); // Hook para navegação
    const [cards, setCards] = useState(shuffledCards);
    const [flippedIndices, setFlippedIndices] = useState([]);
    const [matchedCards, setMatchedCards] = useState([]);
    const [lockBoard, setLockBoard] = useState(false);

    useEffect(() => {
        // Verifica se todas as cartas foram combinadas
        if (matchedCards.length + flippedIndices.length === cards.length) {
            setTimeout(() => {
                // Quando o jogo terminar, redireciona para a página do jogo "PalavraOculta"
                navigate('/palavraoculta'); 
            }, 1000); // Aguarda 1 segundo antes de redirecionar
        }
    }, [matchedCards, flippedIndices, cards.length, navigate]);

    const handleCardClick = (index) => {
        if (lockBoard || flippedIndices.includes(index) || matchedCards.includes(index)) return;

        setFlippedIndices((prev) => [...prev, index]);

        if (flippedIndices.length === 1) {
            setLockBoard(true);
            const firstIndex = flippedIndices[0];

            // Verifica se as imagens combinam
            if (cards[firstIndex].image.split('/').pop() === cards[index].image.split('/').pop()) {
                setMatchedCards((prev) => [...prev, firstIndex, index]);
                resetBoard();
            } else {
                setTimeout(resetBoard, 1000);
            }
        }
    };

    const resetBoard = () => {
        setFlippedIndices([]);
        setLockBoard(false);
    };

    return (
        <div className="font-josefin flex flex-col items-center justify-center text-center p-[50px] bg-[#404c90]">
            <h2 className="text-2xl font-bold mb-4 text-white">Combine as cartas de acordo com o texto</h2>
            <div className="grid grid-cols-7 gap-4 mb-4">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className={`w-[200px] h-[200px] bg-white rounded-lg flex items-center justify-center cursor-pointer transition-transform duration-300 transform ${flippedIndices.includes(index) || matchedCards.includes(index) ? 'rotate-y-180' : ''}`}
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
        </div>
    );
}
