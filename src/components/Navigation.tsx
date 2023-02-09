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

function download(blob: Blob) {
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = 'john-schlesinger-resume.pdf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
}

const Navigation: React.FC = () => {
    const handleDownload = async () => {
        const response = await fetch('/api/download');
        const blob = await response.blob();
        download(blob);
    };

    return (
        <div className="mt-6">
            <hr />
            <div className="flex mx-auto w-full gap-2 my-6 justify-around flex-wrap xs:flex-nowrap">
                <Link href="/projects" name="Personal Projects" />
                <Link href="https://www.linkedin.com/in/john-schlesinger-21438362/" name="LinkedIn" />
                <Link href="https://github.com/Jschles1" name="GitHub" />
                <a
                    role="button"
                    onClick={handleDownload}
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
