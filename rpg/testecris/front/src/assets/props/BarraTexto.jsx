export default function BarraTexto({ corBarra = '#000', texto = '', corTexto, corBorda = '#fff', tamanhoBorda = '2px', estiloBorda = 'solid', habilitado, handleChange}) {

    if (!habilitado) return
    
    return (
        <>
            <div style={{
                backgroundColor: corBarra,
                borderWidth: tamanhoBorda, 
                borderColor: corBorda, 
                borderStyle: estiloBorda,
                 }}
                className="barra" >
                
                <input type="text" value={texto} onChange={(e) => handleChange(e.target.value)}
                style={{color: corTexto}}
                />

            </div>
        
        </>
    )

}