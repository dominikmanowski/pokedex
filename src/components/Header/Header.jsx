import React from 'react';
import styles from './Header.module.css';

export default function Header({ title }) {
  return (
    <header className={styles.header}>
      <h1 className={styles.heading}>{title}</h1>
    </header>
  );
}
