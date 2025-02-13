import Footer from "../footer/page"
import Navbar from "../navbar/page"
import { Accordion, AccordionContent, AccordionTrigger, AccordionItem } from "@/components/ui/accordion"
const serviceDetails = () => {
    return (
        <div>
            <div>
                <Navbar></Navbar>
            </div>
            <section>
                <div>
                    <p className="text-4xl font-bold text-[#234969] ml-[32rem] max-sm:text-2xl max-sm:ml-[1rem] mt-[2rem] tracking-[0.015em]">FAQs about Jyotish Consultation</p>
                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">What is Jyotish consultation?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">Personal predictions and guidance based on planetary positions..</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-2">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold"> Why seek it?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">To navigate life challenges and optimize opportunities..</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-3">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">Who can benefit from it?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">Individuals seeking clarity in life decisions.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-4">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">Where can it be accessed?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">Worldwide,remotely or in person.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-5">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">When should it be done?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">For major life decisions or during uncertain times.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-6">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">How is it performed?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">By creating and interpreting astrological charts.</div>
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