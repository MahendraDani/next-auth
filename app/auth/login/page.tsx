"use client"
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getCsrfToken, getSession, signIn } from "next-auth/react"
import { useRouter, useSearchParams } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const searchParams = useSearchParams();
  const router = useRouter();

  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form onSubmit={async (e) => {
        e.preventDefault();
        const data = await signIn("email", {
          email,
          redirect: false,
        })
        console.log(data);
        // TODO : handle errors before this
        router.push(data?.url!)
      }} className="bg-slate-100 p-4 flex flex-col justify-between items-center gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Login to your account</h1>
        </div>
        <div>
          <input name="email" placeholder="email@example.com" onChange={e => { setEmail(e.target.value) }} className="w-full p-2" />
        </div>
        <div>
          {/* <input name="csrfToken" defaultValue={CsrfToken} className="hidden" /> */}
          <button type="submit" className="bg-slate-400/90 p-1 px-4 rounded-sm hover:bg-slate-400 duration-100 ease-in">Submit</button>
        </div>
      </form>
    </div>
  )
}