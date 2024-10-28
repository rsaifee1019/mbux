// utils/withAuth.js
import { getSession } from '@auth0/nextjs-auth0'
import { NextResponse } from 'next/server'

export function withAuth(handler) {
  return async function (request) {
    try {
      // For App Router, we need to pass the request
      const session = await getSession(request)
      
      if (!session?.user) {
        return NextResponse.json({ error: 'Not authenticated' }, { status: 401 })
      }

      if (session.user.email !== 'mbuxbd@gmail.com') {
        return NextResponse.json({ error: 'Not authorized' }, { status: 403 })
      }

      return handler(request, session)
    } catch (error) {
      console.error('Auth error:', error)
      return NextResponse.json({ error: 'Authentication error' }, { status: 500 })
    }
  }
}