// src/components/Navbar.jsx
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-500 p-4 shadow-md">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo or Brand */}
        <Link to="/" className="text-white text-xl font-bold hover:text-yellow-200">
          CourseRecommender
        </Link>

        {/* Nav Links */}
        <div className="space-x-4">
          <Link
            to="/"
            className="text-white hover:bg-white hover:text-blue-700 px-3 py-2 rounded transition duration-300"
          >
            Home
          </Link>
          <Link
            to="/about"
            className="text-white hover:bg-white hover:text-blue-700 px-3 py-2 rounded transition duration-300"
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
