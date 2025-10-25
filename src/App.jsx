import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./routes/products/Products.jsx";
import Navbar from "./components/navbar/Navbar.jsx"
import Index from "./routes/index/Index.jsx";


const router = createBrowserRouter([
    { path: "/", element: <><Navbar/><Index/></>},
    { path: "/products", element: <><Navbar/><Products/></>}
]);

export default function App() {
    return <RouterProvider router={router} />;
}