// src/routes/Router.jsx
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "../pages/Home";
import About from "../pages/About";
import Contact from "../pages/Contact";
import NotFound from "../pages/NotFound";
import Navbar from "../components/Navbar";

function Shell({ children }) {
    return (
        <>
            <Navbar />
            <main>{children}</main>
        </>
    );
}

const router = createBrowserRouter([
    {
        path: "/",
        element: <Shell><Home /></Shell>,
        errorElement: <Shell><NotFound /></Shell>,
    },
    { path: "/about", element: <Shell><About /></Shell> },
    { path: "/contact", element: <Shell><Contact /></Shell> },
]);

export default function AppRouter() {
    return <RouterProvider router={router} />;
}
