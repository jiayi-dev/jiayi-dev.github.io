/**
 * Created by Jiayi Li at 12/24/2024,7:38 PM
 */
import React from "react";

export interface AvatarProps {
    url: string;
    alt: string;
}

export const Avatar: React.FC<AvatarProps> = ({ url, alt }) => {
    return (
        <div className="w-8 h-8 rounded-full bg-white outline outline-[10px] outline-white">
            <img
                src={url}
                alt={alt}
                className="w-full h-full rounded-full object-cover"
            />
        </div>
    );
};