import type { NextPage } from 'next';
import Head from 'next/head';
import SectionHeader from '../components/SectionHeader';
import Skill from '../components/Skill';
import ProgrammingExperienceItem from '../components/ProgrammingExperienceItem';
import Project from '../components/Project';

const skills = [
    '5 years experience with frontend development.',
    'Extensive knowledge of JavaScript including libraries and frameworks such as React, NextJS, and jQuery.',
    'Expertise in implementing scalable CSS designs using SCSS and libraries such as MaterialUI and TailwindCSS.',
];

const programmingExperience = [
    {
        role: 'Senior Frontend Developer',
        company: 'Encora Technolgoies',
        startDate: 'January 2018',
        endDate: 'Present',
        description: 'Job Description',
        accomplishments: [
            "Led frontend team for the marketing section of 1800Flower's PWA that was featured at Google I/O 2019 for being the first PWA app to be featured in Google's play store via Trusted Web Activities.",
            "Worked closely with client design teams to implement new design on LG's ecommerce site, resulting in higher conversions due to a better user experience.",
            "Led a team of three mid-level engineers to integrate Avon's frontend checkout flow with Cybersource's payment processor, allowing Avon to meet PCI security standards for their website.",
            'Served as frontend lead on project to create an LG ecommerce store exclusively for LG employees and LG partners.',
        ],
    },
];

const projects = [
    {
        name: 'Notes App',
        emoji: '\\uD83D\\uDCDD',
        description: 'Full-Stack iOS Notes app clone using NextJS, Typescript, GraphQL and MongoDB.',
    },
    {
        name: 'Fitness App',
        emoji: '\\uD83C\\uDFCB',
        description: 'Full-Stack app using jQuery, Ruby on Rails, PostgreSQL to help trainers track clients.',
    },
    {
        name: 'Flashcards App',
        emoji: '\\uD83C\\uDCCF',
        description: 'Single page application built with React and Ruby on Rails with an SQLite database.',
    },
];

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>John Schlesinger - Digital Resume</title>
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
                <div>
                    {programmingExperience.map((job) => (
                        <ProgrammingExperienceItem
                            role={job.role}
                            company={job.company}
                            startDate={job.startDate}
                            endDate={job.endDate}
                            description={job.description}
                            accomplishments={job.accomplishments}
                        />
                    ))}
                </div>
            </section>

            <br />

            <section>
                <SectionHeader>Programming Projects:</SectionHeader>
                <ul className="pl-8 mb-4">
                    {projects.map((p) => (
                        <Project name={p.name} emoji={p.emoji} description={p.description} />
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Home;
