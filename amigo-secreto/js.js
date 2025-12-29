
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

const nomesCriptografados = {
  "Bruna": "QnJ1bmE=",
  "Bruno": "RHJhZ3U=",
  "Lara": "TGFyYQ==",
  "Catarina": "Q2F0YXJpbmE=",
  "Maria": "TWFyaWE=",
  "Sophia": "U29waGlh"
};

const principal = document.getElementById('principal');
const escolhido = document.getElementById('escolhida');

const nomes = Object.keys(nomesCriptografados);

for (let nome of nomes) {
  const objeto = document.createElement('button');
  objeto.addEventListener('click', descobrirColega);
  objeto.innerText = nome;
  principal.appendChild(objeto);
}

function descobrirColega(e) {
  const colega = e.currentTarget.innerText;
  const destino = zip[colega];
  escolhido.innerText = destino ?? '(sem par)';
  principal.style.display = 'none';
}

const ALEATORIEDADE = 4126;
let zip = {};
let ordem = []; // guarda a ordem embaralhada para validação ou depuração

// RNG determinístico (LCG) baseado na semente ALEATORIEDADE
function makeRNG(seed) {
  return function rand() {
    // LCG clássico (Numerical Recipes): X_{n+1} = (a*X_n + c) mod 2^32
    seed = (seed * 1664525 + 1013904223) >>> 0;
    return seed / 2**32; // [0,1)
  };
}

// Fisher–Yates usando RNG determinístico
function shuffleDeterministico(arr, seed) {
  const a = arr.slice();
  const rand = makeRNG(seed);
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

// Cria um ciclo único: cada nome aponta para o próximo na ordem embaralhada
function zipar(lista) {
  const len = lista.length;
  zip = {};

  if (len <= 1) return;

  ordem = shuffleDeterministico(lista, ALEATORIEDADE + 1421);

  for (let i = 0; i < len; i++) {
    const origem = ordem[i];
    const destino = ordem[(i + 1) % len];
    zip[origem] = destino;
  }
}

// Validação: checa se é um único ciclo (visita todos e volta ao início)
function testar() {
  const valores = Object.values(zip);
  if (valores.some(v => v === undefined)) {
    console.log('apareceu undefined');
    return;
  }

  if (ordem.length === 0) {
    console.log('ordem vazia');
    return;
  }

  const visitados = new Set();
  let atual = ordem[0];
  for (let i = 0; i < ordem.length; i++) {
    if (visitados.has(atual)) break;
    visitados.add(atual);
    atual = zip[atual];
  }

  const cicloCompleto = (visitados.size === ordem.length) && (atual === ordem[0]);
  console.log(cicloCompleto ? 'ciclo único OK' : 'ciclo inválido');
}

zipar(nomes);
testar();
