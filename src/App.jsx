import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Skills from "./components/skills/Skills";
import Projects from "./components/projects/Projects";
import BlurBlob from "./BlurBlob";
import ReactLenis from "lenis/react";
import ProgressBar from "./ProgressBar";

function App() {
  return (
    <>
      <ProgressBar />
      <ReactLenis
        root
        options={{
          lerp: 0.1,
          duration: 1.2,
          orientation: "vertical",
          gestureOrientation: "vertical",
          smoothWheel: true,
          wheelMultiplier: 1,
          smoothTouch: true,
          touchMultiplier: 2,
        }}
      >
        <div className="bg-[#1b113a] ">
          <BlurBlob
            position={{ top: "40%", left: "30%" }}
            size={{ width: "30%", height: "30%" }}
          ></BlurBlob>
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
          <div className="relative pt-20 ">
            <Navbar />
            <About />
            <Skills />
            <Experience />
            <Projects />
            <Contact />
            <Footer />
          </div>
        </div>
      </ReactLenis>
    </>
  );
}

export default App;
