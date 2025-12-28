
function xorEncrypt(text, key) {
  const t = new TextEncoder().encode(text);
  const k = new TextEncoder().encode(key);
  const out = new Uint8Array(t.length);
  for (let i = 0; i < t.length; i++) out[i] = t[i] ^ k[i % k.length];
  return btoa(String.fromCharCode(...out)); // Base64
}

function xorDecrypt(b64, key) {
  const bin = atob(b64);
  const data = new Uint8Array([...bin].map(c => c.charCodeAt(0)));
  const k = new TextEncoder().encode(key);
  const out = new Uint8Array(data.length);
  for (let i = 0; i < data.length; i++) out[i] = data[i] ^ k[i % k.length];
  return new TextDecoder().decode(out);
}

nomesCriptografados = {
    "Bruna": "QnJ1bmE=",
    "Bruno": "RHJhZ3U=",
    "Lara": "TGFyYQ==",
    "Catarina": "Q2F0YXJpbmE=",
    "Maria": "TWFyaWE=",
    "Sophia": "U29waGlh"
}


function descobrirColega(e) {
    const colega = e.target.innerText;
    escolhido.innerText= zip[colega];
    principal.style.display = 'none';

}

nomes = Object.keys(nomesCriptografados);
criptografia = Object.values(nomesCriptografados);

const principal = document.getElementById('principal');
const escolhido = document.getElementById('escolhida');
// Criar os nomes
for (let nome of nomes) {
    const objeto = document.createElement('button');
    objeto.addEventListener('click', descobrirColega)
    objeto.innerText = nome;
    principal.appendChild(objeto);
}

const ALEATORIEDADE = 4126
let zip = {};
function zipar(lista) {
    let listaNova = lista;

    let valor1 = ALEATORIEDADE+1421;
    valor1 %= listaNova.length;
    

    let valor2 = 1431;
    let nomes = [listaNova[valor1], '1']
    let iteracoes = 0;
    while(listaNova.length > 0) {
        // Remover o nome
        if (iteracoes != 0) {
            listaNova = listaNova.filter((umDosNomes) => umDosNomes != nomes[0])
        }
        iteracoes++;

        if (listaNova.length != 1){
            //Aleatoriezar
            valor2 += ALEATORIEDADE;
            valor2 %= listaNova.length;

            while (valor1 == valor2) {
                valor2 += 1;
                valor2 %= listaNova.length;
            }

            // Colocar o nome na variavel
            nomes[1] = listaNova[valor2];
        } else {
            // Quando não tem mais opção
            nomes[1] = listaNova[0];
        }

        // Coloca os nomes no zip
        zip[nomes[0]] = nomes[1];

        // O selecionado vai virar o q escolhe
        nomes[0] = nomes[1]

        if (listaNova.length == 1) { break }

        

        
        
        // listaNova = listaNova.filter((umDosNomes) => umDosNomes != nomes[1])
    }
}

zipar(nomes);