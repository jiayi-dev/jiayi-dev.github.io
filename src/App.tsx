/**
 * Created by Jiayi Li at 12/24/2024,7:16 PM
 */
import React, { useState } from 'react';
import {DATA} from './data/resume';

const App: React.FC = () => {
    return (
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
                {DATA.work.map((work, id) => (
                    <div key={id}>
                        <span className="font-bold">{work.company}</span>
                        <span>{work.title}</span>
                        <span>{work.start} - {work.end}</span>
                        {work.description}
                    </div>
                ))}
            </section>
            <section className="education">
                <span>Education</span>
                {DATA.education.map((education, id) => (
                    <div key={id}>
                        <span className="font-bold">{education.school}</span>
                        <span>{education.degree}</span>
                        <span>{education.start} - {education.end}</span>
                    </div>
                ))}
            </section>
            <section className="skills">
                <span>Skills</span>
                <div className="flex flex-row">
                    {DATA.skills.map((skill,id)=>(
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
    );
};

export default App;