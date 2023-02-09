import * as React from 'react';

interface Props {
    name: string;
    date: string;
    description: string;
    location: string;
}

const EducationItem: React.FC<Props> = ({ name, date, description, location }) => (
    <li className="my-3">
        <div className="flex xs:items-center xs:justify-between flex-col xs:flex-row">
            <p className="font-bold">{name}</p>
            <p>{location}</p>
        </div>

        <div className="flex xs:items-center xs:justify-between flex-col xs:flex-row">
            <p className="italic">{description}</p>
            <p>{date}</p>
        </div>
    </li>
);

export default EducationItem;
