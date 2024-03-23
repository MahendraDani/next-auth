import { getServerSession } from "next-auth"
import { LoginForm } from "@/components/login-form";
import { authOptions } from "@/lib/auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <main>
      <div className="flex justify-between items-center p-2">
        <div>Me</div>
        <LoginForm />
      </div>
      <div className="m-2">
        {session ?
          <pre>
            {JSON.stringify(session, null, 2)}
          </pre> :
          <div className="text-red-400">You are not logged in.</div>
        }
      </div>
    </main>
  );
}
