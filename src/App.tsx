import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./pages/root";
import HomePage from "./pages/HomePage";
import Contacts from "./pages/contacts";
import Portfolio from "./pages/portfolio";
import Services from "./pages/services";
import Education from "./pages/education";
import MediaBlog from "./pages/MediaBlog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: "/portfolio",
        element: <Portfolio />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/education",
        element: <Education />,
      },
      {
        path: "/media",
        element: <MediaBlog />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
