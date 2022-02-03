import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <div className={styles.card}>
          I am an experienced programmer with many languages that has recently
          been concentrating on javascript/node for the past 5+ years. . I am
          now on a long time contract with http://nativeteachingaids.com/ doing
          web applications, Android, IOS, and PWA apps as well as node backends
          to support them.
        </div>
        <div>feature component</div>
      </main>

      <footer className={styles.footer}>
        <a
          href="http://thomaskoefod.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          Created by by Thomas Koefod
        </a>
      </footer>
    </div>
  );
}
