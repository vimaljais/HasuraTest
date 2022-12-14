import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import styles from '../styles/Home.module.css';

export default function Users() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('/api/getusers')
      .then((res) => res.json())
      .then((res) => setUsers(res.users));
  }, []);

  return (
    <div className={styles.container}>
      {users.length > 0 ? (
        users.map((user, i) => {
          return (
            <div key={i}>
              {user.username} <br />
              {user.id} <br />
              {user.age}
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
