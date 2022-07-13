import React from "react";
import styled from "styled-components";
import OfferCard from "../component/OfferCard";
import Title from "../component/Title";
import Mobile from "../i/mobile.svg"
import Web from "../i/web.svg"
import {BsLaptopFill} from "react-icons/bs"
import {BsPhoneFill} from "react-icons/bs"

const Offer = () => {
  const data = [
    {
      title: "Web Development",
      id: 1,
      description: {
        title1: "Web Development",
        title2: "I'll design and develop your website with eye-catching patterns making sure it is responsive for all screens giving mobile devices its priority.",
        list: [],
        image: Web
      },
      Icon: BsLaptopFill
    },
    {
      title: "Mobile Development",
      id: 2,
      description: {
        title1: "Mobile Development",
        title2: "I build Modern Mobile Applications using React Native a open source Javascript Framework. I build Applications for multiple platforms like",
        list: ["IOS", "ANDROID"],
        image: Mobile
      },
      Icon: BsPhoneFill
    }
  ];

  return (
    <Main>
      <Title title1="Services" title2="Services" />
      <p style={{letterSpacing: "2px", padding: "10px"}}>What i have to offer you</p>
      <div className="bottom">
        <div className="bott">
          {data.map((dataa) => (
            <OfferCard {...dataa} />
          ))}
        </div>
      </div>
    </Main>
  );
};

export default Offer;

const Main = styled.div`
  width: 100%;
  height: auto;
  text-align: center;
  padding-bottom: 100px;
  .bottom {
    margin-top: 70px;
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;

    .bott {
      width: 60%;
      display: flex;
      justify-content: center;

      @media (max-width: 767px) {
        flex-direction: column;
        width: 80%;
      }
    }
  }
`;
