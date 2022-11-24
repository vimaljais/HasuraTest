import React, { useEffect, useState } from 'react';

import styles from '../styles/Home.module.css';

export default function Users() {
  const [posts, setposts] = useState([]);

  useEffect(() => {
    fetch('/api/getposts')
      .then((res) => res.json())
      .then((res) => setposts(res.post));
  }, []);

  return (
    <div className={styles.container}>
      {posts.length > 0 ? (
        posts.map((post, i) => {
          return (
            <div key={i}>
              {post.title} <br />
              {post.id} <br />
              {post.created_at} <br />
              {post.content} <br />
              <br />
              <br />
            </div>
          );
        })
      ) : (
        <div>Loading</div>
      )}
    </div>
  );
}
