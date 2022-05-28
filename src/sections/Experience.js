import react from "react";
import styled from "styled-components";
import Title from "../component/Title";
import ExperienceCard from "../component/ExperienceCard";

const Experience = () => {
  
  return (
    <Main>
      <Title title1="My Experience" title2="My Experience" />
      <div className="bottom">
        <div className="bott">
        <ExperienceCard skills="FrontEnd Skills" t1="REACTJS" t2="HTML" t3="CSS/Styled-components" t4="REDUX" t5="GRAPHQL" />
        <ExperienceCard skills="BackEnd Skills" t1="MERN STACK" t2="NODEJS" t3="EXPRESS JS" t4="MONGODB" t5="" />
        </div>
      </div>
    </Main>
  );
};

export default Experience;

const Main = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  margin-block: 100px;

  .bottom {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
    .bott {
        display: flex;
        width: 60%;
        justify-content: center;
        align-items: center;

        @media (max-width: 700px) {
            flex-direction: column;
            width: 80%;
        }

    }
  }
`;
