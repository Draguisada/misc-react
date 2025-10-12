import { useEffect, useState } from "react";
import axios from 'axios';
import './css/view.css';

import BarraTexto from "../assets/props/BarraTexto";
import BarraDinamica from "../assets/props/BarraDinamica";

import Imagem from "../assets/props/Imagem";

export default function View() {

    const [imagem, mudarImagem] = useState({
        rounded: '20',
        roundedU: '%',
        folder: '',
        imgName: 'imagem.png'
    })
    // Dynamic Fixed Bars
    const [barrasFixas, setBarrasFixas] = useState([])
    
    // Dynamic Dynamic Bars
    const [barrasDinamicas, setBarrasDinamicas] = useState([])
    

    // Dados de comando
    const tempoDeAtualizacao = 500; // milissegundos

    async function atualizarDados() {
        const response = await axios.get('http://localhost:5000/mudar');

        mudarImagem(response.data.imagem);
        
        // Handle arrays if they exist, otherwise fallback to individual bars for backward compatibility
        if (response.data.barrasFixas) {
            setBarrasFixas(response.data.barrasFixas);
        } else {
            // Fallback for old individual bar format
            const oldBarrasFixas = [];
            if (response.data.barraFixa1) oldBarrasFixas.push({...response.data.barraFixa1, id: 1});
            if (response.data.barraFixa2) oldBarrasFixas.push({...response.data.barraFixa2, id: 2});
            setBarrasFixas(oldBarrasFixas);
        }
        
        if (response.data.barrasDinamicas) {
            setBarrasDinamicas(response.data.barrasDinamicas);
        } else {
            // Fallback for old individual bar format
            const oldBarrasDinamicas = [];
            if (response.data.barraDinamica1) oldBarrasDinamicas.push({...response.data.barraDinamica1, id: 1});
            if (response.data.barraDinamica2) oldBarrasDinamicas.push({...response.data.barraDinamica2, id: 2});
            setBarrasDinamicas(oldBarrasDinamicas);
        }
    }

        useEffect(() => {
        const interval = setInterval(() => {
            atualizarDados();
        }, tempoDeAtualizacao);
        return () => clearInterval(interval);

    }, []);


    return (
        <div>
           <div id="total">
                <Imagem rounded={imagem.rounded+imagem.roundedU} imgName={imagem.imgName} folder={imagem.folder}/>
                            
                <div id="Barras">
                    {/* Dynamic Fixed Bars */}
                    {barrasFixas.map((barra) => (
                        <BarraTexto 
                            key={barra.id}
                            corBarra={barra.cor} 
                            corTexto={barra.texto.cor} 
                            texto={barra.texto.texto} 
                            tamanhoBorda={barra.borda.tamanho+'px'} 
                            habilitado={barra.habilitado} 
                            alinhamento={barra.texto.alinhamento}
                            corBorda={barra.borda.cor}
                            estiloBorda={barra.borda.estilo}
                        />
                    ))}
                    
                    {/* Dynamic Dynamic Bars */}
                    {barrasDinamicas.map((barra) => (
                        <BarraDinamica 
                            key={barra.id}
                            corBarraFrente={barra.cor} 
                            alinhamento={barra.texto.alinhamento} 
                            estiloBorda={barra.borda.estilo} 
                            corBarraFundo={barra.corFundo} 
                            corTexto={barra.valores.cor} 
                            tamanhoBorda={barra.borda.tamanho} 
                            corBorda={barra.borda.cor} 
                            atual={barra.valores.atual} 
                            maximo={barra.valores.maximo} 
                            texto={barra.texto.texto} 
                            textoMostrar={barra.texto.habilitado} 
                            mostrarValorQuandoAtualizado={barra.texto.mostrarAoAtualizar}
                            habilitado={barra.habilitado}
                            tempoMostrarValoresTemporariamente={barra.texto.tempoMostrarValoresTemporariamente}
                        />
                    ))}
                </div>


            </div>
        </div>
    )
}