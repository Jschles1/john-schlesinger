import * as React from 'react';
import Image from 'next/image';
import * as Dialog from '@radix-ui/react-dialog';

interface Props {
    images: { title: string; src: string }[];
}

const CloseIcon = () => (
    <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
            d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z"
            fill="currentColor"
            fillRule="evenodd"
            clipRule="evenodd"
        ></path>
    </svg>
);

const ProjectScreenshots: React.FC<Props> = ({ images }) => {
    const [modalImage, setModalImage] = React.useState<string>('');
    const [modalTitle, setModalTitle] = React.useState<string>('');

    const handleOpen = (e: any) => {
        const title = e.target.dataset.title;
        const src = images.find((image) => image.title === title)!.src;
        setModalImage(src);
        setModalTitle(title);
    };

    return (
        <Dialog.Root>
            <div className="flex gap-8 mb-4">
                {images.map((image) => (
                    <Dialog.Trigger key={image.src} className="cursor-pointer" onClick={handleOpen}>
                        <Image src={image.src} width={300} height={300} data-title={image.title} />
                    </Dialog.Trigger>
                ))}
            </div>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 bg-black bg-opacity-60" />
                <Dialog.Content className="fixed mx-auto top-[15%] left-0 right-0 w-[80%] h-2/3 max-w-[700px] max-h-[85vh] bg-white p-6 rounded-md">
                    <Dialog.Title className="text-black pb-5">{modalTitle}</Dialog.Title>
                    <div className="p-6 relative w-full h-[calc(100%-44px)] border-gray border">
                        <Image src={modalImage} layout="fill" />
                    </div>

                    <Dialog.Close className="text-black absolute inline-flex justify-center items-center top-6 right-6 h-[25px] w-[25px] focus:outline-none focus:bg-blue-400 hover:bg-blue-400 rounded-full focus:bg-opacity-70 hover:bg-opacity-70">
                        <CloseIcon />
                    </Dialog.Close>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
};

export default ProjectScreenshots;
