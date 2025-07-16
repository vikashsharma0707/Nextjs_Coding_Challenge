// src/app/user/page.js
import styles from '../styles/User.module.css';

async function getData() {
  // Fetch from DB/API
  return {
    name: "Vikash",
  };
}

export default async function UserPage() {
  const { name } = await getData();

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Welcome, <span className={styles.name}>{name}</span> 👋</h1>
      <p className={styles.description}>
        This page is rendered using <strong>App Router</strong> with <em>Server Component</em>.
      </p>
    </div>
  );
}
