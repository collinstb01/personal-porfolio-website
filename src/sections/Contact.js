import React, { useState } from "react";
import styled from "styled-components";
import LeftConact from "../component/LeftConact";
import Title from "../component/Title";
import { AiOutlineMail } from "react-icons/ai";
import { BsLinkedin } from "react-icons/bs";
import { BsPhone } from "react-icons/bs";
import { Button, TextField } from "@material-ui/core";
import { useRef } from 'react';
import { send } from 'emailjs-com';
import Alert from "@mui/material/Alert"

const Contact = () => {
  const [toSend, setToSend] = useState({
    from_name: "",
    to_name: "Collins Eguasa",
    message: "",
    reply_to: "",
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState("")
  const Data = [
    {
      Icon: AiOutlineMail,
      text: "Email",
      anchor: "mailto:collinstb01@gmail.com",
      textdes: "collinstb01@gmail.com",
    },
    {
      Icon: BsLinkedin,
      text: "LinkedIn",
      anchor: "https://www.linkedin.com/in/collins-felix-181200239/",
      textdes: "Collins Eguasa",
    },
    {
      Icon: BsPhone,
      text: "Phone",
      anchor: "tel:+234.705.7415.193",
      textdes: "+234 705 7415 193",
    },
  ];
  const handleChange = (e) => {
    setToSend({
      ...toSend,
      [e.target.name]:e.target.value
    })
  }

    const form = useRef();
  
    const sendEmail = (e) => {
      e.preventDefault();
      setLoading(true)
      if (toSend.from_name === "" && toSend.message === "" && toSend.reply_to === "" ) {
        setLoading(false)
        return setMessage("PLease All Fields Are Required")
      }
      if (!toSend.reply_to.includes("@")) {
        setLoading(false)
        return setMessage("Please Enter a valid Email Address")
      }
      send('service_zcu2vtm', 'template_tw283sc', toSend, 'B9P5jsrJyEVGJt0NC')
        .then((result) => {
            console.log(result.text);
            setLoading(false)
          setMessage(result.text)
        }, (error) => {
          setMessage(error.text)
            setLoading(false)
            console.log(error.text);
        });
    };


  return (
    <Main id="contact">
     <div>
     <Title title1="Contact Me" title2="Contact Me" />
     </div>
      <div className="bottom">
        <div className="left">
          {Data.map((dataa) => (
            <LeftConact {...dataa} />
          ))}
        </div>
        <div className="right">
          <h1>Send Me A Message</h1>
          <form ref={form} onSubmit={sendEmail}>
          <TextField
            onChange={handleChange}
            value={toSend.from_name}
            name="from_name"
            className="ss"
            id="outlined-basic"
            label="Name"
            variant="outlined"
            type="text"
          />
          <TextField
            onChange={handleChange}
            value={toSend.reply_to}
            name="reply_to"
            className="ss"
            id="outlined-basic"
            label="Email"
            variant="outlined"
            type="email"
          />
          <TextField
            placeholder="Leave a Mesage here"
            onChange={handleChange}
            value={toSend.message}
            name="message"
            className="ss ss2"
            id="outlined-basic"
            label="Message"
            variant="outlined"
          />
          <Button type="submit" className="btn">{!loading ? "SUBMIT" : "Loading...."}</Button>
          </form>
         {
          message === "OK" ?
          <Alert variant="filled" severity="success">Message Sent Sucessfully</Alert>
          : message === "" ? "" : 
          <Alert variant="filled" severity="error">{message}</Alert>
        }
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
    text-align: center;
    color: ${(props) => props.theme.bCColor};
    h1 {
      color: ${(props) => (props.theme.bC !== "white" ? "white" : "")};
    }
  }
  h1 {
    margin-block: 20px;
    font-weight: 200;
    font-family: "Courier New", Courier, monospace;
  }
  .ss {
    width: 80%;
    margin-block-end: 20px;
    background-color: ${(props) => props.theme.bC};
    overflow: hidden;
  }
  .ss2 {

  }
  .btn {
    color: white;
    background-color: grey;
    border: 1px solid grey;
    margin: 10px;
    width: 100px;
  }
  form {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: auto;
  }
`;
