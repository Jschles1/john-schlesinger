import * as React from 'react';

interface Props {
    children?: React.ReactNode;
}

const Skill: React.FC<Props> = ({ children }) => <li className="my-3">&#10004;&#65039;&nbsp;&nbsp;{children}</li>;

export default Skill;
