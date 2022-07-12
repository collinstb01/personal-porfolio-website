import { AnimatePresence, motion } from "framer-motion";
import React, { useState } from "react";
import styled from "styled-components";
import { BsLinkedin } from "react-icons/bs";
import { BsGithub } from "react-icons/bs";
import { Button } from "@material-ui/core";

const RectnWorkEach = ({ onework }) => {
  const [text, setText] = useState(false);

  const handle = () => {
    setText((e) => !e);
  };
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
          <div className="overlay" target="_blank">
           <a href="https://www.linkedin.com/in/collins-felix-181200239/">
           <BsLinkedin className="icon" />
           </a>
            <BsGithub className="icon" />
          </div>
          <div>
            <img
              src={onework?.projectImg}
              alt={`Project ${onework.id}`}
            />
          </div>
          <div style={{zIndex: 21010}}>
            <h1>{onework.projectName}</h1>
              {onework.projectDescription.length > 30 ? (
                <div>
                  {!text ? (
                    <div>
                      {onework.projectDescription.slice(0, 80)}
                      <span onClick={handle}>....see more</span>

                    </div>
                  ) : (
                    <div>
                      {onework.projectDescription}
                      <span onClick={handle}>....see Less</span>
                    </div>
                  )}
                </div>
              ) : (
                onework.projectDescription
              )}
          </div>
          <div className="overlay2">
          <a href={onework.projectGithub} target="_blank">
              <BsGithub className="icon" />
          </a>
            <Button small className="button">
              <a href={onework.projectUrl} target="_blank">
                LIVE DEMO
              </a>
            </Button>
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

  p {
    padding: 5px 0px;
    font-family: verdana;
  }
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
    height: 10vh;
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
  span {
    cursor: pointer;
    color: grey;
    font-size: 13px;
  }
`;
