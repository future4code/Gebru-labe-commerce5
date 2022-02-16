import React from "react";
import styled from "styled-components";

const ContainerFooter = styled.div`
    background-color: #2E2E2E;
    margin-top: 30px;
    width:100%;
    height: 60vh;  
    
`

const SectionFooter = styled.section`
   background-color: white;

`
const ImgFooter = styled.img`
    
    width: 100%;
    height: 50vh;
    
`


export default class Footer extends React.Component{

    render(){

        return(
            <ContainerFooter>
                
                <SectionFooter>
                    
                </SectionFooter>

            </ContainerFooter>

        )
    }




};