import React from "react";
import { User, Rocket, Cpu, Code2, CheckCircle2, Database, Layers } from "lucide-react";

function About({ darkMode }) {
  const coreValues = [
    {
      icon: <Layers size={20} />,
      title: "Full Stack Architecture",
      desc: "Designing seamless integration between frontend interfaces and robust backend logic.",
    },
    {
      icon: <Database size={20} />,
      title: "Efficient Data Management",
      desc: "Architecting optimized database schemas and RESTful APIs for high-performance applications.",
    },
    {
      icon: <Code2 size={20} />,
      title: "Scalable Systems",
      desc: "Building maintainable, end-to-end solutions that grow with business requirements.",
    },
    {
      icon: <Rocket size={20} />,
      title: "Optimized Delivery",
      desc: "Ensuring speed and reliability across the entire software development lifecycle.",
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

          {/* LEFT: CORE VALUES GRID */}
          <div
            data-aos="fade-right"
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
            {coreValues.map((value, index) => (
              <div
                key={index}
                className={`p-8 rounded-2xl border transition-all hover:border-orange-500/50 ${
                  darkMode
                    ? "bg-gray-800/40 border-gray-700"
                    : "bg-gray-50 border-gray-200 shadow-sm"
                }`}
              >
                <div className="w-12 h-12 rounded-xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-5">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold mb-2">{value.title}</h4>
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

          {/* RIGHT: CONTENT */}
          <div
            data-aos="fade-left"
            className="text-center lg:text-left flex flex-col items-center lg:items-start"
          >
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-orange-500 mb-6 bg-orange-500/10 px-3 py-1 rounded-full">
              <User size={14} />
              The Developer
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">
              Full Stack <br />
              <span className="text-orange-500">Developer</span>
            </h2>

            <div
              className={`space-y-6 text-base md:text-lg leading-relaxed max-w-xl ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              <p>
                I am{" "}
                <span
                  className={`font-bold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  Khushabu Chauhan
                </span>
                , a Full Stack Developer dedicated to building comprehensive digital solutions. I bridge the gap between complex backend architectures and intuitive, responsive frontends.
              </p>
              
              <p>
                With a focus on the **MERN stack**, I enjoy solving problems at every layer of the application, ensuring that user experience and server-side performance work in perfect harmony.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 pt-4">
                {[
                  "JavaScript (ES6+) & Node.js",
                  "React ",
                  "MongoDB ",
                  "RESTful API Development",
                  "State Management (Redux)",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm font-semibold"
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
                className="inline-flex items-center px-10 py-4 rounded-xl bg-orange-500 text-white font-bold hover:bg-orange-600 transition-all shadow-lg shadow-orange-500/20 active:scale-95"
              >
                Explore Portfolio
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;