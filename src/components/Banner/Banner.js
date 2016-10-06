import React from 'react';
import { Filter } from '../Filter';
import styles from './Banner.css';

const Banner = () => {
  return (
    <header className={styles.base} role='banner'>
      <Filter />
    </header>
  );
};

export { Banner };
