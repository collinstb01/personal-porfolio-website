import React, { useState } from "react";
import Home from "./pages/Home";
import styled from "styled-components";
import { ThemeProvider } from "styled-components";

import { motion, useViewportScroll } from "framer-motion";
import { darkTheme, lighTheme } from "./theme";
const App = () => {
  const [theme, setTheme] = useState('light')

  const { scrollYProgress } = useViewportScroll();
  
 
  return (
    <ThemeProvider theme={theme === 'light' ? lighTheme : darkTheme}>
      <Main>
      <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />
      <Home theme={theme} setTheme={setTheme} />
    </Main>
    </ThemeProvider>
  );
};

export default App;

const Main = styled.div`
  max-width: 1500px;
  background-color: ${props => props.theme.backgroundColor};
  z-index: 44;
`;
