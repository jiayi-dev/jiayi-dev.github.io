/**
 * Created by Jiayi Li at 12/24/2024,7:38 PM
 */
import React from 'react';
import { Badge } from './badge';
import { LucideIcon } from 'lucide-react';

export interface ProjectLink {
    type: string;
    href: string;
    icon: LucideIcon;
}

export interface ThumbnailProps {
    title: string;
    href: string;
    image: string;
    technologies: string[];
    links: ProjectLink[];
}

export const ProjectThumbnail: React.FC<ThumbnailProps> = ({
    title,
    href,
    image,
    technologies,
    links
}) => {
    return (
        <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="group block overflow-hidden rounded-lg border border-zinc-200 bg-white transition-all hover:shadow-lg"
        >
            <div className="relative mx-auto h-40 w-full overflow-hidden bg-zinc-100">
                <img
                    src={image}
                    alt={`${title} preview`}
                    className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            <div className="p-4 space-y-2">
                <div className="flex items-center justify-between">
                    <h3 className="font-medium text-zinc-900 group-hover:text-blue-600 transition-colors">
                        {title}
                    </h3>
                    {links.map((link, index) => {
                        const Icon = link.icon;
                        return (
                            <Icon 
                                key={index} 
                                className="h-4 w-4 text-zinc-400 group-hover:text-blue-600 transition-colors" 
                            />
                        );
                    })}
                </div>

                <div className="flex flex-wrap gap-1">
                    {technologies.map((tech, index) => (
                        <Badge key={index}>
                            {tech}
                        </Badge>
                    ))}
                </div>
            </div>
        </a>
    );
}; 