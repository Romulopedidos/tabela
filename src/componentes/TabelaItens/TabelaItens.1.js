import React,{useState} from "react";
import styled from "styled-components";

import * as s from './estiloTabela'



export default function TabelaItens() {
    const [peca , setPeca ] = useState(['Notbook', 'Monitor (29 Pol)' , 'Monitor/TV (32Pol)' , 'Mouse' , 'Teclado' , 
    'Cadeira Gamer' ,  'Google Nest' ,'Alexa' ,'Fita LED' ,'Lampada LED' , 'Movel', 'Cabo HDMI' ,
    'Suport Cel' ,
    ])
    return (
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
        <button>Salvar</button>
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
                                 <input></input></s.ColunaTd> <s.ColunaTd>
                                <input maxLength={2} ></input></s.ColunaTd> <s.ColunaTd>
                                <input maxLength={5}></input></s.ColunaTd> <s.ColunaTd>
                                <input maxLength={10}></input>
                        </s.ColunaTd>
                        </s.LinhaTr>
                    ))
             }
             
               

            </s.Tabela>

             
        </s.ContainerGeral>
    );
}
