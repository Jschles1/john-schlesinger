import * as React from 'react';

const Waves: React.FC = () => (
    <div className="absolute bottom-0 w-full">
        <svg
            className="relative w-full mb-[-7px] max-h-[10vh]"
            xmlns="http://www.w3.org/2000/svg"
            xmlnsXlink="http://www.w3.org/1999/xlink"
            viewBox="0 24 150 28"
            preserveAspectRatio="none"
            shapeRendering="auto"
        >
            <defs>
                <path id="wave" d="M-160 44c30 0 58-18 88-18s 58 18 88 18 58-18 88-18 58 18 88 18 v44h-352z" />
            </defs>
            <g className="[&>*]:animate-waves">
                <use
                    className="!animation-delay-1000 !animation-duration-1000"
                    xlinkHref="#wave"
                    x="48"
                    y="0"
                    fill="rgba(255,255,255,0.7)"
                />
                <use
                    className="!animation-delay-2000 !animation-duration-2000"
                    xlinkHref="#wave"
                    x="48"
                    y="3"
                    fill="rgba(255,255,255,0.5)"
                />
                <use
                    className="!animation-delay-3000 !animation-duration-3000"
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="5"
                    fill="rgba(255,255,255,0.3)"
                />
                <use
                    className="!animation-delay-4000 !animation-duration-4000"
                    xlinkHref="#gentle-wave"
                    x="48"
                    y="7"
                    fill="#fff"
                />
            </g>
        </svg>
    </div>
);

export default Waves;
