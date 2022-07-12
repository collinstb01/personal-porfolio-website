import React from "react";
import styled from "styled-components";

const LeftConact = ({ Icon, text, textdes, anchor }) => {
  return (
    <Main>
      <div className="card">
        <Icon />
        <h1>{text}</h1>
       <a href={anchor} target="_blank"> <h1>{textdes}</h1></a>
      </div>
    </Main>
  );
};

export default LeftConact;

const Main = styled.div`
  overflow-wrap: anywhere;
  padding: 20px 30px;
  box-shadow: 1px 1px 1px #000000ab;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  margin: 20px;
  width: 50%;
  font-weight: 100;
    color: ${props => props.theme.bCColor};
  background-color: ${props => props.theme.bC};

  font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;

  h1 {
    margin-block: 10px;
  }
  a {
    outline: none;
    text-decoration: none;
  }
`;
