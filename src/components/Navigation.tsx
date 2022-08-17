import * as React from 'react';
import NextLink from 'next/link';
import { useRouter } from 'next/router';

interface LinkProps {
    href: string;
    name: string;
    activeHref: string;
}

const Link: React.FC<LinkProps> = ({ href, name, activeHref }) => {
    const textStyle = href === activeHref ? 'font-bold border-b border-black' : 'font-normal';
    return (
        <NextLink href={href}>
            <a className={textStyle}>{name}</a>
        </NextLink>
    );
};

const Navigation: React.FC = () => {
    const router = useRouter();
    const activeHref = router.pathname;
    return (
        <div className="mt-6">
            <hr />
            <div className="flex mx-auto w-full gap-2 my-6 justify-around">
                <Link href="/" name="About" activeHref={activeHref} />
                <Link href="/education" name="Education" activeHref={activeHref} />
                <Link href="/experience" name="Work Experience" activeHref={activeHref} />
                <Link href="/projects" name="Projects" activeHref={activeHref} />
                <Link href="/contact" name="Contact" activeHref={activeHref} />
            </div>
            <hr />
        </div>
    );
};

export default Navigation;
