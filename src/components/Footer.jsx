import React from "react";
import { FaArrowRight } from "react-icons/fa";

export default function Footer() {
    return (
        <footer className="bg-amber-100 py-8 px-4 sm:px-16">
            <div className="flex flex-col sm:flex-row justify-between items-center">
                <div className="mb-4 sm:mb-0">
                    <h2 className="text-xl sm:text-2xl font-bold">
                        Vulputate et pulvinar ethre
                    </h2>
                    <p className="text-gray-700">Suspendisse tellus consectetur</p>
                </div>
                <div className="flex justify-start ">
                    <p className="inline-flex items-center lg:w-80 py-4 rounded-4xl bg-amber-400 px-12 sm:px-16 font-bold text-black focus:outline-none hover:bg-amber-400 hover:border-2 hover:border-black hover:shadow-[0px_10px_10px_rgba(0,0,0,1)] hover:translate-y-1 text-lg transition-all duration-300">
                        Lorem Ipsum
                        <FaArrowRight className="ml-5 transition-transform duration-300 transform group-hover:rotate-90" />
                    </p>
                </div>
            </div>
            <div className="mt-8 border-t border-slate-300 text-black pt-4 flex flex-col sm:flex-row justify-between items-center text-sm ">
                <p>Copyright © 2025 Lorem Ipsum.</p>
                <div className="flex space-x-4 mt-4 sm:mt-0">
                    <p className="hover:underline text-black">
                        Privacy Policy
                    </p>
                    <span>|</span>
                    <p className="hover:underline text-black">
                        Terms and Conditions
                    </p>
                </div>
            </div>
        </footer>
    );
}
