/**
 * Created by Jiayi Li at 12/24/2024,7:36 PM
 */
import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

interface Certificate {
    title: string;
    dates: string;
    organization: string;
    logoUrl: string;
    credential: string;
}

export interface CertificateGroupProps {
    organization: string;
    logoUrl: string;
    certificates: Certificate[];
}

export const CertificateGroup: React.FC<CertificateGroupProps> = ({
    organization,
    logoUrl,
    certificates
}) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div className="flex gap-4">
            <div className="flex-shrink-0">
                <img
                    src={logoUrl}
                    alt={`${organization} logo`}
                    className="h-12 w-12 rounded-full object-cover"
                />
            </div>

            <div className="flex-grow">
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="group flex w-full items-center justify-between text-left"
                >
                    <h3 className="font-medium text-zinc-900">{organization}</h3>
                    <div className="ml-4 opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight
                            className={`h-4 w-4 text-zinc-500 transition-transform duration-200 ${
                                isOpen ? "rotate-90" : ""
                            }`}
                        />
                    </div>
                </button>

                <div
                    className={`overflow-hidden transition-all duration-300 ${
                        isOpen ? "max-h-[1000px] mt-2" : "max-h-0"
                    }`}
                >
                    <div className="space-y-3 pl-4 border-l border-zinc-200">
                        {certificates.map((cert, index) => (
                            <div key={index} className="relative">
                                <div className="absolute -left-4 top-4 h-px w-3 bg-zinc-200"></div>
                                
                                <div className="group">
                                    <div className="flex justify-between items-start">
                                        <div>
                                            <h4 className="font-medium text-zinc-800">{cert.title}</h4>
                                            <p className="text-sm text-zinc-600">{cert.dates}</p>
                                        </div>
                                        <a
                                            href={cert.credential}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-sm text-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                                        >
                                            View Credential →
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const groupCertificatesByOrg = (certificates: Certificate[]) => {
    return certificates.reduce((groups, cert) => {
        const group = groups.find(g => g.organization === cert.organization);
        if (group) {
            group.certificates.push(cert);
        } else {
            groups.push({
                organization: cert.organization,
                logoUrl: cert.logoUrl,
                certificates: [cert]
            });
        }
        return groups;
    }, [] as CertificateGroupProps[]);
};
