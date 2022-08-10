import React from 'react'
import styled from 'styled-components';
import downarrow from '../images/down-arrow.svg'
import img from '../images/model-s.jpg'
import Fade from 'react-reveal/Fade';

const Section = ({title,description,backgroundImg,leftBtnText,rightBtnText}) => {
  return (
    <Wrap bgImage={backgroundImg}>\
        <Fade bottom>
            <ItemText>
                <h1>{title}</h1>
                <p>{description}</p>
            </ItemText>
        </Fade>
        <Buttons>
            <Fade bottom>
            <ButtonGroup>
                <LeftButton>
                    {leftBtnText}
                </LeftButton>
                {
                    rightBtnText && <RightButton>
                    {rightBtnText}
                </RightButton>
                }
            </ButtonGroup>
           </Fade> 
            <DownArrow src={downarrow}/>
        </Buttons>
    </Wrap>
  )
}

export default Section

const Wrap=styled.div`
     width: 100%;
     height:100vh;
     background-size:cover;
     background-position:center;
     background-repeat:no-repeat;
    // background-image:url(${img});
     background-image:${props=>`url(${props.bgImage})`};
     display: flex;
     flex-direction:column;
     justify-content:space-between;
`;
const ItemText=styled.div`
    padding-top:15vh;
    text-align:center;
`;
const Buttons=styled.div`

`;

const ButtonGroup=styled.div`
    display:flex;   
    justify-content:center;
    align-items:center;
    gap:2rem;
    margin-bottom:30px;

    @media (max-width: 768px){
        flex-direction:column; 
    }
`;
const LeftButton=styled.div`
    background-color:rgba(23,26,32,0.8);
    height:40px;
    width:256px;
    color:white;  
    display:flex;   
    justify-content:center;
    align-items:center; 
    border-radius:100px;
    opacity:0.85;
    text-transform:uppercase;
    font-size:12px;
    cursor:pointer;
`;
//allows us to inherit all the left button properties
const RightButton=styled(LeftButton)`
    background-color:white;
    opacity:0.7;
    color:rgba(23,26,32,0.8);  

`;
const DownArrow=styled.img`
    margin-top:20px;
    height:40px;
    cursor:pointer;
    animation: animateDown infinite 1.5s;
`;