import type { NextPage } from 'next';
import Head from 'next/head';
import NextLink from 'next/link';
import SectionHeader from '../components/SectionHeader';
import Project from '../components/Project';
import { PROJECTS } from '../lib/constants';

const Projects: NextPage = () => {
    console.log(PROJECTS);
    return (
        <>
            <Head>
                <title>John Schlesinger - Projects</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <div className="mb-3">
                &lt;{' '}
                <NextLink href="/" className="underline">
                    <a className="border-b borer-white hover:font-bold"> Back</a>
                </NextLink>
            </div>

            <section>
                <SectionHeader>Projects:</SectionHeader>
                {PROJECTS.map((project) => (
                    <Project
                        name={project.name}
                        description={project.description}
                        details={project.details}
                        ctaLink={project.ctaLink}
                        key={project.name}
                    />
                ))}
            </section>
        </>
    );
};

export default Projects;
