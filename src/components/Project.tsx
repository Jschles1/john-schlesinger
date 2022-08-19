import * as React from 'react';

interface Props {
    name: string;
    emoji: string;
    description: string;
}

const Project: React.FC<Props> = ({ name, emoji, description }) => (
    <li className="list-item list-disc">
        <strong>
            {emoji} {name}
        </strong>
        : {description}
    </li>
);

export default Project;
