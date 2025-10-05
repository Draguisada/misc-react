import { useEffect, useState } from "react";
import axios from 'axios';
import './css/view.css';

import BarraTexto from "../assets/props/BarraTexto";
import BarraDinamica from "../assets/props/BarraDinamica";

import Imagem from "../assets/props/Imagem";

export default function View() {

    const [valores, mudarValores] = useState({})

    // Dados de comando
    const tempoDeAtualizacao = 1000; // milissegundos

    async function atualizarDados() {
        const response = await axios.get('http://localhost:5000/mudar');

        mudarValores(response.data);
        // console.log(valores);
    }
    // atualizarDados();

    useEffect(() => {
        const interval = setInterval(() => {
            atualizarDados()
        }, tempoDeAtualizacao);
        return () => clearInterval(interval);
    }, []);

    return (
        <div>
           <div id="total">
                <Imagem rounded={valores.rounded+valores.roundedU} imgName={valores.imgName} folder={valores.folder}/>
                            
                <div id="Barras">
                    <BarraTexto corBarra={'transparent'} corTexto={valores.corTextoNome} texto={valores.nome} tamanhoBorda="0" habilitado ={valores.habilitarNome}/>
                    <BarraTexto corBarra={'#f72323'} texto={'vida?'}/>
                    <BarraDinamica corBarraFrente={'#2679f5ff'} corBarraFundo="#005266ff" corTexto="#131313ff" atualN={10} maximoN={10} texto={'Sanidade'} textoMostrarN={false}/>
                </div>


            </div>
        </div>
    )
}