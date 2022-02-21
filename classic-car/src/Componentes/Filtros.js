import React from "react";
import styled from "styled-components";


const ContainerFiltro = styled.div`
    display: flex;
    flex-direction: row;
    height: 6vh;
    width: 100%;
    background-color: #FE2E2E;
    justify-content: space-evenly;
    align-items: center;

`
const DivInputMin = styled.div`

display: flex;
align-items: center;
gap: 8px;


p{
    font-size: 18px;
    font-weight: 700;
}
input{
    height: 3vh;
    text-decoration: none;
}

&:hover{
        color: #E6E6E6 ;
    }

`

const DivInputMax = styled.div`

display: flex;
align-items: center;
gap: 8px;

p{
    font-size: 18px;
    font-weight: 700;
}
input{
    height: 3vh;
    text-decoration: none;
}

&:hover{
        color: #E6E6E6 ;
    }

`

const DivOrdenação = styled.label`

display: flex;
align-items: center;
gap: 8px;

p{
    font-size: 18px;
    font-weight: 700;
}
select{
    height: 4vh;
    width: 8vw;
    text-decoration: none;
}

&:hover{
        color: #E6E6E6 ;
    }

`


export default class Filtros extends React.Component{

   

    render(){
        
        return (
            <ContainerFiltro>
                <DivInputMin>
                    <p>Valor Minimo</p>
                    <input
                    
                    type='number'
                    value = {this.props.valorMin}
                    onChange={this.props.onChangValorMin}
                    />
                </DivInputMin>    
                <DivInputMax>
                    <p>Valor Máximo</p>
                    <input
                    
                    type='number'
                    value = {this.props.valorMax}
                    onChange = {this.props.onChangValorMax}

                    />

                </DivInputMax>


                <DivOrdenação >
                    <p>Ordenação :</p>
                    <select value={this.props.ordem} onChange={this.props.onChangOrdem} >
                        <option  value={1}> Crescente</option>
                        <option value={-1}> Decrescente</option>
                    </select>

                </DivOrdenação>
                    


            </ContainerFiltro>
        );
    };

};