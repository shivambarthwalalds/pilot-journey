import { Metadata } from "next";

interface GenerateMetaProps {
    title: string;
    description: string;
    canonical?: string;
}

export const generateMetadata = ({
    title,
    description,
    canonical
}: GenerateMetaProps): Metadata => {
    return {
        title,
        description,
        alternates: {
            canonical,
        },
    };
};