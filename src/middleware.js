// middleware.js (in your root directory)
import { getSession } from '@auth0/nextjs-auth0/edge'
import { NextResponse } from 'next/server'

export default async function middleware(req) {
  const res = NextResponse.next()
  const session = await getSession(req, res)
  
  if (!session?.user) {
    return NextResponse.redirect(new URL('/api/auth/login', req.url))
  }

  // Check if email matches
  if (session.user.email !== 'mbuxbd@gmail.com') {
    return NextResponse.redirect(new URL('/unauthorized', req.url))
  }

  return res
}

// Specify which routes to protect
export const config = {
  matcher: [
    // Add routes you want to protect
    '/dashboard/:path*',
    '/admin/:path*',
    '/api/admin/:path*'
  ]
}