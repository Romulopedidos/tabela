
let num = [10 , 7 , 3 , 18 , 124]
let calcado = "algodao "
let t = 1500

let treino = [
    { 'key': 't', 'nome': 'kleberson', 'idade': 29 , "calcado" : 'calcado'},     { 'key': '20', 'nome': 'romulo', 'idade': 50 },     { 'key': '5', 'nome': 'ingo', 'idade': 1021 },
    
    
];

let total = 0; 

for (let i = 0; i < treino.length; i++) {
    
    const e = treino[i];

    total += e.idade

    console.log(`${e.nome} tem ${e.idade} anos`  )
}

console.log(`a soma das idades resultam em ${total}`)


 