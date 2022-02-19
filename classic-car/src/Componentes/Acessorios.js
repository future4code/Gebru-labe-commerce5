
import React from "react";
import styled from "styled-components";
import HeaderTwo from './Componentes/HeaderTwo';
import HeadertThree from './Componentes/HeaderThree';


const containerAcessorios = styled.div`
    height: 100vh;
    width: 100%;

`
export default  class Acessorios extends React.Component{

    render(){
        return(
            <containerAcessorios>
                <HeaderTwo/>
                <HeadertThree/>
                    <h1>Olá</h1>

            </containerAcessorios>

        );
    };
    
};



