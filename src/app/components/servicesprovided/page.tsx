
import Navbar from "../navbar/page";
import Image from "next/image"
import Route2Explore from "../redirects/redirect-explore";
import RedirectButton from "../redirects/redirect-button";
import Footer from "../footer/page";

export default function Services(){
    return(
        <main className="font-inter">
            <section>
                <Navbar></Navbar>
            </section>
            <section>
                <div className="flex items-center justify-center mt-[5rem]">
                    <p className=" max-sm:text-2xl md:text-5xl font-bold text-[#234969]  md:text-left tracking-[0.015em] ">
                        Choose your Service
                    </p>
                </div>
            </section>
            <section>
                <div className=" flex gap-4 max-sm:grid max-sm:grid-cols-1 max-sm:gap-4">
                    {/* Card */}
                    <div className="bg-white p-4 w-1/3 max-sm:w-full rounded-lg mt-8 border-solid border-[#0b3558] shadow-xl text-center transform transition-transform duration-300 hover:scale-105">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4">
                            <Image
                                src="/v.png"
                                alt="Vastu Consultation"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full shadow-md"
                            />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl text-[#0b3558] font-extrabold mb-2">
                            Vastu Consultation
                        </h3>
                        <p className="text-sm  text-[#7d94ab] mb-4">
                            Enhance your home’s harmony and energy with expert Vastu consultation. Simple steps for better health, happiness, and success!
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <Route2Explore url="/components/explorevastu"></Route2Explore>
                            <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>
                        </div>
                    </div>
                    {/* Additional cards follow the same structure */}
                    <div className="bg-white p-4 w-1/3 max-sm:w-full rounded-lg mt-8 border-solid border-[#0b3558] shadow-xl text-center transform transition-transform duration-300 hover:scale-105">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4">
                            <Image
                                src="/jyotishi.png"
                                alt="Jyotish Consultation"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full shadow-md"
                            />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl text-[#0b3558] font-extrabold mb-2">
                            Jyotish Consultation
                        </h3>
                        <p className="text-sm sm:text-base text-[#7d94ab] mb-4">
                            Discover life’s path with expert Jyotish guidance. Unlock insights for health, success, and happiness through personalized astrological advice.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <Route2Explore url="/components/explorejyotish"></Route2Explore>
                            <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>
                        </div>
                    </div>
                    <div className="bg-white w-1/3 max-sm:w-full p-4 rounded-lg mt-8 border-solid border-[#0b3558] shadow-xl text-center transform transition-transform duration-300 hover:scale-105">
                        <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4">
                            <Image
                                src="/rudraksha2.png"
                                alt="Rudraksha Consultation"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-full shadow-md"
                            />
                        </div>
                        <h3 className="text-lg sm:text-xl md:text-2xl text-[#0b3558] font-extrabold mb-2">
                            Rudraksha Consultation
                        </h3>
                        <p className="text-sm sm:text-base text-[#7d94ab] mb-4">
                            Experience the power of Rudraksha. Get expert guidance to choose beads that align with your energy for peace, health, and spiritual growth.
                        </p>
                        <div className="flex flex-wrap items-center justify-center gap-2">
                            <Route2Explore url="/components/explorerudra"></Route2Explore>
                            <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <section id="services" className="">
                    <div className="flex gap-4">
                        <div className=" flex gap-4 mt-[5rem] max-sm:grid max-sm:grid-cols-1 max-sm:gap-4">
                            <div className="bg-white  max-sm:w-full w-1/3 p-4 rounded-lg mt-8 border-solid border-[#0b3558] shadow-xl text-center transform transition-transform duration-300 hover:scale-105">
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4">
                                    <Image
                                        src="/tarot.jpg"
                                        alt="Tarot Counselling"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full shadow-md"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl text-[#0b3558] font-extrabold mb-2">
                                    Tarot Counselling
                                </h3>
                                <p className="text-sm sm:text-base text-[#7d94ab] mb-4">
                                    Find clarity and direction with Tarot counselling. Gain deep insights into your life’s challenges and possibilities through intuitive card readings.
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    <Route2Explore url="/components/exploretarot"></Route2Explore>
                                    <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>
                                </div>
                            </div>
                            <div className="bg-white max-sm:w-full w-1/3 p-4 rounded-lg mt-8 border-solid border-[#0b3558] shadow-xl text-center transform transition-transform duration-300 hover:scale-105">
                                <div className="relative w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 mx-auto mb-4">
                                    <Image
                                        src="/crystal.jpg"
                                        alt="Panic and Crystal Healing"
                                        layout="fill"
                                        objectFit="cover"
                                        className="rounded-full shadow-md"
                                    />
                                </div>
                                <h3 className="text-lg sm:text-xl md:text-2xl text-[#0b3558] font-extrabold mb-2">
                                    Panic and Crystal Healing
                                </h3>
                                <p className="text-sm sm:text-base text-[#7d94ab] mb-4">
                                    Restore balance and well-being with Pranic and Crystal Healing. Energize your body and mind through powerful, holistic techniques.
                                </p>
                                <div className="flex flex-wrap items-center justify-center gap-2">
                                    <Route2Explore url="explorepanic"></Route2Explore>
                                    <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

            </section>

            <section>
                <Footer></Footer>
            </section>
        </main>
    )
}