import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { FaArrowRight } from "react-icons/fa";
import { TypeAnimation } from 'react-type-animation';


function Hero() {
    return (
        <>
            <section className="text-gray-600 pb-24 lg:h-screen body-font w-screen flex justify-center items-center bg-amber-100 relative">
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

                                <p>
                                    <TypeAnimation
                                        sequence={[
                                            'ready',
                                            1000,
                                            'gluten',
                                            1000,
                                            'Guinea',
                                            1000
                                        ]}
                                        wrapper="span"
                                        speed={50}
                                        repeat={Infinity}
                                    />
                                </p>

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
        </>
    )
}

export default Hero;