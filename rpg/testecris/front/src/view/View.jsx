import { useEffect, useState } from "react";
import axios from 'axios';
import './css/view.css';

import BarraTexto from "../assets/props/BarraTexto";
import BarraDinamica from "../assets/props/BarraDinamica";

import Imagem from "../assets/props/Imagem";

export default function View() {
    // Iniciar dados que são mudáveis
    const [nome, mudarNome] = useState('Indefinido');
    const [cor, mudarCor] = useState('#232323');
    const [rounded, mudarRounded] = useState('');
    const [folder, mudarFolder] = useState('');
    const [imgName, mudarImgName] = useState('imagem.png');

    // Dados de comando
    const tempoDeAtualizacao = 1000; // milissegundos

    async function atualizarDados() {
        const response = await axios.get('http://localhost:5000/mudar');

        mudarCor(response.data.cor);
        mudarNome(response.data.nome);
    }
    atualizarDados();

    useEffect(() => {
        const interval = setInterval(() => {
            atualizarDados()
        }, tempoDeAtualizacao);
        return () => clearInterval(interval);
    }, []);

    return (
        <div style={{backgroundColor: cor}}>
            <h1>{nome}</h1>
            <h1>{cor}</h1>

            <Imagem rounded={rounded} imgName={imgName} folder={folder}/>
            
            <div id="Barras">
                <BarraTexto corBarra={'#f72323'} texto={'vida?'}/>
                <BarraDinamica corBarraFrente={'#fff'} corBarraFundo="#000" corTexto="#838383" atual={10} maximo={10}/>

            </div>
        </div>
    )
}