import React from "react";
import {Search} from "lucide-react";
import Logo from '../assets/Logo.jpeg';

const Navbar = () =>{
    return (
        <nav className="bg-black text-gray-200 flex justify-between items-center p-4 h-20 text-sm md:text-[15px] font-medium text-nowrap">
            
                <img src={Logo} alt="Logo" className="w-32 h-20 cursor-pointer brightness-125"/>
                <div className="flex items-center space-x-4 xL:hidden"></div>

            <ul className="hidden xl:flex space-x-4">
                <li className="cursor-pointer hover:text-[#e50914]">Home</li>
                <li className="cursor-pointer hover:text-[#e50914]">Shows</li>
                <li className="cursor-pointer hover:text-[#e50914]">Movies</li>

            </ul>

            <div className="flex item-center space x-4 relative">
                <div className="relative hidden md:inline-flex"></div>
                <input type = "text" className="bg-[#333333] px-4 py-2 min-w-72 pr-10 outline-none " placeholder="Search..."/>
                <Search className="absolute top-2 right-4 w-5 h-5"/>

            </div>
            <div>
                <button className="bg-[#e50914] px-5 py-2 text-white cursor-pointer">Get movie pics</button>
                <button className="border border-[#333333] py-2 px-4 cursor-pointer">Sign in</button>
            </div>
        </nav>
    )
}
export default Navbar