import react from "react";
import styled from "styled-components";

const Paper = ({ paper }) => {
  return (
    <Main>
      <div className="paper">
        <paper.Icon className="icon" />
        <h1>{paper.text}</h1>
        <h2>{paper.textdes}</h2>
      </div>
    </Main>
  );
};
export default Paper;

const Main = styled.div`
  font-family: cursive;
  font-weight: 100 !important;
  width: 25%;
  height: auto;
  margin: 0px 10px;
  background: ${(props) => props.theme.bC};
  box-shadow: 1px 1px 1px 1px #00000038;
  font-size: 7px;
  padding: 10px 20px;
  text-align: center;
  cursor: pointer;
  border-radius: 10px;

  @media (max-width: 900px) {
    width: 30%;
    }
  @media (max-width: 430px) {
    width: 80%;
    height: 100px;
  margin: 13px 10px;
    }
    h1 {
      font-size: 18px;
      font-weight: 100;
    }

  .paper {
    letter-spacing: 1px;
    font-weight: 100 !important;
    transition: all 0.3s ease;
    h2 {
      font-weight: 100 !important;
    }
  }
  .icon {
    font-size: 20px;
  }
`;
