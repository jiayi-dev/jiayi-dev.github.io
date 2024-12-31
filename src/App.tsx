/**
 * Created by Jiayi Li at 12/24/2024,7:16 PM
 */
import React from 'react';
import {DATA} from './data/resume';
import {EducationNode} from "./components/ui/education";
import {ProjectThumbnail} from "./components/ui/thumbnails";
import {CertificateGroup, groupCertificatesByOrg} from './components/ui/certificates'
import {Badge} from "./components/ui/badge";
import {Timeline} from "./components/ui/timeline";
import { Activity } from './components/ui/activities';

const App: React.FC = () => {
    return (
        <div className="relative max-w-4xl mx-auto">
            <div className="flex gap-12">
                <div className="hidden lg:flex flex-col gap-6 sticky top-24 h-fit">
                    {Object.entries(DATA.contact.social)
                        .map(([platform, social]) => {
                            const Icon = social.icon;
                            return (
                                <a
                                    key={platform}
                                    href={social.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="text-zinc-400 hover:text-zinc-900 transition-colors"
                                    aria-label={social.name}
                                >
                                    <Icon className="h-5 w-5" />
                                </a>
                            );
                        })}
                </div>

                <main className="min-h-screen bg-background font-sans antialiased w-full max-w-2xl py-12 sm:py-24 px-6 space-y-16">
                    <section className="space-y-4">
                        <div className="flex items-center justify-between">
                            <div className="space-y-2">
                                <h1 className="text-3xl font-bold text-zinc-900">
                                    Hi, I'm {DATA.name} 👋
                                </h1>
                                <h2 className="text-lg text-zinc-600">
                                    {DATA.description}
                                </h2>
                            </div>

                            <div className="flex-shrink-0">
                                <img
                                    src={DATA.avatarUrl}
                                    alt={DATA.name}
                                    className="h-24 w-24 rounded-full object-cover border-2 border-zinc-200"
                                />
                            </div>
                        </div>

                        <p className="text-zinc-600">
                            {DATA.summary}
                        </p>

                        <div className="flex gap-4 lg:hidden">
                            {Object.entries(DATA.contact.social)
                                .map(([platform, social]) => {
                                    const Icon = social.icon;
                                    return (
                                        <a
                                            key={platform}
                                            href={social.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-zinc-600 hover:text-zinc-900 transition-colors"
                                        >
                                            <Icon className="h-5 w-5" />
                                        </a>
                                    );
                                })}
                        </div>
                    </section>
                    <section className="work">
                        <h2 className="text-2xl font-bold text-zinc-900">Work Experience</h2>
                        <ul className="relative mt-6">
                            <div className="absolute top-0 left-8 w-0.5 h-full bg-zinc-200"></div>
                            {DATA.work.map((work, index) => (
                                <Timeline key={index} {...work} />
                            ))}
                        </ul>
                    </section>
                    <section className="education">
                        <h2 className="text-2xl font-bold text-zinc-900">Education</h2>
                        <ul className="relative mt-6">
                            {DATA.education.map((education, index) => (
                                <EducationNode key={index} {...education} />
                            ))}
                        </ul>
                    </section>
                    <section className="skills">
                        <div className="flex flex-row">
                            <section className="space-y-4">
                                <h2 className="text-2xl font-bold text-zinc-900">Skills</h2>
                                <div className="flex flex-wrap gap-2">
                                    {DATA.skills.map((skill, index) => (
                                        <Badge key={index}>
                                            {skill}
                                        </Badge>
                                    ))}
                                </div>
                            </section>
                        </div>
                    </section>
                    <section className="space-y-4">
                        <h2 className="text-2xl font-bold text-zinc-900">Projects</h2>
                        <div className="grid gap-6 grid-cols-2">
                            {DATA.projects.map((project, index) => (
                                <ProjectThumbnail key={index} {...project}/>
                            ))}
                        </div>
                    </section>
                    <section className="activities">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-zinc-900">Activities</h2>
                            </div>
                            <div className="space-y-6">
                                {DATA.activities.map((activity, index) => (
                                    <Activity
                                        key={index}
                                        {...activity}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                    <section className="certificates">
                        <div className="space-y-6">
                            <div className="flex items-center justify-between">
                                <h2 className="text-2xl font-bold text-zinc-900">Certificates</h2>
                            </div>
                            <div className="space-y-6">
                                {groupCertificatesByOrg(DATA.certificates).map((group, index) => (
                                    <CertificateGroup
                                        key={index}
                                        {...group}
                                    />
                                ))}
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    );
};

export default App;