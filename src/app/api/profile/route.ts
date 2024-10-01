// 1
// import { type NextRequest } from 'next/server';
// 2
import { headers, cookies } from 'next/headers';

export async function GET(request: NextRequest) {
    //1
    // const requestHeader = new Headers(request.headers);
    // console.log(requestHeader.get('Authorization'));
    // 2
    // const theme = request.cookie.get('theme');
    // console.log(theme);
    const headerList = headers();
    console.log(headerList.get('Authorization'));
    cookies().set('resultPerPage', '20');
    console.log(cookies().get('resultPerPage'));
    return new Response('profile data', { headers: { 'Content-Type': 'text/html', 'Set-Cookie': 'dark=theme' } });
}
