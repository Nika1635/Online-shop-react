import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Index from './routes/index/index.jsx'
import Products from './routes/products/products.jsx'
import Navbar from './components/navbar/Navbar.jsx'

const router = createBrowserRouter( [
  {path:"/", element:<Index/>},
  {path:"/products", element:<Products/>}
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Navbar/>
    <RouterProvider router={router}/>
  </StrictMode>
)