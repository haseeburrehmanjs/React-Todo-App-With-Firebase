import './index.css'
import Layout from './Layout'
import Login from './pages/Login'
import Register from './pages/Register.jsx'
import Home from './pages/Home.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import ProtectedRout from './pages/ProtectedRout.jsx'
import { createRoot } from 'react-dom/client'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '',
        element : <Login />
      },
      {
        path: 'register',
        element : <Register/>
      },
      {
        path: 'home',
        element : <ProtectedRout component={<Home/>} />
      },
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}>
    <Layout />
  </RouterProvider>
)
