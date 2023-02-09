import * as React from 'react';
import NextLink from 'next/link';

interface LinkProps {
    href: string;
    name: string;
}

const Link: React.FC<LinkProps> = ({ href, name }) => {
    return (
        <NextLink href={href}>
            <a className="font-normal border-b border-transparent hover:font-bold hover:border-white basis-[48%] xs:basis-auto">
                {name}
            </a>
        </NextLink>
    );
};

const Navigation: React.FC = () => {
    return (
        <div className="mt-6">
            <hr />
            <div className="flex mx-auto w-full gap-2 my-6 justify-around flex-wrap xs:flex-nowrap">
                <Link href="/projects" name="Personal Projects" />
                <Link href="https://www.linkedin.com/in/john-schlesinger-21438362/" name="LinkedIn" />
                <Link href="https://github.com/Jschles1" name="GitHub" />
                <a
                    href="assets/john-schlesinger-resume-2023.pdf"
                    download
                    className="font-normal border-b border-transparent hover:font-bold hover:border-white basis-[48%] xs:basis-auto"
                >
                    Download Resume
                </a>
            </div>
            <hr />
        </div>
    );
};

export default Navigation;
