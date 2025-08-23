import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import MainLayout from "./layout/MainLayout";
import About from "./pages/About";
import MyProj from "./pages/MyProj";
import Blog from "./pages/Blog";

function App() {
  const routes = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout />,
      children: [
        {
          index: true,
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/blog",
          element: <Blog />,
        },
        {
          path: "/projects",
          element: <MyProj />,
        },
      ],
    },
  ]);
  return <RouterProvider router={routes} />;
}

export default App;
