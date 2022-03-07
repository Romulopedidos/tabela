import React, {useState} from "react";
import styled from "styled-components";

import * as s from './Styled'

// import './App.css';

export default function TabelaItens() {
  const [peca , setPeca ] = useState(['Notbook', 'Monitor (29 Pol)' , 'Monitor/TV (32Pol)' , 'Mouse' , 'Teclado' , 
  'Cadeira Gamer' ,  'Google Nest' ,'Alexa' ,'Fita LED' ,'Lampada LED' , 'Movel', 'Cabo HDMI' ,
  'Suport Cel' ,
  ])
  
  
  return (


    <>
    
    <s.ContainerGeral>


      
          
          <s.Titulo>Adcionar nova peça: </s.Titulo>
        <s.Formulario>
        <s.Etiqueta >Peça Nova : </s.Etiqueta>
        <s.Inovos className="novos"></s.Inovos>
        <s.Etiqueta >Preço: </s.Etiqueta>
        <s.Inovos className="novos"></s.Inovos>
        <s.Etiqueta >Qt. Parcelas:</s.Etiqueta>
        <s.Inovos className="novos"></s.Inovos>
        <s.Etiqueta >Credor: </s.Etiqueta>
        <s.Inovos className="novos"></s.Inovos>
        <s.Gravar>Salvar</s.Gravar>
        </s.Formulario>
        
        <br></br> <br></br>  <br></br> <hr></hr> <br></br>
            

            <h2>Coisas Do Meu quarto</h2>
            <s.Tabela>
                {
                    ['Peça', 'Preço', 'Qtd. Parcelas', 'Parcelas Pagas', 'Credor'].map((elemento,index ) => (
                        <s.CabecalhoTh>{elemento}</s.CabecalhoTh>
                    ))
                }

                {
                peca.map((l)=>(
                        <s.LinhaTr>
                             <s.ColunaTd1 class="decor">{l}</s.ColunaTd1> <s.ColunaTd>
                                 <s.Entradas></s.Entradas></s.ColunaTd> <s.ColunaTd>
                                <s.Entradas maxLength={2} ></s.Entradas></s.ColunaTd> <s.ColunaTd>
                                <s.Entradas maxLength={5}></s.Entradas></s.ColunaTd> <s.ColunaTd>
                                <s.Entradas maxLength={10}></s.Entradas>
                        </s.ColunaTd>
                        </s.LinhaTr>
                    ))
             }
             
               

            </s.Tabela>

             
        </s.ContainerGeral>
    </>
  );
}


