import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

// Pages
import Index from './pages/index'

const router = createBrowserRouter([
  { path: '/', element: <Index /> }, 
  // ...
])

// 1:48:11 Se iba a poner con los layouts, acaba de hacer el tena del router

createRoot(document.getElementById('root')).render(
  <div className='antialiased'>
    <RouterProvider router={router} />
  </div>
)
