import React, { useState } from "react";

import * as s from './Styled'

export default function TabelaItens() {
  let dadosSalvo = localStorage.getItem('peca');
  console.log(dadosSalvo)

  const [peca, setPeca] = useState(JSON.parse(dadosSalvo))



  function excluir() {
    localStorage.removeItem('peca')
    setPeca([])


  }

  function armazenar() {

    let npeca = document.getElementById("npeca").value;
    let npreco = document.getElementById("npreco").value;
    let qtd = document.getElementById("qtd").value;
    let pp = document.getElementById("pp").value;
    let credor = document.getElementById("credor").value;


    let arrauObjetos = [];

    let dados = {

      npeca: npeca,
      npreco: npreco,
      qtd: qtd,
      pp: pp,
      credor: credor,
    }

    arrauObjetos.push(...peca, dados)

    localStorage.setItem("peca", JSON.stringify(arrauObjetos));
    setPeca(arrauObjetos)


  }

  return (



    <s.ContainerGeral>

      <s.Titulo>Adcionar nova peça: </s.Titulo>

      <s.Etiqueta >Peça Nova : </s.Etiqueta>
      <s.Inovos id="npeca"   ></s.Inovos>

      <s.Etiqueta >Preço: </s.Etiqueta>
      <s.Inovos id="npreco"></s.Inovos>

      <s.Etiqueta >Qt. Parcelas:</s.Etiqueta>
      <s.Inovos id="qtd"></s.Inovos>

      <s.Etiqueta >Parcelas Pagas: </s.Etiqueta>
      <s.Inovos id="pp"></s.Inovos>

      <s.Etiqueta >Credor: </s.Etiqueta>
      <s.Inovos id="credor"></s.Inovos>

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


