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
                    <p className="text-4xl max-sm:text-2xl max-sm:ml-[1rem] font-bold text-[#234969] ml-[28rem] mt-[2rem] tracking-[0.015em]">FAQs about Pranic and Crystal Healing</p>
                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-1">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">What is Pranic and Crystal healing?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">Energy-based healing using crystals and pranic techniques.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-2">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">Why is it beneficial?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">To balance energy, reduce stress, and promote healing.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-3">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">Who should use it?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">Individuals experiencing physical, emotional, or spiritual issues.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-4">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">Where is it available?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">Healing centers or remote sessions.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-5">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">When is it effective?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">During emotional stress, illness, or energy imbalances.</div>
                            </AccordionContent>
                        </AccordionItem>
                    </Accordion>

                </div>
                <div className="mt-[2rem]">
                    <Accordion type="single" collapsible>
                        <AccordionItem value="item-6">
                            <AccordionTrigger><div className="text-xl ml-24 text-bold">How is it practiced?</div></AccordionTrigger>
                            <AccordionContent >
                                <div className="text-xl mt-1 ml-24">By using specific crystals or pranic energy techniques.</div>
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
