import { Children, StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Allepisode from '../pages/Allepisode.jsx'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
    {
      path: '/',
      element: <App />,
      errorElement: <div>404 Not Found</div>,
      Children:[
        {path: '/allep', element: <Allepisode />},
      ]
    }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
