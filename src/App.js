import { BrowserRouter, Route, Routes } from 'react-router-dom'

import './assets/styles.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import AddPark from './pages/AddPark'
import SinglePark from './pages/SinglePark'
import AdminEdit from './pages/AdminEdit'
import AboutMe from './pages/AboutMe'



function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path='/add-park' element={<AddPark />}  />
          <Route path='/single-park' element={<SinglePark />} />
          <Route path='/admin-edit' element={<AdminEdit />} />
          <Route path='/about-me' element={<AboutMe />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
