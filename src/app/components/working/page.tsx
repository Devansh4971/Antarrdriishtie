"use client"
import Image from "next/image";
import { MoveRight } from "lucide-react";

export default function Working() {
  return (

        <div className="font-inter max-sm:hidden">
            <div>
              <p className="text-5xl   max-sm:text-[1.5rem] max-sm:ml-[7.5rem] font-bold text-[#234969] ml-[28rem] mt-[12.5rem] ">How Antarrdriishtie Works</p>
            </div>

          <div className="flex justify-between max-sm:grid max-sm:grid-cols-4 max-sm:items-center max-sm:justify-center max-sm:gap-[8rem] items-center py-10 px-6 mt-[5rem] relative">
              {/* Card 1 */}
              <div className="w-1/4 text-center relative z-10">
                  <div className="flex">
                      <img
                          src="/working/choose.png"
                          alt="choose your service"
                          className="rounded-full shadow-md w-26 h-32 mx-auto"
                      />
                      
                  </div>
                  <p className="text-xl font-semibold mt-[2rem]">Choose your Service</p>
                  <p className="text-sm text-[#7d94ab] mt-2 max-sm:hidden">
                      Explore our range of offerings—Vastu, Jyotish, Tarot Counselling,
                      Rudraksha Consultation, and Energy Healing
                  </p>
              </div>

              {/* Connecting Line After Card 1 */}
              <div className="absolute top-1/2 left-1/4 w-px h-1 bg-gray-600 z-0"></div>

              {/* Card 2 */}
              <div className="w-1/4 text-center relative z-10">
                  <img
                      src="/working/book.png"
                      alt="choose your service"
                      className="rounded-full shadow-md w-26 h-32 mx-auto"
                  />
                  <p className="text-xl font-semibold mt-3">Book a Consultation</p>
                  <p className="text-sm text-[#7d94ab] mt-2 max-sm:hidden">
                      Schedule a convenient time with our expert through our easy online booking system
                  </p>
              </div>

              {/* Connecting Line After Card 2 */}
              <div className="absolute top-1/2 left-2/4 w-px h-1 bg-gray-600 z-0"></div>

              {/* Card 3 */}
              <div className="w-1/4 text-center relative z-10">
                  <img
                      src="/working/guidance.png"
                      alt="choose your service"
                      className="rounded-full shadow-md w-26 h-32 mx-auto"
                  />
                  <p className="text-xl font-semibold mt-3">Personalized Guidance</p>
                  <p className="text-sm text-[#7d94ab] mt-2 max-sm:hidden">
                      Receive tailored insights, solutions, and remedies based on your unique needs.
                  </p>
              </div>

              {/* Connecting Line After Card 3 */}
              <div className="absolute top-1/2 left-3/4 w-px h-1 bg-gray-600 z-0"></div>

              {/* Card 4 */}
              <div className="w-1/4 text-center relative z-10">
                  <img
                      src="/working/journey.png"
                      alt="choose your service"
                      className="rounded-full shadow-md w-26 h-32 mx-auto"
                  />
                  <p className="text-xl font-semibold mt-3">Experience Transformation</p>
                  <p className="text-sm text-[#7d94ab] mt-2 max-sm:hidden">
                      Implement our expert advice to bring harmony, clarity, and positive energy into your life.
                  </p>
              </div>
          </div>

        </div>

      );
}
