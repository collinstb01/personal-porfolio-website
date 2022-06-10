import React from "react";
import styled from "styled-components";

const TestimonialCard = ({ Img, author, Testimony }) => {
  return (
    <Main>
      <div className="img">
        <img src={Img} />
      </div>
      <div className="text">
        <h1>{author}</h1>
        <p>{Testimony}</p>
      </div>
    </Main>
  );
};

export default TestimonialCard;

const Main = styled.div`
  padding: 40px 30px;
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-family: Arial, Helvetica, sans-serif;
  background-color: ${props => props.theme.bC};
  box-shadow: 1px 1px 1px grey;
  color: ${props => props.theme.bCColor};
  .img {
    width: 30px;
    height: auto;

    img {
      object-fit: cover;
      width: 60px;
      height: 60px;
      border-radius: 50%;
    }
  }
  h1 {
    margin-block: 10px;
  }
  p {
    max-width: 95%;
  }
`;
