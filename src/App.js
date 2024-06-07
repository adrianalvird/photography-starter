import React from "react";
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
import MobileNav from "./components/MobileNav";
import Socials from "./components/Socials";
import {useContext} from 'react';
import { CursorContext } from "./context/CursorContext";
import { BrowserRouter as Router } from "react-router-dom";
import { motion } from "framer-motion";

const App = () => {
  useContext(CursorContext);
  return (
    <Router>
      <Header />
      <AnimRoutes />
    </Router>
    <div className="w-[32px] h-[32px] bg-primary fixed top-0 left-0 pointer-events-none z-50"></div>
  );
};

export default App;
