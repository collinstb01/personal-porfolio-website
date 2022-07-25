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
      <Link to="/" style={{textDecoration: "none", outline: "none"}}><li style={{textDecoration: "none", outline: "none", color: `${props => props.theme.navbarColor}`}}>Tech Boss</li></Link>
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
  color: ${props => props.theme.navbarColor};
    }
    li:nth-child(2) {
    }
  }
`;
