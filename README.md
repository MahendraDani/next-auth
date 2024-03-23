# NextAuth

> Why are the next-auth docs such a mess? They really need to step up.

This repo contains my learnings and use of next-auth. I know using kinde, clerk or any other service for that matter is easier but it's always better to have your app's authentication system in-house and next-auth gives you that! (At the cost of you getting overwhelmed by their confusing docs)

## What's done

1. Authentication using _Email Provider_ with custom signin form (all power is in my hands now xd)
2. Verify-request page when magic link request is send.
3. Resuable components using Radix UI (following best practices)
4. Input validation using zod
5. Loading states and toasts included for better UX

## Demo

[Demo Video](/public/videos/level1.mov)

## TODO

1. Error handling when email is not sent
2. Role-based auth (I am really bored with doing this now! Really don't want to developer another platform man! But what can I do? Honor calls!)
3. Play with more nextauth options
