import React from "react";
import styles from "./comments.module.css";
import Link from "next/link";
import Image from "next/image";
const Comments = () => {
  const status = "authenticated";
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Comments</h1>
      {status === "authenticated" ? (
        <div className={styles.write}>
          <textarea
            placeholder="write a comment...."
            className={styles.input}
          />
          <button className={styles.button}>send</button>
        </div>
      ) : (
        <Link href="/login">Login to write</Link>
      )}
      <div className={styles.Comments}>
        <div className={styles.comments}>
          <div className={styles.user}>
            <Image
              src="/p1.jpeg"
              alt=""
              width={50}
              height={50}
              className={styles.image}
            />
            <div className={styles.userInfo}>
              <span className={styles.username}> oni</span>
              <span className={styles.date}>00/ 01 /2040</span>
            </div>
          </div>
          <p className={styles.desc}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugiat possimus animi tempore et consequuntur quibusdam distinctio recusandae in aut!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Comments;
