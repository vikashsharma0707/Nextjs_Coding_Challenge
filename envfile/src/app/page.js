"use client"

import { useEffect, useState } from 'react';
import styles from './styles/Home.module.css';

export default function Home() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const url = `${process.env.NEXT_PUBLIC_API_URL}/posts`;
    console.log("Fetching from:", url);

    fetch(url)
      .then(res => {
        if (!res.ok) {
          throw new Error(`HTTP error! Status: ${res.status}`);
        }
        return res.json();
      })
      .then(data => setPosts(data.slice(0, 5)))
      .catch(err => console.error("Fetch error:", err));
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.heading}>Environment Variable Demo Next js</h1>
      <p className={styles.apiUrl}>
        <strong>Public API URL:</strong> {process.env.NEXT_PUBLIC_API_URL}
      </p>

      <ul className={styles.postList}>
        {posts.map(post => (
          <li key={post.id} className={styles.postItem}>
            📝 {post.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
