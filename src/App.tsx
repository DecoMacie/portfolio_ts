import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
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
        loader: async () => {
          const res = await fetch(
            "https://api.github.com/users/DecoMacie/repos"
          );
          const data = await res.json();

          return data;
        },
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
      {
        path: "*",
        element: <Navigate to="/" replace />,
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
