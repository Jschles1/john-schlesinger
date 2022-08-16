import * as React from 'react';
import NextImage from 'next/image';

const Header: React.FC = () => (
    <div className="flex items-start mx-auto max-w-[65%] gap-4 justify-around">
        <div>
            <NextImage className="rounded-full" src="/images/headshot2022.jpg" width={180} height={180} />
        </div>
        <div className="h-full relative">
            <h1 className="text-4xl font-bold my-6">John Schlesinger</h1>
            <div className="[&>p]:mb-1">
                <p>&#128187; Senior Frontend Engineer</p>
                <p>&#127947; Former Certified Personal Trainer</p>
                <p className="font-bold">&#128231; johnschlesinger5@gmail.com</p>
            </div>
        </div>
    </div>
);

export default Header;
