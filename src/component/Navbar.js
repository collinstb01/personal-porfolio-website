import styled from "styled-components";
import React, { useState } from "react";
import { BiMoon } from "react-icons/bi";
import { Link } from "react-router-dom";

const Navbar = ({theme, setTheme}) => {
  const themes = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }
  return (
    <Container id="home">
      <ul>
        <li><Link to="/" style={{textDecoration: "none", outline: "none"}}>Tech Boss</Link></li>
        <li>
          <BiMoon onClick={() => themes()} />
        </li>
      </ul>
    </Container>
  );
};

export default Navbar;

const Container = styled.div`
  width: 100%;
  padding: 18px;
  background-color: ${props => props.theme.navbarBackground};
  color: ${props => props.theme.navbarColor};
  font-family: monospace;
  letter-spacing: 3px;
  box-shadow: 1px 1px 0px ${props => props.theme.bC === "white" ? "#d1c3c3" : "#150050"};
  position: sticky;
  top: 0;
  z-index: 3333;
  ul {
    display: flex;
    justify-content: space-around;

    li {
      list-style: none;
      font-size: 20px;
      cursor: pointer;
    }
    li:nth-child(2) {
    }
  }
`;
