/**
 * Created by Jiayi Li at 12/24/2024,10:22 PM
 */
import React from 'react';

export interface ActivityProps {
    title: string;
    image: string;
    description: string;
    dates: string;
    location: string;
}

export const Activity: React.FC<ActivityProps> = ({
                                                      title,
                                                      image,
                                                      description,
                                                      dates,
                                                      location
                                                  }) => {
    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0">
                <img
                    src={image}
                    alt={`${title} logo`}
                    className="h-12 w-12 rounded-full object-cover"
                />
            </div>

            <div className="flex-grow">
                <div className="flex items-center justify-between mb-2">
                    <h3 className="font-medium text-zinc-900">{title}</h3>
                    <span className="text-sm text-zinc-500">{dates}</span>
                </div>
                <p className="text-sm text-zinc-600 mb-2">{location}</p>
                <p className="text-zinc-600">{description}</p>
            </div>
        </div>
    );
};