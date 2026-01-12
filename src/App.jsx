import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Project from "./pages/Project";
import Affiliate from "./pages/Affiliate";
import Contact from "./pages/Contact";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Slider from "./Slider";
import Body from "./pages/Body";
import Blog from "./pages/Blog";
import Buy from "./pages/Buy";
import Rent from "./pages/Rent";
import Sell from "./pages/Sell";
import Shortlets from "./pages/Shortlets";
import Construction from "./pages/Construction";
import Management from "./pages/Management";

function Layout() {
  return (
    <div className="overflow-hidden">
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
}

function HomeLayout() {
  return (
    <>
      <Home />
      <Slider />
      <Body />
    </>
  );
}

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true, // Same as path: "/"
        element: <HomeLayout />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "project",
        element: <Project />,
      },
      {
        path: "affiliate",
        element: <Affiliate />,
      },
      {
        path: "contact",
        element: <Contact />,
      },
      {
        path: "blog",
        element: <Blog />,
      },
      {
        path: "buy",
        element: <Buy />,
      },
      {
        path: "rent",
        element: <Rent />,
      },
      {
        path: "sell",
        element: <Sell />,
      },
      {
        path: "shortlets",
        element: <Shortlets />,
      },
      {
        path: "construction",
        element: <Construction />,
      },
      {
        path: "management",
        element: <Management />,
      },
    ],
  },
  {
    path: "*",
    element: <div>Error: Page Not Found</div>,
  },
]);

export default function App() {
  return <RouterProvider router={routes} />;
}
