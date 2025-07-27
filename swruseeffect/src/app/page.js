"use client";

import React, { useEffect } from 'react';
import useSWR from 'swr';
import styles from './Posts.module.css'; // CSS module

const fetcher = (url) => fetch(url).then((res) => res.json());

const Posts = () => {
  const { data, error, isLoading } = useSWR('https://jsonplaceholder.typicode.com/posts', fetcher);

  useEffect(() => {
    if (data) {
      console.log('Fetched Posts:', data);
    }
  }, [data]);

  if (isLoading) return <p className={styles.status}>Loading posts...</p>;
  if (error) return <p className={styles.status}>Failed to load posts</p>;

  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>📚 List of Posts</h2>
      <ul className={styles.postList}>
        {data.slice(0, 10).map((post) => (
          <li key={post.id} className={styles.postItem}>
            <h3>{post.title}</h3>
            <p>{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Posts;
