import React from "react";
import styled from 'styled-components';

import * as s from './estyloCaputra.js'

export default function captura (){

    return(
        <>
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
        </>
    )
}