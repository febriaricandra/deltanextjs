import Head from 'next/head'
import Image from 'next/image'
import photoProfile from '../public/febriii.png'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Febriari Candra Guritno</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className={styles.header}>
        <div className={styles.list}>
          <a className={styles.navigationName} href="https://medium.com/@febriaricandraproduction">Medium</a>
          <a className={styles.navigationName} href="https://github.com/febriaricandra">GitHub</a>
          <a className={styles.navigationName} href="#">Hire me!</a>
        </div>
      </header>
      <main className={styles.main}>
        <div className={styles.mainContainer}>
          <div className={styles.photoProfile}>
            <Image className={styles.image} alt="Photo" src={photoProfile} width="420px" height="600px" />
          </div>
          <div className={styles.descProfile}>
          <div className={styles.nameProfile}>
            <h1 className={styles.h1}>FEBRIARI CANDRA</h1>
            <h4 className={styles.h4}>Frontend Eng / Machine Learning Eng / Security Eng</h4>
          </div>
            <div className={styles.aboutProfile}>
              <p>Hello, my name is febriari candra guritno.
                Im a computer science student. before you get to know me as well. please contact my twitter and say hello to DMs , i’ll answer as soon as possible. 
                if you want to read my articles about programming, philosophy, security, and machine learning, here you go.
                My current skill/stack : Python, SQL, Javascript, PHP, TailwindCSS, Git, __MongoDB, figma, React, and NextJS.
              </p>
              <h3 className={styles.space}>
                New Post! on Medium
              </h3>
              <p className={styles.list}>Git - Basics: <a href="https://medium.com/@febriaricandraproduction/git-basics-44192b90ab79">Click Here</a></p>
              <p className={styles.list}>Linux part-1: <a href="https://medium.com/@febriaricandraproduction/linux-basic-commands-for-absolutely-windows-users-part-1-8acbaf390e10">Click Here</a></p>
            </div>
          </div>
        </div>
      </main>
      <footer className={styles.footer}>
          <a className={styles.navigationFooter} href="#">©2021 febriari</a>
        <div className={styles.footerEnd}>
            <a className={styles.navigationFooter} href="https://medium.com/@febriaricandraproduction">Medium</a>
            <a className={styles.navigationFooter} href="https://twitter.com/guritnofe">Twitter</a> 
        </div>       
      </footer>
    </div>
  )
}
