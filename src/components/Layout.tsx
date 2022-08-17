import * as React from 'react';
import Header from './Header';
import Navigation from './Navigation';
import ContentContainer from './ContentContainer';
import Waves from './Waves';

interface Props {
    children?: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
    return (
        <div className="bg-gradient-60 from-[#48c6ef] to-[blue] min-h-screen flex items-start justify-center pt-16 font-nunito">
            <div className="bg-white mx-auto w-[70%] xl:w-[60%] shadow-md rounded h-[80vh] p-10">
                <Header />
                <Navigation />
                <ContentContainer>{children}</ContentContainer>
            </div>
            <Waves />
        </div>
    );
};

export default Layout;
