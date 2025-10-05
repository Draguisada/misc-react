import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'

import TextoOptionColor from "../assets/props/Combinacoes/TextoOptionColor";
import TextoOptionCheckbox from "../assets/props/Combinacoes/TextoOptionCheckbox";

import BarraTexto from "../assets/props/BarraTexto";
import BarraDinamica from "../assets/props/BarraDinamica";

import Imagem from "../assets/props/Imagem";

export default function Controll() {
    // Player "fixa"
    const [rounded, mudarRounded] = useState('20');
    const [roundedU, mudarRoundedU] = useState('%');
    const [folder, mudarFolder] = useState('');
    const [imgName, mudarImgName] = useState('imagem.png');

    const [habilitarNome, mudarHabilitarNome] = useState(true);
    const [nome, mudarNome] = useState('Nome indefinido');
    const [corTextoNome, mudarCorTextoNome] = useState('#fff');

    // Outras barras
    const [textoBarraFixa2, mudartextoBarraFixa2] = useState('Barra de texto fixa');
    const [habilitarBarraFixa2, mudarHabilitarBarraFixa2] = useState(true);
    const [corTextoBarraFixa2, mudarCorTextoBarraFixa2] = useState('#f78383ff');
    const [tamanhoBordaBarraFixa2, mudartamanhoBordaBarraFixa2] = useState('2px');
    const [corBordaBarraFixa2, mudarcorBordaBarraFixa2] = useState('#f92012');
    const [estiloBordaBarraFixa2, mudarestiloBordaBarraFixa2] = useState('solid');
    

    const [habilitarBarraDinamica1, mudarHabilitarBarraDinamica1] = useState(true);


    const [habilitarBarraDinamica2, mudarHabilitarBarraDinamica2] = useState(true);




    

    useEffect(() => {
        handleSubmit()
    }, [nome, habilitarNome]);

    async function handleSubmit(e = '') {
        if (e) e.preventDefault();
        

        axios.post('http://localhost:5000/mudar/', { nome, habilitarNome, rounded, roundedU, folder, imgName, corTextoNome });
    }

    return (
        <>
        <h2>Controll <button type="submit" onClick={handleSubmit}>Enviar</button> </h2>

        <form style={{backgroundColor: '#232323'}}>
            <div id="total">
             <div style={{display: "flex", flexDirection: "column"}}>
                <Imagem rounded={rounded+roundedU} imgName={imgName} folder={folder}/>
                <input type="range" onChange={(e) => mudarRounded(e.target.value)} value={rounded} min={0} max={roundedU === 'px' ? 250 : 50}/>

                <select style={{width: 'fit-content'}} value={roundedU} onChange={(e) => mudarRoundedU(e.target.value)}>
                    <option value="%">%</option>
                    <option value="px">px</option>
                </select>
                <p>Diretório ( front/imagens/{folder && folder + '/'} ) </p>
                <input type="text" onChange={(e) => mudarFolder(e.target.value)} value={folder}/>
                <p>Nome do arquivo (com extenção)</p>
                <input type="text" onChange={(e) => mudarImgName(e.target.value)} value={imgName}/>
             </div>
                        
            <div id="Barras">
                <BarraTexto corBarra={'transparent'} corTexto={corTextoNome} texto={nome} handleChange={mudarNome} tamanhoBorda="0" habilitado ={habilitarNome}/>
                    <div style={{display: "flex"}}>
                        <TextoOptionColor texto={'Cor texto'} value={corTextoNome} changeValue={mudarCorTextoNome}/>
                        <TextoOptionCheckbox texto={'Habilitado?'} value={habilitarNome} changeValue={mudarHabilitarNome}/>
                    </div>
                <hr />
                <BarraTexto corBarra={corTextoBarraFixa2} texto={textoBarraFixa2} handleChange={mudartextoBarraFixa2} habilitado ={habilitarBarraFixa2} tamanhoBorda={tamanhoBordaBarraFixa2+'px'} corBorda={corBordaBarraFixa2} estiloBorda={estiloBordaBarraFixa2}/>
                    <div style={{display: "flex"}}>
                        <TextoOptionColor texto={'Cor texto'} value={corTextoNome} changeValue={mudarCorTextoNome}/>
                        <TextoOptionCheckbox texto={'Habilitado?'} value={habilitarNome} changeValue={mudarHabilitarNome}/>
                        <div style={{ width:"fit-content", borderRight: 'solid white 1px', padding: "0 1%"}}>
                            <p>Tamanho da borda</p>
                            <input type="number" value={tamanhoBordaBarraFixa2} onChange={(e) => mudartamanhoBordaBarraFixa2(e.target.value)} style={{display: "flex", width: '3rem'}}/>
                        </div>
                    </div>
                <hr />
                <BarraDinamica corBarraFrente={'#2679f5ff'} corBarraFundo="#005266ff" corTexto="#131313ff" atualN={10} maximoN={10} texto={'Sanidade'} textoMostrarN={false} habilitado ={true}/>
                <hr />
                <BarraDinamica corBarraFrente={'#2679f5ff'} corBarraFundo="#005266ff" corTexto="#131313ff" atualN={10} maximoN={10} texto={'Sanidade'} textoMostrarN={false} habilitado ={false}/>
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