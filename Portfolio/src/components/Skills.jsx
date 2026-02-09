import React from "react";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiRedux,
  SiTailwindcss,
  SiFramer,
  SiNodedotjs, // Added Node.js
  SiExpress,   // Added Express
  SiMongodb    // Added MongoDB
} from "react-icons/si";

function Skills({ darkMode }) {
  const skills = [
    { name: "HTML", icon: SiHtml5, color: "text-orange-500" },
    { name: "CSS", icon: SiCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: SiJavascript, color: "text-yellow-400" },
    { name: "React", icon: SiReact, color: "text-cyan-400" },
    { name: "Redux / Toolkit", icon: SiRedux, color: "text-purple-500" },
    { name: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-400" },
    { name: "Node.js", icon: SiNodedotjs, color: "text-green-500" },
    { name: "Express", icon: SiExpress, color: darkMode ? "text-white" : "text-gray-800" },
    { name: "MongoDB", icon: SiMongodb, color: "text-green-600" },
    { name: "Framer Motion", icon: SiFramer, color: "text-pink-500" }
  ];

  return (
    <section
      id="skills"
      className={`py-20 ${
        darkMode ? "bg-gray-900" : "bg-gray-50"
      } transition-colors`}
    >
      <div className="container mx-auto px-6">
        {/* Header */}
        <div className="text-center mb-14">
          <h2
            className={`text-4xl font-bold mb-3 ${
              darkMode ? "text-white" : "text-gray-900"
            }`}
          >
            Skills
          </h2>
          <p
            className={`max-w-xl mx-auto ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Technologies I use to build modern full-stack web applications.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-6">
          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className={`group flex flex-col items-center justify-center p-6 rounded-2xl border transition-all duration-300 hover:-translate-y-2 ${
                  darkMode
                    ? "bg-gray-800 border-gray-700 hover:border-orange-500/40"
                    : "bg-white border-gray-200 hover:border-orange-500/40"
                }`}
              >
                <Icon
                  className={`text-5xl mb-4 ${skill.color} group-hover:scale-110 transition-transform`}
                />

                <span
                  className={`font-medium ${
                    darkMode ? "text-gray-200" : "text-gray-800"
                  }`}
                >
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;