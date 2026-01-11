"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

interface NavLink {
  label: string;
  href: string;
}

const navLinks: NavLink[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

// Constants
const SCROLL_THRESHOLD = 100; // Pixels to scroll before hiding navbar
const SCROLL_OFFSET_FOR_BACKGROUND = 50; // Pixels to scroll before showing background
const NAVBAR_HEIGHT = 80;
const MENU_CLOSE_DELAY = 350; // ms to wait for menu close animation
const MOBILE_BREAKPOINT = 768;

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const isMobile = useRef(false);

  // Check if mobile and handle resize
  const checkMobile = useCallback(() => {
    const wasMobile = isMobile.current;
    isMobile.current = window.innerWidth < MOBILE_BREAKPOINT;

    // Close mobile menu if resizing from mobile to desktop
    if (wasMobile && !isMobile.current) {
      setIsMobileMenuOpen(false);
    }
  }, []);

  // Update active section based on scroll position
  const updateActiveSection = useCallback((scrollY: number) => {
    const scrollPosition = scrollY + 100;
    const sections = navLinks.map((link) => link.href.slice(1));

    for (const section of sections) {
      const element = document.getElementById(section);
      if (element) {
        const { offsetTop, offsetHeight } = element;
        if (
          scrollPosition >= offsetTop &&
          scrollPosition < offsetTop + offsetHeight
        ) {
          setActiveSection(section);
          break;
        }
      }
    }
  }, []);

  useEffect(() => {
    checkMobile();
    window.addEventListener("resize", checkMobile);

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Hide/show navbar based on scroll direction
      // Show navbar if mobile menu is open (to prevent hiding while menu is visible)
      if (!isMobileMenuOpen) {
        if (
          currentScrollY > lastScrollY.current &&
          currentScrollY > SCROLL_THRESHOLD
        ) {
          // Scrolling down - hide navbar
          setIsVisible(false);
        } else if (currentScrollY < lastScrollY.current) {
          // Scrolling up - show navbar
          setIsVisible(true);
        }
      } else {
        // Keep navbar visible when mobile menu is open
        setIsVisible(true);
      }

      setIsScrolled(currentScrollY > SCROLL_OFFSET_FOR_BACKGROUND);
      lastScrollY.current = currentScrollY;

      // Update active section
      updateActiveSection(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [checkMobile, updateActiveSection, isMobileMenuOpen]);

  const handleNavClick = useCallback(
    (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
      e.preventDefault();
      const targetId = href.slice(1);
      const wasMenuOpen = isMobileMenuOpen;

      // Close mobile menu if it's open
      if (wasMenuOpen) {
        setIsMobileMenuOpen(false);
      }

      // Function to perform the scroll
      const performScroll = () => {
        const element = document.getElementById(targetId);
        if (element) {
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition =
            elementPosition + window.pageYOffset - NAVBAR_HEIGHT;

          window.scrollTo({
            top: Math.max(0, offsetPosition),
            behavior: "smooth",
          });
        }
      };

      // If menu was open, wait for it to close; otherwise scroll immediately
      if (wasMenuOpen) {
        setTimeout(performScroll, MENU_CLOSE_DELAY);
      } else {
        performScroll();
      }
    },
    [isMobileMenuOpen]
  );

  const toggleMobileMenu = useCallback(() => {
    setIsMobileMenuOpen((prev) => {
      // When opening menu, ensure navbar is visible
      if (!prev) {
        setIsVisible(true);
      }
      return !prev;
    });
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{
        y: isVisible ? 0 : -100,
      }}
      transition={{
        duration: 0.3,
        ease: "easeInOut",
      }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 overflow-hidden ${
        isScrolled
          ? "bg-[#0a0a0a]/90 backdrop-blur-xl shadow-lg shadow-purple-900/20"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <motion.a
            href="#home"
            onClick={(e) => handleNavClick(e, "#home")}
            className="text-2xl font-bold gradient-text cursor-pointer z-10"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            JP.M
          </motion.a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const sectionId = link.href.slice(1);
              const isActive = activeSection === sectionId;

              return (
                <motion.a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                    isActive
                      ? "text-purple-400"
                      : "text-gray-300 hover:text-purple-400"
                  }`}
                  whileHover={{ y: -2 }}
                  whileTap={{ y: 0 }}
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeSection"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-500"
                      initial={false}
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className="md:hidden text-gray-300 hover:text-purple-400 z-10 relative"
            whileTap={{ scale: 0.9 }}
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <FiX className="w-6 h-6" />
            ) : (
              <FiMenu className="w-6 h-6" />
            )}
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden overflow-hidden bg-[#0a0a0a]/90 backdrop-blur-xl"
          >
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-4">
              <div className="flex flex-col space-y-4">
                {navLinks.map((link) => {
                  const sectionId = link.href.slice(1);
                  const isActive = activeSection === sectionId;

                  return (
                    <motion.a
                      key={link.href}
                      href={link.href}
                      onClick={(e) => handleNavClick(e, link.href)}
                      className={`relative px-4 py-2 text-base font-medium transition-colors duration-200 rounded-lg ${
                        isActive
                          ? "text-purple-400 bg-purple-500/10"
                          : "text-gray-300 hover:text-purple-400 hover:bg-purple-500/5"
                      }`}
                      whileTap={{ scale: 0.95 }}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.2 }}
                    >
                      {link.label}
                    </motion.a>
                  );
                })}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}