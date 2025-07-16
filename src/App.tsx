import {
  createBrowserRouter,
  Navigate,
  RouterProvider,
} from "react-router-dom";
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import Contacts from "./pages/Contacts";
import Portfolio from "./pages/Portfolio";
import Services from "./pages/Services";
import Education from "./pages/Education";
import MediaBlog from "./pages/MediaBlog";
import { PortfolioRepo } from "./queries/portfolioRepo";

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
        loader: PortfolioRepo,
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
