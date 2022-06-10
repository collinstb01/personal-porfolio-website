import react from "react";
import styled from "styled-components";

const Title = ({ title1, title2 }) => {
  return (
    <Main>
      <h1 className="first">{title1}</h1>
      <h1 className="sec">{title2}</h1>
    </Main>
  );
};

export default Title;

const Main = styled.div`
  font-family: verdana;
  position: relative;
  text-transform: uppercase;
  text-align: center;
  display: flex;
  flex-direction: column;
  .first {
    font-size: 25px;
    color: gainsboro;
    text-shadow: 1px 1px 1px black;
    z-index: 22;
    @media (max-width: 500px) {
      font-size: 20px;
    }
  }
  .sec {
    font-size: 40px;
    position: absolute;
    top: 5px;
    left: 33%;
    opacity: 0.2;
    @media (max-width: 600px) {
      font-size: 25px;
      left: 15%;
      top: 12px;
    }
  }
`;
