import { useState } from "react";

export default function BarraDinamica({
    corBarraFrente = '#000',
    corBarraFundo = '#fff', 
    atualN = 1, 
    maximoN = 10,
    corBorda = '#fff', 
    tamanhoBorda = '2px', 
    estiloBorda = 'solid', 
    handleChangeText,
    corTexto = '#808080'

    }) {

        // To-do: Mostrar um texto e só mostrar o valor quando: muda o valor ou passa o mouse por cima; (ou um toggle)

    const [atual, mudarAtual] = useState(atualN);
    const [maximo, mudarMaximo] = useState(maximoN);
        

    function lerp(atual, max) {
        // (atual - 0) / (max - 0)
        const norm = atual / (max)

        // norm * minimo + (1-norm) * max
        // normalizaçao * 0 + (1 - normalizaçao) * 100
        // const linearInterpolated = (1 - norm) * 100
        const linearInterpolated = norm * 100;
        console.log(linearInterpolated)
        return `${Math.min(linearInterpolated, 100)}%`;
    }        

    return (
        <>
        <div className="BarraTotal">

            <div style={{
                backgroundColor: corBarraFundo,
                zIndex: -1,
                borderWidth: tamanhoBorda, 
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
            <input type="number" value={atual} min={0} max={maximo} onChange={(e) => mudarAtual(e.target.value)}
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
            />
        
        </div>


        </>

    )
}