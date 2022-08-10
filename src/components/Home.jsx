import React from 'react'
import styled from 'styled-components';
import Section from './Section';
import imgs from '../images/model-s.jpg'
import imgy from '../images/model-y.jpg'
import imgx from '../images/model-x.jpg'
import img3 from '../images/model-3.jpg'
import imgpanel from '../images/solar-panel.jpg'
import imgroof from '../images/solar-roof.jpg'
import imgaccesories from '../images/accessories.jpg'


const Home = () => {
  return (
    <Container>
        <Section
           title="Model S"
           description="Order Online for Tourches Delivery"
           backgroundImg={imgs}
           leftBtnText="Custom order"
           rightBtnText="Existing inventory"
        />
        <Section
           title="Model Y"
           description="Order Online for Tourches Delivery"
           backgroundImg={imgy}
           leftBtnText="Custom order"
           rightBtnText="Existing inventory"
        />
        <Section
           title="Model 3"
           description="Order Online for Tourches Delivery"
           backgroundImg={img3}
           leftBtnText="Custom order"
           rightBtnText="Existing inventory"
        />
        <Section
           title="Model X"
           description="Order Online for Tourches Delivery"
           backgroundImg={imgx}
           leftBtnText="Custom order"
           rightBtnText="Existing inventory"
        />
        <Section
           title="Lowest cost Solar Panels In Kenya"
           description="Money Back Guaranteed"
           backgroundImg={imgpanel}
           leftBtnText="Custom order"
           rightBtnText="Existing inventory"
        />
        <Section
           title="Solar For New Roofs"
           description="Money Back Guaranteed"
           backgroundImg={imgroof}
           leftBtnText="Custom order"
           rightBtnText="Existing inventory"
        />
         <Section
           title="Accessories"
           description=""
           backgroundImg={imgaccesories}
           leftBtnText="Shop Now"
        />

    </Container> 
  )
}

export default Home

const Container=styled.div`
    height:80vh;
     
`