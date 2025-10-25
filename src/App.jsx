import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Products from "./routes/products/products.jsx";
import Navbar from "./components/navbar/navbar.jsx"
import Index from "./routes/index/index.jsx";


const router = createBrowserRouter([
    { path: "/", element: <><Navbar/><Index/></>},
    { path: "/products", element: <><Navbar/><Products/></>}
]);

export default function App() {
    return <RouterProvider router={router} />;
}