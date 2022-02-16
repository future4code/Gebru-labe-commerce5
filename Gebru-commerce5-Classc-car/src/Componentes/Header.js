import React from 'react';
import styled from 'styled-components';

const ContainerHeader= styled.div`
    background-color: #2E2E2E;
    display: flex;
    justify-content:space-around;
    align-items: center;
    text-decoration: none;
    width: 100%;
    height: 3vh;
`;

const HeP = styled.p`
    font-size: 15px;
    color: white;
`;

const HDiv =styled.div`
width: 250px;
display: flex;
justify-content:center;
align-items: center;
gap: 8px;

`;




const HImgfacebook = styled.img`
    width: 20px;
    height: 20px;
`;

const HImgTwitter =styled.img`
    width: 20px;
    height: 20px;   

`;



export default class Header extends React.Component {

    render(){

        return(
           
            <ContainerHeader>
                <HeP> Classic car desde de 2002 realizando sonhos </HeP> 
                 <HDiv>
                    
                   < HImgfacebook alt='Facebook' src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSIef9bkfj1QxMFrqoWDvIB4agftbdZSF41bVCwDkW1Bo1huE8L71JlmpQz5-N1FHRewY&usqp=CAU'/>
                   <HImgTwitter alt='twitter' src='https://w7.pngwing.com/pngs/746/753/png-transparent-social-media-united-states-twitter-instagram-application-programming-interface-social-media-united-states-social-media-bird.png'/>
                </HDiv>   

                
            </ContainerHeader>
            

        );
    };

};