import prisma from "@/lib/prisma";
import NextAuth, { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import TestEmail from "@/emails/singin";
import { resend } from "@/lib/resend";

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  secret: process.env.NEXT_PUBLIC_JWT_SECRET,
  providers: [
    EmailProvider({
      server: {
        host: process.env.EMAIL_SERVER_HOST,
        port: parseInt(process.env.EMAIL_SERVER_PORT!),
        auth: {
          user: process.env.EMAIL_SERVER_USER,
          pass: process.env.EMAIL_SERVER_PASSWORD,
        },
      },
      sendVerificationRequest({ identifier, url }) {
        console.log(identifier);
        console.log(url);

        try {
          resend.emails.send({
            from: "Login <onboarding@resend.dev>",
            to: [identifier],
            subject: "Magic Link",
            text: url,
            react: TestEmail(),
          });
        } catch (error) {
          console.log("************************");
          console.log(error);
          console.log("************************");

          throw new Error("There was some error in sending email");
        }
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    signIn(params) {
      console.log(params);
      return true;
    },
  },
  session: { strategy: "database" },
} satisfies NextAuthOptions;

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };
