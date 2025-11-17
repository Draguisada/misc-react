import { useEffect, useState } from "react";
import axios from "axios";



export default function Presets({loadState}) {
    const [presets, mudarPresets] = useState([]);

    const [key, mudarKey] = useState([]);

    async function buscarPresets() {
        const response = await axios.get('http://localhost:5000/memoria/todos');
        const dict = response.data;
        mudarKey(Object.keys(dict));
    }

    useEffect(() => {
        buscarPresets();
        
    }, [])

    function handleCriar(e) {
        e.preventDefault();
        axios.post('http://localhost:5000/memoria/add');
        buscarPresets();
    }

    async function handleMudarPreset(e) {
        axios.post('http://localhost:5000/memoria/setAtual', {id: e.target.value});
        const response = await axios.get('http://localhost:5000/memoria');
        loadState(response.data);
    }

    return (
        <div id="preset">
            <select onChange={handleMudarPreset}>
                {key.map((index) => (
                    <option key={index}>{index}</option>
                ))}
            </select>

            <button onClick={handleCriar}><strong>+</strong> Criar novo preset</button>
        </div>
    )
}