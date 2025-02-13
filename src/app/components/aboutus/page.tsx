import Footer from "../footer/page";
import Navbar from "../navbar/page";

export default function AboutUs(){
    return(
        <div className="font-inter">
            <div>
                <Navbar></Navbar>
            </div>
            <div>
                <p className="text-6xl max-sm:text-3xl max-sm:ml-[5rem] font-bold text-[#234969] ml-[10rem] mt-[5rem] tracking-[0.015em]">What is Antarrdriishtie?</p>
                
            </div>
            <div className="text-2xl max-sm:text-xl mt-[2.5rem] mr-[10rem] max-sm:mr-[1rem] pr-5">
                <p className="ml-[10.5rem] max-sm:ml-[3.25rem] mt-[1.25rem] text-[#6c86a0]">
                    A leading consultancy specializing in Vastu Consultation, Jyotish Consultation,  Rudraksha Consultation , Tarot counseling, and Crystal healing.<br></br> We combine ancient wisdom with modern expertise to deliver precise, actionable guidance for our clients' personal and professional growth.<br></br></p>
                <p className="ml-[10.5rem] mt-[1.25rem] max-sm:ml-[3.25rem] text-[#6c86a0]">
                    Our team consists of experienced practitioners who bring decades of expertise to each consultation.<br></br> We take pride in translating complex spiritual principles into clear, practical solutions.<br></br> Whether you seek to optimize your space through Vastu, understand your life path through Jyotish, or find balance through our other specialized services, we provide detailed analysis and implementable recommendations.
                </p>
                <p className="ml-[10.5rem] mt-[1.25rem] max-sm:ml-[3.25rem] text-[#6c86a0]">

                    At Antarrdriishtie, we measure our success through our clients' transformations. <br></br>Our methodical approach integrates traditional knowledge with contemporary needs, ensuring measurable results.<br></br> We have established ourselves as trusted advisors by maintaining the highest standards of accuracy and professional excellence in every consultation.

                </p>
            </div>
            <Footer></Footer>
        </div>
    )
}