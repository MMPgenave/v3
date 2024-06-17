// import { AccordionBody, AccordionHeader } from "@/app/UI/components/base";
import { AccordionBody } from "./accordion-body";
import { AccordionHeader } from "./accordion-header";
export const AccordionItem = ({ header, body, isOpen, first, toggleAccordion, index }) => {
  return (
    <div className="flex flex-col">
      <AccordionHeader first={first} isOpen={isOpen} toggleAccordion={toggleAccordion} index={index}>
        {header}
      </AccordionHeader>
      <AccordionBody collapsed={!isOpen}>{body}</AccordionBody>
    </div>
  );
};
