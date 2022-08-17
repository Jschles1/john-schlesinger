import * as React from 'react';
import NextImage from 'next/image';

interface Props {
    children?: React.ReactNode;
}

const ContentContainer: React.FC<Props> = ({ children }) => (
    <div className="h-[70%]">
        <main className="overflow-auto h-full py-4">{children}</main>
    </div>
);

export default ContentContainer;
