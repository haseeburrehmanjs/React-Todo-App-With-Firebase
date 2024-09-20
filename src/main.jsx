import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Layout from './Layout.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './assets/pages/Login.jsx'
import Register from './assets/pages/Register.jsx'
import Home from './assets/pages/Home.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element : <Login/>
      },
      {
        path: 'register',
        element : <Register/>
      },
      {
        path: 'home',
        element : <Home />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Layout />
  </RouterProvider>

)
