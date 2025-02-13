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
                    <p className="text-4xl font-bold max-sm:text-2xl max-sm:ml-[1rem] text-[#234969] ml-[32rem] mt-[2rem] tracking-[0.015em]">FAQs about Rudraksha Consultation</p>
                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">What is Rudraksha consultation?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">Recommendation of specific Rudraksha beads for personal well-being.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-2">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">Why is it helpful?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">To enhance energy, focus, and spiritual growth.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-3">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">Who should consider it?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">Anyone seeking balance, peace, or spiritual upliftment.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-4">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">Where is it used?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">Personal use wearable or as part of rituals.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-5">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">When is it recommended?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">During stress, health issues, or spiritual quests.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-6">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">How is it determined?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">By matching individual needs with specific Rudraksha properties.</div>
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
