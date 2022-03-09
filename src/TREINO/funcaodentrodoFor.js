

let treino = [
    { 'key': 't', 'nome': 'kleberson', 'idade': 29 , "calcado" : 'calcado'},     { 'key': '20', 'nome': 'romulo', 'idade': 50 },     { 'key': '5', 'nome': 'ingo', 'idade': 1021 },
    
    
];
let total = 0

function resposta(dados){
    total += dados.idade
    console.log(`${dados.nome} tem ${dados.idade} anos de idade`)
    
}

for (let i = 0; i < treino.length; i++) {
    const e = treino[i];

   resposta(e)

}


console.log(`a soma das idades resultam em ${total}`)