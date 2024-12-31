/**
 * Created by Jiayi Li at 12/30/2024,10:22 PM
 */

import {
    Github,
    Linkedin,
    Mail,
    Globe,
    type LucideIcon
} from 'lucide-react';

interface Social {
    name: string;
    url: string;
    icon: LucideIcon;
}

export const DATA = {
    name: "Jiayi Li",
    url: "https://jiayi.ca",
    description:
        "Software Engineer",
    summary:
        "Passionate about creating powerful, user-centric web applications. A lifelong learner and enthusiast of new technologies, always exploring and embracing innovative solutions.",
    avatarUrl: "/img/me.jpg",
    skills: [
        "React",
        "Next.js",
        "Javascript",
        "Typescript",
        "Node.js",
        "Python",
        "Angular",
        "SQL",
        "C#",
        "Java",
        "C++",
    ],
    contact: {
        social: {
            GitHub: {
                name: "GitHub",
                url: "https://github.com/jiayi-dev",
                icon: Github
            },
            LinkedIn: {
                name: "LinkedIn",
                url: "https://www.linkedin.com/in/jiayi-dev",
                icon: Linkedin
            },
            email: {
                name: "Send Email",
                url: "mailto:hi@jiayi.ca",
                icon: Mail
            },
            website: {
                name: "Website",
                url: "https://jiayi.ca",
                icon: Globe
            }
        },
    },
    work: [
        {
            date: "MM YYYY - MM YYY",
            company: "company name A",
            title: "Position",
            logoUrl: "/img/logoUrl.png",
            description:[
                {
                    title:"", /*Add your position here if you have had multiple position changes during your stay.*/
                    details:"",
                }
            ]
        },
    ],
    education: [
        {
            school: "Mcmaster University",
            href: "https://www.eng.mcmaster.ca",
            degree: "Bachelor of Technology (BTech)",
            logoUrl: "/img/logoUrl.jpg",
            date: "2022 - 2024",
        },
    ],
    projects: [
        {
            title: "projects title",
            href: "https://jiayi-dev.github.io/capstone-project",
            dates: "Nov 2024",
            description:
                "Developed a high-performance flight search platform using Java Spring Boot backend and React frontend that helps travelers find cost-effective flight options in real time.",
            technologies: [
                "Java",
                "JavaScript",
                "React.js",
                "MySQ",
                "Sass"
            ],
            links: [
                {
                    type: "Website",
                    href: "https://jiayi-dev.github.io/capstone-project",
                    icon: Globe,
                },
                {
                    type: "Source",
                    href: "https://jiayi-dev.github.io/capstone-project",
                    icon: Github,
                },
            ],
            image: "/img/image.png"
        },
    ],
    activities: [
        {
            title: "BrainStation x Meta",
            dates: "November 2024",
            location: "Online",
            description:
                "Developed a mobile app with AI-generated captions, enhancing accessibility for seniors and fostering connections with younger family members.",
            image:
                "/img/meta.png",
            links: [],
        },
    ],
    certificates: [
        {
            title: "Azure Fundamentals",
            dates: "Jan 2024",
            organization: "Microsoft",
            logoUrl:"/img/microsoft.jpg",
            credential: "https://www.credly.com/badges/f8dc4bc6-2496-4cde-b3c0-5c27ecebd519",
        },
        {
            title: "Security, Compliance, and Identity Fundamentals",
            dates: "Mar 2024",
            organization: "Microsoft",
            logoUrl:"/img/microsoft.jpg",
            credential: "https://www.credly.com/badges/da5cbc2e-5eec-42a9-b2b7-850cfb945042",
        },
        {
            title: "Simulink Onramp",
            dates: "Sept 2024",
            organization: "MathWork",
            logoUrl:"/img/mathwork.png",
            credential: "https://www.credly.com/badges/ebb53048-5849-4187-a5a0-834f6e80ceaf/public_url",
        },
        {
            title: "AWS Educate Getting Started with Storage",
            dates: "Nov 2024",
            organization: "Amazon",
            logoUrl:"/img/aws.png",
            credential: "https://www.credly.com/badges/ebb53048-5849-4187-a5a0-834f6e80ceaf/public_url",
        },
        {
            title: "AWS Educate Introduction to Cloud 101",
            dates: "Nov 2024",
            organization: "Amazon",
            logoUrl:"/img/aws.png",
            credential: "https://www.credly.com/badges/1a52dd21-41b3-47a6-9ac1-2ef03194ffff",
        },
        {
            title: "AWS Educate Getting Started with Compute",
            dates: "Nov 2024",
            organization: "Amazon",
            logoUrl:"/img/aws.png",
            credential: "https://www.credly.com/badges/65b41b56-7505-42c9-9782-291230af128d",
        },
    ],
};