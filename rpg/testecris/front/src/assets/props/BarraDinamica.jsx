import { useEffect, useState } from "react";

export default function BarraDinamica({
    corBarraFrente = '#000',
    corBarraFundo = '#ffffff', 
    atual = 1, 
    maximo = 10,
    corBorda = '#ffffff', 
    tamanhoBorda = '2px', 
    estiloBorda = 'solid', 
    corTexto = '#202020',
    texto = '',
    textoMostrar,
    habilitado = true,
    mudarAtual,
    mudarMaximo,
    mostrarValorQuandoAtualizado = false,
    controllRoom = false,
    mudarTexto,
    alinhamento,
    tempoMostrarValoresTemporariamente = 2
    }) {
    
    const [mostrarValoresTemporariamente, setMostrarValoresTemporariamente] = useState(false);

    function lerp(atual, max) {
        // (atual - 0) / (max - 0)
        const norm = atual / (max)

        // norm * minimo + (1-norm) * max
        // normalizaçao * 0 + (1 - normalizaçao) * 100
        // const linearInterpolated = (1 - norm) * 100
        const linearInterpolated = norm * 100;
        return `${Math.min(linearInterpolated, 100)}%`;
    }

    // Effect to show values temporarily when they change
    useEffect(() => {
        // Only trigger if texto is enabled AND mostrarValorQuandoAtualizado is enabled
        if (textoMostrar && mostrarValorQuandoAtualizado) {
            // Show the values temporarily
            setMostrarValoresTemporariamente(true);
            
            // Hide the values after 1 second and return to showing text
            const timeout = setTimeout(() => {
                setMostrarValoresTemporariamente(false);
            }, tempoMostrarValoresTemporariamente * 1000);
            
            return () => clearTimeout(timeout);
        }
    }, [atual, maximo, textoMostrar, mostrarValorQuandoAtualizado, tempoMostrarValoresTemporariamente]);

    if (!habilitado) return

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
            
            {/* Logic for what to display */}
            {(textoMostrar && mostrarValorQuandoAtualizado && mostrarValoresTemporariamente) ? (
                // Show values temporarily when both conditions are met and values are being shown
                <>
                    <input type="text" value={atual} style={{color: corTexto, textAlign: 'right', width: '3rem'}} readOnly/>
                    <input type="text" value={'/'} style={{width: '1rem', color: corTexto}} readOnly/>
                    <input type="text" value={maximo} style={{color: corTexto, textAlign: 'left', width: '3rem'}} readOnly/>
                </>
            ) : textoMostrar ? (
                // Show text when texto is enabled but not showing values temporarily
                <input type="text" value={texto} style={{color: corTexto, textAlign: alinhamento, width: 'fit-content'}} readOnly/>
            ) : (
                // Show editable values when texto is disabled
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
                    />
                </>
            )}
            
        
        </div>


        </>

    )
}