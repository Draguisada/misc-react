import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'

import TextoOptionColor from "../assets/props/Combinacoes/TextoOptionColor";
import TextoOptionCheckbox from "../assets/props/Combinacoes/TextoOptionCheckbox";

import BarraTexto from "../assets/props/BarraTexto";
import BarraDinamica from "../assets/props/BarraDinamica";

import Imagem from "../assets/props/Imagem";

export default function Controll() {

    const [imagem, mudarImagem] = useState({
        rounded: '20',
        roundedU: '%',
        folder: '',
        imgName: 'imagem.png'
    })
    const mudarRounded = (novoRounded) => { mudarImagem({ ...imagem, rounded: novoRounded })}
    const mudarRoundedU = (novoValor) => { mudarImagem({ ...imagem, roundedU: novoValor })}
    const mudarFolder = (novoValor) => { mudarImagem({ ...imagem, folder: novoValor })}
    const mudarImgName = (novoValor) => {mudarImagem({ ...imagem, imgName: novoValor })}

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

    const mudarHabilitarNome = (novoValor) => { mudarBarraFixa1({ ...barraFixa1, habilitado: novoValor })}
    const mudarNome = (novoValor) => { mudarBarraFixa1({ ...barraFixa1, texto: { ...barraFixa1.texto, texto:novoValor} })}
    const mudarCorTextoNome = (novoValor) => { mudarBarraFixa1({ ...barraFixa1, texto: { ...barraFixa1.texto, cor:novoValor} })}
    const mudarAlinhamentoTextoNome = (novoValor) => {mudarBarraFixa1({ ...barraFixa1, texto:{ ...barraFixa1.texto, alinhamento:novoValor} })}

    // Outras barras
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

    const mudarHabilitarBarraFixa2 = (novoValor) => { mudarBarraFixa2({ ...barraFixa2, habilitado: novoValor })}
    const mudartextoBarraFixa2 = (novoValor) => { mudarBarraFixa2({ ...barraFixa2, texto: {...barraFixa2.texto, texto: novoValor} })}
    const mudarCorTextoBarraFixa2 = (novoValor) => { mudarBarraFixa2({ ...barraFixa2, texto: {...barraFixa2.texto, cor: novoValor} } )}
    const mudarAlinhamentoTextoBarraFixa2 = (novoValor) => {mudarBarraFixa2({ ...barraFixa2, texto: {...barraFixa2.texto, alinhamento: novoValor} })}
    const mudarcorBarraFixa2 = (novoValor) => {mudarBarraFixa2({ ...barraFixa2, cor: novoValor })}

    const mudartamanhoBordaBarraFixa2 = (novoValor) => {mudarBarraFixa2({ ...barraFixa2, borda: {...barraFixa2.borda, tamanho: novoValor} })}
    const mudarcorBordaBarraFixa2 = (novoValor) => {mudarBarraFixa2({ ...barraFixa2, borda: {...barraFixa2.borda, cor: novoValor} })}
    const mudarestiloBordaBarraFixa2 = (novoValor) => {mudarBarraFixa2({ ...barraFixa2, borda: {...barraFixa2.borda, estilo: novoValor} })}

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

    const mudarHabilitarBarraDinamica1 = (novoValor) => { mudarBarraDinamica1({ ...barraDinamica1, habilitado: novoValor })}
    const mudarCorTextoBarraDinamica1 = (novoValor) => { mudarBarraDinamica1({ ...barraDinamica1, valores: {...barraDinamica1.valores, cor: novoValor} } )}
    const mudarAlinhamentoTextoBarraDinamica1 = (novoValor) => {mudarBarraDinamica1({ ...barraDinamica1, valores: {...barraDinamica1.valores, alinhamento: novoValor} })}
    const mudarcorBarraDinamica1 = (novoValor) => {mudarBarraDinamica1({ ...barraDinamica1, cor: novoValor })}
    
    const mudarcorFundoBarraDinamica1 = (novoValor) => {mudarBarraDinamica1({ ...barraDinamica1, corFundo: novoValor })}

    const mudartamanhoBordaBarraDinamica1 = (novoValor) => {mudarBarraDinamica1({ ...barraDinamica1, borda: {...barraDinamica1.borda, tamanho: novoValor} })}
    const mudarcorBordaBarraDinamica1 = (novoValor) => {mudarBarraDinamica1({ ...barraDinamica1, borda: {...barraDinamica1.borda, cor: novoValor} })}
    const mudarestiloBordaBarraDinamica1 = (novoValor) => {mudarBarraDinamica1({ ...barraDinamica1, borda: {...barraDinamica1.borda, estilo: novoValor} })}

    const mudarValorAtualBarraDinamica1 = (novoValor) => { mudarBarraDinamica1({ ...barraDinamica1, valores: {...barraDinamica1.valores, atual: novoValor} })}
    const mudarValorMaximoBarraDinamica1 = (novoValor) => { mudarBarraDinamica1({ ...barraDinamica1, valores: {...barraDinamica1.valores, maximo: novoValor} })}

    const mudarTextoHabilitadoBarraDinamica1 = (novoValor) => { mudarBarraDinamica1({ ...barraDinamica1, texto: {...barraDinamica1.texto, habilitado: novoValor} })}
    const mudarTextoMudarAoAtualizarBarraDinamica1 = (novoValor) => { mudarBarraDinamica1({ ...barraDinamica1, texto: {...barraDinamica1.texto, mostrarAoAtualizar: novoValor} })}
    const mudarTextoBarraDinamica1 = (novoValor) => { mudarBarraDinamica1({ ...barraDinamica1, texto: {...barraDinamica1.texto, texto: novoValor} })}
    const mudarTextoAlinhamentoBarraDinamica1 = (novoValor) => { mudarBarraDinamica1({ ...barraDinamica1, texto: {...barraDinamica1.texto, alinhamento: novoValor} })}

    // Barra dinamica 2
    const [barraDinamica2, mudarbarraDinamica2] = useState({
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

    const mudarHabilitarbarraDinamica2 = (novoValor) => { mudarbarraDinamica2({ ...barraDinamica2, habilitado: novoValor })}
    const mudarCorTextobarraDinamica2 = (novoValor) => { mudarbarraDinamica2({ ...barraDinamica2, valores: {...barraDinamica2.valores, cor: novoValor} } )}
    const mudarAlinhamentoTextobarraDinamica2 = (novoValor) => {mudarbarraDinamica2({ ...barraDinamica2, valores: {...barraDinamica2.valores, alinhamento: novoValor} })}
    const mudarcorbarraDinamica2 = (novoValor) => {mudarbarraDinamica2({ ...barraDinamica2, cor: novoValor })}
    
    const mudarcorFundobarraDinamica2 = (novoValor) => {mudarbarraDinamica2({ ...barraDinamica2, corFundo: novoValor })}

    const mudartamanhoBordabarraDinamica2 = (novoValor) => {mudarbarraDinamica2({ ...barraDinamica2, borda: {...barraDinamica2.borda, tamanho: novoValor} })}
    const mudarcorBordabarraDinamica2 = (novoValor) => {mudarbarraDinamica2({ ...barraDinamica2, borda: {...barraDinamica2.borda, cor: novoValor} })}
    const mudarestiloBordabarraDinamica2 = (novoValor) => {mudarbarraDinamica2({ ...barraDinamica2, borda: {...barraDinamica2.borda, estilo: novoValor} })}

    const mudarValorAtualbarraDinamica2 = (novoValor) => { mudarbarraDinamica2({ ...barraDinamica2, valores: {...barraDinamica2.valores, atual: novoValor} })}
    const mudarValorMaximobarraDinamica2 = (novoValor) => { mudarbarraDinamica2({ ...barraDinamica2, valores: {...barraDinamica2.valores, maximo: novoValor} })}

    const mudarTextoHabilitadobarraDinamica2 = (novoValor) => { mudarbarraDinamica2({ ...barraDinamica2, texto: {...barraDinamica2.texto, habilitado: novoValor} })}
    const mudarTextoMudarAoAtualizarbarraDinamica2 = (novoValor) => { mudarbarraDinamica2({ ...barraDinamica2, texto: {...barraDinamica2.texto, mostrarAoAtualizar: novoValor} })}
    const mudarTextobarraDinamica2 = (novoValor) => { mudarbarraDinamica2({ ...barraDinamica2, texto: {...barraDinamica2.texto, texto: novoValor} })}
    const mudarTextoAlinhamentobarraDinamica2 = (novoValor) => { mudarbarraDinamica2({ ...barraDinamica2, texto: {...barraDinamica2.texto, alinhamento: novoValor} })}


    

    useEffect(() => {
        handleSubmit();
        console.log('submit enviado')
    }, [imagem, barraFixa1, barraFixa2, barraDinamica1, barraDinamica2]);

    async function handleSubmit(e = '') {
        if (e) e.preventDefault();

        axios.post('http://localhost:5000/mudar/', { 
            imagem, barraFixa1, barraFixa2, barraDinamica1, barraDinamica2
        });
    }

    function handleReset() {
        axios.get('http://localhost:5000/mudar/resetar');
    }

    return (
        <>
        <h2><button type="submit" onClick={handleReset}>Reset</button>Controll <button type="submit" onClick={handleSubmit}>Enviar</button> </h2>

        <form style={{backgroundColor: '#232323'}}>
            <div id="total">
             <div style={{display: "flex", flexDirection: "column"}}>
                <Imagem rounded={imagem.rounded+imagem.roundedU} imgName={imagem.imgName} folder={imagem.folder}/>
                <input type="range" onChange={(e) => mudarRounded(e.target.value)} value={imagem.rounded} min={0} max={imagem.roundedU === 'px' ? 250 : 50}/>

                <select style={{width: 'fit-content'}} value={imagem.roundedU} onChange={(e) => mudarRoundedU(e.target.value)}>
                    <option value="%">%</option>
                    <option value="px">px</option>
                </select>
                <p>Diretório ( front/imagens/{imagem.folder && imagem.folder + '/'} ) </p>
                <input type="text" onChange={(e) => mudarFolder(e.target.value)} value={imagem.folder}/>
                <p>Nome do arquivo (com extenção)</p>
                <input type="text" onChange={(e) => mudarImgName(e.target.value)} value={imagem.imgName}/>
             </div>
                        
            <div id="Barras">
                <BarraTexto corBarra={'transparent'} corTexto={barraFixa1.texto.cor} texto={barraFixa1.texto.texto} handleChange={mudarNome} tamanhoBorda="0" habilitado={true} alinhamento={barraFixa1.texto.alinhamento}/>
                    <div style={{display: "flex"}}>
                        <TextoOptionColor texto={'Cor texto'} value={barraFixa1.texto.cor} changeValue={mudarCorTextoNome}/>
                        <TextoOptionCheckbox texto={'Habilitado?'} value={barraFixa1.habilitado} changeValue={mudarHabilitarNome}/>
                        <select onChange={(e) => mudarAlinhamentoTextoNome(e.target.value)} select={barraFixa1.texto.alinhamento} multiple>
                            <option value="left">Esquerda</option>
                            <option value="center">Centro</option>
                            <option value="right">Direita</option>
                        </select>
                        
                    </div>
                <hr />

                {/* Barra fixa 2 */}
                <BarraTexto corTexto={barraFixa2.texto.cor} corBarra={barraFixa2.cor} texto={barraFixa2.texto.texto} handleChange={mudartextoBarraFixa2} habilitado ={true} tamanhoBorda={barraFixa2.borda.tamanho+'px'} corBorda={barraFixa2.borda.cor} estiloBorda={barraFixa2.borda.estilo} alinhamento={barraFixa2.texto.alinhamento}/>
                    <div style={{display: "flex"}}>
                        <TextoOptionColor texto={'Cor texto'} value={barraFixa2.texto.cor} changeValue={mudarCorTextoBarraFixa2}/>
                        <TextoOptionColor texto={'Cor da barra'} value={barraFixa2.cor} changeValue={mudarcorBarraFixa2}/>
                        <TextoOptionColor texto={'Cor da borda da barra'} value={barraFixa2.borda.cor} changeValue={mudarcorBordaBarraFixa2}/>
                        <TextoOptionCheckbox texto={'Habilitado?'} value={barraFixa2.habilitado} changeValue={mudarHabilitarBarraFixa2}/>
                        <div style={{ width:"fit-content", borderRight: 'solid white 1px', padding: "0 1%"}}>
                            <p>Tamanho da borda</p>
                            <input type="number" value={barraFixa2.borda.tamanho} onChange={(e) => mudartamanhoBordaBarraFixa2(e.target.value)} style={{display: "flex", width: '3rem'}}/>
                        </div>
                        <select onChange={(e) => mudarestiloBordaBarraFixa2(e.target.value)} select={barraFixa2.borda.estilo} multiple>
                            <option value="solid">Sólido</option>
                            <option value="dashed">Dashed</option>
                            <option value="dotted">Dotted</option>
                            <option value="double">Duplo</option>
                            <option value="groove">Groove</option>
                            <option value="ridge">Ridge</option>
                        </select>
                        <select onChange={(e) => mudarAlinhamentoTextoBarraFixa2(e.target.value)} select={barraFixa2.texto.alinhamento} multiple>
                            <option value="left">Esquerda</option>
                            <option value="center">Centro</option>
                            <option value="right">Direita</option>
                        </select>
                        
                    </div>
                <hr />
                {/* Barra dinamica 1 */}
                <BarraDinamica corBarraFrente={barraDinamica1.cor} alinhamento={barraDinamica1.texto.alinhamento} estiloBorda={barraDinamica1.borda.estilo} controllRoom={true} corBarraFundo={barraDinamica1.corFundo} corTexto={barraDinamica1.valores.cor} tamanhoBorda={barraDinamica1.borda.tamanho} corBorda={barraDinamica1.borda.cor} atual={barraDinamica1.valores.atual} maximo={barraDinamica1.valores.maximo} texto={barraDinamica1.texto.texto} textoMostrar={true} habilitado ={true} mudarAtual={mudarValorAtualBarraDinamica1} mudarMaximo={mudarValorMaximoBarraDinamica1} mudarTexto={mudarTextoBarraDinamica1}/>
                <div style={{display: "flex", flexWrap: "true"}}>
                        <TextoOptionColor texto={'Cor texto'} value={barraDinamica1.valores.cor} changeValue={mudarCorTextoBarraDinamica1}/>
                        <TextoOptionColor texto={'Cor da barra da frente'} value={barraDinamica1.cor} changeValue={mudarcorBarraDinamica1}/>
                        <TextoOptionColor texto={'Cor da barra do fundo'} value={barraDinamica1.corFundo} changeValue={mudarcorFundoBarraDinamica1}/>
                        <TextoOptionColor texto={'Cor da borda da barra'} value={barraDinamica1.borda.cor} changeValue={mudarcorBordaBarraDinamica1}/>
                        <TextoOptionCheckbox texto={'Habilitado?'} value={barraDinamica1.habilitado} changeValue={mudarHabilitarBarraDinamica1}/>
                        <div style={{ width:"fit-content", borderRight: 'solid white 1px', padding: "0 1%"}}>
                            <p>Tamanho da borda</p>
                            <input type="number" value={barraDinamica1.borda.tamanho} onChange={(e) => mudartamanhoBordaBarraDinamica1(e.target.value)} style={{display: "flex", width: '3rem'}}/>
                        </div>
                        <select onChange={(e) => mudarestiloBordaBarraDinamica1(e.target.value)} select={barraDinamica1.borda.estilo} multiple>
                            <option value="solid">Sólido</option>
                            <option value="dashed">Dashed</option>
                            <option value="dotted">Dotted</option>
                            <option value="double">Duplo</option>
                            <option value="groove">Groove</option>
                            <option value="ridge">Ridge</option>
                        </select>
                    </div>
                    <h2>Texto sem mostrar os valores</h2>
                    <div style={{display: "flex", flexWrap: "true", justifyContent: 'center'}}>
                        
                        <TextoOptionCheckbox texto={'Habilitado?'} value={barraDinamica1.texto.habilitado} changeValue={mudarTextoHabilitadoBarraDinamica1}/>
                        <TextoOptionCheckbox texto={'Mostrar valores quando atualizar'} value={barraDinamica1.texto.mostrarAoAtualizar} changeValue={mudarTextoMudarAoAtualizarBarraDinamica1}/>
                        <select onChange={(e) => mudarTextoAlinhamentoBarraDinamica1(e.target.value)} select={barraDinamica1.texto.alinhamento} multiple>
                            <option value="left">Esquerda</option>
                            <option value="center">Centro</option>
                            <option value="right">Direita</option>
                        </select>
                    </div>
                <hr />
                {/* Barra dinamica 2 */}
                <BarraDinamica corBarraFrente={barraDinamica2.cor} alinhamento={barraDinamica2.texto.alinhamento} estiloBorda={barraDinamica2.borda.estilo} controllRoom={true} corBarraFundo={barraDinamica2.corFundo} corTexto={barraDinamica2.valores.cor} tamanhoBorda={barraDinamica2.borda.tamanho} corBorda={barraDinamica2.borda.cor} atual={barraDinamica2.valores.atual} maximo={barraDinamica2.valores.maximo} texto={barraDinamica2.texto.texto} textoMostrar={true} habilitado ={true} mudarAtual={mudarValorAtualbarraDinamica2} mudarMaximo={mudarValorMaximobarraDinamica2} mudarTexto={mudarTextobarraDinamica2}/>
                <div style={{display: "flex", flexWrap: "true"}}>
                        <TextoOptionColor texto={'Cor texto'} value={barraDinamica2.valores.cor} changeValue={mudarCorTextobarraDinamica2}/>
                        <TextoOptionColor texto={'Cor da barra da frente'} value={barraDinamica2.cor} changeValue={mudarcorbarraDinamica2}/>
                        <TextoOptionColor texto={'Cor da barra do fundo'} value={barraDinamica2.corFundo} changeValue={mudarcorFundobarraDinamica2}/>
                        <TextoOptionColor texto={'Cor da borda da barra'} value={barraDinamica2.borda.cor} changeValue={mudarcorBordabarraDinamica2}/>
                        <TextoOptionCheckbox texto={'Habilitado?'} value={barraDinamica2.habilitado} changeValue={mudarHabilitarbarraDinamica2}/>
                        <div style={{ width:"fit-content", borderRight: 'solid white 1px', padding: "0 1%"}}>
                            <p>Tamanho da borda</p>
                            <input type="number" value={barraDinamica2.borda.tamanho} onChange={(e) => mudartamanhoBordabarraDinamica2(e.target.value)} style={{display: "flex", width: '3rem'}}/>
                        </div>
                        <select onChange={(e) => mudarestiloBordabarraDinamica2(e.target.value)} select={barraDinamica2.borda.estilo} multiple>
                            <option value="solid">Sólido</option>
                            <option value="dashed">Dashed</option>
                            <option value="dotted">Dotted</option>
                            <option value="double">Duplo</option>
                            <option value="groove">Groove</option>
                            <option value="ridge">Ridge</option>
                        </select>
                    </div>
                    <h2>Texto sem mostrar os valores</h2>
                    <div style={{display: "flex", flexWrap: "true", justifyContent: 'center'}}>
                        
                        <TextoOptionCheckbox texto={'Habilitado?'} value={barraDinamica2.texto.habilitado} changeValue={mudarTextoHabilitadobarraDinamica2}/>
                        <TextoOptionCheckbox texto={'Mostrar valores quando atualizar'} value={barraDinamica2.texto.mostrarAoAtualizar} changeValue={mudarTextoMudarAoAtualizarbarraDinamica2}/>
                        <select onChange={(e) => mudarTextoAlinhamentobarraDinamica2(e.target.value)} select={barraDinamica2.texto.alinhamento} multiple>
                            <option value="left">Esquerda</option>
                            <option value="center">Centro</option>
                            <option value="right">Direita</option>
                        </select>
                    </div>
                <hr />
            </div>


            </div>
            <br/>
            
            

        </form>
        <hr/>
        {/* <View/> */}
        </>
    )
}