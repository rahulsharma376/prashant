import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/home';
import './App.css';
import Footer from './components/Footer';
import About from './components/About'
import Portfoloi from './components/Portfoloi';
import Experiance from './components/Experiance';
import Contact from './components/Contact';
import { Toaster } from "react-hot-toast";
const App=()=>
  {
    return<>
   <div>
   <Navbar></Navbar>
<Home></Home>
<About></About>
<Portfoloi></Portfoloi>
   <Experiance></Experiance>
   <Contact></Contact>
   <Footer></Footer>
   </div>
   <Toaster/>
    </>
  }


  export default App;