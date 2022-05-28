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
      textdes: "1 Year Of Experience With React Js",
    },
    {
      Icon: AiOutlineStar,
      text: "Skilled",
      textdes: "Expert On Various Kinds Of Tech",
    },
    {
      Icon: GrStatusGood,
      text: "Expertised",
      textdes: "Expert In Software Development",
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
          <Title title1="My About" title2="My About" />
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
                Hi i am a web Developer and a software enginner in the field of
                computer programming. You can checkme out on various platform to
                see my wrks or you can just check out my project section to see
                all my projects and see while i am the man for the job
              </p>
            </div>
            <div className="bottom">
              <Button variant="outlined">REACH ME</Button>
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
      flex-direction: column;
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
      @media (max-width: 700px) {
        width: 240px;
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
      margin-bottom: 10px;
    }
    .middle {
      max-width: 80%;
      margin-bottom: 8px;
      font-family: cursive;
    }
  }
`;
