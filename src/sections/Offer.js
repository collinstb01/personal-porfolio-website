import React from "react";
import styled from "styled-components";
import OfferCard from "../component/OfferCard";
import Title from "../component/Title";

const Offer = () => {
  const data = [
    {
      title: "Web Development",
      id: 1,
      description: {
        title1: "Web Development",
        title2: "I build Modern Mobile Applications using React Native a open source Javascript Framework. I build Applications for multiple platforms",
        list: ["IOS", "ANDROID"]
      },
    },
    {
      title: "Mobile Development",
      id: 2,
      description: {
        title1: "Mobile Development",
        title2: "I build Modern Mobile Applications using React Native a open source Javascript Framework. I build Applications for multiple platforms",
        list: ["IOS", "ANDROID"]
      },
    }
  ];

  return (
    <Main>
      <Title title1="My Offer" title2="My Offer" />
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
