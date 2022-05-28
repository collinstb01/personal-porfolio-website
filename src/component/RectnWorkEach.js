import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Button } from "@material-ui/core";

const RectnWorkEach = ({ onework }) => {
  return (
    <Main>
      <AnimatePresence>
        <motion.div
          layout
          animate={{ opacity: 1 }}
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          transitio={{ duration: 0.5 }}
          className="img"
        >
          <div className="overlay">
            <BsLinkedin className="icon" />
            <BsGithub className="icon" />
          </div>
          <div>
            <img src={onework.img} alt={`Project ${onework.id}`} />
          </div>
          <div>
            <h1>{onework.title}</h1>
          </div>
          <div className="overlay2">
            <BsLinkedin className="icon" />
            <BsGithub className="icon" />
          <Button small className="button">Live Demo</Button>
          </div>
        </motion.div>
      </AnimatePresence>
    </Main>
  );
};

export default RectnWorkEach;

const Main = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  place-items: center;
  padding: 30px;
  font-weight: 200;
  font-family: "Courier New", Courier, monospace;
  .img {
    width: 250px;
    border: 3px solid grey;
    border-top-left-radius: 25px;
    border-bottom-right-radius: 25px;
    position: relative;
    @media (max-width: 900px) {
      width: 200px;
    }
    @media (max-width: 700px) {
      width: 270px;
    }
    img {
      width: 100%;
      margin: 10px;
      border-top-left-radius: 25px;
      border-bottom-right-radius: 25px;
    }
  }
  .img::after {
    content: "";
    position: absolute;
    background-color: white;
    width: 100%;
    height: 160px;
    top: 0;
    left: 0;
    transform: translateX(20%);
    opacity: 0;
    border-radius: 25px;
    transition: all 0.3s ease-in-out;

    @media (max-width: 800px) {
      display: none;
    }
  }
  .img:hover::after {
    opacity: 0.9;
    transform: translateX(0%);
  }
  .overlay {
    position: absolute;
    transform: translate(-30%, -30%);
    top: 30%;
    left: 30%;
    width: 65%;
    height: 20vh;
    display: flex;
    transform: scale(1.4);
    justify-content: space-evenly;
    z-index: 55;
    opacity: 0;
    border-radius: 25px;
    @media (max-width: 800px) {
      display: none;
    }
  }
  .overlay:last-child() {
    margin: 20px;
  }
  .overlay:hover {
    opacity: 1;
  }
  .icon {
    cursor: pointer;
  }
  .overlay2 {
    width: 100%;
    display: flex;
    justify-content: space-around;
    z-index: 66;
    align-items: center;
    margin-bottom: 10px;
    .icon {
      z-index: 222;
      cursor: pointer;
    }
    .button {
      background-color: grey;
      z-index: 222;
      color: white;
      opacity: 0.8;
      font-size: 10px;
    }
    .button:hover {
      opacity: 1;
    }
  }
`;
