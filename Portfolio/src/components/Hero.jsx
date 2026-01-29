import React from "react";
import CV from "../assets/CV.pdf";
import { DownloadIcon, Mail, Github, Linkedin, Instagram, Code2, Terminal } from "lucide-react";

function Hero({ darkMode }) {
  const socialIcons = [
    { icon: <Linkedin size={22} />, alt: "LinkedIn", link: "https://www.linkedin.com/in/khushabu-chauhan-58672b281/" },
    { icon: <Github size={22} />, alt: "GitHub", link: "https://github.com/ckhushabu6" },
    { icon: <Instagram size={22} />, alt: "Instagram", link: "https://instagram.com" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-28 pb-20 lg:py-0 overflow-hidden transition-colors duration-300"
      style={{ backgroundColor: darkMode ? "#0f172a" : "#f8fafc" }}
    >
      {/* Background Decorative Glow */}
      <div className="absolute top-1/4 -left-20 w-72 h-72 bg-orange-500/10 blur-[120px] rounded-full"></div>
      <div className="absolute bottom-1/4 -right-20 w-72 h-72 bg-amber-500/10 blur-[120px] rounded-full"></div>

      <div className="container mx-auto px-6 lg:px-16 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-14">
          
          {/* LEFT CONTENT */}
          <div className="w-full lg:w-3/5 text-center lg:text-left">
            {/* Social Icons */}
            <div 
              data-aos="fade-down"
              className="flex justify-center lg:justify-start gap-4 mb-8"
            >
              {socialIcons.map((social, idx) => (
                <a
                  key={idx}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-2.5 rounded-xl transition-all duration-300 hover:scale-110 hover:-translate-y-1 ${
                    darkMode 
                    ? "bg-gray-800 text-gray-400 hover:text-orange-500 border border-gray-700" 
                    : "bg-white text-gray-600 hover:text-orange-500 border border-gray-200 shadow-sm"
                  }`}
                >
                  {social.icon}
                </a>
              ))}
            </div>

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

            {/* Role */}
            <div 
               data-aos="fade-right"
               data-aos-delay="100"
               className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-500 font-bold text-sm sm:text-base mb-6"
            >
              <Terminal size={18} />
              Frontend Developer | React Specialist
            </div>

            {/* Description */}
            <p
              data-aos="fade-right"
              data-aos-delay="200"
              className={`max-w-xl mx-auto lg:mx-0 mb-10 text-base sm:text-lg leading-relaxed ${
                darkMode ? "text-gray-400" : "text-gray-600"
              }`}
            >
              I specialize in crafting high-performance, visually stunning web experiences. 
              Turning complex problems into elegant, user-friendly frontend solutions.
            </p>

            {/* Action Buttons */}
            <div 
              data-aos="fade-up"
              data-aos-delay="300"
              className="flex flex-col sm:flex-row justify-center lg:justify-start gap-5"
            >
              <a href={CV} download className="w-full sm:w-auto">
                <button className="w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 text-white font-bold hover:shadow-lg hover:shadow-orange-500/30 transition-all active:scale-95">
                  <DownloadIcon size={20} />
                  Download CV
                </button>
              </a>

              <a href="#contact" className="w-full sm:w-auto">
                <button className={`w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-4 rounded-2xl font-bold border-2 transition-all active:scale-95 ${
                  darkMode 
                  ? "border-gray-700 text-white hover:bg-gray-800" 
                  : "border-gray-200 text-gray-900 hover:bg-gray-50 shadow-sm"
                }`}>
                  <Mail size={20} />
                  Let's Talk
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT CONTENT: PROFESSIONAL CODE CARD (REPLACED IMAGE) */}
          <div 
            className="w-full lg:w-2/5 relative"
            data-aos="zoom-in"
            data-aos-delay="400"
          >
            <div className={`relative p-6 rounded-3xl border backdrop-blur-sm transition-all duration-500 hover:rotate-2 ${
              darkMode 
              ? "bg-gray-900/50 border-gray-700 shadow-2xl" 
              : "bg-white border-gray-200 shadow-xl"
            }`}>
              {/* Card Header (Mac Style) */}
              <div className="flex gap-2 mb-6">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-amber-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>

              {/* Code Content */}
              <div className="font-mono text-sm sm:text-base space-y-2">
                <p className="text-purple-500">const <span className="text-blue-500">developer</span> = &#123;</p>
                <p className="pl-4 text-gray-500">name: <span className="text-orange-500">'Khushabu'</span>,</p>
                <p className="pl-4 text-gray-500">role: <span className="text-orange-500">'Frontend Dev'</span>,</p>
                <p className="pl-4 text-gray-500">skills: [</p>
                <p className="pl-8 text-orange-500">'React', 'Tailwind',</p>
                <p className="pl-8 text-orange-500">'Javascript', 'Next.js'</p>
                <p className="pl-4 text-gray-500">],</p>
                <p className="pl-4 text-gray-500">passionate: <span className="text-green-500">true</span></p>
                <p className="text-purple-500">&#125;;</p>
              </div>

              {/* Decorative Icon */}
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