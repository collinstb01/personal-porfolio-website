import styled from "styled-components";
import { Button } from "@material-ui/core";
import img from "../i/jden.jpg";
import { BsFillLightbulbOffFill } from "react-icons/bs";
import { AiOutlineStar } from "react-icons/ai";
import { GrStatusGood } from "react-icons/gr";
import Paper from "../component/Paper";
import Title from "../component/Title";
import { motion } from "framer-motion";

const AboutUs = () => {
  const data = [
    {
      Icon: BsFillLightbulbOffFill,
      text: "Experienced",
      textdes: "1+ Year Of Experience Working With React Js",
    },
    {
      Icon: AiOutlineStar,
      text: "Skilled",
      textdes: "Skilled In My Field",
    },
    {
      Icon: GrStatusGood,
      text: "Expertised",
      textdes: "Expert In Web And Mobile Development",
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      transition={{ duration: 3 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <Main>
        <div className="title" id="about">
          <Title title1="About Me" title2="About Me" />
        </div>
        <div className="about-details">
          <div className="left">
            <img src={img} />
          </div>
          <div className="right">
            <div className="top">
              {data.map((paper) => (
                <Paper paper={paper} />
              ))}
            </div>
            <div className="middle">
              <p>
                Hi, i am a Web Developer and a Software Engineer in the field of
                computer programming.
              </p>
            </div>
            <div className="bottom">
              <Button variant="outlined">CONTACT ME</Button>
            </div>
          </div>
        </div>
      </Main>
    </motion.div>
  );
};

export default AboutUs;

const Main = styled.div`
  width: 100%;
  height: auto;
  padding-top: 50px;
  text-align: center;

  .about-details {
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-top: 50px;

    @media (max-width: 700px) {
      flex-direction: column-reverse;
      justify-content: center;
      align-items: center;
    }
  }
  .title {
  }
  .left {
    width: 40%;
    height: auto;
    display: flex;
    justify-content: flex-end;
    padding-bottom: 10px;

    @media (max-width: 700px) {
      width: 100%;
      display: block;
    }
    img {
      width: 300px;
      height: auto;
      border-top-left-radius: 20%;
      border-bottom-right-radius: 20%;
      @media (max-width: 900px) {
        width: 200px;
        margin-block: 20px;
      }
      @media (max-width: 700px) {
        width: 240px;
        display: none;
        margin-block: 20px;
      }
    }
  }

  .right {
    width: 60%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    @media (max-width: 700px) {
      width: 100%;
    }
    .top {
      display: flex;
      justify-content: center;
      margin-bottom: 10px;
      color: ${(props) => props.theme.bCColor};

      @media (max-width: 430px) {
     flex-direction: column;
     align-items: center;
    }
    }
    .middle {
      max-width: 85%;
      margin-bottom: 8px;
      font-family: verdana;
      letter-spacing: 1px;
      line-height: 25px;
    }
  }
  button {
    background: ${props => props.theme.bC !== "white" ? "gray" : ''};
    border: ${props => props.theme.bC !== "white" ? "1px solid whitesmoke" : ''} ;
    color: ${props => props.theme.bC !== "white" ? "white" : ''};

    @media (max-width: 430px) {
      margin-bottom: 20px;
    }
  }
`;
