export interface HelpLink {
    id: number;
    routePath: string;
    title: string;
    videoUrl?: string;
    documentUrl?: string;
    manualUrl?: string;
    faqUrl?: string;
    contactEmail?: string;
    whatsappNumber?: string;
    isActive: boolean;
    createdAt: string;
    updatedAt: string;
}

export interface HelpLinkCreate {
    routePath: string;
    title: string;
    videoUrl?: string;
    documentUrl?: string;
    manualUrl?: string;
    faqUrl?: string;
    contactEmail?: string;
    whatsappNumber?: string;
    isActive?: boolean;
}