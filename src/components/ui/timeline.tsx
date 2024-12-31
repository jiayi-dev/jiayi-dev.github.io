/**
 * Created by Jiayi Li at 12/28/2024,7:26 PM
 */
import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Avatar } from "./avatar";

export interface TimelineNodeProps {
    date: string;
    company: string;
    title: string;
    logoUrl: string;
    description: {
        title?: string;
        details: string;
    }[];
}

export const Timeline: React.FC<TimelineNodeProps> = ({
    date,
    company,
    title,
    logoUrl,
    description
}) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <li className="timeline-event relative group mb-8 last:mb-0">
            <div className="timeline-event-icon absolute top-0 left-8 -ml-4 mt-2">
                <Avatar 
                    url={logoUrl} 
                    alt={`${company} logo`}
                />
            </div>
            
            <div className="timeline-event-copy relative left-16">
                <p className="timeline-event-thumbnail text-sm text-white bg-black px-4 py-1 mb-3 inline-block">
                    {date}
                </p>
                
                <button 
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="w-full text-left group/title"
                >
                    <div className="flex items-center justify-between">
                        <h4 className="text-[1.2em] font-medium hover:text-zinc-600 transition-colors">
                            {company} - {title}
                        </h4>
                        <ChevronDown
                            className={`h-4 w-4 text-zinc-500 transition-transform duration-200 opacity-0 group-hover/title:opacity-100 ${
                                isExpanded ? "rotate-180" : ""
                            }`}
                        />
                    </div>
                </button>
                
                <div className={`mt-2 overflow-hidden transition-all duration-200 ease-in-out ${
                    isExpanded ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
                }`}>
                    {description.map((item, index) => (
                        <div key={index} className="mb-3 last:mb-0 text-zinc-600">
                            {item.title && (
                                <strong className="font-medium block mb-1">{item.title}</strong>
                            )}
                            <p>{item.details}</p>
                        </div>
                    ))}
                </div>
            </div>
        </li>
    );
};
