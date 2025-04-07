import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { Auth0Provider } from '@auth0/auth0-react';
import Allepisode from '../pages/Allepisode.jsx'
import AdminPanel from '../pages/adminpannel.jsx'
import './index.css'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <div>404 Not Found</div>,
  },
  { path: "/allep", element: <Allepisode /> },
  { path: "/adminpannel", element: <AdminPanel /> }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Auth0Provider
      domain="auth-91659.us.auth0.com"
      clientId="dmodlelmufshNI0cBTspZRQnxr9qO3T1"
      authorizationParams={{
        redirect_uri: window.location.origin
      }}
    >
      <RouterProvider router={router} />
    </Auth0Provider>
  </StrictMode>,
)
