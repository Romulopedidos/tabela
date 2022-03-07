import styled from 'styled-components';

export const ContainerGeral = styled.div`
    margin: 0;
  padding: 0;
  box-sizing: border-box;
`;

export const Titulo = styled.h1`
  text-indent: 73px;
`;

export const Etiqueta = styled.label`
  padding: 10px ;
`;

export const Formulario = styled.form`
  margin: 20px ;
`;

export const Inovos = styled.input`
  /* width: 110px;
  height: auto;
  font-size: 17px; */

  &.novos {
    width: 110px;
   height: auto;
   font-size: 17px; ;
    
  }
`;

  export const Tabela = styled.table`
    width: 200px;
  border: black solid 1px;
  table-layout: fixed;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0px , 0px;
  font-size: 21px;

`;

export const LinhaTr = styled.tr`
    width: 200px;
  border: black solid 1px;
  table-layout: fixed;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0px , 0px;
  font-size: 21px;

`;
export const ColunaTd = styled.td`
    width: 200px;
  border: black solid 1px;
  table-layout: fixed;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0px , 0px;
  font-size: 21px;
 

`;
export const ColunaTd1 = styled.td`
    width: 200px;
  border: black solid 1px;
  table-layout: fixed;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0px , 0px;
  font-size: 21px;
  background-color: rgba(3, 3, 247, 0.411); 
  color: black; 
  font-weight: bold ;

`;
export const CabecalhoTh = styled.th`
    width: 200px;
  border: black solid 1px;
  table-layout: fixed;
  text-align: center;
  border-collapse: collapse;
  border-spacing: 0px , 0px;
  font-size: 21px;
  background-color: rgba(3, 3, 247, 0.411); 
`;

export const Entradas = styled.input`
    width: 193px;
  height: 28px;
  text-align: center;
  text-decoration: none;
  font-size: 20px;
  font-weight: bold;
`;

export const Gravar = styled.button`
    width: 100px;
    height: 27px;
    background-color: rgba(3, 3, 247, 0.411); 
    border: none;
    border-radius: 10px;
    text-align: center;
    margin-left: 20px;
    &:hover {
        background-color: rgba(3, 3, 247, 0.611); 
        cursor: pointer;
    }
`;

