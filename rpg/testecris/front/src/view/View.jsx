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
    // Barra fixa 1 -> Nome
    const [barraFixa1, mudarBarraFixa1] = useState({
        habilitado: true,
        cor: 'transparent',

        texto: {
            texto: '<Nome>',
            cor: '#ffffff',
            alinhamento: 'center'
        },
        
        borda: {
            tamanho: '0',
            estilo: 'solid',
            cor: 'transparent'
        }

    })
    // Barra fixa 2
    const [barraFixa2, mudarBarraFixa2] = useState({
        habilitado: true,
        cor: '#f78383',

        texto: {
            texto: 'Habilidade?',
            cor: '#573e3e',
            alinhamento: 'center'
        },
        
        borda: {
            tamanho: '2',
            estilo: 'solid',
            cor: '#f92012'
        }

    })
    // Barra dinamica 1
    const [barraDinamica1, mudarBarraDinamica1] = useState({
        habilitado: true,
        cor: '#f78383',
        corFundo: '#df4343',

        valores: {
            atual: 10,
            maximo: 10,
            cor: '#573e3e'
        },

        texto: {
            habilitado: false,
            mostrarAoAtualizar: true,
            texto: 'Vida?',
            alinhamento: 'center'
        },
        
        borda: {
            tamanho: '2',
            estilo: 'solid',
            cor: '#f92012',
        },

    })

    // Dados de comando
    const tempoDeAtualizacao = 1000; // milissegundos

    async function atualizarDados() {
        const response = await axios.get('http://localhost:5000/mudar');

        mudarImagem(response.data.imagem);
        mudarBarraFixa1(response.data.barraFixa1);
        mudarBarraFixa2(response.data.barraFixa2);
        mudarBarraDinamica1(response.data.barraDinamica1)
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
                    <BarraTexto corBarra={'transparent'} corTexto={barraFixa1.texto.cor} texto={barraFixa1.texto.texto} tamanhoBorda="0" habilitado ={barraFixa1.habilitado} alinhamento={barraFixa1.texto.alinhamento}/>
                    <BarraTexto corTexto={barraFixa2.texto.cor} corBarra={barraFixa2.cor} texto={barraFixa2.texto.texto} habilitado ={barraFixa2.habilitado} tamanhoBorda={barraFixa2.borda.tamanho+'px'} corBorda={barraFixa2.borda.cor} estiloBorda={barraFixa2.borda.estilo}/>
                    
                    <BarraDinamica corBarraFrente={barraDinamica1.cor} alinhamento={barraDinamica1.texto.alinhamento} estiloBorda={barraDinamica1.borda.estilo} corBarraFundo={barraDinamica1.corFundo} corTexto={barraDinamica1.valores.cor} tamanhoBorda={barraDinamica1.borda.tamanho} corBorda={barraDinamica1.borda.cor} atual={barraDinamica1.valores.atual} maximo={barraDinamica1.valores.maximo} texto={barraDinamica1.texto.texto} textoMostrar={barraDinamica1.texto.habilitado} habilitado ={barraDinamica1.habilitado}/>
                </div>


            </div>
        </div>
    )
}