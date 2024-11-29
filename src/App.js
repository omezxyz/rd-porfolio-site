import React from "react";
import { BrowserRouter as Router, Route, Routes, useLocation } from "react-router-dom";
import DisableActions from "./components/DisableActions";
import Hero from "./components/Hero";
import PortfolioPreview from "./components/PortfolioPreview";
import About from "./components/About";
import HireMe from "./components/HireMe";
import Shop from "./components/Shop";
import Footer from "./components/Footer";
import ProjectDetail from "./components/ProjectDetail"; 

const App = () => {
  return (
    <Router>
      <AppContent />
    </Router>
  );
};

const AppContent = () => {
  const location = useLocation();  // Get the current location (path)

  return (
    <div className="font-sans">
      {/* Disable right-click and shortcuts */}
    
      <DisableActions />
      {/* Define Routes */}
      <Routes>
        <Route path="/shop" element={<Shop />} />
        <Route path="/" element={<Hero />} />
        <Route path="/" element={<PortfolioPreview />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<HireMe />} />
        <Route path="/project/:projectId" element={<ProjectDetail />} />
      </Routes>

      {/* Main sections visible on all pages except the Shop page */}
      {location.pathname !== "/shop" && (
        <>
         
          <PortfolioPreview />
          <About />
          <HireMe />
        </>
      )}

      {/* Footer - Visible on all pages */}
      <Footer />
    </div>
  );
};

export default App;
