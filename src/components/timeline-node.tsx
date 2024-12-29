/**
 * Created by Jiayi Li at 12/28/2024,7:26 PM
 */
import {Avatar} from "@radix-ui/react-avatar";

interface TimelineNodeProps {
    url: string;
    alt: string;
    year: string;
    title: string;
    children: React.ReactNode;
    isLast?: boolean;
}

export function TimelineNode({ url, alt, year, title, children, isLast }: TimelineNodeProps) {
    return (
        <div className="flex items-start relative">
            <div className="flex flex-col items-center mr-4">
                <Avatar className="w-12 h-12 z-10 border-4 border-background">
                    <img src={url} alt={alt} className="object-cover" />
                </Avatar>
            </div>
            {!isLast && (
                <div className="absolute left-6 top-12 -translate-x-1/2 w-0.5 h-[calc(100%_-_1.5rem)] bg-muted-foreground/20" />
            )}
            <div className="flex-1 pt-1.5">
                <div className="flex items-center space-x-2">
                    <span className="text-sm font-medium text-muted-foreground">{year}</span>
                    <h3 className="text-lg font-semibold">{title}</h3>
                </div>
                <div className="mt-2 text-sm text-muted-foreground">
                    {children}
                </div>
            </div>
        </div>
    );
}