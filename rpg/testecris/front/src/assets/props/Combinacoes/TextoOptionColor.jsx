export default function TextoOptionColor({texto, value, changeValue}) {

    return (
        <div style={{ width:"fit-content", borderRight: 'solid white 1px', padding: "0 1%"}}>
            <p style={{marginRight: '5%'}}>{texto}</p>
            <input type="color" value={value} onChange={(e) => changeValue(e.target.value)} />
        </div>
    )
}