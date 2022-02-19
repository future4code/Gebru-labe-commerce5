import React from "react";
import styled from "styled-components";

const ContainerH2 = styled.div`
    background-color: #E6E6E6;
    
    width: 100%;
    height: 25vh;
    display: grid;
    justify-content: center;
    align-items: center;

`;
const HLogo = styled.img`

    width: 350px;
    height: 180px;
`;
const Hp = styled.p`
    font-size: 25px;
    font-weight: 800;
    color: #585858;
    text-align: center;
   
`;
export default class HeaderTwo extends React.Component{

    
    render(){

       return(
           <ContainerH2>           
                <HLogo alt='Logo-da-Loja' src='https://classiccarbr.com.br/wp-content/uploads/2020/02/logo-classic-car-preta.png'/>      
           </ContainerH2>
          
       );

    };
};