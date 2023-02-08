import type { NextPage } from 'next';
import Head from 'next/head';
import SectionHeader from '../components/SectionHeader';
import Skill from '../components/Skill';
import ProgrammingExperienceItem from '../components/ProgrammingExperienceItem';
import EducationItem from '../components/EducationItem';
import { EDUCATION, SKILLS, EXPERIENCE } from '../lib/constants';

const Home: NextPage = () => {
    return (
        <>
            <Head>
                <title>John Schlesinger - Digital Resume</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
                <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
                <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
                <link rel="manifest" href="/site.webmanifest" />
            </Head>

            <section>
                <SectionHeader>Skills and Qualifications:</SectionHeader>
                <ul className="pl-2">
                    {SKILLS.map((skill) => (
                        <Skill key={skill}>{skill}</Skill>
                    ))}
                </ul>
            </section>

            <section>
                <SectionHeader>Programming Experience:</SectionHeader>
                <div>
                    {EXPERIENCE.map((job) => (
                        <ProgrammingExperienceItem
                            key={job.role}
                            role={job.role}
                            company={job.company}
                            startDate={job.startDate}
                            endDate={job.endDate}
                            accomplishments={job.accomplishments}
                        />
                    ))}
                </div>
            </section>

            <section>
                <SectionHeader>Education:</SectionHeader>
                <ul className="mb-4">
                    {EDUCATION.map((e) => (
                        <EducationItem
                            key={e.name}
                            name={e.name}
                            location={e.location}
                            date={e.date}
                            description={e.description}
                        />
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Home;
