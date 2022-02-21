import React from "react";
import styled from "styled-components";


const ContainerCarrinho = styled.div`
    width: 100%;
    height: 120vh;

`



export default class Carrinho extends React.Component {

    pegarValorTotal =() =>{
        let valorTotal =0;
        for (let produtos of this.props.produtos){
            valorTotal +=produtos.preco * produtos.quantidade;
        }
        return valorTotal
    }

    render(){

        return(

                <div>
                    <div>
                        <button onClick={this.props.renderizaPaginaFalse} >Continuar comprando</button>
                    </div>

                    <div>
                        {this.props.produtos.map((produto1) =>{
                            return (
                                <div>
                                    <img src={produto1.foto}/>
                                    <div>
                                        <h3> {produto1.modelo}</h3>
                                        <p>Ano:{produto1.ano}</p>
                                        <p> R${produto1.preco},00</p>
                                        <p> {produto1.quantidade}</p>
                                        <button onClick={() => this.props.removerProduto(produto1.id)}>
                                        Remover
                                        </button>
                                    </div>
                                    <div>
                                    <strong>Valor total: R${this.pegarValorTotal()},00</strong>
                                     </div>        
                                </div>

                            )


                        })}
                    </div>




                </div>

        )

    }

}