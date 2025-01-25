
import { FaArrowRight } from "react-icons/fa";

function Featured() {
    return (<>
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
    </>
    )
}

export default Featured