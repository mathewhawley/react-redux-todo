import React from 'react';
import { FilterLinkContainer } from '../FilterLink/FilterLinkContainer';
import { FILTERS } from '../../constants/filterConstants';

const Filter = () => {
  return (
    <ul>
      <FilterLinkContainer filter={FILTERS.SHOW_ALL}>
        All
      </FilterLinkContainer>
      <FilterLinkContainer filter={FILTERS.SHOW_ACTIVE}>
        Active
      </FilterLinkContainer>
      <FilterLinkContainer filter={FILTERS.SHOW_COMPLETED}>
        Completed
      </FilterLinkContainer>
    </ul>
  );
};

Filter.displayName = 'Filter';

export { Filter };
