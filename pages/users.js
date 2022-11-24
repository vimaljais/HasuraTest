import Head from 'next/head';
import React, { useEffect, useState } from 'react';

import styles from '../styles/Home.module.css';

export default function Users() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('/api/getusers')
      .then((res) => res.json())
      .then((res) => setProducts(res.users));
  }, []);

  return (
    <div className={styles.container}>
      {products.length > 0 ? (
        products.map((product) => {
          return (
            <div>
              {product.username} <br />
              {product.id} <br />
              {product.age}
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
