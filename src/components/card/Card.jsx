import React from "react";
import Pagination from "../pagination/Pagination";
import styles from "./card.module.css";
import Image from "next/image";
import Link from "next/link";

const Card = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imageContainer}>
        <Image src="/fashion.png" alt="" fill className={styles.image} />
      </div>
      <div className={styles.textContainer}>
        <div className={styles.detail}>
          <span className={styles.category}>11/11/1212</span>
          <span className={styles.category}>Cultue</span>
        </div>
        <Link href="/">
          <h1>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod at
            neque possimus aliquam quisquam{" "}
          </h1>
        </Link>
        <p className={styles.desc}>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sequi
          doloribus accusantium aspernatur inventore aliquid sunt laudantium,
          fuga neque voluptatibus ipsam.
        </p>
        <Link href="/" className={styles.link}>
          Read more
        </Link>
      </div>
    </div>
  );
};

export default Card;
