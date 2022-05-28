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
              color: "#3F3D56",
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
          <Button medium variant="outlined"
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
  background-color: #ffffff;
  background-color: #f9f9f9;
  background-color: #f9f9f9;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='219' height='219' viewBox='0 0 800 800'%3E%3Cg fill='none' stroke='%23CFE5E2' stroke-width='1'%3E%3Cpath d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63'/%3E%3Cpath d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764'/%3E%3Cpath d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880'/%3E%3Cpath d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382'/%3E%3Cpath d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269'/%3E%3C/g%3E%3Cg fill='%23C4D9D5'%3E%3Ccircle cx='769' cy='229' r='5'/%3E%3Ccircle cx='539' cy='269' r='5'/%3E%3Ccircle cx='603' cy='493' r='5'/%3E%3Ccircle cx='731' cy='737' r='5'/%3E%3Ccircle cx='520' cy='660' r='5'/%3E%3Ccircle cx='309' cy='538' r='5'/%3E%3Ccircle cx='295' cy='764' r='5'/%3E%3Ccircle cx='40' cy='599' r='5'/%3E%3Ccircle cx='102' cy='382' r='5'/%3E%3Ccircle cx='127' cy='80' r='5'/%3E%3Ccircle cx='370' cy='105' r='5'/%3E%3Ccircle cx='578' cy='42' r='5'/%3E%3Ccircle cx='237' cy='261' r='5'/%3E%3Ccircle cx='390' cy='382' r='5'/%3E%3C/g%3E%3C/svg%3E");
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
    text-align: center;

    .top-bottom {
      button {
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
        background-color: black;
      }
      .left-icon {
        margin-block: 5px;
      }
    }
  }
`;
