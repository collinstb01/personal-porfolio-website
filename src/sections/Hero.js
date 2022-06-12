import React from "react";
import styled from "styled-components";
import { BsMouse } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import { SiFacebook } from "react-icons/si";
import { BsGithub } from "react-icons/bs";
import img from "../i/jden.jpg";
import { Button } from "@material-ui/core";
import { motion } from "framer-motion";
import file from "../i/Resume-Collins-Felix.pdf";
import { Link, animateScroll as scroll } from "react-scroll";
import TypeWriterEffect from "react-typewriter-effect";
const Hero = () => {
  return (
    <Main>
      <div className="top">
        <motion.div
          initial={{ opacity: 0 }}
          transition={{ duration: 3 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="top-text"
        >
          <h1>Hi i'm</h1>
          <h1>Jayden Collins</h1>
          <TypeWriterEffect
            textStyle={{
              fontFamily: "Red Hat Display",
              fontWeight: 500,
              fontSize: "1.3em",
              textAlign: "center",
            }}
            startDelay={2000}
            cursorColor="#3F3D56"
            multiText={[
              "A Software Engineer",
              "A Web Developer",
              "A Full Stack Developer",
            ]}
            loop={true}
            nextTextDelay={3000}
            typeSpeed={50}
          />
        </motion.div>
        <div className="top-button">
          <Button medium variant="outlined" className="btn1"
          >
            <a href={file} download style={{color: "darkgray"}} >
              Download Cv
            </a>
          </Button>
          <Button medium color="primary">
            <Link
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              ABOUT ME
            </Link>
          </Button>
        </div>
      </div>
      <div className="bottom">
        <div className="left">
          <BsLinkedin className="left-icon" />
          <SiFacebook className="left-icon" />
          <BsGithub className="left-icon" />
          <div className="left-line"></div>
        </div>
        <div className="center">
          <img src={img} />
        </div>
        <div className="right">
          <BsMouse />
        </div>
      </div>
    </Main>
  );
};

export default Hero;

const Main = styled.div`
  width: 100%;
  height: auto;
  a {
    text-decoration: none;
  }
  .top {
    padding: 40px;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: ${props => props.theme.bC === 'white' ? "#3F3D56" : 'whitesmoke'};
    text-align: center;

    .top-bottom {
      .btn1 {
        border:  ${props => props.theme.bC === 'white' ? "" : "white"};
      }
    }
  }

  .top-text h1:nth-child(n + 1) {
    margin-block: 10px;
  }
  .top-text h1:nth-child(2) {
    font-size: 30px;
    font-family: verdana;
  }
  .top-text h1:nth-child(3) {
    font-size: 12px;
    font-family: verdana;
    letter-spacing: 3px;
  }
  .top-text h1:nth-child(1) {
    font-size: 12px;
    font-family: Arial;
  }
  .bottom {
    display: flex;
    justify-content: space-around;
    align-items: flex-end;

    .center {
      width: 300px;
      height: auto;
      overflow: hidden;

      @media (max-width: 400px) {
        width: 200px;
      }
      img {
        width: 100%;
        height: auto;
        border-top-left-radius: 45%;
        border-top-right-radius: 45%;
      }
    }

    .left {
      display: flex;
      flex-direction: column;
      align-items: center;

      .left-line {
        width: 3px;
        height: 5vh;
        background-color: ${props => props.theme.bC === 'white' ? "black" : "white"};
      }
      .left-icon {
        margin-block: 5px;
      }
    }
  }
`;
