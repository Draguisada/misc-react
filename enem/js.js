const azul = ["D", "D", "C", "D", "C", "B", "D", "D", "C", "D", "A", "E", "A", "A", "E", "A", "E", "C", "E", "E", "B", "D", "B", "B", "C", "C", "D", "C", "B", "B", "B", "D", "E", "B", "B", "D", "C", "E", "A", "E", "E", "C", "A", "B", "A", "C", "B", "E", "C", "E", "C", "C", "A", "D", "D", "B", "E", "C", "B", "D", "D", "D", "A", "C", "B", "E", "C", "C", "D", "E", "A", "B", "B", "A", "D", "E", "D", "E", "A", "B", "E", "D", "A", "B", "C", "C", "B", "E", "A", "D"]
const cinza = ["C", "D", "A", "E", "A", "A", "C", "B", "D", "D", "E", "C", "E", "E", "B", "D", "E", "A", "B", "B", "C", "B", "B", "D", "E", "E", "E", "C", "B", "B", "D", "C", "D", "C", "B", "A", "A", "B", "D", "D", "C", "D", "C", "E", "A", "A", "D", "D", "B", "B", "C", "E", "C", "E", "C", "C", "B", "D", "D", "D", "E", "C", "A", "C", "E", "A", "B", "D", "E", "B", "E", "C", "C", "D", "B", "A", "B", "E", "D", "A", "A", "B", "C", "C", "B", "E", "A", "D", "D", "E"]
const verde = ["E", "E", "B", "D", "E", "C", "D", "D", "C", "D", "C", "B", "D", "D", "E", "A", "C", "D", "A", "E", "A", "A", "A", "B", "B", "C", "C", "D", "C", "B", "C", "E", "A", "A", "B", "B", "B", "D", "B", "B", "D", "E", "E", "E", "C", "B", "D", "D", "D", "E", "B", "C", "A", "D", "D", "B", "C", "E", "C", "C", "A", "C", "E", "C", "D", "E", "B", "E", "C", "C", "D", "B", "A", "E", "A", "B", "A", "B", "C", "C", "B", "E", "A", "D", "D", "E", "B", "E", "D", "A"]
const amarelo = ["C", "B", "D", "D", "C", "D", "A", "E", "A", "A", "A", "E", "C", "B", "B", "C", "E", "A", "E", "E", "B", "D", "E", "E", "C", "A", "B", "B", "B", "D", "E", "C", "D", "C", "B", "B", "B", "D", "C", "E", "A", "D", "D", "C", "D", "C", "E", "C", "C", "A", "D", "D", "B", "E", "B", "C", "A", "C", "E", "C", "B", "D", "D", "D", "B", "A", "D", "E", "E", "A", "B", "B", "E", "C", "C", "D", "A", "B", "E", "A", "D", "D", "E", "B", "E", "D", "A", "B", "C", "C"]
const primeira = document.getElementById('primeira');
const segunda = document.getElementById('segunda');
let acertoObjP = document.querySelector('#acertosP');
let acertoObjS = document.querySelector('#acertosS');
let acertosP = 0;
let acertosS = 0;

const title = document.getElementById('title');

const provas = [cinza, azul, verde, amarelo];
const cores = ['gray', '#1865f5', 'green', 'yellow'];
let provaSelecionada = 0;

function criarObjeto(numero, letraCerta, bool) {
    const obj = document.createElement('div');
    const letra = document.createElement('p');
    const certo = document.createElement('button');

    if (!bool){
        certo.addEventListener('click', adicionarOuRemoverAcertoPrimeira);
    } else {
        certo.addEventListener('click', adicionarOuRemoverAcertoSegunda);
    }

    letra.innerText = `${numero}: ${letraCerta}`;

    obj.appendChild(letra);
    obj.appendChild(certo)
    return obj;
}

function adicionarOuRemoverAcertoPrimeira() {
    this.classList.toggle('certo');

    if (this.classList.contains('certo')) {
        acertosP++;
    } else {
        acertosP--;
    }

    acertoObjP.innerText = acertosP;
}

function adicionarOuRemoverAcertoSegunda() {
    this.classList.toggle('certo');

    if (this.classList.contains('certo')) {
        acertosS++;
    } else {
        acertosS--;
    }

    acertoObjS.innerText = acertosS;
}

function load(valor) {
    const respostas = provas[valor];
    title.style.backgroundColor = cores[valor];
    primeira.innerHTML = '';
    segunda.innerHTML = '';

    for (let i = 0; i < respostas.length; i++) {
        if ( i < respostas.length/2){
            primeira.appendChild(criarObjeto(i+91, respostas[i], false))
        } else {
            segunda.appendChild(criarObjeto(i+91, respostas[i], true))
        }

    }

}
load(0);

