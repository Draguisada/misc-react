import { useState, useEffect, useCallback } from "react"
import axios from 'axios'

import TextoOptionColor from "../assets/props/Combinacoes/TextoOptionColor";
import TextoOptionCheckbox from "../assets/props/Combinacoes/TextoOptionCheckbox";

import BarraTexto from "../assets/props/BarraTexto";
import BarraDinamica from "../assets/props/BarraDinamica";
import Presets from "../assets/props/Presets";

import Imagem from "../assets/props/Imagem";


export default function Controll() {

    const TempoAposEdicao = 3; // Segundos

    function loadState(newState) {
        mudarImagem(newState.imagem);
        setBarrasFixas(newState.barrasFixas);
        setBarrasDinamicas(newState.barrasDinamicas);
    }

    async function loadFromBD() {
        const response = await axios.get('http://localhost:5000/memoria');
        loadState(response.data);
    }

    useEffect(() => {
        loadFromBD()
    }, [])
    

    const [imagem, mudarImagem] = useState({
        rounded: '20',
        roundedU: '%',
        folder: '',
        imgName: 'imagem.png'
    })
    const mudarRounded = (novoRounded) => { mudarImagem({ ...imagem, rounded: novoRounded })}
    const mudarRoundedU = (novoValor) => { mudarImagem({ ...imagem, roundedU: novoValor })}
    const mudarFolder = (novoValor) => { mudarImagem({ ...imagem, folder: novoValor })}
    const mudarImgName = (novoValor) => {mudarImagem({ ...imagem, imgName: novoValor })}

    // Dynamic Fixed Bars
    const [barrasFixas, setBarrasFixas] = useState([
        {
            id: 1,
            habilitado: true,
            cor: 'transparent',
            texto: {
                texto: '<Nome>',
                cor: '#ffffff',
                alinhamento: 'center'
            },
            borda: {
                tamanho: '0',
                estilo: 'solid',
                cor: 'transparent'
            }
        },
        {
            id: 2,
            habilitado: true,
            cor: '#f78383',
            texto: {
                texto: 'Habilidade?',
                cor: '#DFDFDF',
                alinhamento: 'center'
            },
            borda: {
                tamanho: '2',
                estilo: 'solid',
                cor: '#f92012'
            }
        }
    ])

    // Generic update functions for fixed bars
    const updateBarraFixa = (barId, field, value) => {
        setBarrasFixas(prev => prev.map(bar => 
            bar.id === barId ? { ...bar, [field]: value } : bar
        ));
    };

    const updateBarraFixaTexto = (barId, field, value) => {
        setBarrasFixas(prev => prev.map(bar => 
            bar.id === barId ? { 
                ...bar, 
                texto: { ...bar.texto, [field]: value } 
            } : bar
        ));
    };

    const updateBarraFixaBorda = (barId, field, value) => {
        setBarrasFixas(prev => prev.map(bar => 
            bar.id === barId ? { 
                ...bar, 
                borda: { ...bar.borda, [field]: value } 
            } : bar
        ));
    };

    // Add/Remove functions for fixed bars
    const addBarraFixa = () => {
        const newId = Math.max(...barrasFixas.map(b => b.id), 0) + 1;
        setBarrasFixas(prev => [...prev, {
            id: newId,
            habilitado: true,
            cor: '#f78383',
            texto: { texto: 'Nova Barra', cor: '#573e3e', alinhamento: 'center'},
            borda: { tamanho: '2', estilo: 'solid', cor: '#f92012' }
        }]);
    };

    const removeBarraFixa = (barId) => {
        setBarrasFixas(prev => prev.filter(bar => bar.id !== barId));
    };

    // Dynamic Dynamic Bars
    const [barrasDinamicas, setBarrasDinamicas] = useState([
        {
            id: 1,
            habilitado: true,
            cor: '#f78383',
            corFundo: '#df4343',
            valores: {
                atual: 10,
                maximo: 10,
                cor: '#C9C9C9'
            },
            texto: {
                habilitado: false,
                mostrarAoAtualizar: true,
                texto: 'Vida?',
                alinhamento: 'center',
                tempoMostrarValoresTemporariamente: 2
            },
            borda: {
                tamanho: '2',
                estilo: 'solid',
                cor: '#f92012'
            }
        },
        {
            id: 2,
            habilitado: true,
            cor: '#1E3E63',
            corFundo: '#010031',
            valores: {
                atual: 10,
                maximo: 10,
                cor: '#E0C8FF'
            },
            texto: {
                habilitado: false,
                mostrarAoAtualizar: true,
                texto: 'Sanidade?',
                alinhamento: 'center',
                tempoMostrarValoresTemporariamente: 2
            },
            borda: {
                tamanho: '2',
                estilo: 'solid',
                cor: '#0B0029FF'
            }
        }
    ])

    // Generic update functions for dynamic bars
    const updateBarraDinamica = (barId, field, value) => {
        setBarrasDinamicas(prev => prev.map(bar => 
            bar.id === barId ? { ...bar, [field]: value } : bar
        ));
    };

    const updateBarraDinamicaValores = (barId, field, value) => {
        setBarrasDinamicas(prev => prev.map(bar => 
            bar.id === barId ? { 
                ...bar, 
                valores: { ...bar.valores, [field]: value } 
            } : bar
        ));
    };

    const updateBarraDinamicaTexto = (barId, field, value) => {
        setBarrasDinamicas(prev => prev.map(bar => 
            bar.id === barId ? { 
                ...bar, 
                texto: { ...bar.texto, [field]: value } 
            } : bar
        ));
    };

    const updateBarraDinamicaBorda = (barId, field, value) => {
        setBarrasDinamicas(prev => prev.map(bar => 
            bar.id === barId ? { 
                ...bar, 
                borda: { ...bar.borda, [field]: value } 
            } : bar
        ));
    };

    // Add/Remove functions for dynamic bars
    const addBarraDinamica = () => {
        const newId = Math.max(...barrasDinamicas.map(b => b.id), 0) + 1;
        setBarrasDinamicas(prev => [...prev, {
            id: newId,
            habilitado: true,
            cor: '#f78383',
            corFundo: '#df4343',
            valores: { atual: 10, maximo: 10, cor: '#573e3e' },
            texto: { habilitado: false, mostrarAoAtualizar: true, texto: 'Nova Barra', alinhamento: 'center', tempoMostrarValoresTemporariamente: 2 },
            borda: { tamanho: '2', estilo: 'solid', cor: '#f92012' }
        }]);
    };

    const removeBarraDinamica = (barId) => {
        setBarrasDinamicas(prev => prev.filter(bar => bar.id !== barId));
    };

    const handleSubmit = useCallback(async (e = '') => {
        if (e) e.preventDefault();

        axios.post('http://localhost:5000/mudar/', { 
            imagem, barrasFixas, barrasDinamicas
        });
    }, [imagem, barrasFixas, barrasDinamicas]);

    useEffect(() => {
        const timer = setTimeout(() => {
        handleSubmit()
    }, TempoAposEdicao * 1000); // 3000 milissegundos = 3 segundos

    // Função de limpeza para limpar o temporizador quando o componente for desmontado
    return () => {
      clearTimeout(timer);
    };

    }, [handleSubmit]);

    function handleReset() {
        axios.get('http://localhost:5000/mudar/resetar');
    }
 
    return (
        <main id="controll">
        <h2><button type="submit" onClick={handleReset}>Reset</button>Controll <button type="submit" onClick={handleSubmit}>Enviar</button> </h2>
        

        <form style={{backgroundColor: '#232323'}}>
            <div id="total">
             <div style={{display: "flex", flexDirection: "column"}}>
                <Imagem rounded={imagem.rounded+imagem.roundedU} imgName={imagem.imgName} folder={imagem.folder}/>
                <input type="range" onChange={(e) => mudarRounded(e.target.value)} value={imagem.rounded} min={0} max={imagem.roundedU === 'px' ? 250 : 50}/>

                <select style={{width: 'fit-content'}} value={imagem.roundedU} onChange={(e) => mudarRoundedU(e.target.value)}>
                    <option value="%">%</option>
                    <option value="px">px</option>
                </select>
                <p>Diretório ( front/imagens/{imagem.folder && imagem.folder + '/'} ) </p>
                <input type="text" onChange={(e) => mudarFolder(e.target.value)} value={imagem.folder}/>
                <p>Nome do arquivo (com extenção)</p>
                <input type="text" onChange={(e) => mudarImgName(e.target.value)} value={imagem.imgName}/>
                <Presets loadState={loadState}></Presets>
             </div>
                        
            <div id="Barras">
                {/* Dynamic Fixed Bars */}
                <div>
                <h2>Barras Fixas</h2>
                {barrasFixas.map((barra) => (
                    <div key={barra.id}>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px"}}>
                            <h3>Barra Fixa {barra.id}</h3>
                            <button 
                                type="button"
                                onClick={() => removeBarraFixa(barra.id)}
                                style={{backgroundColor: '#FF4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px'}}
                            >
                                Remover
                            </button>
                        </div>
                        
                        <BarraTexto 
                            corBarra={barra.cor} 
                            corTexto={barra.texto.cor} 
                            texto={barra.texto.texto} 
                            handleChange={(value) => updateBarraFixaTexto(barra.id, 'texto', value)} 
                            tamanhoBorda={barra.borda.tamanho+'px'} 
                            habilitado={barra.habilitado} 
                            alinhamento={barra.texto.alinhamento}
                            corBorda={barra.borda.cor}
                            estiloBorda={barra.borda.estilo}
                        />
                        
                        <div style={{display: "flex", flexWrap: "wrap"}}>
                            <TextoOptionColor texto={'Cor texto'} value={barra.texto.cor} changeValue={(value) => updateBarraFixaTexto(barra.id, 'cor', value)}/>
                            <TextoOptionColor texto={'Cor da barra'} value={barra.cor} changeValue={(value) => updateBarraFixa(barra.id, 'cor', value)}/>
                            <TextoOptionColor texto={'Cor da borda'} value={barra.borda.cor} changeValue={(value) => updateBarraFixaBorda(barra.id, 'cor', value)}/>
                            <TextoOptionCheckbox texto={'Habilitado?'} value={barra.habilitado} changeValue={(value) => updateBarraFixa(barra.id, 'habilitado', value)}/>
                            <div style={{ width:"fit-content", borderRight: 'solid white 1px', padding: "0 1%"}}>
                                <p>Tamanho da borda</p>
                                <input type="number" value={barra.borda.tamanho} onChange={(e) => updateBarraFixaBorda(barra.id, 'tamanho', e.target.value)} style={{display: "flex", width: '3rem'}}/>
                            </div>
                            
                            <select onChange={(e) => updateBarraFixaBorda(barra.id, 'estilo', e.target.value)} value={barra.borda.estilo}>
                                <option value="solid">Sólido</option>
                                <option value="dashed">Dashed</option>
                                <option value="dotted">Dotted</option>
                                <option value="double">Duplo</option>
                                <option value="groove">Groove</option>
                                <option value="ridge">Ridge</option>
                            </select>
                            <select onChange={(e) => updateBarraFixaTexto(barra.id, 'alinhamento', e.target.value)} value={barra.texto.alinhamento}>
                                <option value="left">Esquerda</option>
                                <option value="center">Centro</option>
                                <option value="right">Direita</option>
                            </select>
                            
                        </div>
                        <hr />
                    </div>
                ))}
                
                <button 
                    type="button"
                    onClick={addBarraFixa}
                    style={{backgroundColor: '#44ff44', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', marginBottom: '20px'}}
                >
                    + Adicionar Barra Fixa
                </button>
                </div>
                <hr />
                <div>
                {/* Dynamic Dynamic Bars */}
                <h2>Barras Dinâmicas</h2>
                {barrasDinamicas.map((barra) => (
                    <div key={barra.id}>
                        <div style={{display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px"}}>
                            <h3>Barra Dinâmica {barra.id}</h3>
                            <button 
                                type="button"
                                onClick={() => removeBarraDinamica(barra.id)}
                                style={{backgroundColor: '#ff4444', color: 'white', border: 'none', padding: '5px 10px', borderRadius: '3px'}}
                            >
                                Remover
                            </button>
                        </div>
                        
                        <BarraDinamica 
                            corBarraFrente={barra.cor} 
                            alinhamento={barra.texto.alinhamento} 
                            estiloBorda={barra.borda.estilo} 
                            controllRoom={true} 
                            corBarraFundo={barra.corFundo} 
                            corTexto={barra.valores.cor} 
                            tamanhoBorda={barra.borda.tamanho} 
                            corBorda={barra.borda.cor} 
                            atual={barra.valores.atual} 
                            maximo={barra.valores.maximo} 
                            texto={barra.texto.texto} 
                            textoMostrar={true} 
                            habilitado={barra.habilitado} 
                            mostrarValorQuandoAtualizado={barra.texto.mostrarAoAtualizar}
                            mudarAtual={(value) => updateBarraDinamicaValores(barra.id, 'atual', value)} 
                            mudarMaximo={(value) => updateBarraDinamicaValores(barra.id, 'maximo', value)} 
                            mudarTexto={(value) => updateBarraDinamicaTexto(barra.id, 'texto', value)}
                        />
                        
                        <div style={{display: "flex", flexWrap: "wrap"}}>
                            <TextoOptionColor texto={'Cor texto'} value={barra.valores.cor} changeValue={(value) => updateBarraDinamicaValores(barra.id, 'cor', value)}/>
                            <TextoOptionColor texto={'Cor da barra da frente'} value={barra.cor} changeValue={(value) => updateBarraDinamica(barra.id, 'cor', value)}/>
                            <TextoOptionColor texto={'Cor da barra do fundo'} value={barra.corFundo} changeValue={(value) => updateBarraDinamica(barra.id, 'corFundo', value)}/>
                            <TextoOptionColor texto={'Cor da borda da barra'} value={barra.borda.cor} changeValue={(value) => updateBarraDinamicaBorda(barra.id, 'cor', value)}/>
                            <TextoOptionCheckbox texto={'Habilitado?'} value={barra.habilitado} changeValue={(value) => updateBarraDinamica(barra.id, 'habilitado', value)}/>
                            <div style={{ width:"fit-content", borderRight: 'solid white 1px', padding: "0 1%"}}>
                                <p>Tamanho da borda</p>
                                <input type="number" value={barra.borda.tamanho} onChange={(e) => updateBarraDinamicaBorda(barra.id, 'tamanho', e.target.value)} style={{display: "flex", width: '3rem'}}/>
                            </div>
                            <select onChange={(e) => updateBarraDinamicaBorda(barra.id, 'estilo', e.target.value)} value={barra.borda.estilo}>
                                <option value="solid">Sólido</option>
                                <option value="dashed">Dashed</option>
                                <option value="dotted">Dotted</option>
                                <option value="double">Duplo</option>
                                <option value="groove">Groove</option>
                                <option value="ridge">Ridge</option>
                            </select>
                        </div>
                        
                        <h4>Texto sem mostrar os valores</h4>
                        <div style={{display: "flex", flexWrap: "wrap", justifyContent: 'center'}}>
                            <TextoOptionCheckbox texto={'Habilitado?'} value={barra.texto.habilitado} changeValue={(value) => updateBarraDinamicaTexto(barra.id, 'habilitado', value)}/>
                            <TextoOptionCheckbox texto={'Mostrar valores quando atualizar'} value={barra.texto.mostrarAoAtualizar} changeValue={(value) => updateBarraDinamicaTexto(barra.id, 'mostrarAoAtualizar', value)}/>
                            <p>Centralização<br/> do texto</p>
                            <select onChange={(e) => updateBarraDinamicaTexto(barra.id, 'alinhamento', e.target.value)} value={barra.texto.alinhamento}>
                                <option value="left">Esquerda</option>
                                <option value="center">Centro</option>
                                <option value="right">Direita</option>
                            </select>
                            <p>Tempo de mostrar <br/> os valores</p>
                            <input type="number" value={barra.texto.tempoMostrarValoresTemporariamente} onChange={(e) => updateBarraDinamicaTexto(barra.id, 'tempoMostrarValoresTemporariamente', e.target.value)} style={{display: "flex", width: '3rem'}}/>
                        </div>
                        <hr />
                    </div>
                ))}
                
                <button 
                    type="button"
                    onClick={addBarraDinamica}
                    style={{backgroundColor: '#4444ff', color: 'white', border: 'none', padding: '10px 20px', borderRadius: '5px', marginBottom: '20px'}}
                >
                    + Adicionar Barra Dinâmica
                </button>
                <hr />
                </div>
            </div>


            </div>
            <br/>
            
            

        </form>
        <hr/>
        {/* <View/> */}
        </main>
    )
}