import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import { ParamComponent } from "../components/ParamComponent";

// Created a clean router config with better organization and consistent layout structure
const router = createBrowserRouter([
  // Home page - root route with Navbar wrapper
  {
    path: "/",
    element: (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Home />
      </div>
    ),
  },
  // About page route
  {
    path: "/about",
    element: (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <About />
      </div>
    ),
  },
  // Contact page route
  {
    path: "/contact",
    element: (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <Contact />
      </div>
    ),
  },
  // Dynamic route for about page with URL params (like /about/123)
  {
    path: "/about/:id",
    element: (
      <div className="min-h-screen bg-gray-50">
        <Navbar />
        <ParamComponent />
      </div>
    ),
  },
  // Catch-all route for 404 pages - handles any unknown routes
  {
    path: "*",
    element: (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center p-8">
          <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
          <h2 className="text-2xl text-gray-600 mb-4">Page Not Found</h2>
          <p className="text-gray-500 mb-8">The page you're looking for doesn't exist.</p>
          <a 
            href="/" 
            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors"
          >
            Go Home
          </a>
        </div>
      </div>
    ),
  }
]);

// Main App component - renders the router provider
const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
