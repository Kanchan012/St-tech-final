import React from 'react'
import{Route,Routes} from "react-router-dom"
import Home from './pages/Home'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Instructors from './pages/Instructors';
import Instructorprofile from './pages/Instructorprofile'
import Henryinstructor from './pages/Henryinstructor'
import Ethaninstructor from './pages/Ethaninstructor'
import Jordaninstructor from './pages/Jordaninstructor'
import Charlotteinstructor from './pages/Charlotteinstructor'
import NancyCourse from './pages/NancyCourse'
import NancyGraphic from './pages/NancyGraphic'
import HenryMern from "./pages/HenryMern"
import HenryData from "./pages/HenryData"
import CharWeb from "./pages/CharWeb"
import CharBrand from "./pages/CharBrand"
import JordanProject from "./pages/JordanProject"
import JordanPublic from "./pages/JordanPublic"
import EthanBusiness from "./pages/EthanBusiness"
import Ethan3D from "./pages/Ethan3D"
import NancyDigital from './pages/NancyDigital'
import Courses from './pages/Courses'
import Cart from './pages/Cart';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Aboutus from './pages/Aboutus';
import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Myprofile from './pages/Myprofile'
function App() {
  return (
    <div>
      <Header/>
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/instructors" element={<Instructors/>}/>
            <Route path="/henryinstructor" element={<Henryinstructor/>}/>
            <Route path="/charlotteinstructor" element={<Charlotteinstructor/>}/>
            <Route path="/ethaninstructor" element={<Ethaninstructor/>}/>
            <Route path="/jordaninstructor" element={<Jordaninstructor/>}/>
            <Route path="/instructorprofile" element={<Instructorprofile/>}/>
            <Route path="/courses" element={<Courses/>}/>
            <Route path='/nancycourse' element={<NancyCourse/>}/>
            <Route path='/nancygraphic' element={<NancyGraphic/>}/>
            <Route path='/nancydigital' element={<NancyDigital/>}/>
            <Route path='/henrymern' element={<HenryMern/>}/>
            <Route path='/henrydata' element={<HenryData/>}/>
            <Route path='/charweb' element={<CharWeb/>}/>
            <Route path='/charbrand' element={<CharBrand/>}/>
            <Route path='/ethan3d' element={<Ethan3D/>}/>
            <Route path='/ethanbusiness' element={<EthanBusiness/>}/>
            <Route path='/jordanproject' element={<JordanProject/>}/>
            <Route path='/jordanpublic' element={<JordanPublic/>}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/about" element={<Aboutus/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/dashboard" element={<Dashboard/>}/>
            <Route path="/myprofile" element={<Myprofile/>} />
        </Routes>
        <Footer/>
    </div>
  )
}
export default App

