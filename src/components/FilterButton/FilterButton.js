import React, { PropTypes } from 'react';
import styles from './FilterButton.css';

const FilterButton = ({ active, setFilter, children }) => {
  if (active) {
    return (
      <li className={styles.base}>
        <span
          className={styles.active}
          aria-label={`You are currently viewing ${children} to do's`}
        >
          {children}
        </span>
      </li>
    );
  }

  return (
    <li className={styles.base}>
      <button
        className={styles.link}
        onClick={(event) => {
          event.preventDefault();
          setFilter();
        }}
        aria-label={`View ${children} to do's`}
      >
        {children}
      </button>
    </li>
  );
};

FilterButton.displayName = 'FilterButton';
FilterButton.propTypes = {
  setFilter: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  active: PropTypes.bool.isRequired,
};

export { FilterButton };
