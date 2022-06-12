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
        title1: "",
        title2: "Web Development",
      },
    },
    {
      title: "Mobile Development",
      id: 2,
      description: {
        title1: "Hello I am a Mobile Developer",
        title2: "Mobile Developer",
      },
    },
    {
      title: "Software Development",
      id: 3,
      description: {
        title1: "Hello i am a Software Developer",
        title2: "Software Developer",
      },
    },
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
