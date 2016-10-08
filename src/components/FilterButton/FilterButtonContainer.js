import { connect } from 'react-redux';
import { FilterButton } from './FilterButton';
import { setFilterAction } from '../../actions/filterActions';

const mapStateToProps = (state, props) => ({
  active: state.filter === props.filter,
});

const mapDispatchToProps = (dispatch, props) => ({
  setFilter() {
    dispatch(setFilterAction(props.filter));
  },
});

const FilterButtonContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(FilterButton);

export { FilterButtonContainer };
