import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { createBrowserRouter,RouterProvider } from 'react-router-dom'
import store from './redux/store.js'
import {Provider} from 'react-redux'
import Contatti from './pages/Contatti.jsx'
import Cities from './pages/Cities.jsx'
import CitiesChildren from './pages/CitiesChildren.jsx'
import City from './pages/City.jsx'
import About from './pages/About.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
  },
  {
    path: "/about",
    element: <About></About>,
  },
  {
    path: "/contatti",
    element: <Contatti></Contatti>,
  },
  {
    path: "/cities",
    element: <Cities></Cities>,
  },
  {
    path: "/cities/:cityID",
    element: <City/>,
  },
  {
    path: "/cities-children",
    element: <CitiesChildren></CitiesChildren>,
    children:[
      {
        path: ":cityID",
        element: <City/>,
      }
    ]
  },
])
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router}/>
    </Provider>
  </React.StrictMode>,
)
