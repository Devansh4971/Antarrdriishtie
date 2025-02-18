"use client"
import {   Menu } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';


export default function Navbar() {
    const Router=useRouter()
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <nav className="fixed font-inter top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex mt-5 justify-between items-center h-16">
                    <div className="flex items-center">
                     <img src='/logo.jpg' className="h-[5rem] w-[5rem]" onClick={(e)=>Router.push("/")}></img>
                    </div>

                    <div className="hidden md:flex items-center font-bold text-xl space-x-8">
                        <a href="/components/aboutus" className="text-gray-700 hover:text-blue-700 transition-colors">About Us</a>
                        <a href="/components/servicesprovided" className="text-gray-700 hover:text-blue-700 transition-colors">Services</a>
                        <a href="/components/Pricing" className="text-gray-700 hover:text-blue-700 transition-colors">Pricing</a>
                        <a href="/components/testimonials" className="text-gray-700 hover:text-blue-700transition-colors">Testimonials</a>
                        <button onClick={(e)=>Router.push("/components/servicesprovided")} className="bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                            Get Started
                        </button>
                    </div>

                    <button
                        className="md:hidden"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <Menu className="h-6 w-6 text-gray-700" />
                    </button>
                </div>
            </div>

            {/* Mobile menu */}
            {isMenuOpen && (
                <div className="md:hidden">
                    <div className="px-2 pt-2 pb-3 space-y-1">
                        <a href="/components/aboutus" className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors">About Us</a>
                        <a href="/components/servicesprovided" className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors">Services</a>
                        <a href="/components/Pricing" className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors">Pricing</a>
                        <a href="/components/testimonials" className="block px-3 py-2 text-gray-700 hover:text-blue-700 transition-colors">Testimonials</a>
                        <button onClick={(e) => Router.push("/components/servicesprovided")} className="w-full mt-2 bg-blue-600 text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors">
                            Get Started
                        </button>
                    </div>
                </div>
            )}
        </nav>
    );
}