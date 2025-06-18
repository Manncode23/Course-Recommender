// src/pages/About.jsx
import Navbar from "../components/Navbar";


function About() {
  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-100 to-pink-100 p-6">
        <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-xl p-6 space-y-6">
          <h1 className="text-4xl font-bold text-center text-purple-700">
            👨‍💻 About Me
          </h1>

          <p className="text-gray-700 text-lg leading-relaxed">
            Hello! I'm <span className="font-semibold text-purple-600">Mandeep</span>, a passionate web developer currently learning and building exciting front-end and full-stack projects. 
            My goal is to build helpful platforms that make learning and development more accessible.
          </p>

          <div className="space-y-2">
            <p className="text-md">
              <strong>📧 Email:</strong>{" "}
             <a
  href="mailto:mandeepjangir23@gmail.com"
  className="text-blue-600 underline"
>
  mandeepjangir23@gmail.com
</a>

            </p>

            <p className="text-md">
              <strong>🔗 LinkedIn:</strong>{" "}
              <a
                href="https://www.linkedin.com/in/mandeep-jangir-398a83284?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                target="_blank"
                rel="noreferrer"
                className="text-blue-600 underline"
              >
                Connect with me on LinkedIn
              </a>
            </p>
          </div>

          <div className="pt-4 border-t text-sm text-gray-500">
            I created this website as part of my journey in web development — including technologies like React, Vite, Tailwind CSS, and JSON-based data handling. Stay tuned for more updates and features!
          </div>
        </div>
      </div>

      
    </>
  );
}

export default About;
