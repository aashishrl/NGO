import React from 'react';
import Header from './Components/Header'
import Nav from './Components/Nav';
import {Routes, Route} from 'react-router-dom'
import Home from './Pages/Home';
import Footer from './Components/Footer';
import Donate from './Pages/donate';
import Events from './Pages/Events';
import Contact from './Pages/Contact';
import Team from './Pages/Team';
import Mission from './Pages/Mission';

function App (){
  return (
    <>
      <Header/>
      <Nav/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/donate' element={<Donate/>} />
        <Route path='/events' element={<Events/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/team' element={<Team/>} />
        <Route path='/mission' element={<Mission/>} />
      </Routes>
      <Footer/>
    </>
  )
}

export default App