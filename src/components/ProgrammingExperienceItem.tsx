import * as React from 'react';

interface Props {
    role: string;
    company: string;
    startDate: string;
    endDate: string;
    description: string;
    accomplishments: string[];
}

const ProgrammingExperienceItem: React.FC<Props> = ({
    role,
    company,
    startDate,
    endDate,
    description,
    accomplishments,
}) => (
    <div>
        <div className="[&>p]:my-4 pb-4">
            <strong>
                {role} | {company}
            </strong>
            <p>
                {startDate} - {endDate}
            </p>
            <p>{description}</p>
            <ul className="pl-8 my-4">
                {accomplishments.map((a) => (
                    <li className="list-item list-disc" key={a}>
                        {a}
                    </li>
                ))}
            </ul>
        </div>
    </div>
);

export default ProgrammingExperienceItem;
