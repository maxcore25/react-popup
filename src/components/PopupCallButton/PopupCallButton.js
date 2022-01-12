import React from 'react';
import styles from './PopupCallButton.module.css';

export default function PopupCallButton({ setActive, children }) {
  return (
    <button onClick={() => setActive(true)} className={styles.popupCallButton}>
      {children}
    </button>
  );
}
