import React, { PropTypes } from 'react';
import styles from './FilterLink.css';

const FilterLink = ({ active, setFilter, children }) => {
  if (active) {
    return (
      <li className={styles.base}>
        <span className={styles.active}>
          {children}
        </span>
      </li>
    );
  }

  return (
    <li className={styles.base}>
      <a className={styles.link} href='#' onClick={(event) => {
        event.preventDefault();
        setFilter();
      }}>
        {children}
      </a>
    </li>
  );
};

FilterLink.displayName = 'FilterLink';
FilterLink.propTypes = {
  setFilter: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export { FilterLink };
