let sobrinhos = "Pedro" ; "mariana" ; "Carol" ;
let resultados = "Desistente"; "Expulso" ; "Concluido" ; "Reprovado" ; "Aprovado"


let objTreino = [{"corda": "Guitarra" , "percussão" : "Bateria" , "tecla" : "piano"} 
, {"Robson" : "Mais velho" , "Mayra" : "Mais nova" , },
{"calcado": "chinelo" , "cobertor" : "edredon" , "acessório" : "Relógio"} ,
 { "P.branco": "Caruso" , "P.cinza" : "Kikinho" , "P.Preto" : "Noturno"} ,
{"Animal Terrestre": "Cachorro" , "Animal Aquatico" : "Baleia" , "Animal Aéreo" : "Aguia"} 
, {"carro": "Celta" , "Avião" : "Boing" , "Barco" : "Pesca"},
{"aperreio" : sobrinhos , "status" : resultados} 
];

let porquin = 0
function musica(n){
    porquin += n.acessório
    console.log(`${n.calcado} tem ${n.cobertor} `)
    }

objTreino.map((n,i)=>
    musica(n)
)

