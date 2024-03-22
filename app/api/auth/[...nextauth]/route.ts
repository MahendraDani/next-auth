import prisma from "@/lib/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { Resend } from "resend";

const resend = new Resend(process.env.NEXT_PUBLIC_RESEND_API_KEY);

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: process.env.EMAIL_SERVER_PORT,
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      sendVerificationRequest({ identifier, url }) {
        console.log(identifier);
        console.log(url);
        // resend.emails.send({
        //   to: identifier,
        //   from: process.env.EMAIL_FROM!,
        //   subject: "Login Link",
        //   text: url,
        // });
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  session: { strategy: "database" },
} satisfies NextAuthOptions;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
