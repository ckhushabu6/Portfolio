import React from "react";

function Education({ darkMode }) {
  const educationData = [
    {
      degree: "Software Engineering",
      institute: "Masai School",
      year: "2026",
      highlight: "Full-stack development, DSA, real-world projects",
    },
    {
      degree: "Master of Computer Applications (MCA)",
      institute: "K.K. Wagh Institute of Engineering Education & Research",
      year: "2023 – 2025",
      highlight: "Advanced programming, software engineering concepts",
    },
    {
      degree: "Bachelor of Computer Science (BCS)",
      institute: "G.M.D. Arts, B.W. Commerce & Science College",
      year: "2019 – 2022",
      highlight: "Core computer science fundamentals",
    },
    {
      degree: "Higher Secondary (11th & 12th)",
      institute: "G.M.D. Arts, B.W. Commerce & Science College",
      year: "2017 – 2019",
      highlight: "Science stream",
    },
    {
      degree: "Secondary School (10th)",
      institute: "Shree English Medium School, Sinner",
      year: "2017",
      highlight: "Strong academic foundation",
    },
  ];

  return (
    <section
      id="education"
      className="py-20"
      style={{
        backgroundColor: darkMode ? "#111827" : "#f9fafb",
      }}
    >
      <div className="max-w-5xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-16" data-aos="fade-up">
          <h2 className="text-3xl sm:text-4xl font-bold mb-3">
            My{" "}
            <span
              style={{
                background: "linear-gradient(to right, #f97316, #f59e0b)",
                WebkitBackgroundClip: "text",
                color: "transparent",
              }}
            >
              Education
            </span>
          </h2>
          <p
            className="max-w-xl mx-auto"
            style={{ color: darkMode ? "#d1d5db" : "#6b7280" }}
          >
            Academic journey that shaped my technical foundation
          </p>
        </div>

        {/* Timeline */}
        <div className="relative border-l-2 border-orange-500/40">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="mb-12 ml-6"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              {/* Dot */}
              <span className="absolute -left-[9px] w-4 h-4 rounded-full bg-orange-500"></span>

              {/* Card */}
              <div
                className="p-6 rounded-xl border shadow-md"
                style={{
                  background: darkMode
                    ? "linear-gradient(to bottom right, #1f2937, #111827)"
                    : "linear-gradient(to bottom right, #ffffff, #f3f4f6)",
                  borderColor: darkMode ? "#374151" : "#e5e7eb",
                }}
              >
                <span className="text-sm font-semibold text-orange-500">
                  {edu.year}
                </span>
                <h3
                  className="text-xl font-bold mt-1"
                  style={{ color: darkMode ? "white" : "#1f2937" }}
                >
                  {edu.degree}
                </h3>
                <p
                  className="mt-1 font-medium"
                  style={{ color: darkMode ? "#d1d5db" : "#4b5563" }}
                >
                  {edu.institute}
                </p>
                <p
                  className="mt-3 text-sm"
                  style={{ color: darkMode ? "#9ca3af" : "#6b7280" }}
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
