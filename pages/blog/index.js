import Link from "next/link";
import styles from "../../styles/Home.module.css";

export default function Blog() {
  return (
    <div className={styles.container}>
      <main className={styles.main}>
        <h2> this is the Blog page</h2>
        <Link href="/blog/flex">flex shotcuts</Link>
      </main>
    </div>
  );
}
