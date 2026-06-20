import { useState } from "react";
import BackgroundGlow from "./components/BackgroundGlow";
import Navbar from "./components/Navbar";
import HeroSummary from "./sections/HeroSummary";
import Experience from "./sections/Experience";
// import TechnicalSkills from "./sections/TechnicalSkills";
import Projects from "./sections/Projects";
// import Labs from "./sections/Labs";
import Skills from "./sections/Skills";
import Education from "./sections/Education";
import Certifications from "./sections/Certifications";
import ProjectModal from "./components/ProjectModal";
import Footer from "./components/Footer";
// import FloatingRedirect from "./components/FloatingRedirect"; // 1. Import it here
import { BrowserRouter, Routes, Route } from "react-router-dom";
import CustomCursor from "./components/CustomeCursor";
import ContactAndSocial from "./sections/ContactAndSocial";
// ... import your sections

export default function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <BrowserRouter>
      {" "}
      {/* Everything that uses routing hooks must be inside this */}
      <div className="relative min-h-screen bg-darkBg text-gray-100 antialiased">
        <CustomCursor />
        <BackgroundGlow />
        <Navbar />

        <Routes>
          {/* Main Portfolio Route */}
          <Route
            path="/"
            element={
              <main className="max-w-6xl mx-auto px-6 py-6 space-y-24">
                <HeroSummary />
                {/* <HeroSummary onOpenExplorer={() => setIsModalOpen(true)} /> */}
                <Experience />
                {/* <TechnicalSkills /> */}
                <Projects />
                <Skills />
                <Education />
                <Certifications />
              </main>
            }
          />

          {/* Isolated Advanced AI Labs Route */}
          <Route
            path="/ai-labs"
            element={<div className="text-white p-10">Coming soon!</div>}
          />
        </Routes>
        <ContactAndSocial />
        <Footer />

        {/* <FloatingRedirect /> */}

        <ProjectModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
    </BrowserRouter>
  );
}
