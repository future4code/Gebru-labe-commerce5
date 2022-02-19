import React from "react";
import styled from "styled-components";
import App from "../App";

const ContainerHT = styled.div`
    width: 100%;
    height: 6vh;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    
    background-color: #FE2E2E;
    align-items: center;

`;
const NavDiv = styled.nav`
    width: 40vw;
    display: flex;
    justify-content: space-evenly;
     
`;

const NavA = styled.a`
    text-decoration: none;
    color: #1C1C1C;
    font-weight: 700;
    font-size: 19px;
    &:hover{
        color: #E6E6E6 ;
    }
`;
const NavA1 = styled.a`
    text-decoration: none;
    color: #1C1C1C;
    font-weight: 700;
    font-size: 19px;
    &:hover{
        color: #E6E6E6 ;
    }

`;
const NavA2 = styled.a`
    text-decoration: none;
    color: #1C1C1C;
    font-weight: 700;
    font-size: 19px;
    &:hover{
        color: #E6E6E6 ;
    }
`;

const HDivInput = styled.div`
    width: 300px;
    height: 40px;
    background-color: white;
    display: flex;
    flex-direction: row;
    border: 1px solid black;
    align-items: center; 
    
`;

const HInput=styled.input`
    
    width: 100%;
    height: 90%;
    flex: 1;
    border: none;
    
   
`;

const ButtoonBuscar = styled.button`
     border: none;
     & :hover {
        background-color:#D8D8D8;
    };
    

`
const ImgButtonBuscar = styled.img`
    
    width: 27px;
    height: 32px;
    
`;
const ImgButton =styled.img`

    width: 35px;
    height: 40px;
`
const ButtonCarrinho = styled.button`
    background-color: #FE2E2E;
    border: none;
    margin-right: 100px;

    &:hover{
        background-color:  #E6E6E6 ;  
    }
`

export default class HeadertThree extends React.Component{


    

    render() {

         

            
        return (

            <ContainerHT>
                <NavDiv>
                    <NavA href="">Home</NavA>
                    <NavA1  NavA1 href="">Marcas</NavA1>
                    <NavA2 href="">Acessórios</NavA2>
                    
                </NavDiv>
                <HDivInput>
                     <HInput

                      type="text" 
                      
                      value={this.props.buscarInput}
                      onChange={this.props.onChangInputBuscar}
                      
                      
                      />  
                        <ButtoonBuscar>
                            <ImgButtonBuscar alt='buscar' src ='https://www.connexion.com.br/wp-content/uploads/2018/10/698627-icon-111-search-512.png' />
                        </ButtoonBuscar>
                   
                </HDivInput>

                <ButtonCarrinho ><ImgButton alt="carrinho" src="https://cdn-icons-png.flaticon.com/512/126/126510.png" /></ButtonCarrinho>

            </ContainerHT>

        );
    };



};