import React from "react";
import { FaInstagram, FaLinkedin, FaGithub } from "react-icons/fa";
import "../App.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#003d63] text-[#d1d8ff]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Brand Name */}
          <div className="text-xl font-bold mb-4 md:mb-0"><Link typeof={"/"}><span className="text-[#b3d5ba] fs1 font-bold text-xl">SortX</span></Link></div>

          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a href="https://www.github.com/shirsendumunshi" target="_blank" className="text-2xl hover:text-gray-200" aria-label="Github"><FaGithub /></a>
            <a href="https://www.instagram.com/munshirudra" target="_blank" className="text-2xl hover:text-gray-200" aria-label="Instagram"><FaInstagram /></a>
            <a href="https://in.linkedin.com/in/shirsendu-munshi-341590288" target="_blank" className="text-2xl hover:text-gray-200" aria-label="LinkedIn"><FaLinkedin /></a>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-6 text-center text-sm md:text-base">
          <p>&copy; 2024 <Link typeof={"/"}><span className="text-[#b3d5ba] fs1 font-bold text-xl">SortX</span></Link>. All rights reserved.</p>
          <p>
            <a href="/privacy" target="_blank" className="hover:underline">Privacy Policy</a>{" "}|{" "}
            <a href="/terms" target="_blank" className="hover:underline">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
