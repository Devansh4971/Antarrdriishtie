"use client"
import { useRouter } from "next/navigation";
import { Facebook, Linkedin, Twitter, Mail, Phone } from 'lucide-react';

export default function Footer() {
    const router = useRouter()
    const routerPricing = useRouter()
    const handlerWhy = function () {

        router.push("/components/aboutus")
    }
    const handlerPricing = function () {
        routerPricing.push("/components/Pricing")
    }
    return (
        <footer className="bg-[#486782] font-inter mt-[7.5rem] max-sm:mt-[5rem] py-8 px-4 md:py-12">
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {/* Contact Us Column */}
                    <div className="text-center md:text-left">
                        <h3 className="text-white text-xl font-bold mb-4">Contact Us</h3>
                        <div className="space-y-3">
                            <a
                                href="mailto:antardriishtie@gmail.com"
                                className="flex items-center justify-center md:justify-start text-white hover:text-gray-200 text-sm"
                            >
                                <Mail size={16} className="mr-2" />
                                antardriishtie@gmail.com
                            </a>
                            <a
                                href="tel:+918750196592"
                                className="flex items-center justify-center md:justify-start text-white hover:text-gray-200 text-sm"
                            >
                                <Phone size={16} className="mr-2" />
                                WhatsApp: +91 87501 96592
                            </a>
                        </div>
                    </div>

                    {/* About Us Column */}
                    <div className="text-center md:text-left">
                        <h3 className="text-white text-xl font-bold mb-4">About Us</h3>
                        <div className="space-y-2">
                            <p className="text-white/90 text-sm">
                                Learn about our mission and vision to provide exceptional service and value to our customers.
                            </p>
                            <a
                                href="#about"
                                className="inline-block text-white hover:text-gray-200 text-sm font-semibold"
                                onClick={(e) => handlerWhy()}
                            >
                                Read More →
                            </a>
                        </div>
                    </div>

                    {/* Social & Pricing Column */}
                    <div className="text-center md:text-left">
                        <h3 className="text-white text-xl font-bold mb-4">Connect With Us</h3>
                        <div className="flex justify-center md:justify-start space-x-4 mb-6">
                            <a
                                href="https://linkedin.com"
                                onClick={(e)=>router.push("")}
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-200 transition-colors"
                            >
                                <Linkedin size={20} />
                            </a>
                            <a
                                href="https://facebook.com"
                                onClick={(e) => router.push("")}
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-200 transition-colors"
                            >
                                <Facebook size={20} />
                            </a>
                            <a
                                href="https://twitter.com"
                                onClick={(e) => router.push("")}
                                rel="noopener noreferrer"
                                className="text-white hover:text-gray-200 transition-colors"
                            >
                                <Twitter size={20} />
                            </a>
                        </div>
                        <div className="pt-2 border-t border-white/20">
                            <a
                                href="#pricing"
                                className="inline-block text-white hover:text-gray-200 text-sm font-semibold"
                                onClick={(e) => handlerPricing()}
                            >
                                View Our Pricing →
                            </a>
                        </div>
                    </div>
                </div>

                {/* Copyright Section */}
                <div className="mt-8 pt-8 border-t border-white/10 text-center">
                    <p className="text-white/70 text-sm">
                        © {new Date().getFullYear()} Your Company. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
}