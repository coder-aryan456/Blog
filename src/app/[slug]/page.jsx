import React from "react";
import styles from "./single.module.css";
import Menu from "@/components/menu/Menu";
import Image from "next/image";
import Comments from "@/components/comments/Comments";
const page = () => {
  return (
    <div className={styles.container}>
      <div className={styles.infoContainer}>
        <div className={styles.textContainer}>
          <h1 className={styles.title}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Exercitationem amet eum autem sed natus similique incidunt magnam ut
            quae voluptatibus.
          </h1>
          <div className={styles.user}>
            <div className={styles.userImageContainer}>
              <Image src="/p1.jpeg" alt="" fill className={styles.avatar} />
            </div>
            <div className={styles.userTextContainer}>
              <span className={styles.username}> Apec</span>
              <span className={styles.date}>01.01.2040</span>
            </div>
          </div>
        </div>
        <div className={styles.imageContainer}>
          <Image src="/p1.jpeg" alt="" fill className={styles.image} />
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.post}>
          <div className={styles.desciption}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              omnis reiciendis sit earum blanditiis fuga, corrupti reprehenderit
              dolores fugit totam, sequi laboriosam tempora recusandae
              provident. Magni possimus tempore placeat eveniet.
            </p>
            <h2>Lorem ipsum dolor sit amet</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              omnis reiciendis sit earum blanditiis fuga, corrupti reprehenderit
              dolores fugit totam, sequi laboriosam tempora recusandae
              provident. Magni possimus tempore placeat eveniet.
            </p>
          </div>
          <div className={styles.comment}>
            <Comments />
          </div>
        </div>
        <Menu />
      </div>
    </div>
  );
};
export default page;
