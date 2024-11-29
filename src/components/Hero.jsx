import React, { useEffect, useState } from "react";
import { Typewriter } from "react-simple-typewriter";

const Hero = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showResume, setShowResume] = useState(false);
  const [helloColor, setHelloColor] = useState("#1E90FF");

  // Array of colors to choose from
  const colors = ["#1E90FF", "#FF6347", "#32CD32", "#FFD700", "#6A5ACD"];

  // Function to set a random color
  const setRandomColor = () => {
    const randomColor = colors[Math.floor(Math.random() * colors.length)];
    setHelloColor(randomColor);
  };

  // Smooth scroll to section
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false); // Close menu if it's open
    }
  };

  // Toggle resume modal
  const toggleResume = () => {
    setShowResume((prev) => !prev);
  };

  useEffect(() => {
    // Change "Hello" color on component mount
    setRandomColor();

    // Disable scroll when menu or resume is open
    document.body.style.overflow = isMenuOpen || showResume ? "hidden" : "auto";
  }, [isMenuOpen, showResume]);

  return (
    <section className="relative h-screen bg-cover bg-center bg-no-repeat text-black overflow-hidden">
      {/* Responsive Background Images */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat md:hidden"
        style={{ backgroundImage: "url('/images/hero-mob.png')" }}
      ></div>
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat hidden md:block"
        style={{ backgroundImage: "url('/images/hero.jpg')" }}
      ></div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 w-full z-20 bg-white bg-opacity-100 backdrop-blur-md">
        <div className="container mx-auto flex justify-between items-center px-6 py-2">
          <h1 className="text-xl md:text-3xl font-bold text-red-600">rd_rava.art</h1>
          <ul className="hidden md:flex  space-x-6 text-lg">
          <li>
            <a
              href="/shop"
                  className="text-gray-700 hover:text-red-600 transition duration-300"
               >
             Shop
              </a>
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
                Hire me
              </button>
            </li>
            <li>
              <button
                onClick={() => scrollToSection("about")}
                className="text-gray-700 hover:text-red-600 transition duration-300"
              >
                Me
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
               <a
      href="/shop"
      className="text-gray-700 hover:text-red-600 transition duration-300"
           >
        Shop
         </a>
         
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
            Hire me
          </button>
          <button
            onClick={() => scrollToSection("about")}
            className="text-gray-700 hover:text-red-600 transition duration-300"
          >
            Me
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
        <span style={{ color: helloColor }}>
            <Typewriter words={["Hello"]} loop={false} cursor={false} typeSpeed={120} />
          </span>
          , <span className="text-white">I'm</span>{" "}
          <span className="text-white">RD RAVA</span>
        </h1>
        <p className="text-l text-white mb-8 mt-[-5%]">
          Illustrator | Designer | Graffiti
        </p>
        <button
          onClick={() => scrollToSection("portfolio")}
          className="bg-red-500 text-white px-6 py-2 rounded-full hover:bg-red-600 transition duration-300 text-sm mt-[-5%]"
        >
          View My Work
        </button>
      </div>

      {/* Main Content for Desktop */}
      <div className="relative z-10 text-center animate-fadeIn flex flex-col justify-center items-center h-full px-6 md:block mt-[20%]">
        <h1 className="text-3xl sm:text-5xl font-extrabold mb-6">
          <span style={{ color: helloColor }}>
            <Typewriter words={["Hello"]} loop={false} cursor={false} typeSpeed={120} />
          </span>
          , <span className="text-white">I'm</span>{" "}
          <span className="text-white">RD RAVA</span>
        </h1>
        <p className="text-xl text-white mb-8">
          Illustrator | Designer | Graffiti
        </p>
        <button
          onClick={() => scrollToSection("portfolio")}
          className="bg-red-500 text-white px-8 py-4 rounded-full hover:bg-red-600 transition duration-300 text-lg"
        >
          View My Work
        </button>
      </div>

      {/* Resume Modal */}
      {showResume && (
        <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50">
          <div className="relative w-full h-full max-w-4xl bg-white rounded-lg shadow-lg overflow-auto p-8">
            <button
              onClick={toggleResume}
              className="absolute top-4 right-4 text-black text-3xl font-bold hover:text-red-600"
            >
              &times;
            </button>
            <div className="flex flex-col justify-center items-center text-center">
              <h2 className="text-2xl font-bold mb-6">My Resume</h2>
              <p className="text-lg mb-6">
                <a
                  href="/images/resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-red-600 underline hover:text-red-800"
                >
                  Open resume in a new tab
                </a>
              </p>
              <embed src="/images/resume.pdf" width="100%" height="600px" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
