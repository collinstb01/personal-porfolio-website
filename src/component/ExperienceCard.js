import react from "react";
import styled from "styled-components";

const ExperienceCard = ({ title }) => {
  return (
    <Main>
      <div className="ctn">
        <ul>
          <li>{title}</li>
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
    margin-left: 20px;

    text-align: center;
    cursor: pointer;
    letter-spacing: 1px;
    font-weight: 800 !important;
    font-size: 18px;
    font-family: 'Courier New', Courier, monospace;
    border-radius: 10px;
    transition: all 0.3s ease;
  }
  .ctn:hover {
    
  }
  ul {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  li {
    list-style: none;
  }
  h1,
  li {
    font-family: "Courier New", Courier, monospace;
    font-weight: 100;
    color: ${props => props.theme.bCColor};
  }
`;
