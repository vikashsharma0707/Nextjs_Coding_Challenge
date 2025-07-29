import styles from '../../styles/Home.module.css';
import Image from 'next/image';

export default function Home() {
  return (
    <div className={styles.wrapper}>
      <h1 className={styles.title}> Welcome to Image Optimizer</h1>
      <p className={styles.subtitle}>Optimized images using Next.js <code>next/image</code> component</p>

      <div className={styles.imageCard}>
        <Image
          src="/images/w1.jpeg"
          width={600}
          height={400}
          alt="Optimized Display"
          className={styles.image}
        />
        <p className={styles.caption}>📷 Smooth & Optimized Rendering</p>
      </div>
    </div>
  );
}
