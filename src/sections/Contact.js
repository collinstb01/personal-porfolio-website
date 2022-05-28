import React from "react";
import styled from "styled-components";
import LeftConact from "../component/LeftConact";
import Title from "../component/Title";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsWhatsapp } from "react-icons/bs";
import { Button, TextField } from "@material-ui/core";

const Contact = () => {
  const Data = [
    {
      Icon: AiOutlineMail,
      text: "Email",
      textdes: "collinstb01@gmail.com",
    },
    {
      Icon: BsLinkedin,
      text: "LinkedIn",
      textdes: "www.linkedInlink",
    },
    {
      Icon: BsWhatsapp,
      text: "GitHub",
      textdes: "cllnsflx01",
    },
  ];
  return (
    <Main id="contact">
      <Title title1="Contact Me" title2="Conact Me" />
      <div className="bottom">
        <div className="left">
          {Data.map((dataa) => (
            <LeftConact {...dataa} />
          ))}
        </div>
        <div className="right">
            <h1>Send Us A Message</h1>
          <TextField
            className="ss"
            id="outlined-basic"
            label="Name"
            variant="outlined"
          />
          <TextField
            className="ss"
            id="outlined-basic"
            label="Email"
            variant="outlined"
          />
          <TextField
            className="ss"
            id="outlined-basic"
            label="Message"
            variant="outlined"
          />
          <Button className="btn">SUBMIT</Button>
        </div>
      </div>
    </Main>
  );
};

export default Contact;

const Main = styled.div`
  width: 100%;
  height: auto;

  .bottom {
    display: grid;
    grid-auto-flow: column;
    margin-top: 20px;
    @media (max-width: 800px) {
      grid-auto-flow: row;
    }
    .left {
      width: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: flex-end;

      @media (max-width: 800px) {
        justify-content: center;
        align-items: center;
      }
    }
  }
  .right {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
  }
  h1 {
      margin-block: 20px;
      font-weight: 200;
        font-family: 'Courier New', Courier, monospace;
    }
  .ss {
    width: 80%;
    margin-block-end: 20px;
  }
  .btn {
    color: white;
    background-color: grey;
    border: 1px solid grey;
    margin: 10px;
  }
`;
