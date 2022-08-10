import React,{useState,useEffect} from 'react'
import styled from 'styled-components'
import logo from '../images/logo.svg'
import menu from '../images/menu.png'
import {selectCars} from '../features/car/carSlice'
import {useSelector} from 'react-redux'
const Header = () => {
  const [progressbar, setProgressbar]=useState(0);
  const onScroll=()=>{
    const windowScroll=document.documentElement.scrollTop
    const height=document.documentElement.scrollHeight-document.documentElement.clientHeight;

    const scrolled=(windowScroll/height)*100;
    setProgressbar(scrolled)
  } 
  useEffect(()=>{
    window.addEventListener('scroll',onScroll);

    return ()=>window.removeEventListener('scroll',onScroll)
  },[])

  //code to hise the burgermenu 
  const [burgerOpen,setBurgerOpen]=useState(false)

  const handleOpenEvent=()=>{
    setBurgerOpen(true)
  }
  const handleCloseEvent=()=>{
    setBurgerOpen(false)
  }
  //react redux code
  const cars=useSelector(selectCars)
  console.log(cars)
  return (
    <Container>
      <span progressBar={progressbar}></span>
      <a href="">
        <img src={logo} alt="" />
      </a>
      <Menu>
        {cars && cars.map((car,index)=>(
              <a href="#" key={index}>{car}</a>

        ))}

      </Menu> 
      <RightMenu>
        <a href="#">Shop</a>
        <a href="#">Tesla Account</a>
        <Menubar src={menu} alt=""  onClick={handleOpenEvent}/>
      </RightMenu>
      <BurgerNav show={burgerOpen}>
        <CloseWrapper>
          <img src={menu} alt="" onClick={handleCloseEvent} />
        </CloseWrapper>
        {cars && cars.map((car,index)=>(
          <li key={index}><a href="">{car}</a></li>

        ))}
        <li><a href="">Exixting Inventory</a></li>
        <li><a href="">used Inventory</a></li>
        <li><a href="">Trade-in </a></li>
        <li><a href="">Cybertruck </a></li>
        <li><a href="">Roadaster </a></li>

      </BurgerNav>
    </Container>
  )
}

export default Header

const Container=styled.div`
  min-height:60px;
  position:fixed;
  display:flex;
  align-items:center;
  justify-content:space-between;
  padding:0 20px;
  top: 0;
  left:0;
  right:0;
  z-index: 16;
  span{
    position:absolute;
    width:${({progressBar})=>progressBar?'progressbar':0}%;
    height: 3px;
    background:blue;
    left:0;
    bottom:0;
  }
`
const progressBar=styled.div`
  position:absolute;
  width: 50rem;
  height:40rem;
  background-color:red;
  bottom:0;
  left:0;
  z-index: 1;
`
const Menu=styled.div`
   display:flex;
   align-items:center;
   justify-content:center;
   flex:1;

   a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
   }
   @media (max-width:768px) {
    display:none;
   }
`;
const RightMenu=styled.div`
     a{
    font-weight:600;
    text-transform:uppercase;
    padding:0 10px;
    flex-wrap:nowrap;
   }
` 
const Menubar=styled.img`
  width:1.5rem;
  aspect-ratio:1/1;
  cursor:pointer;
`
const BurgerNav=styled.div`
   position:fixed;
   top:0;
   bottom:0;
   right: 0;
   padding:10px;
   background:white;
   width:300px;
   z-index:100;
   list-style:none;
   display:flex;
   flex-direction:column;
   text-align:start;
   transform: ${({show})=>show?'translateX(0)':'translateX(100%)'};
   transition:transform .4s ease-in-out;

   li{
    padding:15px 0;
    border-bottom:1px solid rgba(0,0,0,.2);
    a{
      font-weight:600;
    }
   }
`;
const CloseWrapper=styled.div`
  width:100%;
  display:flex;
  justify-content:flex-end;
  img{
    width:1.5rem;
    aspect-ratio:1/1;
    cursor: pointer;

   }

`
 