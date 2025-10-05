
export default function BarraTexto({ corBarra = '#000', texto = '', corBorda = '#fff', tamanhoBorda = '2px', estiloBorda = 'solid', handleChangeText }) {

    return (
        <>
            <div style={{
                backgroundColor: corBarra,
                borderWidth: tamanhoBorda, 
                borderColor: corBorda, 
                borderStyle: estiloBorda,
                 }}
                className="barra" >
                
                <input type="text" value={texto} onChange={(e) => handleChangeText(e.target)}/>

            </div>
        
        </>
    )
}