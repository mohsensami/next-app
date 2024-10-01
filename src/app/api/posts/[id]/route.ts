import { redirect } from 'next/navigation';
import { posts } from '../data';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    if (parseInt(params.id) > posts.length) {
        redirect('/api/posts ');
    }
    const user = posts.find((user) => user.id === parseInt(params.id));
    return Response.json(user);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json();
    const { title } = body;
    const index = posts.findIndex((post) => post.id === parseInt(params.id));
    posts[index].title = title;
    return Response.json(posts[index]);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const index = posts.findIndex((post) => post.id === parseInt(params.id));
    const deletedPost = posts[index];
    posts.splice(index, 1);
    return Response.json(deletedPost);
}
