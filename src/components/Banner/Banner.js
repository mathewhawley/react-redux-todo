import React from 'react';
import { Filter } from '../Filter';
import styles from './Banner.css';

const Banner = () => {
  return (
    <header role='banner'>
      <h1 className={styles.heading}>ToDo</h1>
      <Filter />
    </header>
  );
};

export { Banner };
