import react from "react";
import styled from "styled-components";

const Paper = ({ paper }) => {
  return (
    <Main>
      <div className="paper">
        <paper.Icon className="icon" />
        <h2>{paper.text}</h2>
        <h2>{paper.textdes}</h2>
      </div>
    </Main>
  );
};
export default Paper;

const Main = styled.div`
  font-family: cursive;
  font-weight: 100 !important;

  .paper {
    width: auto;
    height: auto;
    padding: 30px 10px;
    background: white;
    margin-left:  20px;
    box-shadow: 1px 1px 1px 1px #00000038;
    font-size: 7px;
    text-align: center;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 100 !important;
    border-radius: 10px;
    transition: all .3s ease;
    h2 {
      font-weight: 100 !important;
    }
  }
  .paper:hover {
    box-shadow: 2px 2px 2px 2px #00000038;
  }
  .icon {
    font-size: 20px;
  }
`;
