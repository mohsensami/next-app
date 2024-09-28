export type imageType = {
    id: string;
    name: string;
    src: string;
    caption: string;
};

export const images: imageType[] = [
    {
        id: '1',
        name: 'Title one',
        src: 'https://picsum.photos/id/1/400/200',
        caption: 'caption one',
    },
    {
        id: '2',
        name: 'Title two',
        src: 'https://picsum.photos/id/2/400/200',
        caption: 'caption two',
    },
    {
        id: '3',
        name: 'Title three',
        src: 'https://picsum.photos/id/3/400/200',
        caption: 'caption three',
    },
];
