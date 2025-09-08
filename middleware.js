
import { clerkMiddleware, createRouteMatcher } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
// here we use protection for assessing the home page without login. if don"t use this then user simply type router the /dashboard and access the page without login
const isProtectedRoute = createRouteMatcher([
    "/dashboard(.*)",
    "/resume(.*)",

    "/ai-cover-letter(.*)",
    "/interview(.*)", 
    "/onboarding(.*)",

])
export default clerkMiddleware(async(auth,req)=>{
    const { userId } = await auth();
    if (!userId && isProtectedRoute(req)) {
        const { redirectToSignIn } = await auth();
        return redirectToSignIn()
    }
    return NextResponse.next();
});

export const config = {
  matcher: [
    // Skip Next.js internals and all static files, unless found in search params
    '/((?!_next|[^?]*\\.(?:html?|css|js(?!on)|jpe?g|webp|png|gif|svg|ttf|woff2?|ico|csv|docx?|xlsx?|zip|webmanifest)).*)',
    // Always run for API routes
    '/(api|trpc)(.*)',
  ],
};