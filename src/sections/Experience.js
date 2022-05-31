import react, {useState, useEffect} from "react";
import styled from "styled-components";
import Title from "../component/Title";
import ExperienceCard from "../component/ExperienceCard";
import axios from "axios"
import { useDispatch, useSelector } from "react-redux";
import {FetchSkills, getSkill} from "../features/SkillSlice"

const Experience = () => {
  const [skillss, setSkills] = useState(null)
  const message = ""

  const dispatch = useDispatch()
  const data = useSelector(getSkill)
  const _data = data?.data

  console.log(data?.data?.attributes)
  useEffect(() => {
    dispatch(FetchSkills(message))
    console.log(message)
  }, [dispatch])
    
  
  return (
    <Main>
      <Title title1="My Experience" title2="My Experience" />
      <div className="bottom">
        <div className="bott">
     {
       _data.map((dat) => (
         <ExperienceCard dat={dat?.attributes?.frontendkill} />
       ))
     }
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
