// src/App.jsx
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// pages
import Home  from "./pages/Home.jsx";
import About from "./pages/About.jsx";   // comment this line if About.jsx isn’t ready

/* --------------------------------------------------------------------
   1️⃣  Create the router object.  Each object inside the array is a route.
------------------------------------------------------------------------*/
const router = createBrowserRouter([
  {
    path: "/",          // http://localhost:5173/
    element: <Home />,
  },
  {
    path: "/about",     // http://localhost:5173/about
    element: <About />, // remove this entry if About page doesn’t exist yet
  },
]);

/* --------------------------------------------------------------------
   2️⃣  Main App component just returns the <RouterProvider>.
------------------------------------------------------------------------*/
function App() {
  return <RouterProvider router={router} />;
}

export default App;

