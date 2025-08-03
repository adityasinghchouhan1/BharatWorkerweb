import { createBrowserRouter } from 'react-router-dom'
import App from '../App'
import Home from '../Pages/Home'
import About from '../Pages/About'
import Services from '../Pages/Services'
import Contact from '../Pages/Contact'
import Howitworks from '../Pages/Howitworks'

const router = createBrowserRouter([
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'About',
        element: <About />,
      },
      {
        path: 'Contact',
        element: <Contact />,
      },
      {
        path: 'Services',
        element: <Services />,
      },
      {
        path: 'how-it-works',
        element: <Howitworks />,
      },
    ],
  },
])

export default router
