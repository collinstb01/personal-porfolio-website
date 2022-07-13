import React, { useState } from "react";
import Home from "./pages/Home";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import { motion, useViewportScroll } from "framer-motion";
import { darkTheme, lighTheme } from "./theme";
import Post from "./pages/Post";
import Auth from "./pages/Auth";
import { useSelector } from "react-redux";
import Blog from "./pages/Blog";
import BlogPage from "./pages/BlogPage/BlogPage"
const App = () => {
  const [theme, setTheme] = useState('light')
  const {user} = useSelector((state) => state.skill)
  console.log(user)
  const { scrollYProgress } = useViewportScroll();
  // const authuser = JSON.parse(localStorage.getItem("authuser")) &&  JSON.parse(localStorage.getItem("authuser"))
 
  return (
   <Router>
     <ThemeProvider theme={theme === 'light' ? lighTheme : darkTheme}>
      <Main>
      <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />
      <Routes>
        <Route path="/" element={
          <div>
            <Home theme={theme} setTheme={setTheme} />
          </div>
        } />
          <Route path="/postfortechsavvy" element={
          <div>
          {user ?  <Post /> : <h1>Please Login To Access This page</h1>}
          </div>
        } />
          <Route path="/auth" element={
          <div>
            <Auth />
          </div>
        } />
        <Route path="/blogs" element={
          <div>
            <BlogPage />
          </div>
        } />
      </Routes>
    </Main>
    </ThemeProvider>
   </Router>
  );
};

export default App;

const Main = styled.div`
  max-width: 1500px;
  background-color: ${props => props.theme.backgroundColor};
  z-index: 44;
`;
