"use client"
import Navbar from "../navbar/page";
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { IndianRupee } from "lucide-react";

import {useRouter} from "next/navigation"
import Footer from "../footer/page";
export default function pricingMenu(){
    const router=useRouter()
    const handleMeeting=function(){
        router.push("https://calendly.com/antarrdriishtie")
    }
    return(
        <div className="font-inter">
            <Navbar></Navbar>
            <div className="flex items-center justify-center">
                <p className="text-6xl font-bold text-[#234969]  mt-[5rem] tracking-[0.015em]">Pricing</p>
            </div>

            
            <div className="flex mt-[1.5rem] gap-10">
                <section className=" pr-[2.5rem] space-y-5 flex flex-wrap justify-start max-sm:grid max-sm:grid-cols-1  max-sm:gap-4 max-sm:pr-[8rem]">
                    <Card className=" w-full md:w-1/3 shadow-lg ml-[10rem] max-sm:ml-[4rem] min-h-[400px] bg-white border-[#234969] flex flex-col p-6">
                        <CardHeader className="p-0 space-y-2">
                            <h2 className="text-2xl font-bold text-[#234969]">Vastu Consultation</h2>
                            <div className=" pt-12">
                                <p className="text-[#6B7280] text-xl  leading-relaxed ">
                                    Enhance your home’s harmony and energy with expert Vastu consultation. <br></br>Get detailed report with griding and remedies. 
                                </p>
                                
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end p-0 mt-12">
                            <h3 className="text-3xl font-bold text-[#234969] mb-6">Rs 11000</h3>
                            <button className="w-full rounded-md bg-white text-[#234969] border border-[#234969] hover:bg-[#0b3558] hover:text-white font-semibold py-6"

                                onClick={(e) => { handleMeeting() }}>
                                Get Started
                            </button>
                        </CardContent>
                    </Card>
                    <Card className=" w-full md:w-1/3 shadow-lg ml-[10rem] max-sm:ml-[4rem] min-h-[400px] bg-white border-[#234969] flex flex-col p-6">
                        <CardHeader className="p-0 space-y-2">
                            <h2 className="text-2xl font-bold text-[#234969]">Jyotish Consultation</h2>
                            <div className=" pt-12">
                                <p className="text-[#6B7280] text-xl leading-relaxed ">
                                    Discover life’s path with expert Jyotish guidance. <br></br>
                                    Breif chart study with 1 or 2 Ques - Rs 1100
                                    Detailed chart study - Rs 5100
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end p-0 mt-12">
                            <h3 className="text-3xl font-bold text-[#234969] mb-6">Rs 5100</h3>
                            <button className="w-full rounded-md bg-white text-[#234969] border border-[#234969] hover:bg-[#0b3558] hover:text-white font-semibold py-6"

                                onClick={(e) => { handleMeeting() }}>
                                Get Started
                            </button>

                        </CardContent>
                    </Card>
                    <Card className=" md:w-1/3 w-full shadow-lg ml-[10rem] max-sm:ml-[4rem] min-h-[400px] bg-white border-[#234969] flex flex-col p-6">
                        <CardHeader className="p-0 space-y-2">
                            <h2 className="text-2xl font-bold text-[#234969]">Rudraksha Consultation</h2>
                            <div className="pt-5">
                                <p className="text-[#6B7280] text-xl leading-relaxed ">
                                    Experience the power of Rudraksha. Get expert guidance to choose beads that align with your energy for peace, health, and spiritual growth.

                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end p-0 mt-12">
                            <h3 className="text-3xl font-bold text-[#234969] mb-6">Rs 501</h3>
                            <button className="w-full rounded-md bg-white text-[#234969] border border-[#234969] hover:bg-[#0b3558] hover:text-white font-semibold py-6"

                                onClick={(e) => { handleMeeting() }}>
                                Get Started
                            </button>

                        </CardContent>
                    </Card>
                    <Card className="  w-1/4 md:w-1/3 relative max-sm:w-full shadow-lg ml-[10rem] max-sm:ml-[4rem] min-h-[400px] bg-white border-[#234969] flex flex-col p-6">
                        <CardHeader className=" p space-y-2">
                            <h2 className="text-2xl font-bold text-[#234969]">Tarot Counselling</h2>
                            <div className=" pt-14">
                                <p className="text-[#6B7280] text-xl leading-relaxed ">
                                    Find clarity and direction with Tarot counselling. 
                                    Brief consultation session - Rs 501
                                    Detailed consultation session - Rs 1101
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end p-0 mt-12">
                            <h3 className="text-3xl font-bold text-[#234969] mb-6">Rs 1101</h3>
                            <button className="w-full rounded-md bg-white text-[#234969] border border-[#234969] hover:bg-[#0b3558] hover:text-white font-semibold py-6"

                                onClick={(e) => { handleMeeting() }}>
                                Get Started
                            </button>
                            
                        </CardContent>
                    </Card>
                    <Card className=" w-1/4 md:w-1/3 h-[400px] max-sm:w-full shadow-lg ml-[10rem] max-sm:ml-[4rem] min-h-[400px] bg-white border-[#234969] flex flex-col p-6">
                        <CardHeader className="p-0 space-y-2">
                            <h2 className="text-2xl font-bold text-[#234969]">Pranic And Crystal Healing</h2>
                            <div className=" pt-10">
                                <p className="text-[#6B7280] text-xl leading-relaxed ">
                                    Restore balance and well-being with Pranic and Crystal Healing. Energize your body and mind through powerful, holistic techniques.
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end p-0 mt-12">
                            <h3 className="text-3xl font-bold text-[#234969] mb-6">Rs 501</h3>
                            <button className="w-full rounded-md bg-white text-[#234969] border border-[#234969] hover:bg-[#0b3558] hover:text-white font-semibold py-6"

                                onClick={(e) => { handleMeeting() }}>
                                Get Started
                            </button>
                        </CardContent>
                    </Card>
                </section>


            </div>
            <Footer></Footer>
        </div>
    )
}