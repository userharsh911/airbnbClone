
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Navbar from "./components/navbar";
const router = createBrowserRouter(
  [
    {
      path: "/",
      element:
        <div>
          <Home />
          <Navbar />
        </div>
    },
    {
      path: "/about",
      element:
        <div>
          <About />
          <Navbar />
        </div>
    },
    {
      path: "/contact",
      element:
        <div>
          <Contact />
          <Navbar />
        </div>
    },
  ]
)
function App() {

  return (
    <>
      <div>
        <RouterProvider router={router} />

      </div>
    </>
  )
}

export default App




