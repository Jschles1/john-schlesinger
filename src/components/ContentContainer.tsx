import * as React from 'react';

interface Props {
    children?: React.ReactNode;
}

const ContentContainer: React.FC<Props> = ({ children }) => {
    const ref = React.useRef<HTMLElement>(null);

    const handleScroll = (e: React.UIEvent<HTMLElement>) => {
        const target = e.target as HTMLElement;
        const bottom = target.scrollHeight - target.scrollTop === target.clientHeight;
        if (bottom) {
            ref.current?.classList.remove('gradient-mask-b-90');
            ref.current?.classList.add('gradient-mask-t-90');
        } else {
            ref.current?.classList.add('gradient-mask-b-90');
            ref.current?.classList.remove('gradient-mask-t-90');
        }
    };

    return (
        <div className="content">
            <main
                ref={ref}
                onScroll={handleScroll}
                className="pr-12 h-full mt-4 -mr-4 gradient-mask-b-90 overflow-y-scroll scrollbar scrollbar-thumb-white scrollbar-track-transparent sbar"
            >
                {children}
            </main>
        </div>
    );
};

export default ContentContainer;
