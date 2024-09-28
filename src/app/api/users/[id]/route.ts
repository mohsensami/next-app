import { users } from '../data';

export async function GET(_request: Request, { params }: { params: { id: string } }) {
    const user = users.find((user) => user.id === parseInt(params.id));
    return Response.json(user);
}

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
    const body = await request.json();
    const { name } = body;
    const index = users.findIndex((user) => user.id === parseInt(params.id));
    users[index].name = name;
    return Response.json(users[index]);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
    const index = users.findIndex((user) => user.id === parseInt(params.id));
    const deletedUser = users[index];
    users.splice(index, 1);
    return Response.json(deletedUser);
}
