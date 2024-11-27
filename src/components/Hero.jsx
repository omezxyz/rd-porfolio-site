import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);

  useEffect(() => {
    const elements = document.querySelectorAll(".floating-icon");
    elements.forEach((el, index) => {
      el.style.animationDelay = `${index * 0.5}s`;
    });

    document.body.style.overflow = isMenuOpen || showResume ? "hidden" : "auto";
  }, [isMenuOpen, showResume]);

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId).scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  };

  const toggleResume = () => {
    setShowResume(!showResume);
  };

  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat text-black overflow-hidden">
      {/* Responsive Background Images */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: "url('/images/hero-mob.png')" }} // Replace with mobile image path
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: "url('/images/hero.jpg')" }} // Replace with desktop image path
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-20 bg-white bg-opacity-100 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-4">
          <h1 className="text-xl md:text-3xl font-bold text-red-600">rd_rava.art</h1>
          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-8 text-lg">
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-red-600 transition duration-300"
              >
                About Me
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("portfolio")}
                className="text-gray-700 hover:text-red-600 transition duration-300"
              >
                Works
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("hire-me")}
                className="text-gray-700 hover:text-red-600 transition duration-300"
              >
                Hire Me
              </button>
            </li>
            <li>
              <button
                onClick={toggleResume}
                className="text-gray-700 hover:text-red-600 transition duration-300"
              >
                Resume
              </button>
            </li>
          </ul>
          {/* Mobile Menu Button */}
          <button
            className="text-black md:hidden text-xl"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? "✕" : "☰"}
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-white bg-opacity-90 z-40 flex flex-col justify-center items-center space-y-8 text-lg">
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-red-600 transition duration-300"
          >
            About Me
          </button>
          <button
            onClick={() => scrollToSection("portfolio")}
            className="text-gray-700 hover:text-red-600 transition duration-300"
          >
            Works
          </button>
          <button
            onClick={() => scrollToSection("hire-me")}
            className="text-gray-700 hover:text-red-600 transition duration-300"
          >
            Hire Me
          </button>
          <button
            onClick={toggleResume}
            className="text-gray-700 hover:text-red-600 transition duration-300"
          >
            Resume
          </button>
          <button
            onClick={() => setIsMenuOpen(false)}
            className="text-red-600 text-xl mt-6 underline"
          >
            Close
          </button>
        </div>
      )}

      {/* Main Content for Mobile */}
      <div className="relative z-10 text-center animate-fadeIn flex flex-col justify-center items-center h-full px-6 md:hidden mt-[-5%]">
        <h1 className="text-3xl font-extrabold mb-6">
          <span className="text-red-600">
            <Typewriter words={["Hello"]} loop={false} cursor={false} typeSpeed={120} />
          </span>
          , <span className="text-white">I'm</span>{" "}
          <span className="text-black">RD RAVA</span>
        </h1>
        <p className="text-sm text-white-500 mb-8 mt-[-5%]">
          Illustrator | Designer | Graffiti
        </p>
        <button
          onClick={() => scrollToSection("portfolio")}
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300 text-sm mt-[-5%]"
        >
          View My Work
        </button>
      </div>

      {/* Main Content for Desktop and larger devices */}
      <div className="relative z-10 text-center animate-fadeIn flex flex-col justify-center items-center h-full px-6 hidden md:block mt-[20%]">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-6">
          <span className="text-red-600">
            <Typewriter words={["Hello"]} loop={false} cursor={false} typeSpeed={120} />
          </span>
          , <span className="text-white">I'm</span>{" "}
          <span className="text-black">RD RAVA</span>
        </h1>
        <p className="text-lg text-white-500 mb-8">
          Illustrator | Designer | Graffiti
        </p>
        <button
          onClick={() => scrollToSection("portfolio")}
          className="bg-red-500 text-white px-8 py-4 rounded-full hover:bg-red-600 transition duration-300 text-lg"
        >
          View My Work
        </button>
      </div>

      {/* Modal to display the Resume PDF (Pop-up) */}
      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="relative w-full h-full max-w-4xl max-h-full bg-white rounded-lg shadow-lg overflow-auto p-8 transform scale-95 transition-all duration-300">
            <button
              onClick={toggleResume}
              className="absolute top-4 right-4 text-black text-3xl font-bold z-50 hover:text-red-600"
            >
              &times;
            </button>

            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-bold mb-6">My Resume</h2>
              <p className="text-lg mb-6">
                <a href="/images/resume.pdf" target="_blank" rel="noopener noreferrer" className="text-red-600 underline hover:text-red-800">
                  Click here to open the resume in a new tab.
                </a>
              </p>
              {/* Embed the PDF */}
              <embed src="/images/resume.pdf" width="100%" height="600px" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
