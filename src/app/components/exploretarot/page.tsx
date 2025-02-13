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
                    <p className="text-4xl font-bold text-[#234969] ml-[32rem] mt-[2rem] tracking-[0.015em]">FAQs about Tarot Consultation</p>
                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">What is Tarot consultation?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">Intuitive guidance through tarot card readings.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-2">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">Why is it done?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">To gain insights and clarity on life questions or issues.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-3">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">Who can opt for it?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">Anyone seeking direction or exploring possibilities.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-4">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">Where is it conducted?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">In person or online.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-5">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">When should you consider it?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">For decision-making or self-discovery.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-6">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">How is it carried out?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">By drawing and interpreting tarot cards.</div>
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
