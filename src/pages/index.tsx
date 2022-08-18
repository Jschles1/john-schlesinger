import type { NextPage } from 'next';
import Head from 'next/head';
import SectionHeader from '../components/SectionHeader';
import Skill from '../components/Skill';
import { skills } from '../lib/data';

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
        </>
    );
};

export default Home;
