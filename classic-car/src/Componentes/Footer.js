import React from "react";
import styled from "styled-components";

const ContainerF = styled.div`
    width: 100%;
    height: 30vh;
    background-color:  #1C1C1C;;
    display: flex;
    justify-content: space-evenly;
    align-items: center;

`
const Logo = styled.img`
    width: 20vw;
    height: 15vh;

`
const Conteudo = styled.div`
    display: flex;
    flex-wrap: wrap;
    width: 200px;
    font-size: 15px;
    color: #E6E6E6 ;
    font-weight: 500;

`


export default class Footer extends React.Component {

    render(){

        return(

            <ContainerF>
                <Logo  src="https://classiccarbr.com.br/wp-content/uploads/2020/02/logo-classic-car-1.png"/>
                
                    <Conteudo>
                        <p>A Classic Car é especializada em compra, venda, troca, consignação e restauração de veículos antigos.Tendo uma ampla variedade em estoque. Aqui no nosso site você poderá encontrar todas as informações sobre todos os carros. Venha realizar seu sonho conosco.</p>
                    </Conteudo>

            </ContainerF>

        )



        
    }

}