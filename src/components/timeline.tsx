/**
 * Created by Jiayi Li at 12/24/2024,10:23 PM
 */

import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@radix-ui/react-accordion";
import { TimelineNode } from "./timeline-node";

interface TimelineItem {
    url: string;
    alt: string;
    year: string;
    title: string;
    details: string;
}

interface TimelineProps {
    items: TimelineItem[];
}

export function Timeline({ items }: TimelineProps) {
    return (
        <div className="space-y-8">
            {items.map((item, index) => (
                <Accordion key={index} type="single" collapsible>
                    <AccordionItem value={`item-${index}`} className="border-0">
                        <TimelineNode
                            url={item.url}
                            alt={item.alt}
                            year={item.year}
                            title={item.title}
                            isLast={index === items.length - 1}
                        >
                            <AccordionTrigger className="hover:no-underline pt-2">
                <span className="text-sm underline-offset-4 hover:underline">
                  Show Details
                </span>
                            </AccordionTrigger>
                            <AccordionContent className="pt-2">
                                {item.details}
                            </AccordionContent>
                        </TimelineNode>
                    </AccordionItem>
                </Accordion>
            ))}
        </div>
    );
}