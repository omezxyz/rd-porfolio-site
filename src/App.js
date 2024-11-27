import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import DisableActions from "./components/DisableActions";
import Hero from "./components/Hero";
import PortfolioPreview from "./components/PortfolioPreview";
import About from "./components/About";
import HireMe from "./components/HireMe";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail"; // You will create this component for project details

const App = () => {
  return (
    <Router>
      <div className="font-sans">
        {/* This will disable right-click and shortcuts across the entire site */}
      <DisableActions />
        <Hero />
        {/* Define Routes */}
        <Routes>
          {/* Portfolio Preview Section */}
          <Route path="/" element={<PortfolioPreview />} />
          {/* Individual Project Detail Page (Dynamic Route) */}
          <Route path="/project/:projectId" component={ProjectDetail} />


        </Routes>
        <About />
        <HireMe />
        <Footer />
      </div>
    </Router>
  );
};

export default App;

