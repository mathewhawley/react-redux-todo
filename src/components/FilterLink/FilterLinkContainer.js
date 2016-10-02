import { connect } from 'react-redux';
import { FilterLink } from './FilterLink';
import { setFilterAction } from '../../actions/filterActions';

const mapDispatchToProps = (dispatch, props) => {
  return {
    onClick: () => dispatch(setFilterAction(props.filter)),
  };
};

export const FilterLinkContainer = connect(null, mapDispatchToProps)(FilterLink);
