import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import CreateMeet from './pages/CreateMeet.jsx'
import MeetDetails from './pages/MeetDetails.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>
  },
  {
    path: "/createMeet",
    element: <CreateMeet/>
  },
  {
    path: "/meets/:meetId",
    element: <MeetDetails/>
  },
])
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
