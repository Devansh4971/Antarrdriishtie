import Footer from "../footer/page"
import Navbar from "../navbar/page"
import { Accordion,AccordionContent,AccordionTrigger,AccordionItem } from "@/components/ui/accordion"
const serviceDetails=()=>{
    return(
        <div className="font-inter">
            <div>
                <Navbar></Navbar>               
            </div>
            <section>
                <div>
                    <p className="text-4xl font-bold text-[#234969] ml-[32rem] max-sm:text-2xl max-sm:ml-[1rem] mt-[2rem] tracking-[0.015em]">FAQs about Vastu Consultation</p>
                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">What is Vastu consultation??</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">Guidance to harmonize living or working spaces with natural energies.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-2">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold"> Why is it important?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">To promote health, wealth, and prosperity.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-3">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">Who needs it?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">Individuals or businesses setting up homes or offices.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-4">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">Where is it applicable?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">Residential, commercial, or land spaces.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-5">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">When should it be done?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">During construction, renovation, or when experiencing life imbalances.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-6">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">How is it conducted?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">By analyzing layouts and suggesting structural or positional changes.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
           
            </section>
            <Footer></Footer>
            
        </div>
    )
}

export default serviceDetails