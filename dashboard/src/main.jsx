import { createRoot } from 'react-dom/client'
import './index.css'
import { createBrowserRouter, RouterProvider, Route, Link } from 'react-router-dom';

// Pages
import Index from './pages/index'
import Explorar from './pages/explorar'
import Recomendar from './pages/recomendar'

const router = createBrowserRouter([
  { path: '/', element: <Index /> }, 
  { path: '/explorar', element: <Explorar /> }, 
  { path: '/recomendar', element: <Recomendar /> }, 
  // ...
])

createRoot(document.getElementById('root')).render(
  <div className='antialiased'>
    <RouterProvider router={router} />
  </div>
)
