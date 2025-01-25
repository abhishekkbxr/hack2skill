import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import Slider from "../components/Testmonial";


export default function SliderAndCard() {
    return (<>
        <div className="relative">
            <section className="bg-[#262626] md:h-[120vh] pb-72 md:pb-48 flex flex-col lg:flex-row items-center justify-center px-6 lg:px-16 py-12 relative">
                <div className="lg:w-1/2 text-left lg:text-left mb-10 lg:mb-0">
                    <p className="text-yellow-400 text-sm lg:text-base mb-4">
                        Quisque porttitor vitae vel amet neque scelerisque mattis.<br />
                        Consectetur nibh velit magna consectetur leo.
                    </p>
                    <h1 className="text-2xl md:text-3xl lg:text-4xl text-white font-bold mb-6">
                        Cursus Integer Conseq Aliquam Tristique.
                    </h1>
                    <div className="flex justify-start">
                        <p className="group inline-flex items-center md:w-96 lg:w-80 py-4 rounded-4xl bg-white px-12 sm:px-16 font-bold text-black focus:outline-none hover:border-2 hover:border-[rgb(247,179,43)] hover:shadow-[0px_10px_10px_rgba(247, 179, 43, 1)] hover:translate-y-1 text-lg transition-all duration-300">
                            Lorem Ipsum
                            <FaArrowRight className="ml-12 transition-transform duration-300 group-hover:rotate-90" />
                        </p>
                    </div>
                </div>

                <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-2xl mb-32">
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



            {/* slider Section */}
            <div className="relative">
                <Slider />
            </div>


            <section className="text-gray-600 body-font w-screen flex justify-center items-center bg-amber-400 relative">
                <div className="container mx-auto px-5 py-40 my-32 md:my-24">
                    <div className="flex flex-col-reverse md:flex-row items-center">
                        {/* Text Content */}
                        <div className="lg:flex-grow md:w-1/2 lg:pr-12 md:pr-8 flex flex-col items-start text-left">
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
                            <div className="flex justify-start">
                                <p className="group inline-flex items-center text-white lg:w-80 py-4 rounded-4xl bg-[#262626] px-12 sm:px-16 font-bold  focus:outline-none  hover:border-2 hover:border-black hover:shadow-[0px_10px_10px_rgba(0,0,0,1)] hover:translate-y-1 text-lg transition-all duration-300">
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

                <div
                    style={{
                        clipPath: "polygon(0 95%, 100% 0%, 100% 100%, 0% 100%)",
                    }}
                    className="absolute bottom-0 left-0 w-full h-32 bg-[#262626]"
                ></div>
            </section>

        </div>

    </>
    )
}