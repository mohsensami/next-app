import { type NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    if (request.nextUrl.pathname === '/profile') {
        return NextResponse.redirect(new URL('/', request.url));
    }
    // 1
    // return NextResponse.redirect(new URL('/', request.url));
}

// 1
// export const config = {
//     matcher: '/profile',
// };
