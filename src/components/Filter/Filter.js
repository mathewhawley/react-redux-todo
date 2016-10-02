import React from 'react';
import FilterLink from '../FilterLink';
import { FILTERS } from '../../constants/filterConstants';

const Filter = () => {
  return (
    <ul>
      <FilterLink filter={FILTERS.SHOW_ALL}>
        All
      </FilterLink>
      <FilterLink filter={FILTERS.SHOW_ACTIVE}>
        Active
      </FilterLink>
      <FilterLink filter={FILTERS.SHOW_COMPLETED}>
        Completed
      </FilterLink>
    </ul>
  );
};

export default Filter;
