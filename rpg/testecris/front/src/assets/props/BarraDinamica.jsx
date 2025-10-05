import { useEffect, useState } from "react";

export default function BarraDinamica({
    corBarraFrente = '#000',
    corBarraFundo = '#fff', 
    atual = 1, 
    maximo = 10,
    corBorda = '#fff', 
    tamanhoBorda = '2px', 
    estiloBorda = 'solid', 
    corTexto = '#808080',
    texto = '',
    textoMostrar,
    habilitado = true,
    mudarAtual,
    mudarMaximo,
    mostrarValorQuandoAtualizado,
    controllRoom = false,
    mudarTexto,
    alinhamento

    }) {
    
    const [mostrarTexto, mudarMostrarTexto] = useState();

    if (!habilitado) return

    function lerp(atual, max) {
        // (atual - 0) / (max - 0)
        const norm = atual / (max)

        // norm * minimo + (1-norm) * max
        // normalizaçao * 0 + (1 - normalizaçao) * 100
        // const linearInterpolated = (1 - norm) * 100
        const linearInterpolated = norm * 100;
        return `${Math.min(linearInterpolated, 100)}%`;
    }

    // useEffect(()=> {

    //     if (textoMostrar && mostrarTexto) {

    //         mudarMostrarTexto(false);
    //         const interval = setInterval(() => {
    //             mudarMostrarTexto(true);
    //         }, 1000);
    //         return () => clearInterval(interval);

    //     }

    // }, [atual]);

    if (controllRoom) {
        return (
        <>
        <div className="BarraTotal">

            <div style={{
                backgroundColor: corBarraFundo,
                zIndex: -1,
                borderWidth: tamanhoBorda + 'px', 
                borderColor: corBorda, 
                borderStyle: estiloBorda,
                 }}
                className="barra"
                id="fundo">

                    <div style={{
                        backgroundColor: corBarraFrente,

                        zIndex: 2,
                        width: lerp(atual, maximo)
                        }}
                    className="barra"
                    id="frente"/>                    

            </div>
            <>
            <input type="number" value={atual} min={0} max={maximo} onChange={(e) => {mudarAtual(e.target.value)}}
            style={{
                color: corTexto,
                textAlign: 'right'
            }}
            />
            <input type="text" value={'/'} style={{width: '1rem', color: corTexto}} />
            <input type="number" value={maximo} min={atual} onChange={(e) => mudarMaximo(e.target.value)}
            style={{
                color: corTexto,
                textAlign: 'left'
            }}
            /> <input type="text" value={texto} style={{color: corTexto, textAlign: alinhamento}} onChange={(e) => mudarTexto(e.target.value)}/></>
            
        
        </div>


        </>

    )
    }

    return (
        <>
        <div className="BarraTotal">

            <div style={{
                backgroundColor: corBarraFundo,
                zIndex: -1,
                borderWidth: tamanhoBorda + 'px', 
                borderColor: corBorda, 
                borderStyle: estiloBorda,
                 }}
                className="barra"
                id="fundo">

                    <div style={{
                        backgroundColor: corBarraFrente,

                        zIndex: 2,
                        width: lerp(atual, maximo)
                        }}
                    className="barra"
                    id="frente"/>                    

            </div>
            
            {textoMostrar ?
             <input type="text" value={texto} style={{color: corTexto, textAlign: alinhamento}}/> :
            <>
            <input type="number" value={atual} min={0} max={maximo} onChange={(e) => {mudarAtual(e.target.value)}}
            style={{
                color: corTexto,
                textAlign: 'right'
            }}
            />
            <input type="text" value={'/'} style={{width: '1rem', color: corTexto}} />
            <input type="number" value={maximo} min={atual} onChange={(e) => mudarMaximo(e.target.value)}
            style={{
                color: corTexto,
                textAlign: 'left'
            }}
            /></>}
            
        
        </div>


        </>

    )
}