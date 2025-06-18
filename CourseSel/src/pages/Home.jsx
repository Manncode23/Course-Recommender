// src/pages/Home.jsx
import { useState } from "react";
import Navbar from "../components/Navbar";
import courses from "../data/courses.json";

function Home() {
  const [selectedCourse, setSelectedCourse] = useState("");
  const [selectedLevel, setSelectedLevel] = useState("");
  const [results, setResults] = useState([]);

  const handleSearch = () => {
    const filtered = courses.filter(
      (course) =>
        course.category === selectedCourse && course.level === selectedLevel
    );
    setResults(filtered);
  };

  return (
    <>
      <Navbar />

      {/* Page Container */}
      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
          <h1 className="text-4xl font-bold text-center text-purple-700">
            🎓 Course Recommendation
          </h1>

          {/* Dropdowns */}
          <div className="space-y-4">
            <select
              className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-purple-400"
              value={selectedCourse}
              onChange={(e) => setSelectedCourse(e.target.value)}
            >
              <option value="">Select Course</option>
              <option value="web">Web Development</option>
              <option value="dsa">Data Structures</option>
              <option value="aiml">Machine Learning</option>
             <option value="web3">Web3</option>
             <option value="datascience">Data Science</option>
             <option value="graphicdesign">Graphic Design</option>
             <option value="cybersecurity">Cyber Security</option>
            </select>

            <select
              className="w-full p-3 border rounded shadow-sm focus:ring-2 focus:ring-purple-400"
              value={selectedLevel}
              onChange={(e) => setSelectedLevel(e.target.value)}
            >
              <option value="">Select Level</option>
              <option value="beginner">Beginner</option>
              <option value="intermediate">Intermediate</option>
               
            </select>
          </div>

          {/* Button */}
          <div className="text-center">
            <button
              onClick={handleSearch}
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:scale-105 transform transition"
            >
              🔍 Get Recommendations
            </button>
          </div>

          {/* Results */}
          <div className="space-y-4">
            {results.length === 0 ? (
              <p className="text-gray-500 text-center">No courses to show.</p>
            ) : (
              results.map((course, index) => (
                <div
                  key={index}
                  className="border rounded-lg p-4 shadow bg-gradient-to-r from-purple-50 to-pink-50 hover:shadow-lg transition"
                >
                  <h2 className="text-xl font-semibold text-blue-800">
                    {course.name}
                  </h2>
                  <a
                    href={course.link}
                    target="_blank"
                    rel="noreferrer"
                    className="text-purple-700 underline"
                  >
                    Visit Course →
                  </a>
                </div>
              ))
            )}
          </div>
        </div>
        <footer className="mt-10 text-center text-sm text-gray-600">
  <div className="py-4 border-t border-purple-200">
    Made with 💜 by <span className="font-semibold text-purple-600">Mandeep</span>
  </div>
</footer>
      </div>
    </>
  );
}

export default Home;

//  <option value="aiml">Machine Learning</option>
//           <option value="web3">Web3</option>
