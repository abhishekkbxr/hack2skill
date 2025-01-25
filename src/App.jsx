import './App.css'
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import AccordionSection from './components/Accordian';
import TestimonialSection from './components/Testmonial';
import { TypeAnimation } from 'react-type-animation';
import Footer from './components/Footer';



function App() {
  return (
    <>
      {/* Hero section */}
      <nav className="bg-amber-100 pt-4 pb-1 px-6 flex justify-between items-center w-full relative z-100">
        {/* Search Box */}
        <div className="w-5/3 relative">
          <div className="relative">
            <span className="absolute left-4 top-1/2 transform -translate-y-1/2 font-bold text-gray-900 text-xl">
              LOGO
            </span>
            <input
              type="text"
              className="w-full pl-16 pr-20 py-4 px-4 bg-white rounded-full border border-gray-300 focus:ring-2 focus:ring-amber-400 focus:outline-none"
            />
            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 flex items-center space-x-2">
              <select className="border-none bg-transparent focus:outline-none text-gray-900">
                <option value="en">EN</option>
                <option value="fr">FR</option>
              </select>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-gray-600 py-20 lg:h-screen body-font w-screen flex justify-center items-center bg-amber-100 relative">
        <div className="container mx-auto px-5 py-12">
          <div className="flex flex-col-reverse md:flex-row items-center">
            {/* Text Content */}
            <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col items-start text-left">
              <p className="text-amber-400 font-bold text-xl md:text-2xl mb-2 md:mb-4">
                Lorem ipsum dolor sit
              </p>
              <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                Before they sold out
                <br className="hidden lg:inline-block" />
                <span>
                  <TypeAnimation
                    sequence={[
                      'readymade',
                      1000,
                      'gluten',
                      1000,
                      'Guinea Page',
                      1000,
                      'Chinchillas',
                      1000
                    ]}
                    wrapper="span"
                    speed={50}
                    repeat={Infinity}
                  />
                </span>

              </h1>
              <div className="mb-8 leading-relaxed flex flex-wrap md:justify-start">
                {[
                  "Cursus Integer",
                  "Integer Consquate",
                  "Risus praesent vulputate",
                  "Cursus Integer",
                  "Integer Consquate",
                  "Risus praesent vulputate",
                ].map((text, index) => (
                  <p
                    key={index}
                    className="text-black rounded-3xl px-3 py-2 bg-white font-semibold flex items-center m-2"
                  >
                    <IoCheckmarkDoneCircleOutline className="text-2xl text-amber-400 font-bold mx-2" />
                    {text}
                  </p>
                ))}
              </div>
              <div className="flex justify-start">
                <p className="group inline-flex items-center lg:w-80 py-4 rounded-4xl bg-amber-400 px-12 sm:px-16 font-bold text-black focus:outline-none hover:bg-amber-400 hover:border-2 hover:border-black hover:shadow-[0px_10px_10px_rgba(0,0,0,1)] hover:translate-y-1 text-lg transition-all duration-300">
                  Lorem Ipsum
                  <FaArrowRight className="ml-12 transition-transform duration-300 group-hover:rotate-90" />
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mt-8 md:mt-0 flex justify-center">
              <img
                className="object-cover object-center rounded max-h-80 sm:max-h-full"
                alt="hero"
                src="/DrawKit Vector Illustration-1.svg"
              />
            </div>
          </div>
        </div>

        {/* Triangular Clip Path */}
        <div
          style={{
            clipPath: "polygon(0 95%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          className="absolute bottom-0 left-0 w-full h-32 bg-amber-400"
        ></div>
      </section>


      {/* Featured section */}
      <section className="text-gray-600 py-20  body-font w-screen flex justify-center items-center bg-amber-400 relative">
        <div className="container mx-auto px-5 py-12">
          <div className="flex flex-col-reverse md:flex-row items-center">
            {/* Text Content */}
            <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col items-start text-left">
              <p className="text-amber-400 font-bold text-2xl sm:text-3xl mb-4">
                Lorem ipsum dolor sit
              </p>
              <h1 className="title-font text-3xl mb-4 font-bold text-gray-900">
                Before they sold out
                <br className="hidden lg:inline-block" /> readymade gluten
              </h1>
              <div className="mb-8 text-black leading-relaxed">
                <p className='mb-3' >
                  <span className="border-b-2 border-black  ">

                    Vulputate et vulputate suspendisse natoque!
                  </span>
                </p>
                <p>
                  Euismod magna id purus eget nunc ligula suspendisse dui netus.
                  Condimentum blandit rutrum at mauris enim pulvinar duis etiam duis
                  vulputate et vulputate suspendisse natoque id tellus consectetur
                  pulvinar et.
                </p>
              </div>
              <div className="flex justify-start ">
                <p className="inline-flex items-center lg:w-80 py-4 rounded-4xl bg-[#262626] px-12 sm:px-16 font-bold text-white focus:outline-none hover:border-2 hover:border-black hover:shadow-[0px_10px_10px_rgba(0,0,0,0.5)] hover:translate-y-1 text-lg transition-all duration-300">
                  Lorem Ipsum
                  <FaArrowRight className="ml-12 transition-transform duration-300 transform group-hover:rotate-90" />
                </p>
              </div>
            </div>

            {/* Image */}
            <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mt-8 md:mt-0 flex justify-center">
              <img
                className="object-cover object-center rounded max-h-80 sm:max-h-full"
                alt="hero"
                src="/DrawKit Vector Illustration-2.png"
              />
            </div>
          </div>
        </div>

        {/* Triangular Clip Path */}
        <div
          style={{
            clipPath: "polygon(0 95%, 100% 0%, 100% 100%, 0% 100%)",
          }}
          className="absolute bottom-0 left-0 w-full h-36 bg-[#262626]"
        ></div>
      </section>



      {/* Third section */}
      <div className="relative">
        <section className="bg-[#262626] md:h-[120vh] pb-72 md:pb-48 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 py-12 relative">
          <div className="lg:w-1/2 text-left lg:text-left mb-10 lg:mb-0">
            <p className="text-yellow-400 text-sm lg:text-base mb-4">
              Quisque porttitor vitae vel amet neque scelerisque mattis.<br />
              Consectetur nibh velit magna consectetur leo.
            </p>
            <h1 className="text-2xl lg:text-4xl text-white font-bold mb-6">
              Cursus Integer Conseq Aliquam Tristique.
            </h1>
            <div className="flex justify-start">
              <p className="inline-flex justify-center  items-center py-4 rounded-4xl bg-white border-0 px-12 sm:px-16 font-bold text-black focus:outline-none hover:border-4 hover:border-amber-400 hover:shadow-[0px_5px_5px_#FFBF00] hover:translate-y-1 text-lg transition-all duration-300">
                Lorem Ipsum
                <FaArrowRight className="ml-12 transition-transform duration-300 group-hover:rotate-90" />
              </p>
            </div>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div className="sm:-mt-12 space-y-6">
              <div className="group shadow-2xl">
                <div className="bg-white text-gray-900 rounded-lg p-6 shadow flex flex-col justify-between hover:bg-[#2e2d2d] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 group-hover:animate-bounce-in">
                  <div className="text-3xl mb-4">🔗</div>
                  <h3 className="text-lg font-bold mb-2">1.<br /> Phasellus Vitae</h3>
                  <h3 className="text-md font-medium mb-2">Quisque</h3>
                  <p className="text-sm">Quisque Porttitor Vitae Vel Amet</p>
                </div>
              </div>

              <div className="group shadow-2xl">
                <div className="bg-yellow-400 text-gray-900 rounded-lg p-6 shadow flex flex-col justify-between hover:bg-[#2e2d2d] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 group-hover:animate-bounce-in">
                  <div className="text-3xl mb-4">♾️</div>
                  <h3 className="text-lg font-bold mb-2">2.<br /> Iaculis Magna</h3>
                  <h3 className="text-md font-medium mb-2">Quisque</h3>
                  <p className="text-sm">Porttitor Neque Scelerisque Mattis</p>
                </div>
              </div>
            </div>

            {/* Right Column Cards - Normal position */}
            <div className="space-y-6">
              <div className="group shadow-2xl">
                <div className="bg-yellow-400 text-gray-900 rounded-lg p-6 shadow flex flex-col justify-between hover:bg-[#2e2d2d] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 group-hover:animate-bounce-in">
                  <div className="text-3xl mb-4">🧩</div>
                  <h3 className="text-lg font-bold mb-2">3.<br /> Eleifend Pulvinar</h3>
                  <h3 className="text-md font-medium mb-2">Quisque</h3>
                  <p className="text-sm">Vitae Consectetur Nibh Velit</p>
                </div>
              </div>

              <div className="group shadow-2xl">
                <div className="bg-white text-gray-900 rounded-lg p-6 shadow flex flex-col justify-between hover:bg-[#2e2d2d] hover:text-white transition-all duration-300 ease-in-out transform hover:scale-105 group-hover:animate-bounce-in">
                  <div className="text-3xl mb-4">🧘</div>
                  <h3 className="text-lg font-bold mb-2">4.<br /> Velit Odio Phir</h3>
                  <h3 className="text-md font-medium mb-2">Quisque</h3>
                  <p className="text-sm">Ametneq Magna Consectetur Leo</p>
                </div>
              </div>
            </div>

          </div>

          <div
            style={{
              clipPath: "polygon(0 95%, 100% 0%, 100% 100%, 0% 100%)",
            }}
            className="absolute bottom-0 left-0 w-full h-36 bg-amber-400"
          ></div>
        </section>


        {/* Testimonial Section */}
        <div className="relative">
          <TestimonialSection />
        </div>

        {/* Fourth Section */}
        <section className="text-gray-600 body-font w-screen flex justify-center items-center bg-amber-400 relative">
          <div className="container mx-auto px-5 py-40 my-32 md:my-24">
            <div className="flex flex-col-reverse md:flex-row items-center">
              {/* Text Content */}
              <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col items-start text-left">
                <p className="text-amber-400 font-bold text-xl md:text-2xl mb-2 md:mb-4">
                  Lorem ipsum dolor sit
                </p>
                <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">
                  Before they sold out
                  <br className="hidden lg:inline-block" /> readymade gluten
                </h1>
                <div className="mb-8 leading-relaxed flex flex-wrap md:justify-start">
                  {[
                    "Cursus Integer",
                    "Integer Consquate",
                    "Risus praesent vulputate",
                    "Cursus Integer",
                    "Integer Consquate",
                    "Risus praesent vulputate",
                  ].map((text, index) => (
                    <p
                      key={index}
                      className="text-black rounded-3xl px-3 py-2 bg-white font-semibold flex items-center m-2"
                    >
                      <IoCheckmarkDoneCircleOutline className="text-2xl text-amber-400 font-bold mx-2" />
                      {text}
                    </p>
                  ))}
                </div>
                <div className="flex justify-start ">
                  <p className="inline-flex text-white items-center lg:w-80 py-4 rounded-4xl bg-[#262626] px-12 sm:px-16 font-bold hover:border-white focus:outline-none  hover:border-2  hover:shadow-[0px_10px_10px_rgba(0,0,0,0)] hover:translate-y-1 text-lg transition-all duration-300">
                    Lorem Ipsum
                    <FaArrowRight className="ml-5 transition-transform duration-300 transform group-hover:rotate-90" />
                  </p>

                </div>
              </div>

              {/* Image */}
              <div className="lg:max-w-lg lg:w-full md:w-1/2 w-full mt-8 md:mt-0 flex justify-center">
                <img
                  className="object-cover object-center rounded max-h-80 sm:max-h-full"
                  alt="hero"
                  src="/DrawKit Vector Illustration-1.svg"
                />
              </div>
            </div>
          </div>

          <div
            style={{
              clipPath: "polygon(0 95%, 100% 0%, 100% 100%, 0% 100%)",
            }}
            className="absolute bottom-0 left-0 w-full h-32 bg-[#262626]"
          ></div>
        </section>

      </div>


      <AccordionSection />
      <Footer />


    </>
  )
}

export default App
