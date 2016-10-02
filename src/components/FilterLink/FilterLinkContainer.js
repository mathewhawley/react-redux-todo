import { connect } from 'react-redux';
import { FilterLink } from './FilterLink';
import { setFilterAction } from '../../actions/filterActions';

const mapStateToProps = (state, props) => ({
  active: state.filter === props.filter,
});

const mapDispatchToProps = (dispatch, props) => ({
  setFilter() {
    dispatch(setFilterAction(props.filter));
  },
});

export const FilterLinkContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(FilterLink);
