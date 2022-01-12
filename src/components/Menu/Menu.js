import React from 'react';
import PopupCallButton from '../PopupCallButton/PopupCallButton';
import styles from './Menu.module.css';

export default function Menu() {
  return (
    <header className={styles.headerBlock}>
      <PopupCallButton>Call Popup</PopupCallButton>
    </header>
  );
}
