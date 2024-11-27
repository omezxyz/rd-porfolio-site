import React, { useState } from "react";
import ProjectDetail from "./ProjectDetail";

const PortfolioPreview = () => {
  const [selectedProjectId, setSelectedProjectId] = useState(null);

  const projects = [
    { id: 1, title: "IFP Festival Brand Identity", image: "/images/project-2/main.png" },
    { id: 2, title: "Project OneIFP Festival S14 On-ground Design", image: "/images/project-2-onground/1.webp" },
    { id: 3, title: "Illustrating the World of Designers and Visual Artists", image: "/images/project-1/1.webp" },
    { id: 4, title: "Brand illustrations for IFP writing challenge page", image: "/images/project-3/2.jpeg" },
    { id: 5, title: "The Shutter’s Voice", image: "/images/project-4/1.webp" },
    { id: 6, title: "A Visual Tribute to Performing Arts", image: "/images/project-6/1.webp" },
    { id: 7, title: "Symphony in Motion", image: "/images/project-6/1.webp" },
    { id: 8, title: "Illustration banner for IFP Fimmaking page", image: "/images/project-7/1.png" },
    { id: 9, title: "Psychedelic Assemblance", image: "/images/project-8/1.jpg" },
  ];

  const openProject = (projectId) => {
    setSelectedProjectId(projectId);
  };

  const closeProject = () => {
    setSelectedProjectId(null);
  };

  return (
    <section className="py-12 bg-white" id="portfolio">
      <h2 className="text-3xl font-bold text-center mb-8">My Works</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 px-6">
        {projects.map((project) => (
          <div
            key={project.id}
            className="relative rounded-lg overflow-hidden shadow-lg transform transition-all duration-500 hover:scale-105 hover:rotate-2 hover:shadow-2xl cursor-pointer"
            onClick={() => openProject(project.id)}
          >
            <div className="w-full h-64 group relative">
              {/* Image with object-cover to ensure it fills the width of the container */}
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-all duration-500 transform group-hover:scale-105 group-hover:opacity-90"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex justify-center items-center text-white text-lg font-semibold">
                <p>{project.title}</p>
              </div>
            </div>
            <h3 className="text-xl font-semibold mt-4 text-center text-black">
              {project.title}
            </h3>
          </div>
        ))}
      </div>

      {/* Popup Modal for Selected Project */}
      {selectedProjectId && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="relative w-[90%] sm:w-4/5 max-h-[90vh] bg-white rounded-lg shadow-lg overflow-y-auto">
            <button
              onClick={closeProject}
              className="absolute top-4 right-4 text-black text-2xl font-bold z-50"
            >
              &times;
            </button>
            <ProjectDetail projectId={selectedProjectId} onClose={closeProject} />
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioPreview;
