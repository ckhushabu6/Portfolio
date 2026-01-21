import React from "react";
import { Linkedin, Github, Instagram } from "lucide-react";

function Footer({ darkMode }) {
  return (
    <footer
      style={{
        background: darkMode
          ? "linear-gradient(to bottom, #000000, #111827)"
          : "linear-gradient(to bottom, #f3f4f6, #e5e7eb)",
        borderColor: darkMode ? "#374151" : "#d1d5db",
      }}
      className="border-t"
    >
      <div className="container mx-auto px-4 py-10">
        <div className="flex flex-col items-center justify-center gap-6 text-center">

          {/* Title */}
          <div>
            <h3 className="text-2xl font-bold mb-2 text-orange-500">
              Portfolio
            </h3>
            <p
              className="text-sm"
              style={{
                color: darkMode ? "#9ca3af" : "#6b7280",
              }}
            >
              Made by Khushabu
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex gap-4 justify-center">
            <a
              href="https://github.com/ckhushabu6"
              className="w-10 h-10 rounded-full flex items-center justify-center
              bg-gray-700 text-white hover:scale-110 transition-all
              hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500"
            >
              <Github className="w-5 h-5" />
            </a>

            <a
              href="https://www.linkedin.com/in/khushabu-chauhan-58672b281/"
              className="w-10 h-10 rounded-full flex items-center justify-center
              bg-gray-700 text-white hover:scale-110 transition-all
              hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500"
            >
              <Linkedin className="w-5 h-5" />
            </a>

            <a
              href="#"
              className="w-10 h-10 rounded-full flex items-center justify-center
              bg-gray-700 text-white hover:scale-110 transition-all
              hover:bg-gradient-to-r hover:from-orange-500 hover:to-amber-500"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>

          {/* Copyright */}
          <div>
            <p
              className="text-xs"
              style={{
                color: darkMode ? "#9ca3af" : "#6b7280",
              }}
            >
              © {new Date().getFullYear()} Khushabu. All rights reserved.
            </p>
          </div>

        </div>
      </div>
    </footer>
  );
}

export default Footer;
