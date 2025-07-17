"use client";
import { useSession } from "next-auth/react";
import Navbar from "@/component/Navbar";
import styles from "./page.module.css";

export default function Home() {
  const { data: session, status } = useSession();

  if (status === "loading") {
    return (
      <>
        <Navbar />
        <p>Loading</p>
      </>
    );
  }
  if (!session) {
    return (
      <>
        <Navbar />
        <div className={styles.page}>
          <p>Welcome to the Home Page!<br/>
            Kindly Sign In!</p>
        </div>
      </>
    );
  }

  return (
    <>
      <Navbar />
      <div className={styles.page}>
        <p>You are signed in as {session.user.name}</p>
      </div>
    </>
  );
}