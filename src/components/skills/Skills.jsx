import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";
function Skills() {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient text-pink-400 clip-path-custom"
    >
      <div className="text-center mb-8 ">
        <h2 className="text-3xl sm:text-4xl font-bold ">Skills</h2>
        <div className="w-24 h-1 bg-pink-200 mx-auto mt-2"></div>
      </div>
      {/* skills section*/}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category) => (
          <div
            key={category.title}
            className="bg-transparent backdrop-blur-md px-6 sm:px-10 py-8 sm-py-6 w-full mb-10 sm:w-[48%] rounded-2xl border-pink-600 border shadow-[0_0_20px _1px_rgba(130,69,236,0.3)] shadow-sm shadow-violet-700"
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-gray-300 mb-4  text-center">
              {category.title}
            </h3>
            {/* skills logo section*/}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 w-full">
              {category.skills.map((skill) => {
                const IconComponent = skill.logo;

                return (
                  <div
                    key={skill.name}
                    className="flex items-center justify-center space-x-2 bg-transparent border-2 border-gray-600 rounded-lg py-2 px-2 sm:py-2 sm:px-2 text-center"
                  >
                    <IconComponent className="text-3xl text-pink-500" />
                    <span className="text-sm text-white">{skill.name}</span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;
