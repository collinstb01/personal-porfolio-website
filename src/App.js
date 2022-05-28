import React from "react";
import Home from "./pages/Home";
import styled from "styled-components";
import { motion, useViewportScroll } from "framer-motion";
const App = () => {
  const { scrollYProgress } = useViewportScroll();

  return (
    <Main>
      <motion.path
        d="M 0, 20 a 20, 20 0 1,0 40,0 a 20, 20 0 1,0 -40,0"
        style={{ pathLength: scrollYProgress }}
      />
      <Home />
    </Main>
  );
};

export default App;

const Main = styled.div`
  max-width: 1500px;
  background-color: #f9f9f9;
  z-index: 44;
`;
