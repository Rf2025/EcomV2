import { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from './Navbar'
import Footer from './Footer'
import Home from './Home'
import  Products from './Products'
import Contact from './Contact'
import ErrorPage from './Errorpage'
function App() {


  return (
<BrowserRouter>
  <div className='App'>
    <Navbar/>
    <Routes>
   <Route path='/' element={<Home/>}/>
   <Route path='/products' element={<Products/>}/>
   <Route path='/contact' element={<Contact/>}/>
   <Route path="*" element={<ErrorPage/>} />
    </Routes>
    <Footer/>
  </div>
</BrowserRouter>
  )
}

export default App
