import { useState } from "react"
import { useEffect } from "react"
import axios from 'axios'
import View from "./View";

export default function Controll() {
    const [nome, mudarNome] = useState('Nome indefinido');
    const [cor, mudarCor] = useState('#232323');

    useEffect(() => {
        console.log(nome);
    }, [nome])

    useEffect(() => {
        console.log(cor);
    }, [cor])

    async function handleSubmit(e) {
        e.preventDefault();

        axios.post('http://localhost:5000/mudar/', { cor, nome });
    }

    return (
        <>
        <form>
            <h1>Controll</h1>
            <div>
                <h1>Nome</h1>
                <input type="text" onChange={(e) => mudarNome(e.target.value)}/>
            </div>
            <div>
                <h1>Cor</h1>
                <input type="color" onChange={(e) => mudarCor(e.target.value)}/>
            </div>
            <br/>

            <button type="submit" onClick={handleSubmit}>Enviar</button>
        </form>
        <hr/>
        {/* <View/> */}
        </>
    )
}