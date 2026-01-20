import React from "react";
import { Github, ExternalLink } from "lucide-react";

function Projects({ darkMode }) {
  const projects = [
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
      github: "https://github.com/",
      live: "#",
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
      github: "https://github.com/",
      live: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20"
      style={{
        backgroundColor: darkMode ? "#0f172a" : "#f9fafb",
      }}
    >
      <div className="max-w-6xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Projects
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? "#cbd5f5" : "#64748b" }}
          >
            Selected projects demonstrating real-world problem solving
          </p>
        </div>

        {/* Project Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              data-aos="fade-up"
              data-aos-delay={index * 100}
              className="group rounded-2xl border p-6 transition-all duration-300
              hover:-translate-y-2 hover:shadow-[0_0_40px_rgba(249,115,22,0.15)]"
              style={{
                background: darkMode
                  ? "linear-gradient(to bottom right, #1e293b, #020617)"
                  : "linear-gradient(to bottom right, #ffffff, #f1f5f9)",
                borderColor: darkMode ? "#334155" : "#e5e7eb",
              }}
            >
              {/* Title */}
              <h3
                className="text-2xl font-bold mb-2"
                style={{ color: darkMode ? "white" : "#0f172a" }}
              >
                {project.title}
              </h3>

              {/* Description */}
              <p
                className="mb-4 text-sm"
                style={{ color: darkMode ? "#cbd5e1" : "#475569" }}
              >
                {project.description}
              </p>

              {/* Bullet Points */}
              <ul className="mb-5 space-y-2 list-disc list-inside">
                {project.points.map((point, i) => (
                  <li
                    key={i}
                    className="text-sm"
                    style={{ color: darkMode ? "#94a3b8" : "#475569" }}
                  >
                    {point}
                  </li>
                ))}
              </ul>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-5">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 text-xs font-semibold rounded-full
                    bg-orange-500/10 text-orange-500"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold
                  text-orange-500 hover:underline"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>

                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm font-semibold
                  text-orange-500 hover:underline"
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
