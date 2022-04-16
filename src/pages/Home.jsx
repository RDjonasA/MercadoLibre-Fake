import React from 'react'
import CarrouselSection from '../components/Carrousel'
import Footer from '../components/Footer'
import Ofertas from '../components/Ofertas'
import PaymentMethods from '../components/PaymentMethods'
import { TabTitle } from '../utils/GeneralFuntions'

const Home = () => {
  TabTitle('Mercado Libre | Joriel')
  
  return (
    <>
      <CarrouselSection/>
      <PaymentMethods/>
      <Ofertas/>
      <Footer/>
    </>
  )
}

export default Home