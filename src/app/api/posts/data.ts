interface IPost {
    id: number;
    title: string;
    body: string;
}
export const posts: IPost[] = [
    {
        id: 1,
        title: 'User1',
        body: 'lorem 1',
    },
    {
        id: 2,
        title: 'User 2',
        body: 'lorem 2',
    },
    {
        id: 3,
        title: 'User 3',
        body: 'lorem 3',
    },
];
