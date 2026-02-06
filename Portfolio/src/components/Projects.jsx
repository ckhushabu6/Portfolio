import React from "react";
import { Github, ExternalLink } from "lucide-react";

function Projects({ darkMode }) {
  const projects = [
    {
  title: "ImageHub - Creative Gallery",
  description:
    "A full-stack image management platform where users can upload, categorize, and discover visual assets with personalized recommendations.",
  points: [
    "Developed a secure authentication system using Firebase Auth for personalized user dashboards",
    "Integrated Cloudinary API for high-performance image hosting and automated asset transformation",
    "Implemented personalized 'Recommended For You' feed using Firestore query logic based on user interests",
    "Built a dynamic CRUD system allowing users to publish, organize by category, and manage image privacy",
    "Designed a modern, responsive UI with Tailwind CSS featuring skeleton loaders and an intuitive multi-step upload flow",
  ],
  tech: ["React", "Tailwind CSS", "Firebase", "Cloudinary", "Axios"],
  github: "https://github.com/ckhushabu6/ImageHub/tree/main/imagehub-entertainment", // Apna link yahan dalein
  live: "https://imagehub-v1.netlify.app", // Apna live demo link yahan dalein
},
    {
      title: "AI Travel Planner",
      description:
        "AI-powered travel itinerary generator that creates personalized trip plans based on user preferences.",
      points: [
        "Integrated Google Gemini API for intelligent itinerary generation",
        "Used Google Places API for location search and destination images",
        "Implemented Firebase Authentication with Google login",
        "Built a dynamic multi-step form for budget, duration, and group size",
        "Optimized routing and data fetching for real-time trip views",
      ],
      tech: ["React", "Tailwind CSS", "Gemini API", "Firebase"],
      github: "https://github.com/ckhushabu6/Travel-Itinerary-Planning-Tool-my-react-project-/tree/main/ai-travel-planner",
      // live: "#",
    },
    {
      title: "Interactive Portfolio",
      description:
        "High-performance personal portfolio showcasing projects, skills, and experience.",
      points: [
        "Built smooth micro-interactions using Framer Motion",
        "Implemented AOS for scroll-based animations",
        "Ensured full mobile responsiveness and cross-browser compatibility",
        "Used modular component architecture for scalability",
      ],
      tech: ["React", "Tailwind CSS", "Framer Motion", "AOS"],
      github: "https://github.com/ckhushabu6/Portfolio/tree/main/Portfolio/",
      live: "https://khushbu-dev.netlify.app",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 transition-colors duration-300"
      style={{
        backgroundColor: darkMode ? "#0f172a" : "#f9fafb",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className={`text-3xl sm:text-4xl font-bold mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto text-sm sm:text-base leading-relaxed"
            style={{ color: darkMode ? "#cbd5f5" : "#64748b" }}
          >
            Selected projects demonstrating real-world problem solving and technical proficiency.
          </p>
        </div>

        {/* Project Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group rounded-2xl border p-6 sm:p-8 transition-all duration-300
              hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)] flex flex-col"
              style={{
                background: darkMode
                  ? "linear-gradient(to bottom right, #1e293b, #020617)"
                  : "linear-gradient(to bottom right, #ffffff, #f1f5f9)",
                borderColor: darkMode ? "#334155" : "#e5e7eb",
              }}
            >
              {/* Title */}
              <h3
                className="text-xl sm:text-2xl font-bold mb-3"
                style={{ color: darkMode ? "white" : "#0f172a" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="mb-4 text-sm sm:text-base leading-relaxed"
                style={{ color: darkMode ? "#cbd5e1" : "#475569" }}
              >
                {project.description}
              </p>

              {/* Bullet Points */}
              <ul className="mb-6 space-y-2 flex-grow">
                {project.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-xs sm:text-sm flex items-start"
                    style={{ color: darkMode ? "#94a3b8" : "#475569" }}
                  >
                    <span className="text-orange-500 mr-2 mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0 bg-orange-500"></span>
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-[10px] sm:text-xs font-bold rounded-full
                    bg-orange-500/10 text-orange-500 border border-orange-500/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-6 mt-auto pt-4 border-t border-orange-500/10">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold
                  text-orange-500 hover:text-orange-600 transition-colors"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-bold
                  text-orange-500 hover:text-orange-600 transition-colors"
                >
                  <ExternalLink className="w-4 h-4" /> Live Demo
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;