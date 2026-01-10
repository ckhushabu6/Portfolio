import React from "react";
import aboutImg from "../assets/home.png"; // replace with your about image

function About({ darkMode }) {
  return (
    <>
    <section
      id="about"
      className={`min-h-screen overflow-hidden flex items-center px-4 sm:px-6
      ${darkMode ? "bg-gray-900" : "bg-gray-50"}`}
    >
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">

        {/* IMAGE SECTION */}
        <figure
          data-aos="fade-up"
          data-aos-delay="300"
          className="flex justify-center relative order-2 lg:order-1"
        >
          <div className="relative w-72 h-72 sm:w-80 sm:h-80 lg:w-96 lg:h-96">

            {/* Gradient Background Shape */}
            <div
              className="absolute -inset-10 lg:-inset-20 
              bg-gradient-to-r from-orange-500 via-orange-400 to-amber-500 
              star-shape"
            />

            {/* Image */}
            <img
              src={aboutImg}
              alt="About Me"
              className="relative z-10 w-full h-full object-cover rounded-2xl shadow-xl"
            />
          </div>
        </figure>

        {/* TEXT SECTION */}
        <div
          className="order-1 lg:order-2 text-center lg:text-left"
          data-aos="fade-up"
          data-aos-delay="400"
        >
          <h2
            className={`text-3xl sm:text-4xl font-bold mb-4
            ${darkMode ? "text-white" : "text-gray-900"}`}
          >
            About Me
          </h2>

          <p
            className={`text-base sm:text-lg leading-relaxed mb-6
            ${darkMode ? "text-gray-300" : "text-gray-700"}`}
          >
            I am a passionate front-end developer specializing in building
            modern, responsive, and visually appealing web applications using
            React and Tailwind CSS. I focus on clean UI, smooth user experience,
            and scalable code.
          </p>

          <p
            className={`text-base sm:text-lg leading-relaxed
            ${darkMode ? "text-gray-400" : "text-gray-600"}`}
          >
            My goal is to continuously grow as a developer while creating
            impactful digital products that solve real-world problems.
          </p>
            <button 
            className="bg-amber-500 text-white font-semibold
            rounded-xl px-8 py-4 mt-8 mb-8

            hover:bg-amber-600
            hover:shadow-lg 
            hover:shadow-amber-500/40
            transition-all duration-300
            focus:outline-none
            focus:ring-2 focus:ring-amber-400
           
            "
        data-aos = 'fade-up'
        data-aos-delay='100'
        >
          Learn More
        </button>
        </div>

      </div>
      
    </section>
    
    
        </>
  );
}

export default About;
