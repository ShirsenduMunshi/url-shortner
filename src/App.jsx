import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import AppLayout from "./Layout/app-layout";
import Landingpage from "./pages/Landingpage";
import Dashboard from "./pages/Dashboard";
import Auth from "./pages/auth";
import RedirectLink from "./pages/redirected-link";
import UrlProvider from "./context";
import RequireAuth from "./components/require-auth";
import LinkPage from "./pages/LinkPage";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import About from "./pages/About";
import Contact from "./pages/Contact";
import NotFound from "./pages/Notfound";
function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <Landingpage />,
        },
        {
          path: "/dashboard",
          element: <RequireAuth>
            <Dashboard />
          </RequireAuth>
        },
        {
          path: "/link/:id",
          element: <RequireAuth>
            <LinkPage />
            </RequireAuth>
        },
        {
          path: "/auth",
          element: 
            <Auth />,
        },
        {
          path: "/:id",
          element: <RedirectLink />,
        },
        {
          path: "/privacy",
          element: <Privacy />,
        },
        {
          path: "/terms",
          element: <Terms />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
        {
          path: "*",
          element: <NotFound />,
        },
      ]
    }
  ])
  return (
    <UrlProvider>
      <RouterProvider router={router} />
    </UrlProvider>
  )
}

export default App
