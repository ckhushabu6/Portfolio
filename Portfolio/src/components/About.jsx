import React from "react";
import { User, Rocket, Cpu, Sparkles, CheckCircle2, Code2 } from "lucide-react";

function About({ darkMode }) {
  const coreValues = [
    { icon: <Rocket size={20} />, title: "Performance First", desc: "Writing optimized code that ensures lightning-fast load times." },
    { icon: <Cpu size={20} />, title: "Clean Architecture", desc: "Building scalable and maintainable frontend structures." },
    { icon: <Sparkles size={20} />, title: "Modern UI/UX", desc: "Creating intuitive interfaces with smooth, purposeful animations." },
    { icon: <Code2 size={20} />, title: "Problem Solver", desc: "Turning complex requirements into simple, functional reality." },
  ];

  return (
    <section
      id="about"
      className={`min-h-screen flex items-center px-6 py-24 transition-colors duration-300
      ${darkMode ? "bg-[#0f172a] text-white" : "bg-white text-gray-900"}`}
    >
      <div className="max-w-6xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: PROFESSIONAL COMPETENCIES (REPLACED PHOTO) */}
          <div data-aos="fade-right" className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {coreValues.map((value, index) => (
              <div 
                key={index}
                className={`p-8 rounded-3xl border transition-all duration-300 hover:-translate-y-2 ${
                  darkMode 
                  ? "bg-gray-800/30 border-gray-700 hover:border-orange-500/50 hover:bg-gray-800/50" 
                  : "bg-gray-50 border-gray-100 hover:border-orange-500/30 hover:bg-white hover:shadow-xl"
                }`}
              >
                <div className="w-12 h-12 rounded-2xl bg-orange-500/10 flex items-center justify-center text-orange-500 mb-5">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-3">{value.title}</h4>
                <p className={`text-sm leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
                  {value.desc}
                </p>
              </div>
            ))}
          </div>

          {/* RIGHT SIDE: CONTENT */}
          <div data-aos="fade-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 text-orange-500 text-xs font-bold tracking-widest uppercase mb-8">
              <User size={14} />
              Professional Narrative
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 leading-[1.1]">
              Engineering User <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Centric Solutions
              </span>
            </h2>

            <div className={`space-y-6 text-lg leading-relaxed ${darkMode ? "text-gray-400" : "text-gray-600"}`}>
              <p>
                I am <span className={`font-bold ${darkMode ? "text-white" : "text-gray-900"}`}>Khushabu Chauhan</span>, 
                a Frontend Engineer dedicated to bridge the gap between complex backend logic and pixel-perfect user interfaces.
              </p>
              
              <p>
                Currently specializing in the React ecosystem at <span className="text-orange-500 font-bold">Masai School</span>, 
                I focus on building applications that are not just visually striking, but robust and highly performant.
              </p>

              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 pt-4">
                {['Modern JavaScript (ES6+)', 'React & Redux', 'Tailwind CSS', 'Responsive Design'].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm font-semibold">
                    <CheckCircle2 size={18} className="text-orange-500" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="mt-12">
              <a 
                href="#projects" 
                className="inline-flex items-center gap-4 px-10 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-2xl transition-all shadow-lg shadow-orange-500/25 hover:shadow-orange-500/40 active:scale-95"
              >
                View My Work
                <div className="w-6 h-px bg-white/40"></div>
                <span className="text-sm">Explore Projects</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;