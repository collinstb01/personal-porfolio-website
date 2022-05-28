import react, { useEffect, useState } from "react";
import styled from "styled-components";
import { BsHouse } from "react-icons/bs";
import { BsFillPersonFill } from "react-icons/bs";
import { AiFillProject } from "react-icons/ai";
import { MdContactPhone } from "react-icons/md";
import { Link, animateScroll as scroll } from "react-scroll";
import {motion} from "framer-motion"

const FixedMenu = () => {
    const [show, setShow] = useState(false);
    const [lastYpos, setLastYpos] = useState(0);

    useEffect(() => {
      function handleScroll() {
          const yPos = window.scrollY;
          const isScrollingUp = yPos < lastYpos;

          setShow(isScrollingUp)
          setLastYpos(yPos)
      }
      window.addEventListener("scroll", handleScroll, false)

      return () => {
      window.removeEventListener("scroll", handleScroll, false)
      }
    }, [lastYpos])
    

    
  return (
   <motion.div animate={{opacity: show ? 1 : 0 }} initial={{opacity: 0}}>
        <Menu>
      <Link
        activeClass="active"
        to="home"
        spy={true}
        smooth={true}
        duration={1000}
      >
        {" "}
        <BsHouse className="icon" />
      </Link>
      <Link
        activeClass="active"
        to="about"
        spy={true}
        smooth={true}
        duration={1000}
      >
        {" "}
        <BsFillPersonFill className="icon" />
      </Link>
      <Link
        activeClass="active"
        to="work"
        spy={true}
        smooth={true}
        duration={1000}
      >
        {" "}
        <AiFillProject className="icon" />
      </Link>
      <Link
        activeClass="active"
        to="contact"
        spy={true}
        smooth={true}
        duration={1000}
      >
        {" "}
        <MdContactPhone className="icon" />
      </Link>
    </Menu>
   </motion.div>
  );
};

export default FixedMenu;

const Menu = styled.div`
  position: absolute;
  bottom: 3%;
  left: 40%;
  position: fixed;
  background-color: #0030ff1f;
  box-shadow: rgb(204, 219, 232) 3px 3px 6px 0px inset, rgba(255, 255, 255, 0.5) -3px -3px 6px 1px inset;
  border-top-left-radius: 20px;
  border-bottom-right-radius: 20px;
  color: white;
  text-shadow: 1px 1px 1px black;
  z-index: 3332;
  width: 270px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  @media (max-width: 500px){
      width: 50%;
      left: 80px;
  }
  a {
    text-decoration: none;
    color: white;
  }
  .icon {
    transform: scale(1.3);
    cursor: pointer;
    background: #0000009e;
    border-radius: 50%;
  }
  .icon:hover {
      transform: scale(1.5);
  }
`;
