import { NextRequest } from 'next/server';
import { posts } from './data';

export async function GET(request: NextRequest) {
    const searchParams = request.nextUrl.searchParams;
    const query = searchParams.get('query');
    const filteredPosts = query ? posts.filter((post) => post.body.includes(query)) : posts;
    return Response.json(filteredPosts);
}

export async function POST(request: Request) {
    const post = await request.json();
    const newPost = {
        id: posts.length + 1,
        title: post.title,
        body: post.body,
    };
    posts.push(newPost);
    return new Response(JSON.stringify(newPost), {
        headers: {
            'Content-Type': 'application/json',
        },
        status: 201,
    });
}
