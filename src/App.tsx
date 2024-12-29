/**
 * Created by Jiayi Li at 12/24/2024,7:16 PM
 */
import React, { useState } from 'react';
import {DATA} from './data/resume';
import {Accordion, AccordionContent, AccordionItem, AccordionTrigger} from "@radix-ui/react-accordion";
import { TimelineNode } from "./components/timeline-node";

const App: React.FC = () => {
    return (
        <div>
            <div className="flex flex-col items-center min-h-screen">
                <section className="hero">
                    Hi, I'm {DATA.name} 👋
                    {DATA.description}
                </section>
                <section className="about">
                    <span className="font-bold">About</span>
                    {DATA.summary}
                </section>
                <section className="work">
                    <span className="font-bold">Work Experience</span>
                    <div className="space-y-8">
                        {DATA.work.map((item, index) => (
                            <Accordion key={index} type="single" collapsible>
                                <AccordionItem value={`item-${index}`} className="border-0">
                                    <TimelineNode
                                        url={item.logoUrl}
                                        alt={item.company}
                                        year={item.date}
                                        title={item.title}
                                        isLast={index === DATA.work.length - 1}
                                    >
                                        <AccordionTrigger className="hover:no-underline pt-2">
                <span className="text-sm underline-offset-4 hover:underline">
                  Show Details
                </span>
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-2">
                                            {item.description}
                                        </AccordionContent>
                                    </TimelineNode>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>
                </section>
                <section className="education">
                    <span className="font-bold">Education</span>
                    <div className="space-y-8">
                    {DATA.education.map((item, index) => (
                            <Accordion key={index} type="single" collapsible>
                                <AccordionItem value={`item-${index}`} className="border-0">
                                    <TimelineNode
                                        url={item.logoUrl}
                                        alt={item.school}
                                        year={item.date}
                                        title={item.school}
                                        isLast={index === DATA.education.length - 1}
                                    >
                                        <AccordionTrigger className="hover:no-underline pt-2">
                <span className="text-sm underline-offset-4 hover:underline">
                  Show Details
                </span>
                                        </AccordionTrigger>
                                        <AccordionContent className="pt-2">
                                            {item.degree}
                                        </AccordionContent>
                                    </TimelineNode>
                                </AccordionItem>
                            </Accordion>
                        ))}
                    </div>
                </section>
                <section className="skills">
                    <span>Skills</span>
                    <div className="flex flex-row">
                        {DATA.skills.map((skill, id) => (
                            <div key={id}>{skill}</div>
                        ))}
                    </div>
                </section>
                <section className="projects">
                    <span>Projects</span>
                    {DATA?.projects?.map((project, id) => (
                        <div key={project.title || id} className="project-card">
                            <h3 className="font-bold">{project.title}</h3>
                            <span>{project.dates}</span>
                            <p>{project.description}</p>
                            <div className="technologies">
                                {project.technologies.map((tech, index) => (
                                    <span key={index} className="technology">
          {tech}
        </span>
                                ))}
                            </div>

                            <div className="project-links">
                                {project.links.map((link, index) => (
                                    <a key={index} href={link.href} target="_blank" rel="noopener noreferrer">
                                        <span className="link-type">{link.type}</span>
                                        {link.icon && <i className={`icon-${link.icon}`}></i>}
                                    </a>
                                ))}
                            </div>
                        </div>
                    ))}
                </section>
                <section className="activities">
                    <span>Activities</span>
                    {DATA.activities.map((activity, id) => (
                        <div key={id}>
                            <span className="font-bold">{activity.title}</span>
                            <span>{activity.dates}</span>
                            <span>{activity.location}</span>
                            {activity.description}
                        </div>
                    ))}
                </section>
                <section className="certificates">
                    <span>Certificates</span>
                    {DATA.certificates.map((certificate, id) => (
                        <div key={id}>
                            <span className="font-bold">{certificate.title}</span>
                            <span>{certificate.dates}</span>
                            <span>{certificate.organization}</span>
                        </div>
                    ))}
                </section>

            </div>


        </div>
    );
};

export default App;