import React, { useEffect } from 'react'
import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom'
import Layout from './Component/Layout/Layout'
import Home from './Component/Home/Home'
import Choose from './Component/Test/Choose/Choose'
import Question from './Component/Test/Question/Question'
import Details from './Component/Test/Details/Details'
import MainDetails from './Component/Test/Details/MainDetails'
import NotFound from './Component/NotFound/NotFound'
import AllDiseases from './Component/Alldiseases/AllDiseases'
import About from './Component/About/About'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'

let routers=createBrowserRouter([
  {path:"",element:<Layout/>, children:[
    {index:true ,element:<Home/>},
    {path:'/Nutritional-disorder/' ,element:<Home/>},
    {path:'/choose' ,element:<Choose/>},  
    {path:'/Question' ,element:<Question/>},
    {path:'/About' ,element:<About/>},
    {path:'/Details' ,element:<Details/>},
    {path:'/MainDetails' ,element:<MainDetails/>},
    {path:'/AllDiseases' ,element:<AllDiseases/>},
    {path:'*' ,element:<NotFound/>},
  ]}
])
export default function App() {
  return <>
  <ToastContainer />
      <RouterProvider router={routers}></RouterProvider>
    </>
}

