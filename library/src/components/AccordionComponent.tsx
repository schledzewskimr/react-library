import React, { ReactNode, useState } from "react";

interface AccordionItem {
    title?: string;
    content?: string;
    expanded?: boolean; // Optional property to control initial state
    titleTemplate?: React.ReactNode; // Custom header template
    contentTemplate?: React.ReactNode;   // Custom body template
}
interface AccordionProps {
    items: AccordionItem[];
}
const AccordionComponent: React.FC<AccordionProps> = ({ items }) => {
    const initialOpenIndex = items.findIndex(item => item.expanded);
    const [openIndex, setOpenIndex] = useState<number | null>(
        initialOpenIndex !== -1 ? initialOpenIndex : null
    );

    const handleToggle = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="accordion">
            {items.map((item, idx) => (
                <div className="accordion-item" key={idx}>
                    <h2 className="accordion-header">
                        <button
                            className={`accordion-button${openIndex === idx ? "" : " collapsed"}`}
                            type="button"
                            aria-expanded={openIndex === idx}
                            aria-controls={`collapse${idx}`}
                            onClick={() => handleToggle(idx)}
                        >
                            {item.titleTemplate ?? item.title}
                        </button>
                    </h2>
                    <div
                        id={`collapse${idx}`}
                        className={`accordion-collapse collapse${openIndex === idx ? " show" : ""}`}
                        aria-labelledby={`heading${idx}`}
                    >
                        <div className="accordion-body">{item.contentTemplate ?? item.content}</div>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default AccordionComponent;