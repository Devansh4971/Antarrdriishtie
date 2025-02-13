"use client"
import Navbar from "../navbar/page";
import { Card, CardContent, CardHeader } from "@/components/ui/card"

import {useRouter} from "next/navigation"
import Footer from "../footer/page";
export default function pricingMenu(){
    const router=useRouter()
    const handleMeeting=function(){
        router.push("https://calendly.com/devanshwalecha93")
    }
    return(
        <div className="font-inter">
            <Navbar></Navbar>
            <div className="flex items-center justify-center">
                <p className="text-6xl font-bold text-[#234969]  mt-[5rem] tracking-[0.015em]">Pricing</p>
            </div>

            <div className="flex mt-[7.5rem] items-center justify-center gap-10  ">
                <section className="flex max-sm:grid max-sm:grid-cols-1  max-sm:gap-4 max-sm:pr-[2.5rem]">
                    <Card className=" w-3/4  shadow-lg ml-[10rem] max-sm:ml-[4rem] min-h-[400px] bg-white border-[#234969] flex flex-col p-6">
                        <CardHeader className="p-0 space-y-2">
                            <h2 className="text-2xl font-bold text-[#234969]">Vastu Consultation</h2>
                            <div className=" pt-12">
                                <p className="text-[#6B7280] text-xl  leading-relaxed ">
                                    Enhance your home’s harmony and energy with expert Vastu consultation. <br></br>Simple steps for better health, happiness, and success!
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end p-0 mt-12">
                            <h3 className="text-3xl font-bold text-[#234969] mb-6">Rs 9999</h3>
                            <button className="w-full rounded-md bg-white text-[#234969] border border-[#234969] hover:bg-[#0b3558] hover:text-white font-semibold py-6"
                                
                                onClick={(e) => { handleMeeting() }}>
                                Get Started
                            </button>
                        </CardContent>
                    </Card>
                    <Card className=" w-3/4 shadow-lg ml-[10rem] max-sm:ml-[4rem] min-h-[400px] bg-white border-[#234969] flex flex-col p-6">
                        <CardHeader className="p-0 space-y-2">
                            <h2 className="text-2xl font-bold text-[#234969]">Jyotish Consultation</h2>
                            <div className=" pt-12">
                                <p className="text-[#6B7280] text-xl leading-relaxed ">
                                    Discover life’s path with expert Jyotish guidance. Unlock insights for health, success, and happiness through personalized astrological advice.
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end p-0 mt-12">
                            <h3 className="text-3xl font-bold text-[#234969] mb-6">Rs 9999</h3>
                            <button className="w-full rounded-md bg-white text-[#234969] border border-[#234969] hover:bg-[#0b3558] hover:text-white font-semibold py-6"

                                onClick={(e) => { handleMeeting() }}>
                                Get Started
                            </button>
                            
                        </CardContent>
                    </Card>
                    <Card className=" w-3/4 shadow-lg ml-[10rem] max-sm:ml-[4rem] min-h-[400px] bg-white border-[#234969] flex flex-col p-6">
                        <CardHeader className="p-0 space-y-2">
                            <h2 className="text-2xl font-bold text-[#234969]">Rudraksha Consultation</h2>
                            <div className="pt-5">
                                <p className="text-[#6B7280] text-xl leading-relaxed ">
                                    Experience the power of Rudraksha. Get expert guidance to choose beads that align with your energy for peace, health, and spiritual growth.
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end p-0 mt-12">
                            <h3 className="text-3xl font-bold text-[#234969] mb-6">Rs 9999</h3>
                            <button className="w-full rounded-md bg-white text-[#234969] border border-[#234969] hover:bg-[#0b3558] hover:text-white font-semibold py-6"

                                onClick={(e) => { handleMeeting() }}>
                                Get Started
                            </button>
                            
                        </CardContent>
                    </Card>
                </section>
            </div>
            <div className="flex mt-[1.5rem] gap-10">
                <section className=" pr-[2.5rem] flex max-sm:grid max-sm:grid-cols-1  max-sm:gap-4 max-sm:pr-[8rem]">
                    <Card className="  w-3/4 relative max-sm:w-full shadow-lg ml-[10rem] max-sm:ml-[4rem] min-h-[400px] bg-white border-[#234969] flex flex-col p-6">
                        <CardHeader className=" space-y-2">
                            <h2 className="text-2xl font-bold text-[#234969]">Tarot Counselling</h2>
                            <div className=" pt-14">
                                <p className="text-[#6B7280] text-xl leading-relaxed ">
                                    Find clarity and direction with Tarot counselling. Gain deep insights into your life’s challenges and possibilities through intuitive card readings.
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end p-0 mt-12">
                            <h3 className="text-3xl font-bold text-[#234969] mb-6">Rs 9999</h3>
                            <button className="w-full rounded-md bg-white text-[#234969] border border-[#234969] hover:bg-[#0b3558] hover:text-white font-semibold py-6"

                                onClick={(e) => { handleMeeting() }}>
                                Get Started
                            </button>
                            
                        </CardContent>
                    </Card>
                    <Card className=" w-3/4 max-sm:w-full shadow-lg ml-[10rem] max-sm:ml-[4rem] min-h-[400px] bg-white border-[#234969] flex flex-col p-6">
                        <CardHeader className="p-0 space-y-2">
                            <h2 className="text-2xl font-bold text-[#234969]">Panic And Crystal Healing</h2>
                            <div className=" pt-5">
                                <p className="text-[#6B7280] text-xl leading-relaxed ">
                                    Restore balance and well-being with Pranic and Crystal Healing. Energize your body and mind through powerful, holistic techniques.
                                </p>
                            </div>
                        </CardHeader>
                        <CardContent className="flex-grow flex flex-col justify-end p-0 mt-12">
                            <h3 className="text-3xl font-bold text-[#234969] mb-6">Rs 9999</h3>
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