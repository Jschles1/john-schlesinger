import type { NextPage } from 'next';
import Head from 'next/head';
import SectionHeader from '../components/SectionHeader';
import Skill from '../components/Skill';

const skills = [
    '5 years experience with frontend development.',
    'Extensive knowledge of JavaScript including libraries and frameworks such as React, NextJS, and jQuery.',
    'Expertise in implementing scalable CSS designs using SCSS and libraries such as MaterialUI and TailwindCSS.',
];

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>John Schlesinger - About Me</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <section>
                <SectionHeader>Skills and Qualifications:</SectionHeader>
                <ul>
                    {skills.map((skill) => (
                        <Skill key={skill}>{skill}</Skill>
                    ))}
                </ul>
            </section>

            <br />

            <section>
                <SectionHeader>Programming Experience:</SectionHeader>
            </section>
        </>
    );
};

export default Home;
