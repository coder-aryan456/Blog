"use client"
import React from "react";
import styles from "./loginPage.module.css";
import { signIn, useSession } from "next-auth/react";
const Loginpage = () => {
  const { data, status } = useSession();
  console.log(data,status)
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div className={styles.socialButton} onClick={()=>signIn("google")} > Sing with Google</div>
        <div className={styles.socialButton}> Sing with Github</div>
        <div className={styles.socialButton}> Sing with FaceBook</div>
      </div>
    </div>
  );
};
export default Loginpage;
