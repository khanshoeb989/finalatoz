"use client";

import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

// ✅ Import your logo from the public (or assets) folder
import logo from "@/assets/atozlogo.jpg"; // Works in Vite or CRA if image is in `public`

const Navbar1 = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  const toggleMenu = () => setIsOpen(!isOpen);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Products", path: "/products" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-1 sm:top-2 md:top-4 left-0 right-0 z-50 flex justify-center"
    >
      <motion.div
        className={`flex items-center justify-between px-4 sm:px-6 py-3 rounded-full w-[94%] sm:w-[90%] md:w-[80%] max-w-5xl transition-all duration-300 border border-border shadow-md
          ${
            isScrolled
              ? "bg-black/90 backdrop-blur-md"
              : "bg-black/80 backdrop-blur-lg"
          }`}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
      >
        {/* ✅ Logo (Responsive + Imported) */}
        <Link to="/" className="flex items-center space-x-2 group">
          <motion.div
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12 rounded-full overflow-hidden bg-transparent"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            whileHover={{ rotate: 5 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={logo}
              alt="AtoZ Enterprise Logo"
              className="w-full h-full object-contain"
            />
          </motion.div>
          <span className="text-base sm:text-lg md:text-xl font-bold text-secondary-foreground">
            AtoZ <span className="text-primary">Enterprise</span>
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              <Link
                to={link.path}
                className={`relative text-sm font-medium transition-colors ${
                  location.pathname === link.path
                    ? "text-primary"
                    : "text-secondary-foreground hover:text-primary"
                }`}
              >
                {link.name}
                {location.pathname === link.path && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                  />
                )}
              </Link>
            </motion.div>
          ))}
        </nav>

        {/* Desktop "Get Quote" Button */}
        <motion.div
          className="hidden md:block"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
          whileHover={{ scale: 1.05 }}
        >
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">Get Quote</Link>
          </Button>
        </motion.div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="md:hidden flex items-center"
          onClick={toggleMenu}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? (
            <X className="h-6 w-6 text-secondary-foreground" />
          ) : (
            <Menu className="h-6 w-6 text-secondary-foreground" />
          )}
        </motion.button>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black text-secondary-foreground z-40 pt-24 px-6 md:hidden"
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
          >
            <motion.button
              className="absolute top-6 right-6 p-2"
              onClick={toggleMenu}
              whileTap={{ scale: 0.9 }}
            >
              <X className="h-6 w-6 text-secondary-foreground" />
            </motion.button>

            <div className="flex flex-col space-y-6">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 + 0.1 }}
                  exit={{ opacity: 0, x: 20 }}
                >
                  <Link
                    to={link.path}
                    onClick={() => setIsOpen(false)}
                    className={`text-base font-medium ${
                      location.pathname === link.path
                        ? "text-primary"
                        : "hover:text-primary"
                    }`}
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                exit={{ opacity: 0, y: 20 }}
                className="pt-6"
              >
                <Button
                  variant="hero"
                  size="lg"
                  className="w-full"
                  asChild
                  onClick={() => setIsOpen(false)}
                >
                  <Link to="/contact">Get Quote</Link>
                </Button>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar1;
