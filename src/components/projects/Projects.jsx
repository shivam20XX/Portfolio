import { projects } from "../../constants";
import { FaGithub } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 pb-24 px-[12vw] md:px-[20vw] font-sans relative "
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl text-pink-400 font-bold">Projects</h2>
        <div className="w-32 h-1 bg-pink-200 mx-auto mt-4"></div>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden pb-4 ">
        
        {projects.map((project) => (
          <div
            key={project.id}

            className="border border-white bg-gray-900/80 backdrop-blur-md rounded-2xl overflow-hidden cursor-pointer "
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
                  >
                    <FaArrowUpRightFromSquare className="text-xl" />
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
