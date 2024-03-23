import { NextAuthOptions } from "next-auth";
import EmailProvider from "next-auth/providers/email";
import { PrismaAdapter } from "@next-auth/prisma-adapter";
import { resend } from "@/lib/resend";
import MagicLinkEmail from "@/emails/magic-link";
import prisma from "@/lib/prisma";

export const authOptions: NextAuthOptions = {
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
      async sendVerificationRequest({ identifier, url }) {
        // console.log(identifier);
        // console.log(url);

        try {
          if (process.env.NODE_ENV === "development") {
            console.log(`Login Link: ${url}`);
          } else {
            await resend.emails.send({
              to: [identifier],
              from: `Magic Link <${process.env.EMAIL_FROM}>`,
              subject: "Login Link",
              react: MagicLinkEmail({ magicLink: url }),
            });
          }
        } catch (error) {
          throw new Error("Error sending error");
        }
      },
      from: process.env.EMAIL_FROM,
    }),
  ],
  pages: {
    signIn: "/",
    verifyRequest: "/auth/verify",
  },
  callbacks: {
    signIn(params) {
      console.log(params);
      return true;
    },
  },
  session: { strategy: "database" },
};
