import React, { useEffect, useState } from "react";

import * as s from './Styled'

export default function TabelaItens() {


  let dadosSalvo = localStorage.getItem('peca');
  console.log(dadosSalvo)

  const [peca, setPeca] = useState([])

  useEffect(()=>{
    setPeca(JSON.parse(dadosSalvo))
  },[])




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


    arrauObjetos.push( ...peca, dados)

    console.log(arrauObjetos)

    localStorage.setItem("peca", JSON.stringify(arrauObjetos));

    setPeca(arrauObjetos)


  }


  function gerakey(){
      let min = Math.ceil(0);
     let max = Math.floor(1000);
      
      return Math.floor(Math.random() * (max - min)) + min;
    }
  
    console.log(peca)


    
  function excluir() {
    setPeca([])
    

  }
  return (




    <s.ContainerGeral>

      <s.Titulo>Adcionar nova peça: </s.Titulo>

      <s.Etiqueta >Peça Nova : </s.Etiqueta>
      <s.Inovos id="npeca"   ></s.Inovos>

      <s.Etiqueta >Preço: </s.Etiqueta>
      <s.Inovos id="npreco" maxLength={9}></s.Inovos>

      <s.Etiqueta >Qt. Parcelas:</s.Etiqueta>
      <s.Inovos id="qtd" maxLength={2}></s.Inovos>

      <s.Etiqueta >Parcelas Pagas: </s.Etiqueta>
      <s.Inovos id="pp" maxLength={5}></s.Inovos>

      <s.Etiqueta >Credor: </s.Etiqueta>
      <s.Inovos id="credor" maxLength={10}></s.Inovos>

      <s.Gravar onClick={() => armazenar()}>Salvar</s.Gravar>

      <br></br> <br></br>  <br></br> <hr></hr> <br></br>

      <h2>Coisas Do Meu quarto</h2>
      <s.Tabela>
        {
          ['Peça', 'Preço', 'Qtd. Parcelas', 'Parcelas Pagas', 'Credor', 'excluir'].map((elemento, index) => (
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
                            <s.Botaoexcluir onClick={() => excluir()} />
                          </s.ColunaTd>

                        </s.LinhaTr>

                      </>
                    )
                    )


                    }


      </s.Tabela>

    </s.ContainerGeral>

  );
}


