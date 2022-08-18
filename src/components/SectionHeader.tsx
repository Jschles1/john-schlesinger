import * as React from 'react';

interface Props {
    children?: React.ReactNode;
}

const SectionHeader: React.FC<Props> = ({ children }) => <h2 className="text-2xl font-bold my-4">{children}</h2>;

export default SectionHeader;
