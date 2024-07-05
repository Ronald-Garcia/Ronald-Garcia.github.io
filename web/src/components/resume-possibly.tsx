import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";



const ResumePossibly = () => {
    return (
        <Accordion type="single" collapsible className="w-[90%] mx-auto">
            <AccordionItem value="item-1">
            <AccordionTrigger> Who am I? </AccordionTrigger>
                <AccordionContent>
                    Placeholder frankly lalalalalalalaalalalalallalalal just testing to see if long paragraphs look good for accordions.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
            <AccordionTrigger> What do I do? </AccordionTrigger>
                <AccordionContent>
                    Placeholder frankly lalalalalalalaalalalalallalalal just testing to see if long paragraphs look good for accordions.
                </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
                <AccordionTrigger> Where am I? </AccordionTrigger>
                <AccordionContent>
                    Placeholder frankly lalalalalalalaalalalalallalalal just testing to see if long paragraphs look good for accordions.
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    );
}

export default ResumePossibly;