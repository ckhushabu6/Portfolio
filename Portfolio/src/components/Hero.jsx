import insta from "../assets/insta.png";
import youtube from "../assets/youtube.png";
import tiktok from "../assets/tiktok.png";
import github from "../assets/github.png";
import linkedin from "../assets/linkedin.png";
import home from "../assets/skilles.png";
import CV from "../assets/CV.pdf";
import { DownloadIcon, Mail } from "lucide-react";

function Hero({ darkMode }) {
  const socialIcons = [
    { icon: linkedin, alt: "LinkedIn", link: "https://linkedin.com" },
    { icon: github, alt: "GitHub", link: "https://github.com" },
    { icon: insta, alt: "Instagram", link: "https://instagram.com" },
    
  ];

  const theme = darkMode
    ? {
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
      }
    : {
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-700",
      };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center "
    >
      <div className="container mx-auto px-6 lg:px-16">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-14">

          {/* LEFT */}
          <div className="w-full lg:w-1/2 text-center lg:text-left">

            {/* Social */}
            <div 
             data-aos="fade-up"
              data-aos-delay="300"
            className="flex justify-center lg:justify-start gap-5 mb-6">
              {socialIcons.map((social) => (
                <a
                  key={social.alt}
                  href={social.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:scale-110 transition-transform"
                >
                  <img
                    src={social.icon}
                    alt={social.alt}
                    className="w-9 h-9 object-contain"
                  />
                </a>
              ))}
            </div>

            {/* Heading */}
            <h1
             data-aos="fade-up"
              data-aos-delay="300"
              className={`text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 ${theme.textPrimary}`}
            >
              Hi, I’m{" "}
              <span className="text-orange-500">Khushabu</span>
            </h1>

            {/* Role */}
            <h2
             data-aos="fade-up"
              data-aos-delay="300"
              className={`text-xl sm:text-2xl font-semibold mb-4 ${theme.textSecondary}`}
            >
              Frontend Developer | React & Tailwind CSS
            </h2>

            {/* Description */}
            <p
             data-aos="fade-up"
              data-aos-delay="400"
              className={`max-w-xl mx-auto lg:mx-0 mb-8 text-base sm:text-lg leading-relaxed ${theme.textSecondary}`}
            >
              I build modern, responsive, and user-focused web applications.
              Passionate about clean UI, smooth animations, and scalable
              frontend architecture.
            </p>

            {/* Buttons */}
            <div 
             data-aos="fade-up"
              data-aos-delay="300"
            className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
              <a href={CV} download>
                <button
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                  bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold
                  hover:shadow-[0_0_35px_rgba(255,165,0,0.6)] transition"
                >
                  <DownloadIcon className="w-5 h-5" />
                  Download Resume
                </button>
              </a>

              <a href="#contact">
                <button
                  className="inline-flex items-center gap-2 px-8 py-3 rounded-full
                  border-2 border-orange-500 text-orange-500 font-semibold
                  hover:bg-orange-500 hover:text-white transition"
                >
                  <Mail className="w-5 h-5" />
                  Contact Me
                </button>
              </a>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="w-full lg:w-1/2 flex justify-center"
           data-aos="fade-up"
              data-aos-delay="300"
          >
            <img
              src={home}
              alt="Developer Illustration"
              className="max-w-xs sm:max-w-sm lg:max-w-md
              hover:scale-105 transition-transform duration-500"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
