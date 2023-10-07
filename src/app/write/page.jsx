"use client";
import React, { useState } from "react";
import Image from "next/image";
import styles from "./writepage.module.css";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.bubble.css";
const writePage = () => {
  const [open, setopen] = useState(true);
  const [value, setValue] = useState("");
  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="Tell your stories..."
        className={styles.input}
      />
      <div className={styles.editor}>
        <button className={styles.button} onClick={() => setopen(!open)}>
          <Image src="/plus.png" alt="" width={16} height={16} />
        </button>
        {open && (
          <div className={styles.add}>
            <button className={styles.addButton}>
              <Image src="/image.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/external.png" alt="" width={16} height={16} />
            </button>
            <button className={styles.addButton}>
              <Image src="/video.png" alt="" width={16} height={16} />
            </button>
          </div>
        )}
        {/* <ReactQuill
          theme="bubble"
          value={value}
          onChange={setValue}
          placeholder="Tell your stories..."
        /> */}
        {/* <div>tell your stoue</div> */}
      </div>
      <button className={styles.publish}> Publish</button>
    </div>
  );
};

export default writePage;
