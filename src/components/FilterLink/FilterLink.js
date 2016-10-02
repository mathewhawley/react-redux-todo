import React, { PropTypes } from 'react';

export const FilterLink = ({ active, setFilter, children }) => {
  if (active) {
    return <li>{children}</li>;
  }

  return (
    <li>
      <a href='#' onClick={(event) => {
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
