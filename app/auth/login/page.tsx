"use client";
import { signIn } from "next-auth/react"
import { useState } from "react";
export default function LoginPage() {
  const [email, setEmail] = useState("");
  return (
    <div className="w-full h-screen flex justify-center items-center">
      <form onClick={() => {
        signIn('email', {
          email,
        })
      }} className="bg-slate-100 p-4 flex flex-col justify-between items-center gap-3">
        <div>
          <h1 className="text-2xl font-semibold">Let's get started!</h1>
        </div>
        <div>
          <input name="email" onChange={e => { setEmail(e.target.value) }} placeholder="email@example.com" className="w-full p-2" />
        </div>
        <div>
          <button type="submit" className="bg-slate-400/90 p-1 px-4 rounded-sm hover:bg-slate-400 duration-100 ease-in">Submit</button>
        </div>
      </form>
    </div>
  )
}