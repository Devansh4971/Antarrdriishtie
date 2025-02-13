"use client"
import Navbar from "../navbar/page";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import Footer from "../footer/page";
const testimonialsData = [
    {
        quote:
            "The Vastu changes recommended for my office were surprisingly practical. We implemented them gradually, and I've noticed better workflow and team dynamics. Their consultant was clear and professional throughout.",
        name: "Rajesh Mehta",
        title: "Buisness Owner",
    },
    {
        quote:
            "I consulted Antarrdriishtie during a difficult career phase. The Jyotish reading was specific and helped me make better decisions. Most importantly, they didn't make far-fetched promises but gave realistic guidance.",
        name: "Priya Sharma",
        title: "Product Manager",
    },
    {
        quote:
            "The Rudraksha consultation was insightful. Instead of pushing me to buy expensive beads, they helped me select what I actually needed. Been wearing it for 6 months and feeling more focused.",
        name: "Amit Sharma",
        title: "IT Proffesional",
    },
    {
        quote:
            "Had a few tarot sessions during my career transition. The counselor was practical and helped me see things clearly. Appreciate that they focused on solutions rather than creating fear.",
        name: "Meera R",
        title: "Product Consultant",
    },
    {
        quote:
            "Their crystal healing session helped with my anxiety.The consultant suggested simple practices that fit into my daily routine.It's been 3 months and I'm definitely calmer.",
        name: "Anita Desai",
        title: "Proffesor",
    },
];

export default function Testimonials(){
    <Navbar></Navbar>
    return(
        <div>
            <Navbar></Navbar>
            
            
            
            <div>
                <InfiniteMovingCards
                    items={testimonialsData}
                    direction="left"
                    speed="fast"
                    pauseOnHover={true}
                    className=""
                />

            </div>
            <div className="bottom mt-[12rem]">
                <Footer></Footer>
            </div>
        </div>
    )
}