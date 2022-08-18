import * as React from 'react';

interface Props {
    children?: React.ReactNode;
    key: string;
}

const Skill: React.FC<Props> = ({ children, key }) => (
    <li className="my-3" key={key}>
        &#10004;&#65039;&nbsp;&nbsp;{children}
    </li>
);

export default Skill;
