import React, { useEffect } from "react";
import LandingPage from "../LandingPage/LandingPage";

const Index = () => {
  useEffect(() => {
    document.title = "TaskFlow - Designer's Masterpiece"
  }, [])
  
  return <LandingPage />;
};

export default Index;
