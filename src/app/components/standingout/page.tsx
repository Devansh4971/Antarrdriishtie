export default function StandingOut(){
    return(
        <div className="font-inter max-sm:hidden">
            <div className="flex items-center justify-center">
                <p className="text-5xl font-bold text-[#234969]  mt-[10.5rem] tracking-[0.015em]">What makes Antarrdriishtie Unique</p>
            </div>

            <div className="flex justify-between items-center py-10 px-6 mt-[5rem] relative">
                
                <div className="w-1/4 text-center relative z-10">
                    <div className="flex">
                        <img
                            src="/standingout/simple.png"
                            alt="choose your service"
                            className="rounded-full shadow-md w-26 h-32 mx-auto"
                        />

                    </div>
                    <p className="text-xl font-semibold mt-[2rem]">Simple</p>
                    <p className="text-sm text-[#7d94ab] mt-2">
                        Clear, straightforward guidance in Vastu, Jyotish, and spiritual healing for ease and understanding.
                    </p>
                </div>

                
                
                <div className="w-1/4 text-center relative z-10">
                    <img
                        src="/standingout/expert.png"
                        alt="choose your service"
                        className="rounded-full shadow-md w-26 h-32 mx-auto"
                    />
                    <p className="text-xl font-semibold mt-3">Expert</p>
                    <p className="text-sm text-[#7d94ab] mt-2">
                        Expert guidance in Vastu, Jyotish, and spiritual healing for clarity, harmony, and growth.
                    </p>
                </div>

                {/* Connecting Line After Card 2 */}
                <div className="absolute top-1/2 left-2/4 w-px h-1 bg-gray-600 z-0"></div>

                {/* Card 3 */}
                <div className="w-1/4 text-center relative z-10">
                    <img
                        src="/standingout/accurate.png"
                        alt="choose your service"
                        className="rounded-full shadow-md w-26 h-32 mx-auto"
                    />
                    <p className="text-xl font-semibold mt-3">Accurate</p>
                    <p className="text-sm text-[#7d94ab] mt-2">
                        Precise and reliable insights in Vastu, Jyotish, and spiritual healing for effective results.
                    </p>
                </div>
            </div>
         
        </div>
    )
}