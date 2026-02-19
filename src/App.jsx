import React from 'react'
import { ScrollTrigger } from 'gsap/all';
import gsap from 'gsap';

import Navbar from './Components/Navbar';
import Hero from './Components/Hero.jsx';
import Cocktails from './Components/Cocktails.jsx';
import About from './Components/About.jsx';
import Art from './Components/Art.jsx';
import Menu from './Components/Menu.jsx';
import Contact from './Components/Contact.jsx';


gsap.registerPlugin(ScrollTrigger);

const App = () => {
  return (
    <main>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
      <Menu />
      <Contact />
    </main>
  )
}

export default App