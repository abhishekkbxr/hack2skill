import React, { useState } from 'react';
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";

const testimonials = [
    {
        id: 1,
        name: "Holly Davidson",
        image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=688&h=688",
        quote: "Euismod magna id purus eget nunc ligula suspendisse dui netus. Condimentum blandit rutrum at mauris enim pulvinar."
    },
    {
        id: 2,
        name: "John Smith",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=688&h=688",
        quote: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
    },
    {
        id: 3,
        name: "Sarah Johnson",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80&w=688&h=688",
        quote: "Vivamus sagittis lacus vel augue laoreet rutrum faucibus dolor auctor. Vestibulum id ligula porta felis euismod semper."
    }
];

function Slider() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isHovered, setIsHovered] = useState(false);
    const [isLeaving, setIsLeaving] = useState(false);




    const nextSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        );
    };

    const prevSlide = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        );
    };

    return (
        <div className="absolute inset-x-10 -top-64 md:-top-48 z-20 flex items-center justify-center">
            <div className="max-w-5xl w-full px-4">
                <div className="relative rounded-[50px] overflow-hidden group transition-all duration-500"
                    onMouseEnter={() => setIsHovered(!isHovered)}
                    onMouseLeave={() => setIsHovered(!isHovered)}
                >
                    {/* Background Image Container */}
                    <div className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 ${isHovered ? 'bounce-in' : ''}`}

                    >
                        <div className="absolute inset-0 bg-black/60 z-10" />
                        <img
                            src={testimonials[currentIndex].image}
                            alt={testimonials[currentIndex].name}
                            className="w-full h-[600px] object-cover"
                        />
                    </div>

                    {/* Content Container */}
                    <div className={`relative z-20 bg-white group-hover:bg-transparent transition-colors duration-500 p-10 sm:p-16 ${isHovered ? 'bg-transparent bounce-in' : ''
                        } ${isLeaving ? 'bg-white bounce-in' : ''}`}>
                        <div className="flex flex-col lg:flex-row items-center space-y-8 lg:space-y-0 lg:space-x-12">
                            {/* Profile Image */}
                            <div className="flex justify-center -mt-6 mb-6 lg:mb-12">
                                <div className={`w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden border-4 border-white shadow-xl `}>
                                    <img
                                        src={testimonials[currentIndex].image}
                                        alt={testimonials[currentIndex].name}
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
                                <h2 className="text-xl sm:text-2xl font-bold group-hover:text-white transition-colors duration-500">
                                    What our customers thought?
                                </h2>

                                <p className="text-base sm:text-lg text-gray-600 group-hover:text-white/90 transition-colors duration-500">
                                    {testimonials[currentIndex].quote}
                                </p>

                                <p className="text-lg sm:text-2xl font-bold group-hover:text-white transition-colors duration-500">
                                    {testimonials[currentIndex].name}
                                </p>

                                <div className="flex justify-center space-x-6">
                                    <p
                                        onClick={prevSlide}
                                        className="p-2 rounded-full bg-gray-100 transition-colors duration-500"
                                    >
                                        <FaArrowLeftLong className="w-6 h-6 text-black" />
                                    </p>
                                    <p
                                        onClick={nextSlide}
                                        className="p-2 rounded-full bg-gray-100  transition-colors duration-500"
                                    >
                                        <FaArrowRightLong className="w-6 h-6 text-black" />
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


    );
}

export default Slider;