"use client"
import Image from 'next/image';
import { PartyPopper } from 'lucide-react'
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Route2Explore from '../redirects/redirect-explore';
import RedirectButton from '../redirects/redirect-button';
const testimonialsData = [
    {
        quote:
            "This platform has transformed the way I approach my projects. The seamless experience and intuitive design make it a joy to use every day.",
        name: "John Doe",
        title: "Software Engineer",
    },
    {
        quote:
            "I've seen remarkable improvements in my workflow thanks to this tool. It's a game-changer for anyone in the industry.",
        name: "Jane Smith",
        title: "Product Manager",
    },
    {
        quote:
            "Incredible! The team behind this has thought of everything. It’s the best solution I've come across in years.",
        name: "David Lee",
        title: "UI/UX Designer",
    },
    {
        quote:
            "Outstanding support and fantastic features. I highly recommend it to anyone looking for reliable and innovative tools.",
        name: "Emily Johnson",
        title: "Tech Consultant",
    },
    {
        quote:
            "From the moment I started using this platform, I knew it was something special. It’s fast, reliable, and user-friendly.",
        name: "Michael Brown",
        title: "Data Scientist",
    },
];

export default function ConductedEvents() {
    return (
        <div className=" sticky font-inter mt-[7.5rem] left-0 w-full z-20">
            <main className=''>
                <section className='md:hidden'>
                    <section className='py-12 font-inter'>

                        <div className="container mx-auto px-6 py-6">
                            <h2 className="text-3xl font-bold text-[#234969] ml-[5rem] mb-[2.5rem] tracking-[0.015em]">
                                What we do
                            </h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
                                    <Image
                                        src="/v.png"
                                        alt="Vastu Consultation"
                                        width={400}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-md mb-4 border-4 border-transparent hover:border-yellow-500 transition-all duration-300"
                                    />
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-yellow-500">
                                        Vastu Consultation
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
                                        Enhance harmony and prosperity with expert Vastu consultation. Optimize your surroundings for positive energy, balance, and success.
                                    </p>
                                    <div className="flex flex-wrap items-center justify-center gap-2">
                                        <Route2Explore url="/components/explorevastu"></Route2Explore>
                                        <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>
                                    </div>

                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
                                    <Image
                                        src="/jyotishi.png"
                                        alt="Know Your Department"
                                        width={400}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-md mb-4 border-4 border-transparent hover:border-blue-500 transition-all duration-300"
                                    />
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-blue-500">
                                        Jyotish Consultation
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
                                        Unlock the power of Vedic astrology with expert Jyotish consultation. Gain clarity, guidance, and solutions for a prosperous life.
                                    </p>
                                    <Route2Explore url="/components/explorejyotish"></Route2Explore>
                                    <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>
                                        

                                    
                                </div>
                            </div>
                        </div>

                    </section>
                    <section className=' font-inter'>

                        <div className="container mx-auto px-6 ">

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
                                    <Image
                                        src="/rudraksha2.png"
                                        alt="Rudraksha Consultation"
                                        width={400}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-md mb-4 border-4 border-transparent hover:border-yellow-500 transition-all duration-300"
                                    />
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-yellow-500">
                                        Rudraksha Consultation
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
                                        Experience the spiritual benefits of authentic Rudraksha. Get expert consultation to choose the right bead for protection and well-being.
                                    </p>
                                    <Route2Explore url="/components/explorerudra"></Route2Explore>
                                    <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>

                                </div>
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
                                    <Image
                                        src="/tarot.jpg"
                                        alt="Know Your Department"
                                        width={400}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-md mb-4 border-4 border-transparent hover:border-blue-500 transition-all duration-300"
                                    />
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-blue-500">
                                        Tarot Consultation
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
                                        Discover insights and guidance through Tarot consultation. Unveil hidden possibilities and make informed decisions with intuitive card readings.
                                    </p>
                                    <Route2Explore url="/components/exploretarot"></Route2Explore>
                                    <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>

                                </div>
                            </div>
                        </div>

                    </section>
                    <section className=' font-inter'>

                        <div className="container mx-auto px-6 py-16">

                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                <div className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-xl transition-transform transform hover:scale-105 hover:shadow-2xl duration-300 ease-in-out">
                                    <Image
                                        src="/crystal.jpg"
                                        alt="Panic and Crystal Healing"
                                        width={400}
                                        height={200}
                                        className="w-full h-48 object-cover rounded-md mb-4 border-4 border-transparent hover:border-yellow-500 transition-all duration-300"
                                    />
                                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-2 transition-colors duration-300 hover:text-yellow-500">
                                        Panic and Crystal Healing
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-300 mb-2 text-lg">
                                        Restore energy balance with Pranic and Crystal Healing. Experience deep healing, positivity, and well-being through powerful energy techniques.
                                    </p>
                                    <Route2Explore url="/components/explorepanic"></Route2Explore>
                                    <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>
                                </div>

                            </div>
                        </div>

                    </section>   
                </section>   


                <section className='max-sm:hidden'>
                    <div>
                        <p className="text-5xl font-bold text-[#234969] ml-[30rem] tracking-[0.015em]">What we do at Antarrdriishtie</p>
                    </div>
                    <section>

                        <div className="flex mt-[4rem]">
                            <div className="w-1/2">
                                <p className="text-2xl font-bold text-[#234969] mt-[9.5rem] ml-[10rem] tracking-[0.015em]">Vastu Consultation</p>
                                <p className="text-xl text-[#7d94ab] ml-[10rem] mt-[0.5rem] tracking-[0.015em]">Harness the ancient science of space alignment to create environments that nurture success. Our Vastu consultations help you design spaces that amplify positive energy, creating a natural flow of abundance and wellbeing in your home or workplace.</p>
                                <div className="ml-[5rem] mt-[2.5rem] flex items-center justify-center text-bold">
                                    <Route2Explore url="/components/explorevastu"></Route2Explore>
                                    <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <img src="/vastu.jpg" className="rounded-full object-none ml-[7.5rem] w-[450px] h-[450px]"></img>
                            </div>
                        </div>

                        <div className="flex mt-[10rem]">
                            <div className="w-1/2">
                                <img src="./jyotishi.png" className="rounded-full ml-[9.5rem] w-[450px] h-[450px]"></img>
                            </div>
                            <div className="w-1/2">
                                <p className="text-2xl font-bold text-[#234969] mt-[9.5rem] mr-[2rem] tracking-[0.015em]">Jyotish Consultation</p>
                                <p className="text-xl text-[#7d94ab] ml-[rem] mt-[.5rem] tracking-[0.015em]">
                                    Your destiny is written in the stars - let's decode it together!<br></br>
                                    Our expert Jyotish readings unlock the cosmic blueprint of your life,<br></br> turning celestial wisdom into practical guidance for those big life decisions and daily victories.</p>
                                <div className="ml-[rem] flex items-center justify-center mt-[0.5rem] text-bold">
                                    <Route2Explore url="/components/explorejyotish"></Route2Explore>
                                    <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-[4rem]">
                            <div className="w-1/2">
                                <p className="text-2xl font-bold text-[#234969] mt-[9.5rem] ml-[10rem] tracking-[0.015em]">Rudraksha Consultation</p>
                                <p className="text-xl text-[#7d94ab] ml-[10rem] mt-[0.5rem] tracking-[0.015em]">Not all superheroes wear capes - some wear Rudraksh! Discover your perfect cosmic companion as our experts match you with sacred beads that amplify your energy, protect your aura, and boost your spiritual journey.</p>
                                <div className="ml-[10rem] flex items-center justify-center mt-[0.5rem] text-bold">
                                    <Route2Explore url="/components/explorerudra"></Route2Explore>
                                    <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <img src="./rudraksha2.png" className="rounded-full ml-[7.5rem] w-[450px] h-[450px]"></img>
                            </div>
                        </div>

                        <div className="flex mt-[10rem]">
                            <div className="w-1/2">
                                <img src="./tarot.jpg" className="rounded-full ml-[9.5rem] w-[450px] h-[450px]"></img>
                            </div>
                            <div className="w-1/2">
                                <p className="text-2xl font-bold text-[#234969] mt-[9.5rem] ml-[rem] tracking-[0.015em]">Tarot Consultation</p>
                                <p className="text-xl text-[#7d94ab] ml-[rem] mt-[0.5rem] tracking-[0.015em]">The cards know your story before you tell it!<br></br>
                                    Our intuitive tarot readings cut through life's fog to reveal crystal-clear insights, helping you navigate relationships, career moves, and life's biggest plot twists with confidence.</p>
                                <div className="ml-[rem] flex items-center justify-center mt-[0.5rem] text-bold">
                                    <Route2Explore url="/components/exploretarot"></Route2Explore>
                                    <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>
                                </div>
                            </div>
                        </div>

                        <div className="flex mt-[4rem]">
                            <div className="w-1/2">
                                <p className="text-2xl font-bold text-[#234969] mt-[9.5rem] ml-[10rem] tracking-[0.015em]">Panic and Crystal Healing</p>
                                <p className="text-xl text-[#7d94ab] ml-[10rem] mt-[0.5rem] tracking-[0.015em]">Where crystal magic meets energy mastery! Experience the amplified healing power of sacred stones and pranic energy working in perfect harmony to transform your wellbeing. It's like giving your aura a double shot of nature's strongest medicine!</p>
                                <div className="ml-[5rem] mt-[2.5rem] text-bold flex items-center justify-center">
                                    <Route2Explore url="/components/explorepanic"></Route2Explore>
                                    <RedirectButton url="https://calendly.com/devanshwalecha93"></RedirectButton>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <img src="./crystal.jpg" className="rounded-full ml-[7.5rem] w-[450px] h-[450px] "></img>
                            </div>
                        </div>



                    </section>

                </section>   

                <div className='font-inter md:hidden'>
                    <div className=" flex items-center justify-center">

                        <p className="text-4xl  max-sm:text-2xl max-sm:items-center max-sm:justify-center max-sm:ml-[1.5rem] max-sm:mr-[1.5rem]  font-bold text-[#234969]  mt-[10.5rem] tracking-[0.015em]">Importance of Antarrdriishtie </p>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className=" text-[#7d94ab] mb-2 md:mb-4 max-sm:mb-2  text-xl">Glad you asked !</p>
                    </div>
                </div>
                <div className='max-sm:hidden'>
                    <div className=" flex items-center justify-center">

                        <p className="text-4xl font-bold text-[#234969]  mt-[12.5rem] tracking-[0.015em]">What does Antarrdriishtie mean to our Customers</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <p className=" text-[#7d94ab] mb-2 md:mb-4   text-xl">Glad you asked !</p>
                    </div>
                </div>
                <div className='font-inter'>
                    <InfiniteMovingCards
                        items={testimonialsData}
                        direction="left"
                        speed="fast"
                        pauseOnHover={true}
                        className=""
                    />                        </div>       
            </main>
        </div>
    )
}