import React from "react";
import CV from "../assets/CV.pdf";
import { DownloadIcon, Mail, Code2, Terminal } from "lucide-react";

function Hero({ darkMode }) {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center pt-28 pb-20 lg:py-0 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: darkMode ? "#0f172a" : "#f8fafc" }}
    >
      {/* Background Glow */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-amber-500/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14">

          {/* LEFT CONTENT */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">

            {/* Heading */}
            <h1
              data-aos="fade-right"
              className={`text-4xl sm:text-6xl lg:text-7xl font-extrabold mb-6 leading-tight ${
                darkMode ? "text-white" : "text-gray-900"
              }`}
            >
              Hi, I’m <br />
              <span className="bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">
                Khushabu Chauhan
              </span>
            </h1>

            {/* Role badge */}
            <div
              data-aos="fade-right"
              data-aos-delay="100"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-semibold text-sm sm:text-base mb-6"
            >
              <Terminal size={18} />
              FullStack Developer
            </div>

            {/* Description */}
            <p
              data-aos="fade-up"
              data-aos-delay="200"
              className={`max-w-xl mx-auto lg:mx-0 text-base sm:text-lg leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              Building modern, scalable web interfaces.  
              Currently expanding into backend to become a full-stack developer.
            </p>

            {/* Buttons */}
            <div
              data-aos="fade-up"
              data-aos-delay="300"
              className="mt-10 flex flex-col sm:flex-row items-center sm:items-start justify-center lg:justify-start gap-5"
            >
              <a href={CV} download className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:shadow-lg hover:shadow-orange-500/30 transition-all active:scale-95">
                  <DownloadIcon size={20} />
                  Download CV
                </button>
              </a>

              <a href="#contact" className="w-full sm:w-auto">
                <button
                  className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold border-2 transition-all active:scale-95 ${
                    darkMode
                      ? "border-gray-700 text-white hover:bg-gray-800"
                      : "border-gray-200 text-gray-900 hover:bg-gray-50"
                  }`}
                >
                  <Mail size={20} />
                  Let’s Talk
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT – CODE CARD */}
          <div
            data-aos="zoom-in"
            data-aos-delay="400"
            className="w-full lg:w-2/5 relative"
          >
            <div
              className={`relative p-6 rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:rotate-1 ${
                darkMode
                  ? "bg-gray-900/50 border-gray-700 shadow-2xl"
                  : "bg-white border-gray-200 shadow-xl"
              }`}
            >
              {/* Mac header */}
              <div className="flex gap-2 mb-4">
                <span className="w-3 h-3 rounded-full bg-red-500"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500"></span>
                <span className="w-3 h-3 rounded-full bg-green-500"></span>
              </div>

              {/* Code */}
              <div
                className={`rounded-xl border p-4 font-mono text-xs sm:text-sm space-y-1 ${
                  darkMode
                    ? "bg-gray-900/60 border-gray-700"
                    : "bg-white/70 border-gray-200"
                }`}
              >
                <p className="text-purple-500">
                  const <span className="text-blue-500">developer</span> = &#123;
                </p>
                <p className="pl-3 text-gray-500">
                  name: <span className="text-orange-500">'Khushabu'</span>,
                </p>
                <p className="pl-3 text-gray-500">
                  focus: <span className="text-orange-500">'Frontend'</span>,
                </p>
                <p className="pl-3 text-gray-500">
                  stack: <span className="text-orange-500">['React','Redux','Tailwind']</span>,
                </p>
                <p className="pl-3 text-gray-500">
                  learning: <span className="text-orange-500">['Node','Express','MongoDB']</span>,
                </p>
                <p className="pl-3 text-gray-500">
                  goal: <span className="text-green-500">'Full Stack'</span>
                </p>
                <p className="text-purple-500">&#125;;</p>
              </div>

              {/* Icon */}
              <div className="absolute -bottom-6 -right-6 p-4 rounded-2xl bg-orange-500 text-white shadow-xl animate-bounce">
                <Code2 size={32} />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;
