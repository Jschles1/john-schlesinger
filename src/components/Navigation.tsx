import * as React from 'react';
import NextLink from 'next/link';

interface LinkProps {
    href: string;
    name: string;
}

const Link: React.FC<LinkProps> = ({ href, name }) => {
    return (
        <NextLink href={href}>
            <a className="font-normal border-b border-transparent hover:font-bold hover:border-white">{name}</a>
        </NextLink>
    );
};

const Navigation: React.FC = () => {
    return (
        <div className="mt-6">
            <hr />
            <div className="flex mx-auto w-full gap-2 my-6 justify-around">
                <Link href="https://www.linkedin.com/in/john-schlesinger-21438362/" name="LinkedIn" />
                <Link href="https://github.com/Jschles1" name="GitHub" />
                <Link href="#" name="Download Resume" />
            </div>
            <hr />
        </div>
    );
};

export default Navigation;
