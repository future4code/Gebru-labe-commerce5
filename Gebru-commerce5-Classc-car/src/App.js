
import React from 'react';
import styled from 'styled-components';
import Header from './Componentes/Header';
import HeaderTwo from './Componentes/HeaderTwo';
import HeadertThree from './Componentes/HeaderThree';
import Footer from './Componentes/Footer';

// teste

const Container = styled.div`
  
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;
  background-color:  #E6E6E6;

`
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

`

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
     width: 24%;
    height: 65vh;

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


const Carros = [
  {
    id: 1,
    foto:'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/02/1975-bmw-2002-turbo-a-venda-sao-paulo-sp-for-sale-the-garage-classicos-carros-antigos-2-1.jpg?w=1600&ssl=1',
    modelo:"BMW 2002 Turbo" ,
    ano: Number(1975) ,
    preco: Number(189900),
  },
  {
    id: 2,
    foto:'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2020/10/1996-fusca-ouro-a-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-7.jpg?w=1600&ssl=1' ,
    modelo:" Volkswagen Fusca Série Ouro" ,
    ano: Number(1996) ,
    preco: Number(74900) ,
  },
  {
    id: 3,
    foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/02/DSC_4040-scaled.jpg?resize=1536%2C1025&ssl=1' ,
    modelo: "Santa Matilde" ,
    ano: Number(1981),
    preco: Number(79900),
  },
  {
    id: 4,
    foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/02/1966-chevy-ii-vermelho-a-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-52-scaled.jpg?resize=1536%2C1025&ssl=1' ,
    modelo: "Chevrolet Chevy II SS" ,
    ano: Number(1966) ,
    preco: Number(338900),
  },
  {
    id: 5,
    foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/01/1973-MGB-Roadster-a-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-56-scaled.jpg?resize=1536%2C1025&ssl=1' ,
    modelo:"MGB Roadster",
    ano: Number(1973) ,
    preco: Number(199900),
  },
  {
    id: 6,
    foto:'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/01/1966-mustang-36.jpg?resize=1536%2C1025&ssl=1',
    modelo:'Ford Mustang Fastback GT 350',
    ano: Number(1966) ,
    preco: Number(589900) ,
  },
  {
    id: 7,
    foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/01/1977-ford-maverick-gt-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-45.jpg?resize=1536%2C1025&ssl=1' ,
    modelo: "Maverick GT V8" ,
    ano: Number(1977),
    preco: Number(229900),
  },
  {
    id: 8,
    foto: 'https://i0.wp.com/thegarage.com.br/wp-content/uploads/2022/01/1975-kombi-rat-look-venda-sao-paulo-sp-for-sale-the-garage-classicos-a-carros-antigos-35.jpg?resize=1536%2C1025&ssl=1' ,
    modelo:'Volkswagen Kombi Rat Look' ,
    ano:Number(1975) ,
    preco: Number(64900) ,
  }];

 const ListaDeCarros = Carros.map(

  (car , i ) => {

    return(
      <DivCard >
          <ImgCarros src ={car.foto}/>
          <DescriçãoCard>
            <h3> {car.modelo}</h3>
            <p>Ano: {car.ano}</p>
            <p> R${car.preco},00</p>

            <DibButton>
                 <button>-</button>
                <CarrinhoImg alt="Carrinho" src="https://cdn-icons-png.flaticon.com/512/126/126510.png"/>
                 <button >+</button> 
             </DibButton>
        </DescriçãoCard>
      </DivCard>
    
    )
  }

     
 );


class App extends React.Component{

  

  render(){

    return (

          <Container>
              <Header/>
              <HeaderTwo/> 
              <HeadertThree/> 
            <ContainerHome>
              
              {ListaDeCarros}
              
            </ContainerHome>
              <Footer/>


          </Container>


    )
  };

};





export default App;