import * as React from 'react';
import NextImage from 'next/image';
import Link from 'next/link';
import useMediaQuery from '../lib/useMediaQuery';

const Header: React.FC = () => {
    const isMobile = useMediaQuery('(max-width: 769px)');
    let imageDimensions = isMobile
        ? {
              width: 100,
              height: 100,
          }
        : {
              width: 180,
              height: 180,
          };
    return (
        <div className="block text-center xs:text-left xs:flex items-start mx-auto max-w-full gap-24 justify-center">
            <div>
                <NextImage
                    className="rounded-full"
                    src="/images/headshot2022.jpg"
                    width={imageDimensions.width}
                    height={imageDimensions.height}
                    priority
                />
            </div>
            <div className="h-full relative">
                <h1 className="text-xl xs:text-4xl font-bold my-3 xs:my-6 hover:underline">
                    <Link href="/">John Schlesinger</Link>
                </h1>
                <div className="[&>p]:mb-1">
                    <p>&#128187; Senior Frontend Engineer</p>
                    <p>&#127947; Former Certified Personal Trainer</p>
                    <p className="font-bold">&#128231; johnschlesinger5@gmail.com</p>
                </div>
            </div>
        </div>
    );
};

export default Header;
