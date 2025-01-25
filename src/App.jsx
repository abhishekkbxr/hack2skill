import './App.css'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import AccordionSection from './components/Accordian';
import TestimonialSection from './components/Testmonial';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Featured from './components/Featured';
import Hero from './components/Hero';
import SliderAndCard from './components/SliderAndCard';



function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <SliderAndCard />
      <AccordionSection />
      <Footer />
    </>
  )
}

export default App
