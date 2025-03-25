import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Menu, X, Sun, Moon, Ticket as Cricket } from 'lucide-react';
import { RootState } from '../store';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDark, setIsDark] = useState(false);
  const { isAuthenticated } = useSelector((state: RootState) => state.auth);

  const toggleDarkMode = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <nav className="bg-white dark:bg-gray-800 shadow-lg">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <Cricket className="h-8 w-8 text-blue-600 dark:text-blue-400" />
              <span className="ml-2 text-xl font-bold text-gray-800 dark:text-white">
                IPL Hub
              </span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-4">
            <Link to="/live-matches" className="nav-link">Live Matches</Link>
            <Link to="/schedule" className="nav-link">Schedule</Link>
            <Link to="/teams" className="nav-link">Teams</Link>
            <Link to="/players" className="nav-link">Players</Link>
            <Link to="/dream11" className="nav-link">Dream11</Link>
            <Link to="/news" className="nav-link">News</Link>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {isDark ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>

            {!isAuthenticated ? (
              <Link
                to="/login"
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
              >
                Login
              </Link>
            ) : (
              <button className="bg-red-600 text-white px-4 py-2 rounded-lg hover:bg-red-700">
                Logout
              </button>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <X className="block h-6 w-6" />
              ) : (
                <Menu className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link to="/live-matches" className="mobile-nav-link">Live Matches</Link>
            <Link to="/schedule" className="mobile-nav-link">Schedule</Link>
            <Link to="/teams" className="mobile-nav-link">Teams</Link>
            <Link to="/players" className="mobile-nav-link">Players</Link>
            <Link to="/dream11" className="mobile-nav-link">Dream11</Link>
            <Link to="/news" className="mobile-nav-link">News</Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;