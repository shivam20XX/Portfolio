import { useState } from "react";
import { projects } from "../../constants";
import { FaGithub } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCardClick = (project) => {
    setSelectedProject(project);
  };

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <section
      id="projects"
      className="py-24 pb-24 px-[12vw] md:px-[20vw] font-sans relative bg-[#1b113a]"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl text-pink-400 font-bold">Projects</h2>
        <div className="w-32 h-1 bg-pink-200 mx-auto mt-4"></div>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <div
            key={project.id}
            onClick={() => handleCardClick(project)}
            className="border border-white bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden hover:shadow-violet-500/50 hover:translate-y-2 transition-transform duration-300 cursor-pointer"
          >
            <div>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover"
              />
            </div>
            <div className="p-6">
              <h3 className="text-2xl font-bold text-pink-400 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-400 mb-4 pt-2 line-clamp-3">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-pink-200 text-xs font-semibold text-pink-800 rounded-full px-2 py-1 mr-2 mb-2"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 justify-between">
                {project.github && (
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-400 transition-colors"
                    aria-label="GitHub Repository"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaGithub className="text-xl" />
                  </a>
                )}
                {project.live && (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white hover:text-pink-400 transition-colors"
                    aria-label="Live Demo"
                    onClick={(e) => e.stopPropagation()}
                  >
                    <FaArrowUpRightFromSquare className="text-xl" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90 p-2 sm:p-4">
          <div className="bg-[#1b113a] rounded-xl shadow-2xl w-full max-w-[95vw] sm:max-w-2xl lg:max-w-4xl max-h-[95vh] overflow-hidden relative">
            <div className="flex justify-end p-3 sm:p-4 absolute top-0 right-0 z-10">
              <button
                onClick={handleCloseModal}
                className="text-white bg-pink-500 hover:bg-pink-600 rounded-full w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center text-lg sm:text-2xl font-bold cursor-pointer transition-colors"
              >
                ×
              </button>
            </div>

            <div className="max-h-[95vh] overflow-y-auto">
              <div className="p-4 sm:p-8 pt-12 sm:pt-16">
                {/* Responsive image */}
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-48 sm:h-64 lg:h-80 object-cover rounded-xl mb-4 sm:mb-6"
                />

                <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-pink-400 mb-3 sm:mb-4">
                  {selectedProject.title}
                </h3>

                <p className="text-gray-300 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-pink-200 text-pink-800 text-xs sm:text-sm font-semibold rounded-full px-2 sm:px-3 py-1"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-3 sm:gap-6">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-gray-800 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-gray-700 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <FaGithub className="text-lg sm:text-xl" />
                      View Code
                    </a>
                  )}
                  {selectedProject.live && (
                    <a
                      href={selectedProject.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="bg-pink-500 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg hover:bg-pink-600 transition-colors flex items-center justify-center gap-2 text-sm sm:text-base"
                    >
                      <FaArrowUpRightFromSquare className="text-lg sm:text-xl" />
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

export default Projects;
