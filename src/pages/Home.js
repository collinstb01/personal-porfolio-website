import styled from 'styled-components'
import React from 'react'
import Navbar from '../component/Navbar'
import FixedMenu from '../component/FixedMenu'

import AboutUs from '../sections/AboutUs'
import Experience from '../sections/Experience'
import Hero from '../sections/Hero'
import Offer from '../sections/Offer'
import RecentWork from '../sections/RecentWork'
import Testimonial from '../sections/Testimonial'
import Contact from '../sections/Contact'
import Footer from '../component/Footer'


const Home = () => {
  return (
    <Main>
        <Container>
          < FixedMenu />
            <Navbar />
            <Hero />
            < AboutUs />
            <Experience />
            <Offer />
            <RecentWork />
            < Testimonial />
            < Contact />
            <Footer />
        </Container>
    </Main>
  )
}

export default Home

const Main = styled.div`
height: auto;
width: 100%;
`

const Container = styled.div`
height: auto;
width: 100%;
`