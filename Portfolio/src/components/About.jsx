import React from "react";
import { User, Rocket, Cpu, Code2, CheckCircle2 } from "lucide-react";

function About({ darkMode }) {
  const coreValues = [
    {
      icon: <Rocket size={20} />,
      title: "Performance-Oriented",
      desc: "Focused on building fast, efficient, and optimized user interfaces.",
    },
    {
      icon: <Cpu size={20} />,
      title: "Scalable Architecture",
      desc: "Designing maintainable frontend structures that scale with product needs.",
    },
    {
      icon: <Code2 size={20} />,
      title: "Clean Code Practices",
      desc: "Writing readable, reusable, and well-structured codebases.",
    },
    {
      icon: <User size={20} />,
      title: "User-Centered Approach",
      desc: "Balancing technical requirements with usability and accessibility.",
    },
  ];

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center py-24 transition-colors duration-300 ${
        darkMode ? "bg-[#0f172a] text-white" : "bg-white text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto w-full px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

          {/* LEFT */}
          <div
            data-aos="fade-right"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border ${
                  darkMode
                    ? "bg-gray-800/40 border-gray-700"
                    : "bg-gray-50 border-gray-200"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-5">
                  {value.icon}
                </div>
                <h4 className="text-lg font-semibold mb-2">{value.title}</h4>
                <p
                  className={`text-sm leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-600"
                  }`}
                >
                  {value.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT */}
          <div
            data-aos="fade-left"
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-orange-500 mb-6">
              <User size={14} />
              About Me
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-8">
              Frontend Engineer
            </h2>

            <div
              className={`space-y-6 text-base leading-relaxed max-w-xl ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <p>
                I am{" "}
                <span
                  className={`font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Khushabu Chauhan
                </span>
                , a frontend engineer focused on building reliable, scalable, and
                user-focused web applications.
                I build modern interfaces using React and related technologies,
                with an emphasis on performance, maintainability, and clean
                design systems.
              </p>

              

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 pt-4">
                {[
                  "JavaScript (ES6+)",
                  "React Ecosystem",
                  "Tailwind CSS",
                  "Responsive & Accessible UI",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-medium "
                  >
                    <CheckCircle2 size={18} className="text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-10">
              <a
                href="#projects"
                className="inline-flex items-center px-8 py-3 rounded-xl border border-orange-500 text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all"
              >
                View Projects
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
