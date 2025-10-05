


export default function TextoOptionCheckbox({texto, value, changeValue}) {

    return (
        <div style={{ width:"fit-content", borderRight: 'solid white 1px', padding: "0 1%"}}>
            <p style={{marginRight: '5%'}}>{texto}</p>
            <input type="checkbox" checked={value} onChange={(e) => changeValue(e.target.checked)} />
        </div>
    )
}