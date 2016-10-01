import React, { PropTypes } from 'react';

export const App = (props) => {
  return <h1>{props.children}</h1>;
};

App.propTypes = {
  children: PropTypes.any,
};
