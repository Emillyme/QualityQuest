import React, { useEffect, useState } from "react";
import "../index.css";
 
// Lista de temas com 14 arrays diferentes e suas dicas
const temas = {
    Q1: ['stop', 'reclamações', 'cliente'],
    Q2: ['reação', 'andon', 'interrupção'],
    Q3: ['instruções', 'medidas', 'fmea'],
    Q4: ['parâmetros', 'validação', 'desvios'],
    Q5: ['medição', 'teste', 'equipamentos'],
    Q6: ['check', 'checker', 'regulagem'],
    Q7: ['manutenção', 'tpm', 'prevenção'],
    Q8: ['ferramentas', 'substituição', 'anomalias'],
    Q9: ['reinício', 'padrões', 'processo'],
    Q10: ['identificação', 'cartões', 'cores'],
    Q11: ['retrabalho', 'refugo', 'inspeções'],
    Q12: ['queda', 'reincidência', 'defeito'],
    Q13: ['correto', 'posto', 'estação'],
    Q14: ['sobras', 'fifo', 'ordem']
};
 
// Lista de dicas correspondentes aos temas
const dicas = {
    Q1: "Dica do Q1: Stop Sign",
    Q2: "Reação Rápida",
    Q3: "Instruções e 5S",
    Q4: "Parâmetros de processo",
    Q5: "Meios de medição e teste",
    Q6: "Check the checker",
    Q7: "Manutenção Produtiva Total (TPM)",
    Q8: "Ferramentas",
    Q9: "Reinício de processo",
    Q10: "Identificação",
    Q11: "Retrabalho/Refugo",
    Q12: "Queda de peças",
    Q13: "Componente correto",
    Q14: "Sobras de processo"
};
 
const PalavraOculta = () => {
    const [input, setInput] = useState('');
    const [termoSelecionado, setTermoSelecionado] = useState('Q1');
    const [palavrasTentadas, setPalavrasTentadas] = useState(new Set());
    const [bgColor, setBgColor] = useState('bg-[linear-gradient(90deg,#374E97,#549BF8)]');
    const [mensagem, setMensagem] = useState('');
    const [timeAtual, setTimeAtual] = useState('azul');
    const [temasRestantes, setTemasRestantes] = useState(Object.keys(temas)); // lista de temas que restam
 
    // pontos dos times
    const [pontosAzul, setPontosAzul] = useState(0);
    const [pontosVermelho, setPontosVermelho] = useState(0);
 
    // dica visível
    const [dicaVisivel, setDicaVisivel] = useState('');
 
    // cronometro
    const [timeLeft, setTimeLeft] = useState(300);
 
    useEffect(() => {
        let interval = null;
        if (timeLeft > 0) {
            interval = setInterval(() => {
                setTimeLeft(prevTime => prevTime - 1);
            }, 1000);
        } else if (timeLeft === 0) {
            clearInterval(interval);
        }
 
        return () => clearInterval(interval);
    }, [timeLeft]);
 
    const formatMinutes = (time) => {
        const minutes = Math.floor(time / 60);
        return `${String(minutes).padStart(2, '0')}`;
    }
 
    const formatSeg = (time) => {
        const seconds = time % 60;
        return `${String(seconds).padStart(2, '0')}`;
    }
 
    const verificarPalavra = () => {
        const palavra = input.trim().toLowerCase();
 
        if (temas[termoSelecionado].includes(palavra) && !palavrasTentadas.has(palavra)) {
            setPalavrasTentadas(new Set(palavrasTentadas).add(palavra));
            setInput('');
            setMensagem(`O time ${timeAtual} acertou!`);
            if (timeAtual === 'azul') {
                setPontosAzul(pontosAzul + 1); // incrementa pontos do time azul
            } else {
                setPontosVermelho(pontosVermelho + 1); // incrementa pontos do time vermelho
            }
            alternarTime();
        } else {
            setMensagem(`Palavra já tentada ou não relacionada. Turno do time ${timeAtual === 'azul' ? 'vermelho' : 'azul'}`);
            setInput('');
            alternarTime();
        }
    };
 
    const alternarTime = () => {
        // Alternar fundo e time
        setBgColor(timeAtual === 'azul' ? 'bg-red-500' : 'bg-[linear-gradient(90deg,#374E97,#549BF8)]');
        setTimeAtual(timeAtual === 'azul' ? 'vermelho' : 'azul');
   
        // Resetar a dica ao trocar de tema
        setDicaVisivel('');
   
        // Selecionar um novo tema aleatório
        if (temasRestantes.length > 0) {
            const novoTemaIndex = Math.floor(Math.random() * temasRestantes.length);
            const novoTema = temasRestantes[novoTemaIndex];
   
            setTermoSelecionado(novoTema); // definir o novo tema
            setTemasRestantes(temasRestantes.filter(tema => tema !== novoTema)); // remover tema da lista
        } else {
            // Todos os temas já foram usados, resetar lista de temas restantes
            setTemasRestantes(Object.keys(temas));
        }
    };
   
 
    const pedirDica = () => {
        setDicaVisivel(dicas[termoSelecionado]); // Exibe a dica para o tema atual
    };
 
    return (
        <div className={`${bgColor} w-screen h-screen flex flex-col items-center`}>
 
            {/* Pontos dos times */}
            <div className="absolute top-5 left-5 text-white font-semibold text-3xl">
                <p>Equipe Azul: {pontosAzul}</p>
            </div>
            <div className="absolute top-5 right-5 text-white font-semibold text-3xl">
                <p>Equipe Vermelha: {pontosVermelho}</p>
            </div>
 
            <h1 className='text-white font-semibold text-5xl text-center py-24 mr-14'>Tema: {termoSelecionado}</h1>
 
            {/* Botão pedir dica */}
            <button
                className="bg-white text-black py-2 px-4 rounded-lg mb-4"
                onClick={pedirDica}
            >
                Pedir Dica
            </button>
 
            {/* Exibição da dica */}
            {dicaVisivel && (
                <div className="bg-white p-4 rounded-lg text-center mb-8">
                    <h3 className="font-semibold text-xl">Dica:</h3>
                    <p>{dicaVisivel}</p>
                </div>
            )}
 
            {/* cronometro */}
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
                <h2 className='text-white font-medium text-2xl'>{mensagem}</h2>
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