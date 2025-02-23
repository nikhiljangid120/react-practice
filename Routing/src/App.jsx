import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../components/Home";
import About from "../components/About";
import Contact from "../components/Contact";
import Navbar from "../components/Navbar";
import { ParamComponent } from "../components/ParamComponent";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <Navbar />
        <Home />
      </div>
    ),
  },
  {
    path: "/about",
    element: (
      <div>
        <Navbar />
        <About />
      </div>
    ),
  },
  {
    path: "/contact",
    element: (
      <div>
        <Navbar />
        <Contact />
      </div>
    ),
  },
  {
    path: "/about/:id",
    element: (
      <div>
        <Navbar />
        <ParamComponent />
      </div>
    ),
  }
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
