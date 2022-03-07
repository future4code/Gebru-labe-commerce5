
import React from 'react';
import styled from 'styled-components';
import HeaderTwo from './Componentes/HeaderTwo';
import HeadertThree from './Componentes/HeaderThree';
import Filtros from './Componentes/Filtros';
import Carrinho from './Componentes/Carrinho';

import Footer from './Componentes/Footer';



const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color:  #E6E6E6;
`;


const ContainerHome = styled.div`
    max-width: 70vw;
    height: 135vh;
   
    background-color: #E6E6E6;
    margin-top: 30px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    column-gap: 10px;
    justify-content: center;

`;

const ImgCarros =styled.img`
    width: 324px;
    height: 370px;

`;

const DibButton = styled.div`
    
     /* width: 150px;
    height: 100px; */
     display: flex;
     justify-content: center;
     gap: 10px;
     align-items: center;
 `;
 const CarrinhoImg = styled.img`
     margin-top: 17px;
     width: 40px;
     height: 40px;

 `;

 const DivCard = styled.div`
     display: flex ;
     flex-direction: column;
      
    align-items: center;
     border: 1px solid black;
     width: 320px;
    height: 620px;

 `;

const DescriçãoCard = styled.div`
    /* background-color:#FE2E2E; */
    display: flex;
    flex-direction: column;
    width: 100%;
    height: 41%;
    align-items: center;
    font-size: 16px;
    font-weight: 700;


`;

const QuantidadeP = styled.p`
  font-size: 20px;

`
// const ListasCarrosVendas = [
    
//   {
//     id: 1,
//     foto:'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/02/1975-bmw-2002-turbo-a-venda-sao-paulo-sp-for-sale-the-garage-classicos-carros-antigos-2-1.jpg?w=1600&ssl=1',
//     modelo:"BMW 2002 Turbo",
//     ano: Number(1975) ,
//     preco: Number(189900),
//   },
//   {
//     id: 2,
//     foto:'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2020/10/1996-fusca-ouro-a-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-7.jpg?w=1600&ssl=1' ,
//     modelo:" Volkswagen Fusca Série Ouro" ,
//     ano: Number(1996) ,
//     preco: Number(74900) ,
//   },
//   {
//     id: 3,
//     foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/02/DSC_4040-scaled.jpg?resize=1536%2C1025&ssl=1' ,
//     modelo: "Santa Matilde" ,
//     ano: Number(1981),
//     preco: Number(79900),
//   },
//   {
//     id: 4,
//     foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/02/1966-chevy-ii-vermelho-a-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-52-scaled.jpg?resize=1536%2C1025&ssl=1' ,
//     modelo: "Chevrolet Chevy II SS" ,
//     ano: Number(1966) ,
//     preco: Number(338900),
//   },
//   {
//     id: 5,
//     foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/01/1973-MGB-Roadster-a-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-56-scaled.jpg?resize=1536%2C1025&ssl=1' ,
//     modelo:"MGB Roadster",
//     ano: Number(1973) ,
//     preco: Number(199900),
//   },
//   {
//     id: 6,
//     foto:'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/01/1966-mustang-36.jpg?resize=1536%2C1025&ssl=1',
//     modelo:'Ford Mustang Fastback GT 350',
//     ano: Number(1966) ,
//     preco: Number(589900) ,
//   },
//   {
//     id: 7,
//     foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/01/1977-ford-maverick-gt-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-45.jpg?resize=1536%2C1025&ssl=1' ,
//     modelo: "Maverick GT V8" ,
//     ano: Number(1977),
//     preco: Number(229900),
//   },
//   {
//     id: 8,
//     foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/01/1975-kombi-rat-look-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-35.jpg?resize=1536%2C1025&ssl=1' ,
//     modelo:'Volkswagen Kombi Rat Look' ,
//     ano:Number(1975) ,
//     preco: Number(64900) ,
//   }]

class App extends React.Component{

  state = {
    
    carros:[
    
  {
    id: 1,
    foto:'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/02/1975-bmw-2002-turbo-a-venda-sao-paulo-sp-for-sale-the-garage-classicos-carros-antigos-2-1.jpg?w=1600&ssl=1',
    modelo:"BMW 2002 Turbo",
    ano: Number(1975) ,
    preco: Number(189.900),
  },
  {
    id: 2,
    foto:'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2020/10/1996-fusca-ouro-a-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-7.jpg?w=1600&ssl=1' ,
    modelo:" Volkswagen Fusca Série Ouro" ,
    ano: Number(1996) ,
    preco: Number(74.900) ,
  },
  {
    id: 3,
    foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/02/DSC_4040-scaled.jpg?resize=1536%2C1025&ssl=1' ,
    modelo: "Santa Matilde" ,
    ano: Number(1981),
    preco: Number(79.900),
  },
  {
    id: 4,
    foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/02/1966-chevy-ii-vermelho-a-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-52-scaled.jpg?resize=1536%2C1025&ssl=1' ,
    modelo: "Chevrolet Chevy II SS" ,
    ano: Number(1966) ,
    preco: Number(338.900),
  },
  {
    id: 5,
    foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/01/1973-MGB-Roadster-a-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-56-scaled.jpg?resize=1536%2C1025&ssl=1' ,
    modelo:"MGB Roadster",
    ano: Number(1973) ,
    preco: Number(199.900),
  },
  {
    id: 6,
    foto:'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/01/1966-mustang-36.jpg?resize=1536%2C1025&ssl=1',
    modelo:'Ford Mustang Fastback GT 350',
    ano: Number(1966) ,
    preco: Number(589.900) ,
  },
  {
    id: 7,
    foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/01/1977-ford-maverick-gt-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-45.jpg?resize=1536%2C1025&ssl=1' ,
    modelo: "Maverick GT V8" ,
    ano: Number(1977),
    preco: Number(229.900),
  },
  {
    id: 8,
    foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/01/1975-kombi-rat-look-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-35.jpg?resize=1536%2C1025&ssl=1' ,
    modelo:'Volkswagen Kombi Rat Look' ,
    ano:Number(1975) ,
    preco: Number(64.900),
  }],

  buscarInput:"",
  valorMax:Number(''),
  valorMin:Number(''),
  ordem : Number(1),
  adicionar : false,
  quantidade: 0,
  carrinho:[ ],
  pagina: false

  };


  adicionarProduto = (produtoId)=>{
    this.setState({
      adicionar: false,
      quantidade: this.state.quantidade +1,
    });

    const prod = this.state.carros.filter((p) =>{
      return p.id === produtoId.id;
    });

    const novosProdutos = prod[0];

    const novoProdutoId = this.state.carrinho.findIndex((p) =>{
      return p.id === produtoId;

    })

    if(novoProdutoId=== -1){
      const novoProdutoAdicionado = [
        ... this.state.carrinho,novosProdutos
      ];
      return (novoProdutoAdicionado)
      this.setState({carrinho: novoProdutoAdicionado});
    }else{
      const carrinho2 = [...this.state.carrinho]
      carrinho2[novoProdutoId].quantidade++
      this.setState({carrinho: carrinho2})

    }
  };

  removerProduto = (id) =>{
    const ReProduto = this.state.carrinho.map((produto)=>{
      if(produto.id === id){
        return {...produto, quantidade:produto.quantidade-1
        };
      }
      return produto;
    })
    .filter((produto) => produto.quantidade >0);
    this.DescriçãoCard({
      carrinho: ReProduto
    });

  }

  renderizaCarrinho = () => {
    this.setState({ pagina: true });
  };

  renderizaPaginaFalse = () => {
    this.setState({ pagina: false });
  };

  

  onChangOrdem = (event) => {
    this.setState({ordem: event.target.value})
  }
  onchangValorMax = (event) =>{
    this.setState({valorMax: event.target.value});
  };

  onChangValorMin= (event) =>{
    this.setState({valorMin:event.target.value});
  };
  onChangInputBuscar = (event) => {

    this.setState({buscarInput: event.target.value});
  };

  render(){

    let componenteCarrinho;

    if(this.state.adicionar){
      componenteCarrinho = this.adicionarProduto
    }if (this.state.pagina){
        <Carrinho
        produtos = {this.state.carrinho}
        removerProduto = {this.removerProduto}
        renderizaPaginaFalse={this.renderizaPaginaFalse}
        
        />
    }

    const novaListaCars = this.state.carros
    .filter((modelos =>{
      return modelos.modelo.toLocaleLowerCase().includes(this.state.buscarInput.toLocaleLowerCase());

    }))
    .filter((preco) => {
      return this.state.valorMax ===Number('') || preco.preco >= this.state.valorMax;
    })
    .filter((preco) => {
      return this.state.valorMin ===Number('') || preco.preco <=this.state.valorMin;
    })
    .sort((cres,dec) => {
      return this.state.ordem * (cres.preco - dec.preco );
    })
    .map((car,i) =>{
      return(
        <DivCard key={i.id}>
         <ImgCarros src ={car.foto}/>
              <DescriçãoCard>
                <h3> {car.modelo}</h3>
                <p>Ano:{car.ano}</p>
                <p> R${car.preco}00</p>
                
               <DibButton>
                <button onClick={()=> this.adicionarProduto(car.id)}>Adicionar ao Carrinho</button>
                 </DibButton>
              </DescriçãoCard>
         </DivCard>
      )

    });


    return (

          <Container>

              {/* <Header/> */}
              <HeadertThree
                buscarInput = {this.state.buscarInput}
                onChangInputBuscar = {this.onChangInputBuscar}
                renderizaCarrinho={this.renderizaCarrinho}
                quantidade={this.state.quantidade}
              /> 
              <HeaderTwo/> 
              <Filtros
                valorMax ={this.state.valorMax}
                onchengValorMax = {this.onchangValorMax}
                valorMin = { this.state.valorMin}
                onChangValorMin= {this.onChangValorMin}
                ordem = {this.state.ordem}
                onChangOrdem = {this.onChangOrdem}
              />
                
            <ContainerHome>
              {novaListaCars}
            </ContainerHome>
              <Footer/>
          </Container>


    )
  };

};





export default App;
