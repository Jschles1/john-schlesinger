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
        <div className="bg-gradient-60 from-[#48c6ef] to-[blue] min-h-screen flex items-start justify-center font-nunito">
            <div className="h-[100vh] w-full flex flex-col overflow-auto">
                <div className="bg-transparent mx-auto sm:w-full md:w-[70%] xl:w-[60%] p-5 xs:p-10 h-full">
                    <Header />
                    <Navigation />
                    <ContentContainer>{children}</ContentContainer>
                </div>
            </div>

            <Waves />
        </div>
    );
};

export default Layout;
