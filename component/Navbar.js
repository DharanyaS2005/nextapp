"use client";
import { signIn, signOut, useSession } from "next-auth/react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav style={{ padding: "1rem", borderBottom: "1px solid #ccc" }}>
      {session ? (
        <>
          <button onClick={() => signOut()} >Sign out</button>
        </>
      ) : (
        <button onClick={() => signIn()}>Sign in</button>
      )}
    </nav>
  );
}