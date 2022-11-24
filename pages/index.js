import React, { useState, useEffect } from 'react';

import styles from '../styles/insertusers.module.css';

export default function Home() {
  const [formData, setFormData] = useState({
    username: '',
    age: '',
    id: '',
    gender: true,
  });

  const updateFormData = (event) =>
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });

  const submit = async (e) => {
    e.preventDefault();

    fetch('/api/insertusers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((res) => res.json())
      .then((res) => console.log(res));
  };

  const { username, age, id, gender } = formData;

  return (
    <div className={styles.container}>
      <h1>InsertPage</h1>
      <form onSubmit={(e) => submit(e)}>
        <input
          className="input"
          value={username}
          onChange={(e) => updateFormData(e)}
          placeholder="First name"
          type="text"
          name="username"
          required
        />
        <input
          className="input"
          value={age}
          onChange={(e) => updateFormData(e)}
          placeholder="age"
          type="text"
          name="age"
          required
        />
        <input
          className="input"
          value={id}
          onChange={(e) => updateFormData(e)}
          placeholder="id"
          type="text"
          name="id"
          required
        />

        <button className="button" type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}
