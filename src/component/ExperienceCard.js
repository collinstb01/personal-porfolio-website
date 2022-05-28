import react from "react";
import styled from "styled-components";

const ExperienceCard = ({skills, t1, t2,t3,t4,t5,t6}) => {
  return (
    <Main>
      <div className="ctn">
        <h1>{skills}</h1>
        <ul>
          <li>{t1}</li>
          <li>{t2}</li>
          <li>{t3}</li>
          <li>{t4}</li>
          <li>{t5}</li>
          <li>{t6}</li>
        </ul>
      </div>
    </Main>
  );
};

export default ExperienceCard;

const Main = styled.div`
width: 100%;
  height: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 10px;
  .ctn {
    width: 100%;
    height: 30vh;
    padding: 30px 0px;
    background: white;
    margin-left:  20px;
    box-shadow: 1px 1px 1px 1px #00000038;
    /* font-size: 7px; */
    text-align: center;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 100 !important;
    border-radius: 10px;
    transition: all .3s ease;
  }
  .ctn:hover {
    box-shadow: 2px 2px 2px 2px #00000038;
  }
    ul {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }
    li {
        padding: 15px;
        list-style: none;
    }
    h1,li {
      font-family: 'Courier New', Courier, monospace;
      font-weight: 100;
    }
`;
