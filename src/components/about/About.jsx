import { ReactTyped } from "react-typed";

const About = () => {
  return (
    <section
      id="about"
      className="px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-26"
    >
      <div className="flex flex-col md:flex-row justify-between items-center gap-12 md:gap-24 lg:gap-16">
        {/* Left Side */}
        <div className="md:w-1/2 text-center md:text-left animate-slideInLeft">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-pink-500 leading-tight">
            Hi, I am
          </h1>
          <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white leading-tight">
            Shivam Mishra
          </h2>
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-pink-500 leading-tight">
            <span className="text-white"> I'm a </span>
            <ReactTyped
              strings={["Data Analyst", "Business Intelligence Analyst", "Data Scientist"]}
              typeSpeed={100}
              backSpeed={50}
              startDelay={500}
              backDelay={2000}
              showCursor={false}
              loop
            />
          </h3>
          <p className="text-gray-300 text-base sm:text-lg md:text-gray-400 mb-10 mt-8 leading-relaxed">
            I transform data into actionable insights by leveraging Python, SQL, and visualization tools. With expertise in exploratory data analysis, statistical modeling, and business intelligence, I help organizations make data-driven decisions. Passionate about uncovering patterns, building predictive models, and creating compelling visualizations that tell meaningful stories.
          </p>

          {/* CV button */}
          <a
            href="https://drive.google.com/file/d/1ZLu1StIYKmFCFXgWzOvmCImQSDHyrooH/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block text-white py-3 px-8 rounded-full font-bold transition-smooth hover:scale-105 hover:shadow-lg mb-12 md:mb-0"
            style={{
              background: "linear-gradient(90deg, #ec4899, #a855f7)",
              boxShadow: "0 4px 20px rgba(236, 72, 153, 0.6)",
            }}
          >
            Download CV
          </a>
        </div>

        {/* right side*/}
        <div className="md:w-1/2 w-full max-w-[550px] animate-slideInRight">
          <div className="bg-gradient-card rounded-xl p-4 shadow-2xl border border-pink-600/20 w-full animate-pulse-slow hover-glow">
            {/* header */}
            <div className="flex items-center mb-3 pb-2 border-b border-pink-600/20">
              <div className="flex space-x-2">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              </div>
              <span className="text-gray-400 text-sm ml-4">Myself.jsx</span>
            </div>

            {/* editor content */}
            <div className="text-sm font-mono leading-tight">
              <div className="text-blue-400">
                const <span className="text-white">aboutMe</span>:{" "}
                <span className="text-pink-400">DataAnalyst</span> = {`{`}
              </div>
              <div className="ml-4 text-yellow-300">
                name:{" "}
                <span className="text-green-400">"Shivam Mishra"</span>,
              </div>
              <div className="ml-4 text-yellow-300">
                role:{" "}
                <span className="text-green-400">
                  "Data Analyst | BI Specialist"
                </span>
                ,
              </div>
              <div className="ml-4 text-yellow-300">expertise: {`{`}</div>
              <div className="ml-8 text-yellow-300">
                languages: [
                <span className="text-green-400">
                  "Python", "SQL", "R"
                </span>
                ],
              </div>
              <div className="ml-8 text-yellow-300">
                visualization: [
                <span className="text-green-400">"Tableau", "Power BI", "Matplotlib"</span>
                ],
              </div>
              <div className="ml-8 text-yellow-300">
                libraries: [
                <span className="text-green-400">"Pandas", "NumPy", "Scikit-learn"</span>
                ],
              </div>
              <div className="ml-4 text-yellow-300">{`},`}</div>
              <div className="ml-4 text-yellow-300">strengths: [</div>
              <div className="ml-8 text-green-400">"data storytelling",</div>
              <div className="ml-8 text-green-400">"pattern recognition",</div>
              <div className="ml-8 text-green-400">
                "statistical analysis",
              </div>
              <div className="ml-4 text-yellow-400">],</div>

              <div className="ml-4 text-yellow-300">passion:</div>
              <div className="ml-8 text-green-400">
                "Converting complex data into actionable business insights",
              </div>
              <div className="ml-4 text-yellow-300">
                status:{" "}
                <span className="text-green-400">"Open for opportunities"</span>,
              </div>
              <div className="text-blue-500">{`}`}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
