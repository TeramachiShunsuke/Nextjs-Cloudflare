import { NextResponse } from 'next/server'
import { NextRequest } from 'next/server'

export async function middleware(request: NextRequest) {
    // // return NextResponse.next()
    // const pathname = request.nextUrl.pathname
    // const isSigned = await isAuthenticated(request)
    // // if (pathname.startsWith('/_next')) {
    // //     return NextResponse.next()
    // // }
    // if (!isSigned) {
    //     if (pathname !== '/signin') {
    //         request.nextUrl.pathname = '/signin'
    //         return NextResponse.rewrite(request.nextUrl)
    //     }
    // } else {
    //     if (pathname.startsWith('/signin')) {
    //         request.nextUrl.pathname = '/'
    //         return NextResponse.rewrite(request.nextUrl)
    //     } else {
    //         return NextResponse.next()
    //     }
    // }
}
