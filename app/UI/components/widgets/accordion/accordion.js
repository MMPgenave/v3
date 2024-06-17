"use client";
import { AccordionItem } from "../../base";
import { useState } from "react";

export const Accordion = ({ items }) => {
  const [openDrawer, setOpenDrawer] = useState(0);
  const toggleAccordion = (index) => {
    if (index === openDrawer) {
      setOpenDrawer(null);
    } else {
      setOpenDrawer(index);
    }
  };
  return (
    <div className="flex flex-col">
      {items.map((item, index) => {
        if (index === 0) {
          return (
            <AccordionItem
              first
              key={item.id}
              isOpen={openDrawer === index}
              header={item.header}
              body={item.body}
              index={index}
              toggleAccordion={toggleAccordion}
            />
          );
        } else
          return (
            <AccordionItem
              key={item.id}
              header={item.header}
              isOpen={openDrawer === index}
              body={item.body}
              index={index}
              toggleAccordion={toggleAccordion}
            />
          );
      })}
    </div>
  );
};
