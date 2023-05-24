import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <div className={styles.description}>
        <p>
          Get started by editing&nbsp;
          <code className={styles.code}>app/page.tsx</code>
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ex earum
          minus, ad ipsam pariatur quae accusamus quod, ullam quos voluptate
          repellat numquam voluptas tempora temporibus neque porro amet nesciunt
          deserunt laboriosam delectus nemo debitis modi minima officiis.
          Perspiciatis omnis, consequatur consequuntur quam eaque corrupti
          voluptas ab repellendus ipsum totam iusto!
        </p>
      </div>
    </main>
  );
}
