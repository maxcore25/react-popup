import React from 'react';
import styles from './PopupCallButton.module.css';

export default function PopupCallButton({ children }) {
  return <button className={styles.popupCallButton}>{children}</button>;
}
