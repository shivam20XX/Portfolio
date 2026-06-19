import { projects } from "../../constants";
import { FaGithub } from "react-icons/fa6";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { Link } from "react-router-dom";

function Projects() {
  return (
    <section
      id="projects"
      className="py-24 pb-24 px-[12vw] md:px-[20vw] font-sans relative"
    >
      <div className="text-center mb-16 animate-fadeInUp">
        <h2 className="text-4xl text-pink-400 font-bold">Projects</h2>
        <div className="w-32 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mt-4"></div>
      </div>

      <div className="grid gap-12 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 overflow-hidden pb-4">
        {projects.map((project, index) => (
          <div
            key={project.id}
            className="border border-pink-600/20 bg-gradient-card backdrop-blur-md rounded-xl overflow-hidden cursor-pointer hover:border-pink-400 transition-smooth group hover-lift animate-fadeInUp"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <Link to={`/project/${project.id}`}>
              <div className="relative overflow-hidden h-48">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
              </div>
            </Link>
            <div className="p-6">
              <Link to={`/project/${project.id}`}>
                <h3 className="text-2xl font-bold text-pink-400 mb-2 group-hover:text-pink-300 transition-colors">
                  {project.title}
                </h3>
              </Link>
              <p className="text-gray-400 mb-4 pt-2 line-clamp-3 text-sm leading-relaxed">
                {project.description}
              </p>
              <div className="mb-4">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-xs font-semibold text-pink-300 rounded-full px-3 py-1 mr-2 mb-2 border border-pink-500/30"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div className="flex space-x-4 justify-between items-center pt-4 border-t border-pink-600/10">
                <div className="flex space-x-3">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                      aria-label="GitHub Repository"
                    >
                      <FaGithub className="text-lg" />
                    </a>
                  )}
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-pink-400 transition-colors"
                      aria-label="Live Demo"
                    >
                      <FaArrowUpRightFromSquare className="text-lg" />
                    </a>
                  )}
                </div>
                <Link
                  to={`/project/${project.id}`}
                  className="text-pink-400 hover:text-pink-300 font-semibold transition-colors text-sm"
                >
                  Details →
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
