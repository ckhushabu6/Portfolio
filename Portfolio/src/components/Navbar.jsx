import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, X, Menu } from "lucide-react";
import { useState } from "react";


function Navbar({ darkMode, toggleDarkMode, activeSection }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skills", link: "#skills" },
    { name: "Education", link: "#education" },
    { name: "Projects", link: "#projects" },
    { name: "Contact", link: "#contact" },
  ];

  const colors = darkMode
    ? {
        navBg: "bg-gradient-to-br from-gray-800 to-black",
        textPrimary: "text-white",
        textSecondary: "text-gray-300",
        textActive: "text-orange-400",
      }
    : {
        navBg: "bg-gradient-to-br from-orange-100 to-white",
        textPrimary: "text-gray-900",
        textSecondary: "text-gray-700",
        textActive: "text-orange-600",
      };

  return (
    <div className="fixed top-0 z-50 w-full flex justify-center px-4">
      <motion.nav
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={`relative w-full max-w-6xl ${colors.navBg}
        backdrop-blur-lg rounded-2xl px-6 py-3 shadow-lg`}
      >
        <div className="flex items-center justify-between">
         
          <a href="#home" className={`text-xl font-bold ${colors.textPrimary}`}>
             
           <span className="text-orange-500">Khushbu.Dev</span>
          </a>

          {/* Desktop */}
          <div className="hidden lg:flex gap-8">
            {navItems.map((item) => (
              <a key={item.name} href={item.link} className="relative">
                <span
                  className={`font-medium ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : `${colors.textSecondary} hover:text-orange-500`
                  }`}
                >
                  {item.name}
                </span>

                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-orange-500 to-amber-500"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right */}
          <div className="flex gap-3">
            <button onClick={toggleDarkMode}>
              {darkMode ? <Sun /> : <Moon />}
            </button>

            <button
              className="lg:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {/* Mobile */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div className="lg:hidden mt-4">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  onClick={() => setIsMenuOpen(false)}
                  className={`block py-2 text-center ${
                    activeSection === item.name.toLowerCase()
                      ? "text-orange-500"
                      : colors.textSecondary
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

export default Navbar;
