import React from "react";
import aboutImg from "../assets/home.png";

function About({ darkMode }) {
  return (
    <section
       id="about"
      className={`min-h-screen flex items-center px-4 sm:px-6 py-20
      ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        {/* IMAGE */}
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          className="flex justify-center order-2 lg:order-1"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div
              className="absolute -inset-10 lg:-inset-20 
              bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 
              rounded-3xl blur-2xl opacity-30"
            />
            <img
              src={aboutImg}
              alt="About"
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </div>

        {/* CONTENT */}
        <div
          className="order-1 lg:order-2 text-center lg:text-left"
          data-aos="fade-up"
          data-aos-delay="300"
        >
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-6
            ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            About Me
          </h2>

          <p
            className={`text-base sm:text-lg leading-relaxed mb-5
            ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            I am a frontend developer specializing in building modern,
            responsive, and scalable web applications using{" "}
            <span className="text-orange-500 font-semibold">
              React and Tailwind CSS
            </span>.
            I focus on writing clean, maintainable code and delivering
            user-friendly interfaces.
          </p>

          <p
            className={`text-base sm:text-lg leading-relaxed mb-6
            ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            Currently training as a software engineer at Masai School, I have
            hands-on experience building real-world projects involving API
            integration, authentication, and interactive UI animations. I enjoy
            solving problems and continuously improving my technical skills.
          </p>

          {/* HIGHLIGHTS */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-4 mb-8">
            {[
              "React Developer",
              "Clean UI/UX",
              "API Integration",
              "Responsive Design",
            ].map((item) => (
              <span
                key={item}
                className="px-4 py-2 text-sm font-semibold rounded-full
                bg-orange-500/10 text-orange-500"
              >
                {item}
              </span>
            ))}
          </div>

          <a href="#projects">
            <button
              className="px-8 py-3 rounded-xl font-semibold text-white
              bg-gradient-to-r from-orange-500 to-amber-500
              hover:shadow-lg hover:shadow-orange-500/40 transition-all"
            >
              View My Work
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default About;
