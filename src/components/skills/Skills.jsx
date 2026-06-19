import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

function Skills() {
  return (
    <section
      id="skills"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient text-pink-400 clip-path-custom"
    >
      <div className="text-center mb-12 animate-fadeInUp">
        <h2 className="text-3xl sm:text-4xl font-bold">Skills</h2>
        <div className="w-24 h-1 bg-gradient-to-r from-pink-400 to-purple-500 mx-auto mt-2"></div>
      </div>

      {/* skills section*/}
      <div className="flex flex-wrap gap-1 lg:gap-5 py-10 justify-between">
        {SkillsInfo.map((category, index) => (
          <div
            key={category.title}
            className="glass-effect px-6 sm:px-10 py-8 sm-py-6 w-full mb-10 sm:w-[48%] rounded-xl border-pink-600/30 hover-lift transition-smooth group animate-fadeInUp"
            style={{
              animationDelay: `${index * 0.1}s`,
            }}
          >
            <h3 className="text-2xl sm:text-3xl font-semibold text-pink-300 mb-6 text-center group-hover:text-pink-200 transition-colors">
              {category.title}
            </h3>

            {/* skills logo section*/}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 w-full">
              {category.skills.map((skill, idx) => {
                const IconComponent = skill.logo;

                return (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center justify-center space-y-2 glass-effect border-pink-600/30 rounded-lg py-4 px-2 sm:py-4 sm:px-3 text-center hover:border-pink-400/60 transition-all duration-300 group/skill"
                    style={{
                      animationDelay: `${idx * 0.05}s`,
                    }}
                  >
                    <IconComponent className="text-4xl text-pink-400 group-hover/skill:text-pink-300 transition-colors" />
                    <span className="text-xs sm:text-sm text-gray-300 group-hover/skill:text-white transition-colors font-medium">
                      {skill.name}
                    </span>
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
