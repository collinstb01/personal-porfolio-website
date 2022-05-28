import styled from "styled-components";
import React from "react";
import { BiMoon } from "react-icons/bi";

const Navbar = () => {
  return (
    <Container id="home">
      <ul>
        <li>Tech Boss</li>
        <li>
          <BiMoon />
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  padding: 18px;
  background-color: #f5f5fa;
  color: black;
  font-family: monospace;
  letter-spacing: 3px;
  box-shadow: 1px 1px 0px #d1c3c3;
  position: sticky;
  top: 0;
  z-index: 3333;
  ul {
    display: flex;
    justify-content: space-around;

    li {
      list-style: none;
      font-size: 20px;
    }
    li:nth-child(2) {
      color: black;
    }
  }
`;
