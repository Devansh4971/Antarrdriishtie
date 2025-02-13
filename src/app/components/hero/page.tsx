"use client"


import { useRouter } from "next/navigation"
export default function  Hero(){
    const router=useRouter()
    return(
        <main className="font-inter">
            <div className="font-inter mt-[3.5rem] md:hidden">
                <section >
                    <section className=" font-bold  mt-[2rem] flex items-center justify-center text-[#0b3558] text-[3rem]">Antarrdrishtie</section>
                    <section className="font-semibold mt-[.5rem] flex items-center justify-center text-[#0b3558] text-[1.65rem]">Mapping Your Spiritual Destiny</section>

                    < section className="font-normal leading-5  mt-[.3rem] pl-[2rem] pr-[2rem]  text-[#476788] text-[1.1rem] m-auto"><p className="ml-[0.75rem]">Decode the wisdom of the cosmos and</p> <p className="ml-[1.35rem]">uncover what’s written in your stars.</p></section>
                </section>

                <section className="flex items-center justify-center mt-[2.5rem]">
                    <button className=" text-white w-[21.25rem] h-[3rem] text-[1.1rem] rounded-[8px] flex justify-center font-inter font-bold bg-[#006bff] items-center " onClick={(e) => { router.push("/components/servicesprovided") }}>Choose Your Service</button>
                </section>

            </div>
            <div className="h-[300px] w-full mb-[20rem] mt-2 flex items-center justify-center max-sm:hidden">
                <div>
                    <div className="xs:flex xs:items-center xs:justify-center">
                        <p className="text-[3.75rem] xs:text-[2.75rem ]  font-bold text-[#234969] ml-[15rem] mt-[17.5rem] tracking-[0.015em]">Antarrdriishtie</p>
                    </div>
                    <div className="xs:ml-[15rem] xs:wrap">
                        <p className="text-[3.75rem] xs:text-[2.75rem ] font-bold text-[#234969] mt-[14px] tracking-[0.015em]">Mapping Your Spiritual Destiny</p>
                    </div>

                    <p className="ml-[10.5rem] mt-[1.25rem] text-[#6c86a0]">Antarrdriishtie bridges centuries of Vedic wisdom with contemporary needs.</p>

                    <p className=" text-[#6c86a0]">  Let our experienced consultants guide you in creating harmony across all aspects of your life using time-honored practices.</p>
                    <div className="mt-[2.5rem] items-center justify-center flex">
                        <button
                            onClick={(e) => router.push("/components/serviceprovided")}
                            className={`
                      w-[25rem]   flex items-center justify-center  px-6  py-3  text-white font-bold bg-[#003B6D] hover:bg-[#00325C] rounded-md        transition-colors duration-200 
                    `}
                        >
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </main>
        
    )
}