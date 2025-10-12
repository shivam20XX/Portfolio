import React from "react";
import { experiences } from "../../constants";

function Experience() {
  return (
    <section
      id="experience"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans  relative"
    >
      <div className="text-center mb-16">
        <h2 className="text-4xl text-pink-400 font-bold">Experience</h2>
        <div className="w-32 h-1 bg-pink-200 mx-auto mt-4"></div>
      </div>

      {/* timeline Container */}
      <div className="relative">
        {/* timeline vertical line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-pink-400/30 h-full"></div>

        {/* timeline items */}
        {experiences.map((experience, index) => (
          <div
            key={experience.id || index}
            className="flex flex-col md:flex-row mb-16 relative"
          >
            {/* timeline dot with image */}
            <div className="absolute left-1/2 transform -translate-x-1/2 border-4 border-pink-300 w-16 h-16 rounded-full flex justify-center items-center z-10 bg-[#1b113a]">
              {experience.img && (
                <img
                  src={experience.img}
                  alt={experience.company}
                  className="w-full h-full object-cover rounded-full"
                />
              )}
            </div>

            {/* experience content */}
            <div
              className={`w-full md:w-5/12 p-6 rounded-xl shadow-2xl border border-pink-500/20 bg-gray-900/80 backdrop-blur-md hover:shadow-violet-600 mt-8 md:mt-0 ${
                index % 2 === 0 ? "md:mr-auto" : "md:ml-auto"
              } transform transition-transform duration-300 hover:scale-105`}
            >
              <h3 className="text-xl font-bold text-white mb-1">
                {experience.position}
              </h3>
              <h4 className="text-pink-400 font-medium mb-2">
                {experience.company}
              </h4>
              <div className="text-sm text-gray-300 mb-3">
                {experience.time}
              </div>

              {/* description of the Co.*/}
              {<p className="text-gray-300">{experience.desc}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Experience;
