"use client";
import Link from "next/link";
import styles from "./authLinks.module.css";
import React from "react";
import { useState } from "react";
// import { signOut, useSession } from "next-auth/react";
const AuthLinks = () => {
  const [open, setOpen] = useState(false);

  const status = "authenticated";
  return (
    <>
      {" "}
      {status === "unauthenticated" ? (
        <Link href="/login" className={styles.link}>
          Login
        </Link>
      ) : (
        <>
          <Link href="/write" className={styles.link}>
            Write
          </Link>
          <span className={styles.link}>Logout</span>
        </>
      )}
    </>
  );
};

export default AuthLinks;
