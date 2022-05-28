import React from "react";
import styled from "styled-components";
import TestimonialCard from "../component/TestimonialCard";
import Title from "../component/Title";
import img from "../i/jden.jpg";

const Testimonial = () => {
  const data = [
    {
      Img: img,
      author: "Mr Collins",
      Testimony:
        "This guy is an expert in everything he says he does please pertronise him",
    },
    {
      Img: img,
      author: "Mr Daniel",
      Testimony:
        "He really is a genius he can work on any website of your choice",
    },
  ];

  return (
    <Main>
      <Title title1="My Testimonials" title2="My Testimonials" />
      <div className="bottom">
        <div className="bott">
          {data.map((dataa) => (
            <TestimonialCard {...dataa} />
          ))}
        </div>
      </div>
    </Main>
  );
};

export default Testimonial;

const Main = styled.div`
  width: 100%;
  height: auto;

  .bottom {
    margin: 70px 0px;
    display: flex;
    width: 100%;
    justify-content: center;

    .bott {
      width: 70%;
      display: grid;
      grid-template-columns: 50% 50%;
      grid-gap: 20px;

      @media (max-width: 700px) {
        grid-template-columns: 100%;
      }
    }
  }
`;
