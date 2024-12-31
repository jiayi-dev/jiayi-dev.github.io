/**
 * Created by Jiayi Li at 12/24/2024,7:37 PM
 */
import React from 'react';
import { Avatar } from "./avatar";

export interface EducationNodeProps {
    school: string;
    degree: string;
    date: string;
    logoUrl: string;
    href: string;
}

export const EducationNode: React.FC<EducationNodeProps> = ({
                                                                school,
                                                                degree,
                                                                date,
                                                                logoUrl,
                                                                href
                                                            }) => {
    return (
        <li className="timeline-event relative group mb-8 last:mb-0">
            <div className="timeline-event-icon absolute top-0 left-8 -ml-4 mt-2">
                <Avatar
                    url={logoUrl}
                    alt={`${school} logo`}
                />
            </div>

            <div className="timeline-event-copy relative left-16">

                <a
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group/title"
                >
                    <div className="flex-grow">
                        <div className="flex items-center justify-between mb-2">
                            <h3 className="font-medium text-zinc-900">{school}</h3>
                            <span className="text-sm text-zinc-500">{date}</span>
                        </div>
                        <p className="text-sm text-zinc-600 mb-2">{degree}</p>
                    </div>
                </a>
            </div>
        </li>
    );
};
