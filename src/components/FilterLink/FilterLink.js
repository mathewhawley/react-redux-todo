import React, { PropTypes } from 'react';

export const FilterLink = ({ onClick, children }) => {
  return (
    <a href='#' onClick={(event) => {
      event.preventDefault();
      onClick();
    }}>
      {children}
    </a>
  );
};

FilterLink.displayName = 'FilterLink';
FilterLink.propTypes = {
  onClick: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
};
