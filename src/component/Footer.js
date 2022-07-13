import styled  from "styled-components"
import React from 'react'
import { useNavigate } from "react-router-dom"

const Footer = () => {
    const date = new Date()
    const navigate = useNavigate()
    const route = () => {
        navigate("/auth")
    }
  return (
    <Main>
        <div className="footer">
        <p>Developed By &#128509; Collins</p>
            <h1 onClick={route} style={{opacity: "0"}}>cc</h1>
            <p>{`Copyright ${date.getFullYear()} All Rights Reserved.`}</p>
        </div>
    </Main>
  )
}

export default Footer

const Main = styled.div`
width: 100%;
height: auto;
background-color: ${props => props.theme.footerBackground};
color: ${props => props.theme.bCColor};


span {
    font-size: 20px;
    margin-bottom: 10px;
}
.footer {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    padding: 50px 0px;
    font-family: 'Courier New', Courier, monospace;
    font-weight: 100;
}
.icons {
    margin: 30px 0px;
    display: flex;
    width: 20%;
    justify-content: space-around;

    .icon {
        cursor: pointer;
        transform: scale(1.3);
        transition: all .5s ease-in-out;
        opacity: 0.8;
    }
    .icon:hover {
        transform: translateX(-5px);
        transform: scale(1.4);
        opacity: 1;
    }
}
`