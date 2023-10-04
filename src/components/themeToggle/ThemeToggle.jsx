"use client"
import React, { useContext } from 'react'
import Image from 'next/image'
import styles from "./themeToggle.module.css"
import { ThemeContext } from '@/context/Themencontext'
const ThemeToggle = () => {
    const{toggle,theme}=useContext(ThemeContext);
    console.log(theme);
  return (
    <div className={styles.container} onClick={toggle}>
      <Image src="/moon.png" alt="" width={14} height={14}/>
      <div className={styles.ball}></div>
      <Image src="/sun.png" alt="" width={14} height={14}/>
    </div>
  )
}

export default ThemeToggle
