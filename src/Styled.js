import styled from 'styled-components';

export const ContainerGeral = styled.div`
    margin: 0;
  box-sizing: border-box;
  padding: 10px;
  

  @media (max-width: 450px) {
      
    }
  `;

export const Container = styled.div`
      
    @media (max-width: 450px) {
      display: none;
    }

  

`;

export const Form = styled.form`
  

  @media (max-width: 500px) {
    width: 100% ;
    display: inline-block ;
    justify-content:  center;
    align-items: center ;

  }
`;

export const Titulo = styled.h1`
  text-indent: 73px;
  @media (max-width: 500px) {
    width: 100% ;
    display: flex ;
    justify-content:  center;
    align-items: center ;

  }
`;

export const Etiqueta = styled.label`
  font-weight: bold ;
  padding: 10px ;
  @media (max-width: 500px ) {
    display: flex ;
    font-size: 20px ;
    justify-content:  center;
    align-items: center ;
  }
`;

export const Formulario = styled.form`
  margin: 20px ;
  @media (max-width: 500px) {
   
    display: flex ;
    justify-content:  center;
    align-items: center ;

  }
`;

export const Inovos = styled.input`
   width: 150px;
  height: 15px;
  font-size: 17px; 
  


  @media (max-width: 500px) {
    display: flex;
    align-items:center ;
      width: 250px;
       height: 30px;
       margin: 14px ;
       margin-left: 70px;
  }

  /* &.novos {
    width: 110px;
   height: auto;
   font-size: 17px; ;
    
  } */
`;

export const  Hr = styled.hr`
    width: 100%;

    @media (max-width: 450px) {
    display: none ;
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
  @media (max-width: 500px) {
    
    justify-content:  center;
    align-items: center ;
    border: none ;
  }

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
  @media (max-width: 500px) {
    
  }

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

export const Input = styled.input`
    width: 193px;
  height: 28px;
  justify-content: center ;
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
    @media (max-width: 500px) {
    display: inline ;
    width: 27% ;
    height: 50px;
    justify-content:  center;
    align-items: center ;
      margin-top: 10px ;
      margin-left: 65px ;
      
  }

    &:hover {
        background-color: rgba(3, 3, 247, 0.611); 
        cursor: pointer;
        padding: 1px;
    }
    
`;
export const ExcluirT = styled.button`
    width: 100px;
    height: 27px;
    background-color: rgba(3, 3, 247, 0.411); 
    border: none;
    border-radius: 10px;
    text-align: center;
    margin-left: 20px;
    @media (max-width: 500px) {
      display: flex ;
      height: 50px;
      align-items: center ;
      justify-content:  center;
      font-size: 18px;
      margin-top: 10px ;
      margin-right: 10px ;
      
    }
    
    &:hover {
        background-color: rgba(3, 3, 247, 0.611); 
        cursor: pointer;
        padding: 1px;
    }
`;
 
export const BotaoExcluir = styled.button`
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


