import * as React from 'react';
import Waves from './Waves';
import useMediaQuery from '../lib/useMediaQuery';

interface Props {
    children?: React.ReactNode;
}

const ContentContainer: React.FC<Props> = ({ children }) => {
    const ref = React.useRef<HTMLElement>(null);
    const isMobile = useMediaQuery('(max-width: 769px)');

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

    React.useEffect(() => {
        // If no scrollbar, no need to show gradient effect on text
        if (!isMobile) {
            ref.current?.classList.add('scrollbar');
            ref.current?.classList.add('scrollbar-thumb-white');
            ref.current?.classList.add('scrollbar-track-transparent');
            ref.current?.classList.add('sbar');
            if (ref.current?.scrollHeight !== ref.current?.clientHeight) {
                ref.current?.classList.add('gradient-mask-b-90');
            }
        } else {
            ref.current?.classList.remove('scrollbar');
            ref.current?.classList.remove('scrollbar-thumb-white');
            ref.current?.classList.remove('scrollbar-track-transparent');
            ref.current?.classList.remove('sbar');
        }
    }, [ref, isMobile]);

    return (
        <div className="content">
            <main ref={ref} onScroll={handleScroll} className="pr-12 h-full mt-4 -mr-4">
                {children}
            </main>
        </div>
    );
};

export default ContentContainer;
