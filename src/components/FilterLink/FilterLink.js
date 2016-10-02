import React, { PropTypes } from 'react';

export const FilterLink = ({ onClick, children }) => {
  return (
    <li>
      <a href='#' onClick={(event) => {
        event.preventDefault();
        onClick();
      }}>
        {children}
      </a>
    </li>
  );
};

FilterLink.displayName = 'FilterLink';
FilterLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
