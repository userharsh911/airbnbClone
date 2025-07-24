import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import { Route, RouterProvider ,createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import Layout from './components/Layout/Layout.jsx'
import Home from './components/Home/Home.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import User from './components/User/User.jsx'
// const router = createBrowserRouter([
//   {
//     path:"/",
//     element: <Layout/>,
//     children:[
//       {
//         path:'',
//         element: <Home/>
//       },{
//         path:'about',
//         element:<About/>
//       }
//     ]
//   }
// ])


const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <Layout/> }>
      <Route path='' element={ <Home/> }/>
      <Route path='about' element={ <About/> }/>
      <Route path='contact' element={ <Contact/> }/>
      <Route path='user/:userid' element={ <User/> }/>
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
