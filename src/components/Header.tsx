import * as React from 'react';
import NextImage from 'next/image';

const Header: React.FC = () => (
    <div className="flex items-center mx-auto max-w-[55%]">
        <div className="mr-24">
            <NextImage className="rounded-full" src="/images/headshot2022.jpg" width={180} height={180} />
        </div>
        <div className="h-full">
            <h1 className="text-4xl font-bold">John Schlesinger</h1>
            <div>
                <p>Senior Frontend Engineer</p>
                <p className="font-bold">johnschlesinger5@gmail.com</p>
            </div>
        </div>
    </div>
);

export default Header;
