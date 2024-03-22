import Image from "next/image";
import { getServerSession } from "next-auth"
import { authOptions } from "./api/auth/[...nextauth]/route";

export default async function Home() {
  const ses = await getServerSession(authOptions);
  console.log(ses);
  return (
    <main>
      <div>Home</div>
    </main>
  );
}
