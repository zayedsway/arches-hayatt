'use client';

import React from 'react';
import { Search } from 'lucide-react';

interface HeaderProps {
  logo?: string;
}

const Header: React.FC<HeaderProps> = ({ logo = '𝓢' }) => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <span className="text-3xl font-bold text-rose-600">{logo}</span>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#projects" className="text-gray-800 hover:text-rose-600 font-medium text-sm uppercase tracking-wide">
              Projects
            </a>
            <a href="#about" className="text-gray-800 hover:text-rose-600 font-medium text-sm uppercase tracking-wide">
              About Us
            </a>
            <a href="#services" className="text-gray-800 hover:text-rose-600 font-medium text-sm uppercase tracking-wide">
              Services
            </a>
            <a href="#contact" className="text-gray-800 hover:text-rose-600 font-medium text-sm uppercase tracking-wide">
              Contact
            </a>
          </nav>

          {/* Search Icon */}
          <div className="flex items-center space-x-4">
            <button className="p-2 hover:bg-gray-100 rounded-lg transition">
              <Search size={20} className="text-gray-600" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;