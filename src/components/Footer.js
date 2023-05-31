import React from 'react';
import { FaGithub, FaLinkedin, FaStackOverflow } from 'react-icons/fa';

const Footer = () => {
    return (
      <footer className="bg-gray-800 py-4 sticky bottom-0 footer">
        <div className="container mx-auto flex justify-center">
          <a href="https://github.com/rdkhare" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaGithub size={24} className="text-white hover:text-gray-500 transition-colors duration-300" />
          </a>
          <a href="https://www.linkedin.com/in/rajat-k-9799a6122/" target="_blank" rel="noopener noreferrer" className="mr-4">
            <FaLinkedin size={24} className="text-white hover:text-gray-500 transition-colors duration-300" />
          </a>
          <a href="https://stackoverflow.com/users/6122874/rajat-khare" target="_blank" rel="noopener noreferrer">
            <FaStackOverflow size={24} className="text-white hover:text-gray-500 transition-colors duration-300" />
          </a>
        </div>
      </footer>
    );
  };
  
  
export default Footer;
