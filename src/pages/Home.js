import styled from 'styled-components'
import React from 'react'
import Navbar from '../component/Navbar'
import FixedMenu from '../component/FixedMenu'
import AboutUs from '../sections/AboutUs'
import Experience from '../sections/Experience'
import Hero from '../sections/Hero'
import Offer from '../sections/Offer'
import RecentWork from '../sections/RecentWork'
// import Testimonial from '../sections/Testimonial'
import Contact from '../sections/Contact'
import Footer from '../component/Footer'
import { useSelector, useDispatch } from 'react-redux'
import Loader from '../component/Loader'

const Home = ({theme, setTheme}) => {
  const dispatch = useDispatch()

  return (
    <Main>
        <Container>
          < FixedMenu />
            <Navbar theme={theme} setTheme={setTheme}/>
            <Hero />
            < AboutUs />
            <Experience />
            <Offer />
            <RecentWork />
            {/* < Testimonial /> */}
            < Contact />
            <Footer />
        </Container>
    </Main>
  )
}

export default Home

const Main = styled.div`
height: auto;
  background-image: ${props => props.theme.backgroundColor === '#f9f9f9' ?` url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='219' height='219' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23CFE5E2' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23C4D9D5'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E")` : `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1600 900'%3E%3Cdefs%3E%3ClinearGradient id='a' x1='0' x2='0' y1='1' y2='0'%3E%3Cstop offset='0' stop-color='%230FF'/%3E%3Cstop offset='1' stop-color='%23CF6'/%3E%3C/linearGradient%3E%3ClinearGradient id='b' x1='0' x2='0' y1='0' y2='1'%3E%3Cstop offset='0' stop-color='%23F00'/%3E%3Cstop offset='1' stop-color='%23FC0'/%3E%3C/linearGradient%3E%3C/defs%3E%3Cg fill='%23FFF' fill-opacity='0' stroke-miterlimit='10'%3E%3Cg stroke='url(%23a)' stroke-width='2'%3E%3Cpath transform='translate(-106.05 -0.40000000000000213) rotate(-6.850000000000001 1409 581) scale(0.9053239999999999)' d='M1409 581 1450.35 511 1490 581z'/%3E%3Ccircle stroke-width='4' transform='translate(-153 87) rotate(4.1 800 450) scale(0.999516)' cx='500' cy='100' r='40'/%3E%3Cpath transform='translate(7.900000000000002 -63) rotate(19 401 736) scale(0.999516)' d='M400.86 735.5h-83.73c0-23.12 18.74-41.87 41.87-41.87S400.86 712.38 400.86 735.5z'/%3E%3C/g%3E%3Cg stroke='url(%23b)' stroke-width='4'%3E%3Cpath transform='translate(522 9.2) rotate(-2.3 150 345) scale(0.999108)' d='M149.8 345.2 118.4 389.8 149.8 434.4 181.2 389.8z'/%3E%3Crect stroke-width='8' transform='translate(-106 -239.5) rotate(-3.5999999999999943 1089 759)' x='1039' y='709' width='100' height='100'/%3E%3Cpath transform='translate(-275.6 68.4) rotate(-0.5999999999999979 1400 132) scale(0.78)' d='M1426.8 132.4 1405.7 168.8 1363.7 168.8 1342.7 132.4 1363.7 96 1405.7 96z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`};

width: 100%;
`

const Container = styled.div`
height: auto;
width: 100%;

color: ${props => props.theme.textColor};
`