import React from "react";

function Education({ darkMode }) {
  const educationData = [
    {
      degree: "Software Engineering Program",
      institute: "Masai School",
      year: "2026",
      highlight: "Hands-on training in full-stack development, data structures, and production-grade projects",
    },
    {
      degree: "Master of Computer Applications (MCA)",
      institute: "K.K. Wagh Institute of Engineering Education & Research",
      year: "2023 – 2025",
      highlight: "Advanced coursework in software engineering and application development",
    },
    {
      degree: "Bachelor of Computer Science (BCS)",
      institute: "G.M.D. Arts, B.W. Commerce & Science College",
      year: "2019 – 2022",
      highlight: "Strong foundation in core computer science concepts",
    }
  ];

  return (
    <section
      id="education"
      className={`py-20 transition-colors duration-300 ${
        darkMode ? "bg-[#111827] text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            Education
          </h2>
          <p
            className={`max-w-xl mx-auto text-base sm:text-lg ${
              darkMode ? "text-gray-400" : "text-gray-600"
            }`}
          >
            Academic background supporting my engineering skill set
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l border-orange-500/40 ml-2 sm:ml-4">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="mb-12 ml-6 sm:ml-8"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Timeline Dot */}
              <span className="absolute -left-[7px] w-3.5 h-3.5 rounded-full bg-orange-500" />

              {/* Content Card */}
              <div
                className={`p-6 rounded-xl border transition-colors ${
                  darkMode
                    ? "bg-gray-800/40 border-gray-700"
                    : "bg-white border-gray-200"
                }`}
              >
                <span className="text-xs font-semibold text-orange-500 uppercase tracking-wide">
                  {edu.year}
                </span>

                <h3 className="text-lg sm:text-xl font-semibold mt-1">
                  {edu.degree}
                </h3>

                <p
                  className={`mt-1 text-sm sm:text-base font-medium ${
                    darkMode ? "text-gray-300" : "text-gray-600"
                  }`}
                >
                  {edu.institute}
                </p>

                <p
                  className={`mt-3 text-sm leading-relaxed ${
                    darkMode ? "text-gray-400" : "text-gray-500"
                  }`}
                >
                  {edu.highlight}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}

export default Education;
