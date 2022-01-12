import React from 'react';
import styles from './Popup.module.css';

export default function Popup({ active, setActive, children }) {
  return (
    <div
      className={
        active ? styles.popupDarkBackgroundActive : styles.popupDarkBackground
      }
      onClick={() => setActive(false)}>
      <div
        className={active ? styles.modalContentActive : styles.modalContent}
        onClick={e => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
}
