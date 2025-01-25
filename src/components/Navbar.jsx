import React from "react";

function Navbar() {
    return (
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
    )
}

export default Navbar;