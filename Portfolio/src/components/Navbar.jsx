import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, X, Menu } from "lucide-react";

function Navbar({ darkMode, toggleDarkMode }) {
  const [activeSection, setActiveSection] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", link: "#home" },
    { name: "About", link: "#about" },
    { name: "Skill", link: "#skills" },
    { name: "Projects", link: "#projects" },
    { name: "Contacts", link: "#contact" },
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

  const handleNavClick = (name) => {
    setActiveSection(name.toLowerCase());
    setIsMenuOpen(false);
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
        {/* Navbar Content */}
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.a href="#home" whileHover={{ scale: 1.05 }}>
            <span className={`text-xl font-bold ${colors.textPrimary}`}>
              Portfolio<span className="text-orange-500">.</span>
            </span>
          </motion.a>

          {/* Desktop Links */}
          <div className="hidden lg:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.link}
                onClick={() => handleNavClick(item.name)}
                className="relative"
              >
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  className={`font-medium transition-colors
                  ${
                    activeSection === item.name.toLowerCase()
                      ? colors.textActive
                      : `${colors.textSecondary} hover:text-orange-500`
                  }`}
                >
                  {item.name}
                </motion.span>

                {activeSection === item.name.toLowerCase() && (
                  <motion.div
                    layoutId="nav-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 rounded-full bg-gradient-to-r from-orange-500 to-amber-500"
                  />
                )}
              </a>
            ))}
          </div>

          {/* Right Section */}
          <div className="flex items-center gap-3">
            {/* Theme Toggle */}
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={toggleDarkMode}
              className={`p-2 rounded-full ${
                darkMode ? "bg-gray-700" : "bg-gray-200"
              }`}
            >
              {darkMode ? (
                <Sun className="w-5 h-5 text-yellow-300" />
              ) : (
                <Moon className="w-5 h-5 text-gray-700" />
              )}
            </motion.button>

            {/* Hire Me Button */}
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              className="hidden lg:block px-6 py-2 rounded-full font-semibold
              bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-md"
            >
              Hire Me
            </motion.a>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="lg:hidden p-2"
            >
              {isMenuOpen ? (
                <X className={darkMode ? "text-white" : "text-gray-800"} />
              ) : (
                <Menu className={darkMode ? "text-white" : "text-gray-800"} />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className={`lg:hidden mt-4 rounded-xl shadow-lg
              ${darkMode ? "bg-gray-900" : "bg-white"}`}
            >
              <div className="flex flex-col gap-2 p-4">
                {navItems.map((item) => (
                  <a
                    key={item.name}
                    href={item.link}
                    onClick={() => handleNavClick(item.name)}
                    className={`py-2 text-center rounded-lg
                    ${
                      activeSection === item.name.toLowerCase()
                        ? "bg-orange-100 text-orange-600"
                        : colors.textSecondary
                    }`}
                  >
                    {item.name}
                  </a>
                ))}
                <a
                  href="#contact"
                  className="mt-2 py-2 rounded-lg text-center font-semibold
                  bg-gradient-to-r from-orange-500 to-amber-500 text-white"
                >
                  Hire Me
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

export default Navbar;
