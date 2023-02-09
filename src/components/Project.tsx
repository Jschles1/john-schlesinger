import * as React from 'react';
import NextLink from 'next/link';
import ProjectScreenshots from './ProjectScreenshots';

interface Props {
    name: string;
    description: string;
    details: string[];
    ctaLink: string;
    images: { src: string; title: string }[];
}

const Project: React.FC<Props> = ({ name, description, details, ctaLink, images }) => (
    <div>
        <p className="font-bold mb-3">{name}</p>
        <ProjectScreenshots images={images} />
        <p>{description}</p>
        <ul className="pl-8 my-4">
            {details.map((detail) => (
                <li className="list-item list-disc my-3" key={detail}>
                    {detail}
                </li>
            ))}
        </ul>
        <p>
            Visit the website here:{' '}
            <NextLink href={ctaLink}>
                <a className="border-b border-transparent font-bold border-white">{ctaLink}</a>
            </NextLink>
        </p>
    </div>
);

export default Project;
