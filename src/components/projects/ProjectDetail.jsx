import { useParams, useNavigate } from "react-router-dom";
import { projects } from "../../constants";
import { FaGithub, FaArrowUpRightFromSquare } from "react-icons/fa6";

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === parseInt(id));

  if (!project) {
    return (
      <div className="min-h-screen bg-[#1b113a] flex items-center justify-center px-[12vw]">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-pink-400 mb-4">
            Project Not Found
          </h1>
          <button
            onClick={() => navigate("/#projects")}
            className="inline-block text-white py-3 px-8 rounded-full font-bold transition duration-300 hover:scale-105"
            style={{
              background: "linear-gradient(90deg, pink, #a855f7)",
              boxShadow: "0 4px 15px rgba(236, 72, 153, 0.7)",
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const projectDetails = {
    0: {
      fullDescription:
        "Interactive Tableau dashboard analyzing 2 years of sales data across 50+ products and 15+ regions. This comprehensive dashboard features KPI tracking with real-time metrics, trend analysis to identify seasonal patterns, and predictive forecasting to anticipate future sales. The visualization identifies top-performing categories and underperforming regions, enabling management to make data-driven decisions. The dashboard resulted in 25% revenue growth in underperforming markets by highlighting optimization opportunities.",
      keyFeatures: [
        "Real-time KPI tracking and monitoring",
        "Trend analysis with seasonal pattern identification",
        "Predictive forecasting for future sales",
        "Regional performance comparison",
        "Product category analysis",
        "Interactive filters and drill-down capabilities",
        "Executive summary dashboard",
      ],
      technologies: ["Tableau", "SQL", "Data Visualization", "Analytics"],
      impact: "25% revenue growth in underperforming markets",
      duration: "3 months",
      teamSize: "3 people",
    },
    1: {
      fullDescription:
        "Python-based customer segmentation analysis using K-means clustering to segment 100K+ customers into 5 distinct personas. The analysis examined behavior patterns, lifetime value calculations, and churn risk assessment. Detailed customer profiles were created with comprehensive demographic and behavioral insights, enabling targeted marketing campaigns. The segmentation resulted in an 18% increase in conversion rates through persona-specific strategies.",
      keyFeatures: [
        "K-means clustering analysis",
        "Customer behavior pattern identification",
        "Lifetime value calculation",
        "Churn risk assessment",
        "Demographic profiling",
        "Behavioral insights generation",
        "Persona-based segmentation",
        "Visualization of clusters",
      ],
      technologies: ["Python", "Pandas", "Clustering", "Data Analysis"],
      impact: "18% increase in conversion rates",
      duration: "2 months",
      teamSize: "2 people",
    },
    2: {
      fullDescription:
        "Developed a machine learning model to predict customer churn with 87% accuracy. The model analyzed 50+ features to identify key churn indicators and risk factors. An interactive Power BI dashboard was built for monitoring at-risk customers in real-time, enabling proactive intervention strategies. The model-driven approach reduced customer churn by 15% in Q2 and improved retention strategies.",
      keyFeatures: [
        "Machine learning model development",
        "87% accuracy prediction model",
        "50+ feature analysis",
        "Key churn indicator identification",
        "Real-time monitoring dashboard",
        "Risk scoring system",
        "Proactive intervention recommendations",
        "Model performance tracking",
      ],
      technologies: ["Python", "Machine Learning", "Power BI", "SQL"],
      impact: "15% reduction in customer churn in Q2",
      duration: "4 months",
      teamSize: "2 people",
    },
  };

  const details = projectDetails[project.id] || projectDetails[0];

  return (
    <section className="min-h-screen bg-[#1b113a] pt-32 pb-24 px-[12vw] font-sans">
      {/* Header */}
      <button
        onClick={() => navigate("/#projects")}
        className="mb-8 text-pink-400 hover:text-pink-300 flex items-center gap-2 transition-smooth animate-slideInLeft"
      >
        <span>←</span> Back to Projects
      </button>

      {/* Project Title and Image */}
      <div className="mb-16 animate-fadeInUp">
        <h1 className="text-5xl md:text-6xl font-bold text-pink-400 mb-6">
          {project.title}
        </h1>
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-96 object-cover rounded-2xl mb-8 border border-pink-600/30 hover-glow transition-all duration-300"
        />
      </div>

      {/* Project Details Grid */}
      <div className="grid md:grid-cols-3 gap-8 mb-16 animate-fadeInUp">
        <div className="glass-effect rounded-xl p-6 border-pink-600/30 hover-lift transition-smooth">
          <h3 className="text-pink-400 font-semibold mb-2">Duration</h3>
          <p className="text-gray-300">{details.duration}</p>
        </div>
        <div className="glass-effect rounded-xl p-6 border-pink-600/30 hover-lift transition-smooth">
          <h3 className="text-pink-400 font-semibold mb-2">Team Size</h3>
          <p className="text-gray-300">{details.teamSize}</p>
        </div>
        <div className="glass-effect rounded-xl p-6 border-pink-600/30 hover-lift transition-smooth">
          <h3 className="text-pink-400 font-semibold mb-2">Impact</h3>
          <p className="text-gray-300">{details.impact}</p>
        </div>
      </div>

      {/* Full Description */}
      <div className="mb-16 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-pink-400 mb-4">Overview</h2>
        <p className="text-gray-300 text-lg leading-relaxed">
          {details.fullDescription}
        </p>
      </div>

      {/* Key Features */}
      <div className="mb-16 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-pink-400 mb-6">Key Features</h2>
        <div className="grid md:grid-cols-2 gap-4">
          {details.keyFeatures.map((feature, index) => (
            <div
              key={index}
              className="glass-effect rounded-lg p-4 border-pink-600/30 flex items-start gap-3 hover-lift transition-smooth"
              style={{
                animationDelay: `${index * 0.05}s`,
              }}
            >
              <span className="text-pink-400 text-xl mt-1 flex-shrink-0">✓</span>
              <p className="text-gray-300">{feature}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Technologies */}
      <div className="mb-16 animate-fadeInUp">
        <h2 className="text-3xl font-bold text-pink-400 mb-6">Technologies Used</h2>
        <div className="flex flex-wrap gap-3">
          {details.technologies.map((tech, index) => (
            <span
              key={index}
              className="bg-gradient-to-r from-pink-500/20 to-purple-500/20 text-sm font-semibold text-pink-300 rounded-full px-4 py-2 border border-pink-500/30 hover-lift transition-smooth"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>

      {/* CTA Links */}
      <div className="flex gap-4 justify-center mb-16 animate-fadeInUp">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-pink-600 to-pink-700 hover:from-pink-500 hover:to-pink-600 text-white py-3 px-8 rounded-full font-bold transition-smooth hover-lift"
        >
          <FaGithub /> GitHub Repository
        </a>
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-purple-700 hover:from-purple-500 hover:to-purple-600 text-white py-3 px-8 rounded-full font-bold transition-smooth hover-lift"
        >
          <FaArrowUpRightFromSquare /> View Live
        </a>
      </div>
    </section>
  );
}

export default ProjectDetail;
