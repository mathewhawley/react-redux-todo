import React from 'react';
import { FilterButtonContainer } from '../FilterButton/FilterButtonContainer';
import { FILTERS } from '../../constants/filterConstants';

const Filter = () => {
  return (
    <ul>
      <FilterButtonContainer filter={FILTERS.SHOW_ALL}>
        All
      </FilterButtonContainer>
      <FilterButtonContainer filter={FILTERS.SHOW_ACTIVE}>
        Active
      </FilterButtonContainer>
      <FilterButtonContainer filter={FILTERS.SHOW_COMPLETED}>
        Completed
      </FilterButtonContainer>
    </ul>
  );
};

Filter.displayName = 'Filter';

export { Filter };
