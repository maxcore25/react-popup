import React from 'react';
import styles from './Menu.module.css';

export default function Menu({ children }) {
  return <header className={styles.headerBlock}>{children}</header>;
}
