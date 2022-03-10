import React, { useEffect, useState } from "react";

import * as s from './Styled'

export default function TabelaItens() {

  let cabeca =  ['Peça', 'Preço', 'Qtd. Parcelas', 'Parcelas Pagas', 'Credor', 'excluir']
  let dadosSalvo = localStorage.getItem('peca');
  console.log(dadosSalvo)

  const [peca, setPeca] = useState([])

  useEffect(() => {
    setPeca(JSON.parse(dadosSalvo))
  }, [])




  function armazenar() {


    let npeca = document.getElementById("npeca").value;
    let npreco = document.getElementById("npreco").value;
    let qtd = document.getElementById("qtd").value;
    let pp = document.getElementById("pp").value;
    let credor = document.getElementById("credor").value;

 

    let arrauObjetos = [];
    let dados = {

      key: gerakey(),
      npeca: npeca,
      npreco: npreco,
      qtd: qtd,
      pp: pp,
      credor: credor,
    }


    arrauObjetos.push(...peca, dados)

    console.log(arrauObjetos)

    localStorage.setItem("peca", JSON.stringify(arrauObjetos));

    setPeca(arrauObjetos)

    document.getElementById("npeca").value= " "
    document.getElementById("npreco").value = " "
    document.getElementById("qtd").value= " "
    document.getElementById("pp").value= " "
    document.getElementById("credor").value = " "
    
    
      
  }
  


  function gerakey() {
    let min = Math.ceil(0);
    let max = Math.floor(1000);

    return Math.floor(Math.random() * (max - min)) + min;
  }

  console.log(peca)


  //função que exclui o item selecionado!
  function excluir(key) { 
    //Key recebida quando clico no botão
    console.log(key)

      //array vazio que vai receber o push e vai substituir o array original!
    let novoArray = []

    // for que percorre a state peca que é u m ARRAY!!!!  
    for (let i = 0; i < peca.length; i++) {
      // verificação : se for diferente do selecionado > entra! se não for, nada acontece!
      if(key !== peca[i].key){ 
        novoArray.push(peca[i])

      }

    }

    //substituindo o novo ARRAY no local storage
    localStorage.setItem("peca", JSON.stringify(novoArray));
    //substituindo a state com o novo array!
    setPeca(novoArray)


  }

  function excluirTudo() {

    localStorage.removeItem('peca')
    setPeca([])
   

  }
  function mudaCor(){
    console.log("treinar +")
     
    
  }

  

  return (




    <s.ContainerGeral id="divtest" >
       <s.Selecao id="sel" onChange={mudaCor()}>
         {["Preciso", "Estudar", "Mais", "Porquê" , "só" , "Pressão", "kkkk", ].map((e)=>(<option>{e}</option>))}
       
       </s.Selecao>
      
      <s.Titulo>Adcionar nova peça: </s.Titulo>

      <s.Etiqueta >Peça Nova : </s.Etiqueta>
      <s.Inovos id="npeca"   ></s.Inovos>

      <s.Etiqueta >Preço: </s.Etiqueta>
      <s.Inovos id="npreco" maxLength={9}></s.Inovos>

      <s.Etiqueta >Qt. Parcelas:</s.Etiqueta>
      <s.Inovos id="qtd" maxLength={2}></s.Inovos>

      <s.Etiqueta >Parcelas agas: </s.Etiqueta>
      <s.Inovos id="pp" maxLength={5}></s.Inovos>

      <s.Etiqueta >Credor: </s.Etiqueta>
      <s.Inovos id="credor" maxLength={10}></s.Inovos>

      <s.Gravar onClick={() => armazenar()}>Salvar</s.Gravar>
      <s.Gravar onClick={() => excluirTudo()}>Excluir Tudo</s.Gravar>

      <br></br> <br></br>  <br></br> 

      <s.Container id="cont">
      {
        peca?.length > 0  && (

          <>
          
          <s.Hr id="lin"></s.Hr>
       <br></br>

      

      <h2>Coisas Do Meu quarto</h2>
      <s.Tabela>
        {
          cabeca.map((elemento, index) => (
            <s.CabecalhoTh>{elemento}</s.CabecalhoTh>
          ))
        }


        {

          peca?.map((e, i) => (
            <>
              <s.LinhaTr>

                <s.ColunaTd1> {e.npeca} </s.ColunaTd1>



                <s.ColunaTd >
                  <s.Input value={e.npreco} />
                </s.ColunaTd>




                <s.ColunaTd >
                  <s.Input maxLength={2} value={e.qtd} />
                </s.ColunaTd>



                <s.ColunaTd >
                  <s.Input maxLength={5} value={e.pp} />
                </s.ColunaTd>



                <s.ColunaTd >
                  <s.Input maxLength={10} value={e.credor} />
                </s.ColunaTd>


                <s.ColunaTd>
                  <s.BotaoExcluir onClick={() => excluir(e.key)} >Excluir</s.BotaoExcluir>
                </s.ColunaTd>

              </s.LinhaTr>

            </>
          )
          )


        }


      </s.Tabela>
          
          </>
        )
      }
     
      </s.Container>
    </s.ContainerGeral>

  );
}


