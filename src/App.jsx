import { BrowserRouter, Routes, Route } from "react-router-dom";
import ReactLenis from "lenis/react";
import ProgressBar from "./ProgressBar";
import HomePage from "./pages/HomePage";
import ProjectDetail from "./components/projects/ProjectDetail";

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
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/project/:id" element={<ProjectDetail />} />
          </Routes>
        </BrowserRouter>
      </ReactLenis>
    </>
  );
}

export default App;
