"use client"
import { useState } from "react";
import { Menu, X } from "lucide-react"
import { useRouter } from "next/navigation"
import Route2Page from "../redirects/redirect";
import Redirect2Services from "../redirects/redirect-services";


export default function Navbar() {
    const router = useRouter()
    const router1 = useRouter()
    const pushHome = () => {
        router.push("/")
    }
    const pushServices = () => {
        router1.push("/servicesprovided")
    }
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <div className="font-inter">
            <div className="font-inter md:hidden">
                <section className="flex items-center  pl-7 pt-8">
                    <section>
                        <img src="/logo.jpg" alt="logo" className="w-[4rem] rounded-sm  h-[4rem]" onClick={pushHome} />
                    </section>

                    <section className="ml-[7.5rem]">
                        <Redirect2Services url="/components/servicesprovided"></Redirect2Services>
                    </section>

                    <section className="flex items-center md:hidden">
                        <button onClick={() => setMobileMenuOpen(!mobileMenuOpen)} className=" animate-smooth p-2 pl-[1rem] rounded-md  dark:hover:bg-gray-200">
                            {mobileMenuOpen ? <X className="h-8 w-10 "></X> : <Menu className="h-8 bg-black-400 w-10"></Menu>}
                        </button>


                    </section>
                    {
                        mobileMenuOpen && (
                            <div className="absolute mt-[9.5rem] space-x-3
                          min-h-[10rem] font-inter font-bold items-center justify-center  w-screen   flex ">
                                <div className="block text-xl text-[#234969] hover:text-blue-500">
                                    <Route2Page url="/components/aboutus" label="About us" />
                                </div>
                                <div className="block text-xl  hover:text-blue-500 text-[#234969]">
                                    <Route2Page url="/components/servicesprovided" label="Services " />
                                </div>
                                <div className="block text-xl  hover:text-blue-500 text-[#234969]">
                                    <Route2Page url="/components/Pricing" label="Pricing" />
                                </div>
                                <div className="block text-xl  hover:text-blue-500 text-[#234969]">
                                    <Route2Page url="/components/testimonials" label="Testimonials" />
                                </div>


                            </div>
                        )
                    }
                </section>


            </div>
            <div className="flex h-[5rem] max-sm:hidden hover:cursor relative ml-[10rem] mt-[5rem]">
                <nav className="flex items-center">
                    <img
                        src="/logo.jpg"
                        className=" h-[100px] w-[100px]  rounded-md cursor-pointer 
                                         "
                        onClick={pushHome}
                    ></img>
                    <div className=" flex  ml-[8.52rem] items-center space-x-[7.5rem]   text-sm font-medium text-[#0b3558] mt-4   md:text-lg">
                        <Route2Page url="/components/aboutus" label="About Us"></Route2Page>
                        <Route2Page url="/components/servicesprovided" label="Services"></Route2Page>
                        <Route2Page url="/components/Pricing" label="Pricing"></Route2Page>
                        <Route2Page url="/components/testimonials" label="Testimonials"></Route2Page>
                        <Redirect2Services url="/components/servicesprovided"></Redirect2Services>
                    </div>


                </nav>
            </div>
        </div>
    )
}