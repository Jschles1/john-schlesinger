import * as React from 'react';

interface Props {
    role: string;
    company: string;
    startDate: string;
    endDate: string;
    accomplishments: string[];
}

const ProgrammingExperienceItem: React.FC<Props> = ({ role, company, startDate, endDate, accomplishments }) => (
    <div>
        <div className="[&>p]:my-4 pb-4">
            <strong>
                {role} | {company}
            </strong>
            <p>
                {startDate} - {endDate}
            </p>
            <ul className="pl-8 my-4">
                {accomplishments.map((a) => (
                    <li className="list-item list-disc my-3" key={a}>
                        {a}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default ProgrammingExperienceItem;
