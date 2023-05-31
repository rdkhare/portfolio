import React, { useRef, useEffect, useState } from 'react';
import { Link, animateScroll as scroll } from 'react-scroll';

const Navbar = () => {
  const navbarRef = useRef(null);
  const [navbarHeight, setNavbarHeight] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    setNavbarHeight(navbarRef.current.offsetHeight);

    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const navbarStyle = {
    backgroundColor: isScrolled ? 'rgba(255, 255, 255)' : 'transparent',
    color: isScrolled ? '#000000' : '#FFFFFF',
  };

  return (
    <nav
      ref={navbarRef}
      className="py-4 fixed top-0 w-full z-10 transition-colors duration-300"
      style={navbarStyle}
    >
      <div className="container mx-auto">
        <ul className="flex justify-center font-mono">
          <li className="mx-4">
            <Link
              to="top"
              spy={true}
              smooth={true}
              offset={-navbarHeight}
              duration={500}
              className="cursor-pointer hover:bg-black hover:bg-opacity-80 hover:text-white rounded-full px-7 py-2 transition-colors duration-300"
              onClick={() => scroll.scrollToTop({ duration: 500 })}
            >
              rdkhare
            </Link>
          </li>
          <li className="mx-4">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-navbarHeight}
              duration={500}
              className="cursor-pointer hover:bg-black hover:bg-opacity-80 hover:text-white rounded-full px-7 py-2 transition-colors duration-300"
            >
              About
            </Link>
          </li>
          <li className="mx-4">
            <Link
              to="projects"
              spy={true}
              smooth={true}
              offset={-navbarHeight}
              duration={500}
              className="cursor-pointer hover:bg-black hover:bg-opacity-80 hover:text-white rounded-full px-7 py-2 transition-colors duration-300"
            >
              Projects
            </Link>
          </li>
          <li className="mx-4">
            <Link
              to="skills"
              spy={true}
              smooth={true}
              offset={-navbarHeight}
              duration={500}
              className="cursor-pointer hover:bg-black hover:bg-opacity-80 hover:text-white rounded-full px-7 py-2 transition-colors duration-300"
            >
              Skills
            </Link>
          </li>
          <li className="mx-4">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-navbarHeight}
              duration={500}
              className="cursor-pointer hover:bg-black hover:bg-opacity-80 hover:text-white rounded-full px-7 py-2 transition-colors duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
