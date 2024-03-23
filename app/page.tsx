import Image from "next/image";
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route";
import { LoginForm } from "@/components/login-form";

export default async function Home() {
  // const ses = await getServerSession(authOptions);
  // console.log(ses);
  return (
    <main>
      <div className="flex justify-between items-center p-2">
        <div>Me</div>
        <LoginForm />
      </div>
    </main>
  );
}
